/**
 * Script Interaktif Pesona Nusantara
 * Menangani:
 * 1. Background Slider & Auto-play Hero dengan klik menuju Detail Destinasi
 * 2. Ticker / Running Text Tips & Trik Perjalanan + Modal Panduan
 * 3. Filter Destinasi & Pencarian Cepat Real-time
 * 4. Filter Kalender Acara Festival Lokal
 * 5. Katalog Paket Wisata dengan Fasilitas Include & Exclude
 * 6. Live Booking Price Calculator & Generator WhatsApp Pesanan Otomatis
 * 7. Sistem Ulasan Komunitas & Rating dengan localStorage
 * 8. Navigasi Responsif Mobile
 */

document.addEventListener("DOMContentLoaded", () => {
  initHeroSlider();
  initTickerTips();
  initDestinasiGrid();
  initCalendarEvents();
  initPaketWisata();
  initBookingSystem();
  initTestimoniAndReviews();
  initModals();
  initMobileNav();
});

/* ==========================================================================
   1. HERO SLIDER LOGIC
   ========================================================================== */
let currentSlideIndex = 0;
let slideInterval = null;
const SLIDE_DURATION = 6000; // 6 detik per slide
let progressStartTime = 0;
let progressAnimFrame = null;

function initHeroSlider() {
  const sliderContainer = document.getElementById("heroSliderContainer");
  const dotsContainer = document.getElementById("sliderDotsContainer");
  const progressBar = document.getElementById("sliderProgressBar");

  if (!sliderContainer || !window.WISATA_DATA) return;

  const destinasiList = window.WISATA_DATA.destinasi;
  sliderContainer.innerHTML = "";
  dotsContainer.innerHTML = "";

  // Render Setiap Slide
  destinasiList.forEach((dest, index) => {
    const slide = document.createElement("div");
    slide.className = `slide-item ${index === 0 ? "active" : ""}`;
    slide.setAttribute("data-index", index);
    slide.setAttribute("data-id", dest.id);

    slide.innerHTML = `
      <img src="${dest.gambarUtama}" alt="${dest.nama}" class="slide-bg-img" loading="${index === 0 ? 'eager' : 'lazy'}">
      <div class="slide-overlay"></div>
      <div class="slide-content-wrapper">
        <div class="container">
          <span class="hero-meta-badge">
            <i class="fa-solid fa-award"></i> Top List Destinasi Indonesia
          </span>
          <h1 class="slide-title">${dest.nama}</h1>
          <p class="slide-tagline">${dest.tagline}</p>
          <div class="slide-quick-info">
            <span class="quick-info-pill"><i class="fa-solid fa-location-dot"></i> ${dest.lokasi}</span>
            <span class="quick-info-pill"><i class="fa-solid fa-star"></i> Rating ${dest.rating} (${dest.ulasanCount}+ ulasan)</span>
            <span class="quick-info-pill"><i class="fa-solid fa-clock"></i> ${dest.jamOperasional.split('(')[0]}</span>
          </div>
          <div class="slide-cta-row">
            <a href="detail.html?id=${dest.id}" class="btn-primary-hero">
              <i class="fa-solid fa-compass"></i> Halaman Detail Destinasi Lengkap
            </a>
            <a href="#paket-wisata" class="btn-secondary-hero">
              <i class="fa-solid fa-ticket"></i> Lihat Paket Tur
            </a>
          </div>
        </div>
      </div>
    `;

    // Klik pada area slide langsung menuju detail halaman destinasi tersebut
    slide.addEventListener("click", (e) => {
      // Jangan trigger jika klik tombol CTA
      if (e.target.closest("a") || e.target.closest("button")) return;
      window.location.href = `detail.html?id=${dest.id}`;
    });

    sliderContainer.appendChild(slide);

    // Indicator Dot
    const dot = document.createElement("div");
    dot.className = `slider-dot ${index === 0 ? "active" : ""}`;
    dot.setAttribute("data-index", index);
    dot.addEventListener("click", () => {
      goToSlide(index);
      restartSlideTimer();
    });
    dotsContainer.appendChild(dot);
  });

  // Tombol Next & Prev
  const prevBtn = document.getElementById("sliderPrevBtn");
  const nextBtn = document.getElementById("sliderNextBtn");

  if (prevBtn) {
    prevBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      prevSlide();
      restartSlideTimer();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      nextSlide();
      restartSlideTimer();
    });
  }

  startSlideTimer();
}

