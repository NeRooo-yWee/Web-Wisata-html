# Pesona Nusantara — Portal Eksplorasi Wisata & Paket Tur Indonesia

Website pariwisata modern berbasis **Pure Semantic HTML5, Vanilla CSS3, dan Vanilla JavaScript (ES6+)** tanpa ketergantungan framework berat (*zero build step, zero dependencies*). Dirancang khusus dengan estetika premium kelas dunia (*World-Class Travel Portal*) untuk mempromosikan destinasi unggulan Indonesia.

---

## 🌟 Fitur Utama yang Diimplementasikan

### 1. Tampilan Background Slide (Hero Carousel) Berkualitas Tinggi
- **Visual Resolusi Tinggi**: Menampilkan visual destinasi top list Indonesia (Raja Ampat, Labuan Bajo & TN Komodo, Bromo Tengger Semeru, Candi Borobudur Heritage, Danau Toba, dan Ubud Bali).
- **Fitur Klik Menuju Detail**: Seluruh area gambar background slider maupun tombol aksi utama dapat di-klik untuk langsung membawa pengunjung ke **Halaman Detail Destinasi**.
- **Kontrol Otomatis**: Dilengkapi auto-play halus (6 detik per slide), progress bar waktu, tombol navigasi panah, serta indikator titik (dots).

### 2. Halaman Khusus Detail Destinasi (`detail.html`)
Tersedia sistem *dynamic parameter loader* (`detail.html?id=[id-destinasi]`) dengan komponen lengkap:
- **Deskripsi Lengkap & Sejarah Singkat**: Mengulas latar belakang sejarah, mitologi lokal, dan nilai cagar budaya UNESCO.
- **Tabel Resmi Harga Tiket Masuk (WNI vs WNA)**:
  - Perbandingan transparan antara wisatawan domestik (WNI) dan wisatawan mancanegara (WNA).
  - Rincian PIN konservasi, retribusi pemda, biaya sewa jasa guide/ranger, dan tarif anak-anak.
- **Jam Operasional & Waktu Kunjungan Terbaik**: Informasi jadwal buka resmi dan musim rekomendasi berkunjung.
- **Fasilitas yang Tersedia**: Kartu ikon modern mencakup toilet bersih, area parkir, pusat kuliner lokal, persewaan alat, mushola, dsb.
- **Peta Lokasi Digital**: Terintegrasi langsung dengan **Google Maps Interaktif** responsif beserta koordinat GPS akurat.
- **Quick Switcher**: Navigasi cepat untuk berpindah antar destinasi tanpa harus kembali ke halaman beranda.

### 3. Navigation Bar (Sticky Glassmorphic)
- Bilah navigasi transparan berperekat (*sticky*) dengan efek *backdrop blur* modern.
- Tautan aktif ke seluruh komponen utama: **Beranda**, **Destinasi Top**, **Kalender Acara**, **Paket Tur**, **Booking**, dan **Testimoni**.
- Tombol aksi cepat WhatsApp di pojok kanan atas dan menu *hamburger* responsif untuk perangkat mobile/smartphone.

### 4. Teks Berjalan (Top Running Text Ticker) — Tips & Trik Perjalanan
- Terletak di posisi atas tengah halaman dengan animasi *marquee* halus (*pause on hover*).
- Menampilkan panduan praktis: perlengkapan wajib bawa (dry bag, sunscreen *reef-safe*), waktu emas *sunrise*, panduan transportasi tercepat, dan etika berbusana di tempat suci.
- **Interaktif**: Dapat di-klik untuk membuka *Modal Popup Panduan Lengkap* dengan checklist persiapan wisata.

### 5. Kalender Acara (Event Calendar Festival Budaya Tahunan)
- Informasi jadwal festival budaya lokal tahunan: *Yadnya Kasada Bromo, Pesta Kesenian Bali (PKB), Festival Lembah Baliem Wamena, Dieng Culture Festival (DCF), Festival Danau Toba, dan Wakatobi Wave*.
- Dilengkapi sistem **Filter Bulan Interaktif** (Semua Acara, Juni, Agustus, Oktober, November) dan tips hadir bagi wisatawan.