function goToSlide(index) {
  const slides = document.querySelectorAll(".slide-item");
  const dots = document.querySelectorAll(".slider-dot");
  if (!slides.length) return;

  slides.forEach((s) => s.classList.remove("active"));
  dots.forEach((d) => d.classList.remove("active"));

  currentSlideIndex = (index + slides.length) % slides.length;

  slides[currentSlideIndex].classList.add("active");
  if (dots[currentSlideIndex]) {
    dots[currentSlideIndex].classList.add("active");
  }
}

function nextSlide() {
  goToSlide(currentSlideIndex + 1);
}

function prevSlide() {
  goToSlide(currentSlideIndex - 1);
}

function startSlideTimer() {
  progressStartTime = Date.now();
  updateProgressBar();

  slideInterval = setInterval(() => {
    nextSlide();
    progressStartTime = Date.now();
  }, SLIDE_DURATION);
}

function restartSlideTimer() {
  clearInterval(slideInterval);
  cancelAnimationFrame(progressAnimFrame);
  startSlideTimer();
}

function updateProgressBar() {
  const progressBar = document.getElementById("sliderProgressBar");
  if (!progressBar) return;

  function step() {
    const elapsed = Date.now() - progressStartTime;
    const percentage = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
    progressBar.style.width = percentage + "%";

    if (percentage < 100) {
      progressAnimFrame = requestAnimationFrame(step);
    }
  }
  progressAnimFrame = requestAnimationFrame(step);
}

/* ==========================================================================
   2. TICKER / RUNNING TEXT TIPS & TRIK
   ========================================================================== */
function initTickerTips() {
  const track = document.getElementById("tickerTrack");
  if (!track || !window.WISATA_DATA) return;

  const tips = window.WISATA_DATA.tipsTrik;
  let html = "";

  // Render ganda untuk menciptakan ilusi infinite seamless loop
  for (let i = 0; i < 2; i++) {
    tips.forEach((item, index) => {
      html += `
        <span class="ticker-item" data-tip-idx="${index}">
          <strong>[${item.kategori}]</strong> &nbsp;${item.teks}
          <span class="ticker-separator">✦</span>
        </span>
      `;
    });
  }

  track.innerHTML = html;

  // Klik pada item ticker membuka modal tips lengkap
  track.querySelectorAll(".ticker-item").forEach((el) => {
    el.addEventListener("click", () => {
      const idx = el.getAttribute("data-tip-idx");
      openTipsModal(idx);
    });
  });

  const badgeBtn = document.getElementById("tickerBadgeBtn");
  if (badgeBtn) {
    badgeBtn.addEventListener("click", () => openTipsModal(0));
  }
}

function openTipsModal(selectedIndex = 0) {
  const modal = document.getElementById("tipsModal");
  const modalBody = document.getElementById("tipsModalContent");
  if (!modal || !modalBody || !window.WISATA_DATA) return;

  const tips = window.WISATA_DATA.tipsTrik;
  let contentHtml = `
    <div style="margin-bottom: 1.5rem;">
      <h3 style="font-family: var(--font-heading); font-size: 1.35rem; color: var(--primary-dark); margin-bottom: 0.5rem;">
        Panduan Praktis Wisatawan Nusantara
      </h3>
      <p style="color: var(--text-muted); font-size: 0.95rem;">
        Persiapkan perjalanan Anda dengan tips penting mulai dari perlengkapan wajib bawa, jadwal terbaik, hingga etika lokal.
      </p>
    </div>
    <div style="display: flex; flex-direction: column; gap: 1.25rem;">
  `;

  tips.forEach((tip, idx) => {
    const isSelected = idx == selectedIndex;
    contentHtml += `
      <div style="background: ${isSelected ? '#ecfdf5' : '#f8fafc'}; border: 1.5px solid ${isSelected ? 'var(--primary)' : '#e2e8f0'}; padding: 1.25rem; border-radius: var(--radius-md);">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
          <span style="background: var(--accent-gold); color: #022b22; font-weight: 800; font-size: 0.75rem; padding: 0.2rem 0.6rem; border-radius: 99px;">
            ${tip.kategori}
          </span>
          <span style="font-size: 0.8rem; color: #64748b; font-weight: 600;">Tips #${idx + 1}</span>
        </div>
        <h4 style="font-size: 1rem; font-weight: 700; color: #1e293b; margin-bottom: 0.4rem;">
          ${tip.teks}
        </h4>
        <p style="font-size: 0.9rem; color: #475569; line-height: 1.5;">
          ${tip.detail}
        </p>
      </div>
    `;
  });

  contentHtml += `
    </div>
    <div style="margin-top: 2rem; background: #f0fdf4; border: 1px dashed #22c55e; border-radius: var(--radius-md); padding: 1rem; text-align: center;">
      <p style="font-size: 0.88rem; color: #166534; font-weight: 600;">
        💡 Butuh konsultasi rute khusus atau panduan private trip? Hubungi Admin kami via WhatsApp.
      </p>
    </div>
  `;

  modalBody.innerHTML = contentHtml;
  modal.classList.add("active");
}