### 6. Katalog Paket Wisata & Harga Jelas (Include & Exclude)
- Menampilkan rincian paket open trip & private trip dengan komparasi harga jelas (WNI vs WNA).
- **Komparasi Fasilitas Jelas**:
  - **Termasuk (Include)** dengan centang hijau: Kabin kapal phinisi, makan chef kapal, tiket masuk TN, ranger, alat snorkeling, dokumentasi drone & GoPro, antar-jemput bandara.
  - **Tidak Termasuk (Exclude)** dengan tanda silang: Tiket pesawat dari kota asal, tipping kru, pengeluaran belanja pribadi.
- Tombol **"Pesan Paket Ini"** yang otomatis mengarahkan dan mengisi formulir pemesanan.

### 7. Sistem Pemesanan Interaktif (Booking System) & WhatsApp CTA
- **Formulir Terpadu**: Pemilihan paket/destinasi, tanggal keberangkatan, nama pemesan, no. WhatsApp, email, dan catatan khusus.
- **Penghitung Peserta Dinamis**: Penghitung peserta WNI, WNA, dan Anak-anak (<10 tahun dengan diskon 50%).
- **Live Price Calculator**: Menghitung estimasi total biaya secara langsung di layar secara transparan tanpa biaya siluman.
- **Dua Opsi Konfirmasi**:
  1. 🟢 **Pesan via WhatsApp Admin**: Otomatis menyusun pesan WhatsApp terstruktur yang mencakup identitas pemesan, rincian peserta, pilihan paket, dan nominal harga, lalu langsung membuka obrolan WhatsApp admin.
  2. 🔵 **Simpan & Buat Voucher Web**: Menghasilkan ID Booking unik (*PN-2026-XXXX*) dan tampilan voucher reservasi di modal web.

### 8. Testimoni Pelanggan (Social Proof)
- Menampilkan ulasan jujur, bintang rating, kota/negara asal wisatawan, dan tanggal trip untuk membangun kepercayaan dan kredibilitas.

### 9. Fitur Interaktif Ulasan Komunitas & Rating Bintang
- Formulir interaktif bagi pengunjung web untuk memberikan rating 1-5 bintang dan ulasan pengalaman mereka.
- Menggunakan penyimpanan browser **`localStorage`**, sehingga setiap ulasan baru yang dikirimkan langsung muncul secara instan di daftar ulasan komunitas (*live update*).

---

## 📁 Struktur Berkas Proyek

```
pesona-nusantara/
│
├── index.html          # Halaman Utama (Hero slider, Ticker, Event calendar, Katalog paket, Booking, Testimoni, Reviews)
├── detail.html         # Halaman Khusus Detail Destinasi (Deskripsi, Sejarah, Tiket WNI/WNA, Fasilitas, Peta Google Maps)
├── style.css           # Desain Sistem & CSS3 Modern (CSS Variables, Glassmorphism, Animasi Ticker, Responsive Grid)
├── script.js           # Mesin Interaktif JS (Slider logic, Filter pencarian, Live booking calculator, WhatsApp link generator)
├── data.js             # Basis Data Terstruktur (Destinasi, Kalender festival, Paket wisata, Tips trik, Testimoni)
└── README.md           # Dokumentasi Panduan Lengkap
```

---

## 🚀 Cara Menjalankan

Karena dibuat dengan **basis HTML, CSS, dan JavaScript murni**, tidak diperlukan instalasi Node.js, npm, ataupun server backend.

### Opsi 1: Langsung Buka di Browser (Paling Praktis)
1. Buka File Explorer di komputer Anda.
2. Masuk ke folder:
   `C:\Users\Arief Rachman\.gemini\antigravity-ide\scratch\pesona-nusantara\`
3. Klik ganda pada berkas **`index.html`** untuk langsung membukanya di Google Chrome, Microsoft Edge, atau browser favorit Anda.

### Opsi 2: Menggunakan Live Server / Local Web Server
Jika Anda menggunakan ekstensi seperti **Live Server** di IDE atau server lokal:
```bash
# Contoh dengan Python (jika terpasang):
python -m http.server 8000

# Atau buka URL:
http://localhost:8000/index.html
```

---

*Dikembangkan dengan standar rekayasa perangkat lunak dan keindahan desain visual untuk pariwisata Indonesia.*