/* ==========================================================================
   3. DESTINASI POPULER GRID & FILTER PENCARIAN
   ========================================================================== */
function initDestinasiGrid() {
  const gridContainer = document.getElementById("destinasiGrid");
  const searchInput = document.getElementById("destinasiSearchInput");
  const filterPills = document.querySelectorAll(".filter-pill");

  if (!gridContainer || !window.WISATA_DATA) return;

  renderDestinasiCards(window.WISATA_DATA.destinasi);

  // Filter berdasarkan Kategori
  filterPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      filterPills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");

      const category = pill.getAttribute("data-category");
      filterDestinasi(category, searchInput ? searchInput.value : "");
    });
  });

  // Pencarian Teks Real-time
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const activePill = document.querySelector(".filter-pill.active");
      const category = activePill ? activePill.getAttribute("data-category") : "all";
      filterDestinasi(category, e.target.value);
    });
  }
}

function filterDestinasi(category, query) {
  const data = window.WISATA_DATA.destinasi;
  const q = query.toLowerCase().trim();

  const filtered = data.filter((item) => {
    const matchCategory = category === "all" || item.kategoriKey === category;
    const matchQuery =
      !q ||
      item.nama.toLowerCase().includes(q) ||
      item.lokasi.toLowerCase().includes(q) ||
      item.deskripsiSingkat.toLowerCase().includes(q);
    return matchCategory && matchQuery;
  });

  renderDestinasiCards(filtered);
}

function renderDestinasiCards(destinasiArray) {
  const gridContainer = document.getElementById("destinasiGrid");
  if (!gridContainer) return;

  if (destinasiArray.length === 0) {
    gridContainer.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: #64748b;">
        <i class="fa-solid fa-map-location-dot" style="font-size: 3rem; color: #cbd5e1; margin-bottom: 1rem;"></i>
        <h3 style="font-size: 1.25rem; font-weight: 700; color: #334155;">Tidak Ada Destinasi yang Cocok</h3>
        <p style="font-size: 0.95rem;">Coba gunakan kata kunci lain seperti "Bali", "Bromo", atau "Raja Ampat".</p>
      </div>
    `;
    return;
  }

  gridContainer.innerHTML = destinasiArray
    .map(
      (dest) => `
    <div class="destinasi-card">
      <div class="destinasi-img-wrap">
        <img src="${dest.thumbnail}" alt="${dest.nama}" class="destinasi-card-img" loading="lazy">
        <span class="destinasi-card-badge">${dest.kategori}</span>
        <span class="destinasi-rating-badge">
          <i class="fa-solid fa-star"></i> ${dest.rating}
        </span>
      </div>
      <div class="destinasi-card-body">
        <div class="destinasi-card-loc">
          <i class="fa-solid fa-location-dot"></i> ${dest.lokasi}
        </div>
        <h3 class="destinasi-card-title">${dest.nama}</h3>
        <p class="destinasi-card-desc">${dest.deskripsiSingkat}</p>
        
        <div class="destinasi-card-meta">
          <div class="destinasi-price-tag">
            <span class="destinasi-price-label">Tiket Masuk Mulai</span>
            <span class="destinasi-price-value">${dest.tiketWNI.pinKonservasi.split('/')[0]}</span>
          </div>
          <div style="text-align: right;">
            <span class="destinasi-price-label">Jam Operasional</span>
            <span style="font-size: 0.85rem; font-weight: 600; color: #334155; display: block;">
              ${dest.jamOperasional.split('(')[0]}
            </span>
          </div>
        </div>

        <a href="detail.html?id=${dest.id}" class="btn-card-detail">
          <span>Lihat Detail Lengkap</span>
          <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>
  `
    )
    .join("");
}

/* ==========================================================================
   4. KALENDER ACARA (EVENT CALENDAR)
   ========================================================================== */
function initCalendarEvents() {
  const container = document.getElementById("eventsGrid");
  const monthButtons = document.querySelectorAll(".calendar-month-btn");
  if (!container || !window.WISATA_DATA) return;

  const events = window.WISATA_DATA.kalenderAcara;
  renderEvents(events);

  monthButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      monthButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const month = btn.getAttribute("data-month");
      if (month === "all") {
        renderEvents(events);
      } else {
        const filtered = events.filter((ev) => ev.bulan.toLowerCase() === month.toLowerCase());
        renderEvents(filtered);
      }
    });
  });
}

function renderEvents(eventList) {
  const container = document.getElementById("eventsGrid");
  if (!container) return;

  if (eventList.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem 1rem; color: #64748b;">
        <p>Tidak ada jadwal festival untuk bulan ini.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = eventList
    .map(
      (ev) => `
    <div class="event-card">
      <div class="event-img-wrap">
        <img src="${ev.gambar}" alt="${ev.namaAcara}" class="event-img" loading="lazy">
        <div class="event-date-badge">
          <span class="event-date-month">${ev.bulan}</span>
          <span class="event-date-day">${ev.tanggal.split(' ')[0]}</span>
        </div>
      </div>
      <div class="event-card-body">
        <span class="event-category-tag">${ev.kategori}</span>
        <h3 class="event-title">${ev.namaAcara}</h3>
        <div class="event-location">
          <i class="fa-solid fa-map-pin"></i> ${ev.lokasi}
        </div>
        <p class="event-desc">${ev.deskripsi}</p>
        <div class="event-tips-box">
          <i class="fa-solid fa-lightbulb"></i>
          <div><strong>Tips Hadir:</strong> ${ev.tipsHadir}</div>
        </div>
      </div>
    </div>
  `
    )
    .join("");
}

/* ==========================================================================
   5. KATALOG PAKET WISATA & INCLUDE/EXCLUDE
   ========================================================================== */
function initPaketWisata() {
  const container = document.getElementById("paketWisataGrid");
  if (!container || !window.WISATA_DATA) return;

  const paketList = window.WISATA_DATA.paketWisata;

  container.innerHTML = paketList
    .map(
      (paket) => `
    <div class="paket-card" id="${paket.id}">
      <div class="paket-card-header">
        <img src="${paket.gambar}" alt="${paket.judul}" class="paket-img" loading="lazy">
        <div class="paket-header-overlay">
          <div class="paket-top-badges">
            <span class="paket-badge-best">${paket.badge}</span>
            <span class="paket-badge-duration"><i class="fa-regular fa-clock"></i> ${paket.durasi}</span>
          </div>
          <div class="paket-header-content">
            <span class="paket-destinasi-sub">${paket.destinasiNama}</span>
            <h3 class="paket-title">${paket.judul}</h3>
          </div>
        </div>
      </div>

      <div class="paket-body">
        <!-- HARGA WNI & WNA -->
        <div class="paket-price-container">
          <div class="price-item">
            <span class="price-role-label">🇮🇩 Wisatawan Domestik (WNI)</span>
            <span class="price-amount">Rp ${paket.hargaWNI.toLocaleString("id-ID")}</span>
            <span class="price-unit">per pax / all-in</span>
          </div>
          <div class="price-item" style="padding-left: 1rem;">
            <span class="price-role-label">🌍 Wisatawan Asing (WNA)</span>
            <span class="price-amount">Rp ${paket.hargaWNA.toLocaleString("id-ID")}</span>
            <span class="price-unit">per pax / all-in</span>
          </div>
        </div>

        <!-- RUTE PERJALANAN -->
        <div class="paket-route-box">
          <strong><i class="fa-solid fa-route"></i> Rute & Sorotan Perjalanan:</strong>
          ${paket.rute}
        </div>

        <!-- PERBANDINGAN INCLUDE & EXCLUDE -->
        <div class="facilities-comparison-grid">
          <div>
            <div class="facility-col-title title-include">
              <i class="fa-solid fa-circle-check"></i> Termasuk (Include)
            </div>
            <ul class="facility-list">
              ${paket.fasilitasInclude
                .map(
                  (inc) => `
                <li class="facility-list-item item-include">
                  <i class="fa-solid fa-check"></i>
                  <span>${inc}</span>
                </li>
              `
                )
                .join("")}
            </ul>
          </div>
          <div>
            <div class="facility-col-title title-exclude">
              <i class="fa-solid fa-circle-xmark"></i> Tidak Termasuk (Exclude)
            </div>
            <ul class="facility-list">
              ${paket.fasilitasExclude
                .map(
                  (exc) => `
                <li class="facility-list-item item-exclude">
                  <i class="fa-solid fa-xmark"></i>
                  <span>${exc}</span>
                </li>
              `
                )
                .join("")}
            </ul>
          </div>
        </div>

        <!-- TOMBOL AKSI -->
        <div class="paket-footer-actions">
          <button class="btn-book-paket" onclick="selectPaketForBooking('${paket.id}')">
            <i class="fa-solid fa-calendar-check"></i> Pesan Paket Ini
          </button>
          <a href="https://wa.me/6281234567890?text=${encodeURIComponent(
            `Halo Admin Pesona Nusantara, saya tertarik konsultasi paket wisata: ${paket.judul}`
          )}" target="_blank" class="btn-wa-paket">
            <i class="fa-brands fa-whatsapp"></i> Tanya via WA
          </a>
        </div>
      </div>
    </div>
  `
    )
    .join("");
}

// Function ketika tombol "Pesan Paket Ini" diklik
window.selectPaketForBooking = function (paketId) {
  const selectElement = document.getElementById("bookingPaketSelect");
  const bookingSection = document.getElementById("booking-section");

  if (selectElement) {
    selectElement.value = paketId;
    // Trigger event update kalkulasi
    selectElement.dispatchEvent(new Event("change"));
  }

  if (bookingSection) {
    bookingSection.scrollIntoView({ behavior: "smooth" });
  }
};

/* ==========================================================================
   6. SISTEM PEMESANAN (BOOKING LIVE CALCULATOR & WHATSAPP GENERATOR)
   ========================================================================== */
let bookingState = {
  paketId: "paket-labuan-bajo",
  paxWNI: 2,
  paxWNA: 0,
  paxAnak: 0,
  tanggal: ""
};

function initBookingSystem() {
  const form = document.getElementById("bookingForm");
  const selectPaket = document.getElementById("bookingPaketSelect");
  const dateInput = document.getElementById("bookingDateInput");

  if (!selectPaket || !window.WISATA_DATA) return;

  // Isi Pilihan Paket Wisata
  selectPaket.innerHTML = window.WISATA_DATA.paketWisata
    .map(
      (p) => `
    <option value="${p.id}" ${p.id === bookingState.paketId ? "selected" : ""}>
      ${p.judul} (${p.destinasiNama})
    </option>
  `
    )
    .join("");

  // Set tanggal minimal hari esok
  if (dateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, "0");
    const dd = String(tomorrow.getDate()).padStart(2, "0");
    dateInput.min = `${yyyy}-${mm}-${dd}`;
    dateInput.value = `${yyyy}-${mm}-${dd}`;
    bookingState.tanggal = dateInput.value;

    dateInput.addEventListener("change", (e) => {
      bookingState.tanggal = e.target.value;
      updateBookingSummary();
    });
  }

  selectPaket.addEventListener("change", (e) => {
    bookingState.paketId = e.target.value;
    updateBookingSummary();
  });

  // Setup tombol counter peserta
  setupCounter("paxWNIPlus", "paxWNIMinus", "valWNI", "paxWNI", 1, 30);
  setupCounter("paxWNAPlus", "paxWNAMinus", "valWNA", "paxWNA", 0, 30);
  setupCounter("paxAnakPlus", "paxAnakMinus", "valAnak", "paxAnak", 0, 15);

  // Tombol Kirim WhatsApp Admin
  const btnSubmitWA = document.getElementById("btnSubmitWA");
  if (btnSubmitWA) {
    btnSubmitWA.addEventListener("click", handleWhatsAppBooking);
  }

  // Tombol Submit Web Simulator
  if (form) {
    form.addEventListener("submit", handleWebBookingSubmit);
  }

  updateBookingSummary();
}

function setupCounter(plusId, minusId, valDisplayId, stateKey, minVal, maxVal) {
  const plusBtn = document.getElementById(plusId);
  const minusBtn = document.getElementById(minusId);
  const display = document.getElementById(valDisplayId);

  if (!plusBtn || !minusBtn || !display) return;

  plusBtn.addEventListener("click", () => {
    if (bookingState[stateKey] < maxVal) {
      bookingState[stateKey]++;
      display.textContent = bookingState[stateKey];
      updateBookingSummary();
    }
  });

  minusBtn.addEventListener("click", () => {
    if (bookingState[stateKey] > minVal) {
      bookingState[stateKey]--;
      display.textContent = bookingState[stateKey];
      updateBookingSummary();
    }
  });
}

function updateBookingSummary() {
  const paket = window.WISATA_DATA.paketWisata.find((p) => p.id === bookingState.paketId);
  if (!paket) return;

  const summaryTitle = document.getElementById("summaryPaketTitle");
  const summaryDest = document.getElementById("summaryDestinasi");
  const summaryWniRow = document.getElementById("summaryWniRow");
  const summaryWnaRow = document.getElementById("summaryWnaRow");
  const summaryAnakRow = document.getElementById("summaryAnakRow");
  const summaryTotalPrice = document.getElementById("summaryTotalPrice");

  if (summaryTitle) summaryTitle.textContent = paket.judul;
  if (summaryDest) summaryDest.textContent = paket.destinasiNama;

  const totalWni = bookingState.paxWNI * paket.hargaWNI;
  const totalWna = bookingState.paxWNA * paket.hargaWNA;
  // Diskon anak 50% dari harga WNI
  const totalAnak = bookingState.paxAnak * (paket.hargaWNI * 0.5);
  const grandTotal = totalWni + totalWna + totalAnak;

  if (summaryWniRow) {
    summaryWniRow.innerHTML = `
      <span>Peserta WNI (${bookingState.paxWNI} pax)</span>
      <span>Rp ${totalWni.toLocaleString("id-ID")}</span>
    `;
  }

  if (summaryWnaRow) {
    summaryWnaRow.style.display = bookingState.paxWNA > 0 ? "flex" : "none";
    summaryWnaRow.innerHTML = `
      <span>Peserta WNA (${bookingState.paxWNA} pax)</span>
      <span>Rp ${totalWna.toLocaleString("id-ID")}</span>
    `;
  }

  if (summaryAnakRow) {
    summaryAnakRow.style.display = bookingState.paxAnak > 0 ? "flex" : "none";
    summaryAnakRow.innerHTML = `
      <span>Anak-anak (${bookingState.paxAnak} pax, disc 50%)</span>
      <span>Rp ${totalAnak.toLocaleString("id-ID")}</span>
    `;
  }

  if (summaryTotalPrice) {
    summaryTotalPrice.textContent = `Rp ${grandTotal.toLocaleString("id-ID")}`;
  }
}

function handleWhatsAppBooking(e) {
  e.preventDefault();
  const nama = document.getElementById("bookingNama")?.value.trim() || "Calon Wisatawan";
  const whatsapp = document.getElementById("bookingPhone")?.value.trim() || "-";
  const email = document.getElementById("bookingEmail")?.value.trim() || "-";
  const notes = document.getElementById("bookingNotes")?.value.trim() || "Tidak ada catatan tambahan";
  const tanggal = document.getElementById("bookingDateInput")?.value || bookingState.tanggal;

  const paket = window.WISATA_DATA.paketWisata.find((p) => p.id === bookingState.paketId);
  if (!paket) return;

  const totalWni = bookingState.paxWNI * paket.hargaWNI;
  const totalWna = bookingState.paxWNA * paket.hargaWNA;
  const totalAnak = bookingState.paxAnak * (paket.hargaWNI * 0.5);
  const grandTotal = totalWni + totalWna + totalAnak;

  // Template Pesan WhatsApp Terstruktur
  const message = `
*FORMULIR PEMESANAN WISATA - PESONA NUSANTARA*
----------------------------------------
*Nama Pemesan:* ${nama}
*No. WhatsApp:* ${whatsapp}
*Email:* ${email}

*PILIHAN PAKET:*
* ${paket.judul}
* Destinasi: ${paket.destinasiNama}
* Durasi: ${paket.durasi}
* Tanggal Keberangkatan: ${tanggal}

*RINCIAN PESERTA:*
• Wisatawan WNI: ${bookingState.paxWNI} Orang (Rp ${totalWni.toLocaleString("id-ID")})
• Wisatawan WNA: ${bookingState.paxWNA} Orang (Rp ${totalWna.toLocaleString("id-ID")})
• Anak-anak: ${bookingState.paxAnak} Orang (Rp ${totalAnak.toLocaleString("id-ID")})

*TOTAL ESTIMASI BIAYA:* Rp ${grandTotal.toLocaleString("id-ID")}
*Catatan Tambahan:* ${notes}
----------------------------------------
_Mohon informasi ketersediaan slot kapal/akomodasi dan petunjuk pembayaran resmi. Terima kasih!_
  `.trim();

  const waUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
  window.open(waUrl, "_blank");
}

function handleWebBookingSubmit(e) {
  e.preventDefault();
  const nama = document.getElementById("bookingNama")?.value.trim();
  const whatsapp = document.getElementById("bookingPhone")?.value.trim();

  if (!nama || !whatsapp) {
    alert("Harap lengkapi Nama Lengkap dan Nomor WhatsApp Anda.");
    return;
  }

  const paket = window.WISATA_DATA.paketWisata.find((p) => p.id === bookingState.paketId);
  const bookingCode = "PN-" + Math.floor(100000 + Math.random() * 900000);
  const grandTotalText = document.getElementById("summaryTotalPrice")?.textContent || "Rp 0";

  const modal = document.getElementById("bookingConfirmModal");
  const modalContent = document.getElementById("bookingConfirmContent");

  if (modal && modalContent) {
    modalContent.innerHTML = `
      <div style="text-align: center; margin-bottom: 1.5rem;">
        <div style="width: 64px; height: 64px; background: #dcfce7; color: #16a34a; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 2rem; margin-bottom: 0.75rem;">
          <i class="fa-solid fa-check"></i>
        </div>
        <h3 style="font-family: var(--font-heading); font-size: 1.5rem; color: var(--primary-dark);">
          Pesanan Berhasil Dicatat!
        </h3>
        <p style="color: #64748b; font-size: 0.95rem;">
          ID Booking Resmi Anda: <strong style="color: var(--primary); font-size: 1.1rem;">#${bookingCode}</strong>
        </p>
      </div>

      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: var(--radius-md); padding: 1.25rem; font-size: 0.92rem; margin-bottom: 1.5rem;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
          <span style="color: #64748b;">Nama Pemesan:</span>
          <strong>${nama}</strong>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
          <span style="color: #64748b;">Paket Wisata:</span>
          <strong>${paket.judul}</strong>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
          <span style="color: #64748b;">Tanggal Trip:</span>
          <strong>${bookingState.tanggal}</strong>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
          <span style="color: #64748b;">Jumlah Peserta:</span>
          <strong>${bookingState.paxWNI + bookingState.paxWNA + bookingState.paxAnak} Orang</strong>
        </div>
        <div style="display: flex; justify-content: space-between; border-top: 1px dashed #cbd5e1; padding-top: 0.75rem; margin-top: 0.5rem;">
          <span style="font-weight: 700; color: #1e293b;">Total Biaya:</span>
          <strong style="color: var(--primary); font-size: 1.15rem;">${grandTotalText}</strong>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.75rem;">
        <button class="btn-submit-wa" onclick="handleWhatsAppBooking(event)">
          <i class="fa-brands fa-whatsapp"></i> Teruskan Invoice ke WhatsApp Admin
        </button>
        <button class="btn-secondary-hero" style="color: #334155; border-color: #cbd5e1;" onclick="closeAllModals()">
          Tutup
        </button>
      </div>
    `;
    modal.classList.add("active");
  }
}

/* ==========================================================================
   7. TESTIMONI PELANGGAN & ULASAN KOMUNITAS
   ========================================================================== */
function initTestimoniAndReviews() {
  renderStaticTestimoni();
  renderCommunityReviews();
  setupReviewForm();
}

function renderStaticTestimoni() {
  const container = document.getElementById("testimoniGrid");
  if (!container || !window.WISATA_DATA) return;

  container.innerHTML = window.WISATA_DATA.testimoni
    .map(
      (t) => `
    <div class="testimoni-card">
      <div class="testimoni-stars">
        ${Array(t.rating).fill('<i class="fa-solid fa-star"></i>').join("")}
      </div>
      <p class="testimoni-text">"${t.komentar}"</p>
      <div class="testimoni-user">
        <img src="${t.foto}" alt="${t.nama}" class="user-avatar" loading="lazy">
        <div>
          <div class="user-meta-name">${t.nama}</div>
          <div class="user-meta-origin">${t.asal} • ${t.tanggalTrip}</div>
          <div class="user-meta-trip"><i class="fa-solid fa-compass"></i> ${t.trip}</div>
        </div>
      </div>
    </div>
  `
    )
    .join("");
}

function renderCommunityReviews() {
  const container = document.getElementById("communityReviewsList");
  if (!container || !window.WISATA_DATA) return;

  // Ambil dari localStorage atau fallback ke data awal
  let savedReviews = [];
  try {
    const raw = localStorage.getItem("pesona_nusantara_reviews");
    if (raw) savedReviews = JSON.parse(raw);
  } catch (e) {
    console.error("Gagal membaca reviews dari localStorage", e);
  }

  const allReviews = [...savedReviews, ...window.WISATA_DATA.ulasanKomunitasAwal];

  container.innerHTML = allReviews
    .map(
      (rev) => `
    <div class="community-review-item">
      <div class="review-item-header">
        <div>
          <div class="reviewer-name">${rev.nama}</div>
          <span class="reviewed-dest"><i class="fa-solid fa-map-pin"></i> ${rev.destinasi}</span>
        </div>
        <div style="text-align: right;">
          <div style="color: var(--accent-gold); font-size: 0.85rem;">
            ${Array(rev.rating).fill('<i class="fa-solid fa-star"></i>').join("")}
          </div>
          <span class="review-date">${rev.tanggal}</span>
        </div>
      </div>
      <p class="review-item-comment">${rev.komentar}</p>
    </div>
  `
    )
    .join("");
}

function setupReviewForm() {
  const starContainer = document.getElementById("reviewStarRating");
  const form = document.getElementById("communityReviewForm");
  const destSelect = document.getElementById("reviewDestinasiSelect");

  if (destSelect && window.WISATA_DATA) {
    destSelect.innerHTML = window.WISATA_DATA.destinasi
      .map((d) => `<option value="${d.nama}">${d.nama}</option>`)
      .join("");
  }

  let selectedRating = 5;

  if (starContainer) {
    const stars = starContainer.querySelectorAll(".star-item");

    stars.forEach((star) => {
      star.addEventListener("click", () => {
        selectedRating = parseInt(star.getAttribute("data-val"), 10);
        stars.forEach((s) => {
          const val = parseInt(s.getAttribute("data-val"), 10);
          if (val <= selectedRating) {
            s.classList.add("active");
          } else {
            s.classList.remove("active");
          }
        });
      });
    });
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const nama = document.getElementById("reviewerNama")?.value.trim();
      const destinasi = document.getElementById("reviewDestinasiSelect")?.value;
      const komentar = document.getElementById("reviewerKomentar")?.value.trim();

      if (!nama || !komentar) {
        alert("Harap masukkan nama dan ulasan Anda.");
        return;
      }

      const today = new Date();
      const options = { day: "2-digit", month: "long", year: "numeric" };
      const tanggalFormatted = today.toLocaleDateString("id-ID", options);

      const newReview = {
        id: "uk-" + Date.now(),
        nama,
        destinasi,
        rating: selectedRating,
        tanggal: tanggalFormatted,
        komentar
      };

      // Simpan ke localStorage
      try {
        let existing = [];
        const raw = localStorage.getItem("pesona_nusantara_reviews");
        if (raw) existing = JSON.parse(raw);
        existing.unshift(newReview);
        localStorage.setItem("pesona_nusantara_reviews", JSON.stringify(existing));
      } catch (err) {
        console.error("Gagal menyimpan ke localStorage", err);
      }

      // Re-render
      renderCommunityReviews();

      // Reset form
      form.reset();
      alert("Terima kasih! Ulasan jujur Anda telah berhasil dipublikasikan.");
    });
  }
}

/* ==========================================================================
   8. MODAL CONTROLLER & MOBILE NAV
   ========================================================================== */
function initModals() {
  const closeButtons = document.querySelectorAll(".modal-close-btn");
  const modals = document.querySelectorAll(".modal-overlay");

  closeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      closeAllModals();
    });
  });

  modals.forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeAllModals();
      }
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeAllModals();
    }
  });
}

window.closeAllModals = function () {
  const modals = document.querySelectorAll(".modal-overlay");
  modals.forEach((m) => m.classList.remove("active"));
};

function initMobileNav() {
  const toggleBtn = document.getElementById("mobileMenuToggle");
  const navLinks = document.getElementById("navLinks");

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }
}
