/**
 * Data Sumber Destinasi, Paket Wisata, Kalender Acara, & Testimoni
 * Pesona Nusantara - Portal Eksplorasi Wisata Indonesia
 */

const WISATA_DATA = {
  // 1. Data Destinasi Populer Top List Indonesia
  destinasi: [
    {
      id: "raja-ampat",
      nama: "Kepulauan Raja Ampat",
      lokasi: "Papua Barat Daya",
      kategori: "Bahari & Bawah Laut",
      kategoriKey: "bahari",
      rating: 4.9,
      ulasanCount: 328,
      tagline: "Surga Bawah Laut Terkaya di Segitiga Terumbu Karang Dunia",
      gambarUtama: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=1920&q=80",
      thumbnail: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=600&q=80",
      galeri: [
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=900&q=80"
      ],
      deskripsiSingkat: "Gugusan kepulauan karst spektakuler dengan 1.500 spesies ikan karang dan 75% spesies karang dunia.",
      sejarahDeskripsi: `Kepulauan Raja Ampat merupakan gugusan kepulauan yang terletak di ujung barat laut Semenanjung Kepala Burung pulau Papua. Nama 'Raja Ampat' sendiri berakar dari mitologi kuno masyarakat setempat; konon seorang wanita menemukan tujuh butir telur ajaib. Empat di antaranya menetas menjadi raja-raja yang memimpin empat pulau besar utama: Waigeo, Misool, Salawati, dan Batanta, sedangkan tiga telur lainnya menjadi wanita, hantu, dan batu.\n\nSecara ekologis, Raja Ampat diakui para ahli biologi maritim dunia sebagai pusat keanekaragaman hayati laut global (The Coral Triangle Heritage). Keindahan karst Pulau Wayag dan Pianemo yang menjulang anggun dari laut toska menjadikan destinasi ini ikon keajaiban alam Nusantara yang diakui secara global.`,
      jamOperasional: "Buka 24 Jam (Aktivitas Kapal & Wisata Snorkeling: 06.00 - 18.00 WIT)",
      tiketWNI: {
        pinKonservasi: "Rp 425.000 / orang (Berlaku 1 Tahun)",
        retribusiSpot: "Rp 50.000 - Rp 100.000 / spot",
        anak: "Rp 250.000 (di bawah 12 tahun)",
        keterangan: "Kartu Pemeliharaan Lingkungan Hidup (KPLH) wajib bagi setiap pengunjung."
      },
      tiketWNA: {
        pinKonservasi: "Rp 1.000.000 / orang (~US$ 65, Berlaku 1 Tahun)",
        retribusiSpot: "Rp 150.000 - Rp 250.000 / spot",
        anak: "Rp 600.000",
        keterangan: "Termasuk stiker/PIN konservasi resmi BLUD UPTD Kelautan Raja Ampat."
      },
      fasilitas: [
        { icon: "fa-ship", nama: "Dermaga Speedboat & Kapal Cepat" },
        { icon: "fa-water", nama: "Pusat Sewa Alat Selam PADI & Snorkel" },
        { icon: "fa-hotel", nama: "Eco-Resort & Homestay Terapung" },
        { icon: "fa-utensils", nama: "Warung Seafood Segar Lokal" },
        { icon: "fa-restroom", nama: "Toilet & Kamar Bilas di Titik Transit" },
        { icon: "fa-id-card", nama: "Pemandu Wisata Lokal Berlisensi HPI" }
      ],
      tipsKhusus: "Bawalah uang tunai rupiah secukupnya karena mesin ATM hanya tersedia di Kota Sorong dan Waisai. Jangan lupa sunscreen ramah karang (reef-safe).",
      waktuTerbaik: "Oktober hingga April (ombak tenang, visibilitas air laut kristal mencapai 30 meter)",
      googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1021487.6749144865!2d129.8732152010892!3d-0.5638146747530504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d5c31758652033d%3A0xe54eb1ce4ca60fa1!2sRaja%20Ampat%20Regency%2C%20Southwest%20Papua!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid",
      mapsCoord: "-0.5638, 130.6402",
      paketTerkait: "paket-raja-ampat"
    },
    {
      id: "labuan-bajo",
      nama: "Taman Nasional Komodo & Labuan Bajo",
      lokasi: "Nusa Tenggara Timur",
      kategori: "Satwa Liar & Bahari",
      kategoriKey: "bahari",
      rating: 4.9,
      ulasanCount: 412,
      tagline: "Petualangan Menyusuri Habitat Asli Satwa Purba Komodo & Pasir Pink Eksotis",
      gambarUtama: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1920&q=80",
      thumbnail: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=600&q=80",
      galeri: [
        "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1578469550956-0e16b69c6a3d?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80"
      ],
      deskripsiSingkat: "Habitat komodo purba, perbukitan savana Pulau Padar dengan 3 pantai warna, dan terumbu karang kelas dunia.",
      sejarahDeskripsi: `Ditetapkan sebagai Situs Warisan Dunia UNESCO pada tahun 1991 dan salah satu New7Wonders of Nature, kawasan Taman Nasional Komodo terdiri dari tiga pulau utama: Pulau Komodo, Pulau Rinca, dan Pulau Padar. Kawasan ini menjadi benteng pelestarian kadal raksasa purba Varanus komodoensis yang telah hidup sejak zaman pleistosen sekitar 4 juta tahun lalu.\n\nSelain pesona sang naga purba, lanskap alam Pulau Padar menawarkan panorama tiga teluk dengan warna pasir yang kontras: putih susu, hitam vulkanik, dan merah muda berkilau (Pink Beach) yang tercipta dari pecahan mikroforaminifera karang merah. Labuan Bajo kini telah bertransformasi menjadi gerbang marina modern kelas dunia dengan fasilitas pariwisata premium.`,
      jamOperasional: "Setiap Hari 06.00 - 18.00 WITA (Trekking dengan Ranger: 07.00 - 16.30 WITA)",
      tiketWNI: {
        pinKonservasi: "Rp 50.000 (Hari Kerja) / Rp 75.000 (Akhir Pekan)",
        retribusiSpot: "Jasa Ranger: Rp 120.000 / grup (maks. 5 orang)",
        anak: "Rp 25.000",
        keterangan: "Biaya trekking Padar & snorkeling dikenakan tarif retribusi Pemda Manggarai Barat."
      },
      tiketWNA: {
        pinKonservasi: "Rp 150.000 (Hari Kerja) / Rp 250.000 (Akhir Pekan)",
        retribusiSpot: "Jasa Ranger: Rp 120.000 / grup (maks. 5 orang)",
        anak: "Rp 100.000",
        keterangan: "Diharuskan didampingi ranger resmi KSDA demi keamanan di zona reptil."
      },
      fasilitas: [
        { icon: "fa-anchor", nama: "Pelabuhan Marina Phinisi Internasional" },
        { icon: "fa-shield-alt", nama: "Pos Ranger KSDA Berpengalaman" },
        { icon: "fa-stairs", nama: "Jalur Trekking Tangga Kayu Padar" },
        { icon: "fa-utensils", nama: "Restoran & Kafe Tepi Tebing Sunset" },
        { icon: "fa-restroom", nama: "Toilet Bersih di Dermaga & Pos Ranger" },
        { icon: "fa-camera", nama: "Spot Foto Fenomenal Pink Beach" }
      ],
      tipsKhusus: "Gunakan sepatu kets atau trekking beralas kuat untuk menaiki tangga Pulau Padar. Hindari aroma makanan menyengat saat berada di dekat area reptil komodo.",
      waktuTerbaik: "Mei sampai September (musim kemarau dengan laut tenang dan langit biru cerah tak berawan)",
      googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252438.4554228965!2d119.55938569429712!3d-8.558356947262243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2db4669567c9d9d3%3A0x6b7724128f7ad952!2sKomodo%20National%20Park!5e0!3m2!1sen!2sid!4v1700000000001!5m2!1sen!2sid",
      mapsCoord: "-8.5833, 119.4833",
      paketTerkait: "paket-labuan-bajo"
    },
    {
      id: "gunung-bromo",
      nama: "Gunung Bromo & Tengger Semeru",
      lokasi: "Jawa Timur",
      kategori: "Pegunungan & Vulkanik",
      kategoriKey: "gunung",
      rating: 4.8,
      ulasanCount: 560,
      tagline: "Lautan Pasir Magis dan Keagungan Matahari Terbit Negeri di Atas Awan",
      gambarUtama: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1920&q=80",
      thumbnail: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=600&q=80",
      galeri: [
        "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&w=900&q=80"
      ],
      deskripsiSingkat: "Kaldera lautan pasir seluas 5.250 hektar dengan panorama matahari terbit epik dan kebudayaan suku Tengger.",
      sejarahDeskripsi: `Gunung Bromo (2.329 mdpl) berdiri gagah di dalam kaldera raksasa Tengger purba. Nama 'Bromo' diserap dari nama dewa pencipta dalam agama Hindu, Dewa Brahma. Kawasan ini merupakan tempat tinggal sakral bagi Suku Tengger yang memegang teguh adat istiadat leluhur sejak keruntuhan Kerajaan Majapahit pada abad ke-15.\n\nSetiap tahun pada bulan Purnama Kasada, warga suku Tengger mengadakan ritual Yadnya Kasada dengan melempar sesaji berupa sayuran, buah-buahan, hingga ternak ke dalam kawah berasap sebagai ungkapan syukur dan permohonan keselamatan kepada Sang Hyang Widhi dan Roro Anteng - Joko Seger. Pemandangan fajar dari Penanjakan 1 menampilkan siluet Bromo, Batok, dan latar megah Gunung Semeru yang mengeluarkan letupan asap syahdu.`,
      jamOperasional: "Buka 24 Jam (Perburuan Sunrise Dimulai Pukul 03.00 WIB)",
      tiketWNI: {
        pinKonservasi: "Rp 29.000 (Hari Kerja) / Rp 34.000 (Akhir Pekan/Libur)",
        retribusiSpot: "Sewa Jeep 4x4: Rp 600.000 - Rp 850.000 / armada (kapasitas 6 org)",
        anak: "Rp 19.000",
        keterangan: "Pemesanan tiket masuk wajib melalui sistem online booking resmi BBTNBTS."
      },
      tiketWNA: {
        pinKonservasi: "Rp 220.000 (Hari Kerja) / Rp 320.000 (Akhir Pekan/Libur)",
        retribusiSpot: "Sewa Kuda Kawah: Rp 150.000 - Rp 200.000 (opsional)",
        anak: "Rp 150.000",
        keterangan: "Termasuk asuransi kecelakaan kawasan konservasi nasional."
      },
      fasilitas: [
        { icon: "fa-car", nama: "Layanan Sewa Jeep Hardtop 4x4" },
        { icon: "fa-horse", nama: "Jasa Naik Kuda ke Tangga Kawah" },
        { icon: "fa-mug-hot", nama: "Warung Kopi, Mie Hangat & Jagung Bakar" },
        { icon: "fa-mosque", nama: "Mushola & Toilet Hangat di Rest Area" },
        { icon: "fa-tshirt", nama: "Penyewaan Jaket Tebal, Syal & Kupluk" },
        { icon: "fa-binoculars", nama: "Spot Gardu Pandang King Kong & Penanjakan" }
      ],
      tipsKhusus: "Suhu udara dini hari bisa mencapai 3° hingga 8° Celsius. Kenakan pakaian berlapis (thermal/fleece), jaket windbreaker, sarung tangan, dan masker penutup debu pasir.",
      waktuTerbaik: "Juni hingga Oktober (musim kemarau bebas kabut tebal, bintang Milky Way tampak jelas saat malam)",
      googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63232.06733276859!2d112.92008332997195!3d-7.942493393167191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd637aaab79b973%3A0x4a737f14187f54b6!2sMount%20Bromo!5e0!3m2!1sen!2sid!4v1700000000002!5m2!1sen!2sid",
      mapsCoord: "-7.9425, 112.9530",
      paketTerkait: "paket-bromo"
    },
    {
      id: "candi-borobudur",
      nama: "Candi Borobudur Heritage",
      lokasi: "Magelang, Jawa Tengah",
      kategori: "Warisan Budaya & Sejarah",
      kategoriKey: "budaya",
      rating: 4.9,
      ulasanCount: 680,
      tagline: "Monumen Buddha Terbesar di Muka Bumi Karya Mahakarya Dinasti Syailendra",
      gambarUtama: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=1920&q=80",
      thumbnail: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=600&q=80",
      galeri: [
        "https://images.unsplash.com/photo-1600100397608-f010f4438317?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1599818804791-382eebe94553?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1565019001391-72a3e0bfa51c?auto=format&fit=crop&w=900&q=80"
      ],
      deskripsiSingkat: "Candi punden berundak megah berhiaskan 2.672 panel relief naratif dan 504 arca Buddha peninggalan abad ke-8.",
      sejarahDeskripsi: `Candi Borobudur didirikan sekitar tahun 750-825 Masehi pada masa pemerintahan raja Samaratungga dari Wangsa Syailendra. Bangunan suci ini merupakan mandala raksasa tiga dimensi yang mencerminkan kosmologi alam semesta Buddha Mahayana: Kamadhatu (ranah hawa nafsu), Rupadhatu (ranah berwujud tanpa nafsu), dan Arupadhatu (ranah tanpa wujud tertinggi di stupa utama).\n\nSetelah sempat tertimbun abu vulkanik Gunung Merapi dan semak belukar selama ratusan tahun, candi ini ditemukan kembali oleh Sir Thomas Stamford Raffles pada tahun 1814. Restorasi besar-besaran bersama UNESCO selesai pada 1983 dan kini Borobudur dilindungi sebagai Situs Warisan Dunia UNESCO (World Heritage No. 592).`,
      jamOperasional: "Selasa - Minggu: 06.30 - 17.00 WIB (Senin zona pelataran dibuka terbatas demi konservasi)",
      tiketWNI: {
        pinKonservasi: "Rp 50.000 (Pelataran) / Rp 150.000 (Naik ke Struktur Candi)",
        retribusiSpot: "Sudah termasuk Sandal Khusus Upanat & Pemandu Edukasi Resmi",
        anak: "Rp 25.000 (Pelataran) / Rp 90.000 (Naik Candi)",
        keterangan: "Kuota naik ke struktur candi dibatasi 1.200 pengunjung per hari demi menjaga kelestarian batuan andesit."
      },
      tiketWNA: {
        pinKonservasi: "US$ 25 / Rp 387.500 (Pelataran) / Rp 500.000 (Naik Struktur Candi)",
        retribusiSpot: "Sudah termasuk Sandal Upanat, Audio Guide, & Tour Guide Bahasa Inggris",
        anak: "US$ 15 / Rp 232.500",
        keterangan: "Disediakan sesi jalur khusus pemandu bahasa internasional."
      },
      fasilitas: [
        { icon: "fa-shoe-prints", nama: "Sandal Upanat Khusus & Tas Jinjing Kain" },
        { icon: "fa-bus", nama: "Kendaraan Listrik Shuttle Ramah Lingkungan" },
        { icon: "fa-landmark", nama: "Museum Samudraraksa & Karmawibhangga" },
        { icon: "fa-wheelchair", nama: "Akses Jalur Khusus Difabel & Kursi Roda" },
        { icon: "fa-store", nama: "Pasar Seni Kerajinan & Kuliner Tradisional" },
        { icon: "fa-mosque", nama: "Mushola Nyaman & Toilet Berstandar Internasional" }
      ],
      tipsKhusus: "Gunakan pakaian sopan menutup bahu dan lutut sebagai bentuk penghormatan tempat ibadah. Datanglah pada sesi pagi (07.00 - 09.00) untuk menghindari terik matahari.",
      waktuTerbaik: "April sampai Oktober (cuaca cerah dengan view Gunung Merapi dan Menoreh jelas terlihat)",
      googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15817.202391035932!2d110.19478443955077!3d-7.607873799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a8cf009a7d697%3A0xdd34334744dc3cbc!2sBorobudur%20Temple!5e0!3m2!1sen!2sid!4v1700000000003!5m2!1sen!2sid",
      mapsCoord: "-7.6079, 110.2038",
      paketTerkait: "paket-borobudur"
    },
    {
      id: "danau-toba",
      nama: "Danau Toba & Pulau Samosir",
      lokasi: "Sumatera Utara",
      kategori: "Danau Vulkanik & Tradisi Batak",
      kategoriKey: "alam",
      rating: 4.8,
      ulasanCount: 290,
      tagline: "Keajaiban Kaldera Vulkanik Terbesar Dunia dan Dinamika Tradisi Luhur Batak",
      gambarUtama: "https://images.unsplash.com/photo-1571212515416-fef01fc43637?auto=format&fit=crop&w=1920&q=80",
      thumbnail: "https://images.unsplash.com/photo-1571212515416-fef01fc43637?auto=format&fit=crop&w=600&q=80",
      galeri: [
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=80"
      ],
      deskripsiSingkat: "Danau kaldera raksasa seluas 1.145 km persegi dengan Pulau Samosir di tengahnya yang sarat budaya Batak.",
      sejarahDeskripsi: `Danau Toba adalah saksi bisu salah satu peristiwa geologis paling dahsyat dalam sejarah bumi. Sekitar 74.000 tahun silam, letusan supervolcano Toba memuntahkan lebih dari 2.800 km kubik material piroklastik ke atmosfer, menciptakan musim dingin vulkanik global dan membentuk kawah kaldera raksasa sepanjang 100 kilometer.\n\nDi tengah danau ini terbentang Pulau Samosir, episentrum peradaban etnis Batak Toba. Di sini tersimpan warisan bersejarah seperti Batu Parsidangan Huta Siallagan (kursi pengadilan batu berusia ratusan tahun), pertunjukan tarian mistis boneka Sigale-gale di Tomok, serta desa pengrajin tenun Ulos tradisional yang penuh makna filosofis.`,
      jamOperasional: "Kawasan Buka 24 Jam (Desa Budaya & Museum: 08.00 - 17.30 WIB)",
      tiketWNI: {
        pinKonservasi: "Gratis Masuk Area Danau",
        retribusiSpot: "Huta Siallagan: Rp 10.000 / orang | Tomok Sigale-gale: Rp 10.000",
        anak: "Rp 5.000",
        keterangan: "Tiket penyeberangan kapal ferry Ajibata - Tomok berkisar Rp 15.000/orang."
      },
      tiketWNA: {
        pinKonservasi: "Gratis Masuk Area Danau",
        retribusiSpot: "Huta Siallagan & Situs Budaya: Rp 25.000 / orang",
        anak: "Rp 15.000",
        keterangan: "Tersedia pemandu lokal berbahasa Inggris, Jerman, dan Belanda."
      },
      fasilitas: [
        { icon: "fa-ferry", nama: "Pelabuhan Kapal Ro-Ro & Speedboat Turis" },
        { icon: "fa-campground", nama: "Spot Glamping Kaldera Sibisa & Bukit Holbung" },
        { icon: "fa-landmark", nama: "Museum Batak TB Silalahi Center" },
        { icon: "fa-hotel", nama: "Resort & Hotel Tepi Danau Tuk-Tuk" },
        { icon: "fa-utensils", nama: "Pusat Kuliner Ikan Mas Bakar & Kopi Lintong" },
        { icon: "fa-palette", nama: "Sentra Pembuatan Tenun Ulos Tradisional" }
      ],
      tipsKhusus: "Sewa sepeda motor di kawasan Tuk-Tuk untuk merasakan sensasi berkendara keliling pedesaan Pulau Samosir dengan hembusan angin danau yang sejuk.",
      waktuTerbaik: "Mei sampai September (musim perayaan festival rakyat dan cuaca kering ideal untuk road trip)",
      googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d510000.7410058981!2d98.54452174999998!3d2.684534700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3031de4a4ec18db7%3A0x6b1aa130ca17013b!2sLake%20Toba!5e0!3m2!1sen!2sid!4v1700000000004!5m2!1sen!2sid",
      mapsCoord: "2.6845, 98.8756",
      paketTerkait: "paket-danau-toba"
    },
    {
      id: "ubud-bali",
      nama: "Ubud & Tegalalang Rice Terrace",
      lokasi: "Gianyar, Bali",
      kategori: "Budaya, Seni & Keasrian Alam",
      kategoriKey: "budaya",
      rating: 4.9,
      ulasanCount: 512,
      tagline: "Oase Ketenangan Jiwa di Tengah Hamparan Sawah Terasering dan Seni Dewata",
      gambarUtama: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1920&q=80",
      thumbnail: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
      galeri: [
        "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80"
      ],
      deskripsiSingkat: "Jantung spiritual dan kebudayaan Pulau Dewata dengan lembah hijau, sistem irigasi Subak, dan seni mendunia.",
      sejarahDeskripsi: `Ubud telah lama dikenal sebagai pusat seni lukis, tari, dan kerajinan tangan Bali. Kata 'Ubud' berakar dari kata dalam bahasa Bali Kuno 'Ubad' yang berarti obat, merujuk pada keberadaan tanaman herbal berkhasiat di sepanjang aliran Sungai Campuhan yang disucikan oleh pendeta suci Rsi Markandeya pada abad ke-8.\n\nTegalalang menampilkan teknik persawahan terasering berundak khas Bali yang menggunakan filosofi tata kelola air 'Subak'. Subak bukan sekadar teknologi irigasi, melainkan manifestasi nyata Tri Hita Karana—harmoni antara manusia, alam semesta, dan Sang Pencipta—yang telah diakui UNESCO sebagai Warisan Budaya Takbenda Dunia.`,
      jamOperasional: "Setiap Hari 08.00 - 18.00 WITA (Monkey Forest: 09.00 - 17.00 WITA)",
      tiketWNI: {
        pinKonservasi: "Tegalalang: Rp 15.000 / orang",
        retribusiSpot: "Monkey Forest Ubud: Rp 60.000 (Hari Biasa) / Rp 80.000 (Weekend)",
        anak: "Rp 40.000",
        keterangan: "Dikenakan biaya tambahan untuk wahana Bali Swing dan sarang burung foto."
      },
      tiketWNA: {
        pinKonservasi: "Tegalalang: Rp 25.000 / orang",
        retribusiSpot: "Monkey Forest Ubud: Rp 80.000 (Hari Biasa) / Rp 100.000 (Weekend)",
        anak: "Rp 60.000",
        keterangan: "Termasuk pemandu pendamping di kawasan konservasi kera ekor panjang."
      },
      fasilitas: [
        { icon: "fa-seedling", nama: "Jalur Trekking Sawah Terasering Subak" },
        { icon: "fa-spa", nama: "Pusat Spa Tradisional & Yoga Shala" },
        { icon: "fa-coffee", nama: "Kafe Organik Tepi Lembah Sungai Ayung" },
        { icon: "fa-paint-brush", nama: "Museum Seni Puri Lukisan & Neka" },
        { icon: "fa-shopping-bag", nama: "Pasar Seni Tradisional Ubud" },
        { icon: "fa-parking", nama: "Gedung Parkir Terpadu & Shuttle Listrik" }
      ],
      tipsKhusus: "Saat mengunjungi Hutan Monyet (Sacred Monkey Forest), simpan kacamata hitam, botol minum plastik, dan perhiasan ke dalam tas tertutup agar tidak memicu interaksi jahil kera.",
      waktuTerbaik: "Mei sampai September (musim padi hijau menguning dan cuaca cerah tanpa hujan lebat)",
      googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63140.91689230559!2d115.22896593952136!3d-8.433299799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd223789d970a09%3A0x892a0ea8a0ebc857!2sTegallalang%20Rice%20Terrace!5e0!3m2!1sen!2sid!4v1700000000005!5m2!1sen!2sid",
      mapsCoord: "-8.4333, 115.2817",
      paketTerkait: "paket-ubud-bali"
    }
  ],

  // 2. Data Teks Berjalan (Tips & Trik Perjalanan)
  tipsTrik: [
    {
      kategori: "Peralatan Wajib",
      teks: "🎒 Wajib bawa dry bag anti air, sunscreen reef-safe, & kacamata UV saat berlayar di Labuan Bajo & Raja Ampat!",
      detail: "Perairan timur Indonesia memiliki indeks UV tinggi. Gunakan tabir surya aman bagi terumbu karang (non-oxybenzone) dan simpan smartphone di kantong kedap air."
    },
    {
      kategori: "Waktu Terbaik",
      teks: "⏰ Waktu emas berburu sunrise spektakuler Gunung Bromo adalah pukul 04.30 WIB di Penanjakan 1!",
      detail: "Berangkatlah menggunakan Jeep 4x4 dari penginapan maksimal pukul 03.00 WIB untuk mendapatkan barisan terdepan di gardu pandang tanpa terhalang pengunjung lain."
    },
    {
      kategori: "Transportasi",
      teks: "✈️ Rute tercepat ke Raja Ampat: Ambil penerbangan transit Sorong (Bandara DEO), lalu lanjut kapal ferry cepat ke Pelabuhan Waisai (2 jam).",
      detail: "Jadwal kapal cepat Bahari Express berangkat setiap hari pukul 09.00 dan 14.00 WIT dari Pelabuhan Rakyat Sorong menuju Waisai."
    },
    {
      kategori: "Etika Budaya",
      teks: "🙏 Selalu gunakan pakaian sopan berpenutup bahu dan kain sarung saat memasuki area suci candi Borobudur & pura di Bali.",
      detail: "Menghormati kesakralan situs bersejarah dan tempat ibadah warga lokal adalah nilai utama dalam berwisata yang bertanggung jawab."
    },
    {
      kategori: "Kesehatan & Fisik",
      teks: "💧 Siapkan jaket tebal bertingkat untuk Bromo (3°C) dan perbanyak minum air mineral untuk mencegah dehidrasi saat trekking Pulau Padar.",
      detail: "Trekking tangga kayu Pulau Padar memiliki 818 anak tangga. Kenakan sepatu kets dengan grip kuat dan bawa minimal 1 botol air mineral."
    }
  ],

  // 3. Kalender Acara Festival & Budaya Tahunan Lokal
  kalenderAcara: [
    {
      id: "ev-1",
      namaAcara: "Yadnya Kasada Bromo",
      lokasi: "Lautan Pasir Gunung Bromo, Jawa Timur",
      bulan: "Juni",
      bulanAngka: "06",
      tanggal: "18 - 19 Juni 2027",
      deskripsi: "Upacara sakral tengah malam suku Tengger mempersembahkan hasil bumi dan hewan ternak ke kawah Bromo demi memohon keselamatan dan berkah.",
      kategori: "Tradisi & Ritual Budaya",
      gambar: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=600&q=80",
      tipsHadir: "Suhu sangat dingin mencapai 2°C, siapkan pakaian hangat lengkap dan hormati prosesi keagamaan warga Tengger."
    },
    {
      id: "ev-2",
      namaAcara: "Pesta Kesenian Bali (PKB)",
      lokasi: "Taman Budaya Art Center, Denpasar & Ubud, Bali",
      bulan: "Juni",
      bulanAngka: "06",
      tanggal: "15 Juni - 13 Juli 2027",
      deskripsi: "Pawai kolosal seni budaya akbar tahunan selama sebulan penuh, menampilkan gamelan klasik, tari legong keraton, kecak spektakuler, dan pameran kriya nusantara.",
      kategori: "Festival Seni Internasional",
      gambar: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
      tipsHadir: "Datanglah lebih awal saat pembukaan karnaval jalanan di Monumen Bajra Sandhi Renon untuk mendapatkan sudut foto terbaik."
    },
    {
      id: "ev-3",
      namaAcara: "Festival Lembah Baliem",
      lokasi: "Wamena, Dataran Tinggi Papua",
      bulan: "Agustus",
      bulanAngka: "08",
      tanggal: "8 - 10 Agustus 2027",
      deskripsi: "Festival budaya tertua dan paling memukau di Papua; atraksi simulasi perang persahabatan antar suku Dani, Lani, dan Yali berhiaskan busana adat koteka dan tari perang.",
      kategori: "Kebudayaan Adat Asli",
      gambar: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=600&q=80",
      tipsHadir: "Pesan tiket pesawat Jayapura-Wamena dan hotel minimal 3 bulan sebelum acara karena ketersediaan sangat terbatas."
    },
    {
      id: "ev-4",
      namaAcara: "Dieng Culture Festival (DCF)",
      lokasi: "Kawasan Candi Arjuna Dieng, Jawa Tengah",
      bulan: "Agustus",
      bulanAngka: "08",
      tanggal: "22 - 24 Agustus 2027",
      deskripsi: "Ritual sakral pemotongan rambut gimbal anak-anak Dieng, panggung musik jazz di atas awan berselimut kabut mistis, dan penerbangan ribuan lampion malam.",
      kategori: "Ritual & Musik Alam",
      gambar: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80",
      tipsHadir: "Pemesanan homestay dibuka mulai Mei. Bawa kantong tidur dan jaket penahan embun upas (suhu bisa minus derajat)."
    },
    {
      id: "ev-5",
      namaAcara: "Festival Danau Toba (FDT)",
      lokasi: "Tuk-Tuk Samosir & Parapat, Sumatera Utara",
      bulan: "November",
      bulanAngka: "11",
      tanggal: "14 - 17 November 2027",
      deskripsi: "Lomba perahu dayung naga Solu Bolon menyeberangi danau vulkanik, karnaval tenun Ulos Batak sepanjang ribuan meter, dan paduan suara etnik Batak megah.",
      kategori: "Olahraga Bahari & Budaya",
      gambar: "https://images.unsplash.com/photo-1571212515416-fef01fc43637?auto=format&fit=crop&w=600&q=80",
      tipsHadir: "Nikmati pertunjukan tarian Sigale-gale dan festival kopi arabika Lintong sambil menikmati semilir angin tepi danau."
    },
    {
      id: "ev-6",
      namaAcara: "Wakatobi Wave & Sail to Indonesia",
      lokasi: "Wangi-Wangi, Wakatobi, Sulawesi Tenggara",
      bulan: "Oktober",
      bulanAngka: "10",
      tanggal: "20 - 24 Oktober 2027",
      deskripsi: "Parade kapal tradisional hias suku laut Bajo, tarian kolosal Liwo ratusan penari adat, serta kompetisi underwater macro photography kelas internasional.",
      kategori: "Bahari & Maritim",
      gambar: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
      tipsHadir: "Waktu ideal untuk penyelam yang ingin menikmati visibilitas bawah laut terbaik mencapai lebih dari 35 meter."
    }
  ],

  // 4. Katalog Paket Wisata Lengkap dengan Rincian Include/Exclude Jelas
  paketWisata: [
    {
      id: "paket-labuan-bajo",
      destinasiId: "labuan-bajo",
      judul: "4D3N Sailing Komodo Liveaboard Phinisi VIP",
      destinasiNama: "Labuan Bajo & TN Komodo",
      durasi: "4 Hari 3 Malam",
      jenisTrip: "Open / Private Trip",
      badge: "Best Seller Paling Populer",
      gambar: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80",
      hargaWNI: 4250000,
      hargaWNA: 5750000,
      rute: "Labuan Bajo - Pulau Kelor - Manjarite - Pulau Kalong - Pulau Padar - Pink Beach - Manta Point - Taka Makassar - Kanawa",
      fasilitasInclude: [
        "Kabin ber-AC Kapal Phinisi Deluxe / VIP (Private / Sharing sesuai pilihan)",
        "Makan 3x sehari sajian Chef Kapal + Snack sore & buah segar",
        "Free flow air mineral, kopi Flores asli, dan teh sepanjang trip",
        "Tiket Masuk Resmi TN Komodo + Ranger KSDA Berpengalaman",
        "Peralatan Snorkeling lengkap (Masker, Snorkel, Fin) & Life Jacket standar SOLAS",
        "Dokumentasi Lengkap Drone DJI, Kamera Mirrorless DSLR, dan GoPro Bawah Air",
        "Penjemputan PP Bandara Komodo (LBJ) menuju Pelabuhan Marina"
      ],
      fasilitasExclude: [
        "Tiket Pesawat Pulang-Pergi dari kota asal ke Labuan Bajo",
        "Tipping sukarela untuk kru kapal phinisi & tour leader",
        "Pengeluaran pribadi (laundry, minuman beralkohol, suvenir)",
        "Asuransi perjalanan internasional mandiri"
      ]
    },
    {
      id: "paket-raja-ampat",
      destinasiId: "raja-ampat",
      judul: "3D2N Raja Ampat Wayag & Pianemo Magical Tour",
      destinasiNama: "Kepulauan Raja Ampat",
      durasi: "3 Hari 2 Malam",
      jenisTrip: "Eksklusif Group & Private",
      badge: "Surgawi Bawah Air",
      gambar: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=800&q=80",
      hargaWNI: 6800000,
      hargaWNA: 8900000,
      rute: "Sorong - Waisai - Gugusan Karst Wayag 1 & 2 - Shark Point - Pianemo Viewpoint - Teluk Kabui - Pasir Timbul - Friwen Island",
      fasilitasInclude: [
        "Speedboat Khusus Twin Engine selama trip eksplorasi pulau",
        "Penginapan 2 Malam di Water Cottage / Homestay Terapung Tepi Pantai",
        "Kartu PIN Konservasi Resmi Pemkab Raja Ampat (WNI/WNA)",
        "Makan 3x sehari menu seafood segar khas Papua + buah & bekal trekking",
        "Pemandu Wisata Lokal berlisensi HPI yang memahami seluk-beluk pulau",
        "Alat Snorkeling standar internasional & life jacket",
        "Tiket Kapal Cepat Ferry Express Bahari VIP Class Sorong - Waisai PP"
      ],
      fasilitasExclude: [
        "Tiket Pesawat menuju Bandara DEO Sorong (SOQ)",
        "Biaya sewa tabung diving & dive master untuk scuba diving mandiri",
        "Pengeluaran pribadi dan cinderamata patung kayu Asmat",
        "Tips kru perahu dan porter pelabuhan"
      ]
    },
    {
      id: "paket-bromo",
      destinasiId: "gunung-bromo",
      judul: "2D1N Bromo Midnight Sunrise & Air Terjun Madakaripura",
      destinasiNama: "TNBTS Bromo & Probolinggo",
      durasi: "2 Hari 1 Malam",
      jenisTrip: "Trip Weekend / Harian",
      badge: "Favorit Liburan Singkat",
      gambar: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=800&q=80",
      hargaWNI: 1150000,
      hargaWNA: 1850000,
      rute: "Malang / Surabaya - Penanjakan 1 Bromo - Kawah Vulkanik Bromo - Pura Poten - Pasir Berbisik - Savana Teletubbies - Madakaripura",
      fasilitasInclude: [
        "Transportasi AC Executive Antar Jemput dari Malang / Surabaya PP",
        "Sewa Jeep Hardtop 4x4 Eksklusif menyusuri 5 titik utama Bromo",
        "Tiket Masuk Resmi TNBTS Bromo & Wisata Air Terjun Madakaripura",
        "Pemandu Wisata & Fotografer siap bantu abadikan momen emas sunrise",
        "Sarapan pagi di resto lokal & welcome hot drink (kopi/teh hangat)",
        "Jas hujan dan masker penutup debu pasir"
      ],
      fasilitasExclude: [
        "Tiket Kereta / Pesawat menuju Malang atau Surabaya",
        "Sewa kuda di lautan pasir menuju kawah Bromo (opsional)",
        "Makan siang dan malam di luar paket",
        "Pengeluaran pribadi belanja oleh-oleh apel Malang"
      ]
    },
    {
      id: "paket-borobudur",
      destinasiId: "candi-borobudur",
      judul: "3D2N Royal Heritage Borobudur, Prambanan & Jogja",
      destinasiNama: "Borobudur & D.I. Yogyakarta",
      durasi: "3 Hari 2 Malam",
      jenisTrip: "Cultural Heritage Tour",
      badge: "Keluarga & Sejarah",
      gambar: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=800&q=80",
      hargaWNI: 1950000,
      hargaWNA: 2950000,
      rute: "Yogyakarta - Candi Borobudur Sunrise - VW Safari Desa Wisata Karanganyar - Candi Prambanan - Kraton Jogja - Tamansari - Malioboro",
      fasilitasInclude: [
        "Akomodasi Hotel Bintang 4 di Yogyakarta (2 Malam include buffet breakfast)",
        "Tiket Khusus Naik ke Struktur Candi Borobudur + Sandal Upanat Resmi",
        "Sewa Mobil Antik VW Cabriolet keliling desa kerajinan sekitar Borobudur",
        "Tiket Masuk Kawasan Candi Prambanan, Kraton Jogja, dan Tamansari",
        "Mobil VIP Pariwisata AC + Driver profesional ramah + BBM + Parkir",
        "Pemandu Khusus Cagar Budaya bersertifikasi"
      ],
      fasilitasExclude: [
        "Tiket Pesawat / Kereta menuju Yogyakarta",
        "Makan siang dan malam (rekomendasi kuliner khas dipandu oleh driver)",
        "Pengeluaran belanja suvenir batik dan bakpia",
        "Tipping untuk driver & pemandu candi"
      ]
    }
  ],

  // 5. Testimoni Pelanggan (Social Proof)
  testimoni: [
    {
      nama: "dr. Andina Pratama",
      asal: "Jakarta Selatan",
      trip: "Sailing Komodo Phinisi VIP",
      rating: 5,
      foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      komentar: "Pelayanan luar biasa rapi! Berlayar di phinisi bareng tim Pesona Nusantara bener-bener berasa sultan. Makanan di kapal dimasakin chef bintang lima, dokumentasi drone-nya cinematik banget buat konten Instagram!",
      tanggalTrip: "September 2026"
    },
    {
      nama: "Michael & Sarah Van Der Meer",
      asal: "Amsterdam, Netherlands",
      trip: "Raja Ampat Wayag Explorer",
      rating: 5,
      foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      komentar: "Indonesia is truly heaven on earth. The guides were extremely knowledgeable about marine preservation, friendly, and punctual. Seeing manta rays and the limestone islands in Wayag was a dream come true. Worth every cent!",
      tanggalTrip: "Agustus 2026"
    },
    {
      nama: "Bambang Sudiro, M.T.",
      asal: "Surabaya",
      trip: "Bromo Midnight & Madakaripura",
      rating: 5,
      foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      komentar: "Sebagai profesional yang jarang libur, trip singkat 2D1N Bromo ini tepat waktu dan sangat efisien. Driver Jeep sigap, dapet spot sunrise nomor satu di Penanjakan. Anak dan istri senang sekali!",
      tanggalTrip: "Oktober 2026"
    },
    {
      nama: "Citra Lestari",
      asal: "Bandung",
      trip: "Royal Heritage Borobudur & Jogja",
      rating: 5,
      foto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
      komentar: "Sangat puas! Naik ke atas struktur Candi Borobudur dapat sandal upanat resmi dan pemandu yang menjelaskan sejarah Dinasti Syailendra secara detail. Anak-anak sangat antusias naik mobil VW antik keliling desa.",
      tanggalTrip: "Juli 2026"
    }
  ],

  // 6. Ulasan Komunitas Awal (Bisa ditambah oleh pengunjung & tersimpan di localStorage)
  ulasanKomunitasAwal: [
    {
      id: "uk-1",
      nama: "Dimas Arya Wijaya",
      destinasi: "Kepulauan Raja Ampat",
      rating: 5,
      tanggal: "04 Oktober 2026",
      komentar: "Pianemo beneran seindah lukisan! Tangganya rapi dan gak terlalu melelahkan karena pemandangan atasnya magis banget. Wajib sewa alat snorkeling buat liat bayi hiu di dermaga."
    },
    {
      id: "uk-2",
      nama: "Nadia Safitri",
      destinasi: "Gunung Bromo",
      rating: 5,
      tanggal: "28 September 2026",
      komentar: "Tips bawa jaket tebal dan masker dari web ini sangat membantu! Pas subuh dingin banget, tapi begitu matahari keluar dari ufuk, capek langsung terbayar lunas. Indah banget!"
    },
    {
      id: "uk-3",
      nama: "Hans Gruber",
      destinasi: "Taman Nasional Komodo & Labuan Bajo",
      rating: 5,
      tanggal: "15 September 2026",
      komentar: "Pink Beach is unique, and trekking up Padar island is breathtaking. Respect the rangers instructions around Komodo dragons and you will have a very safe and memorable journey."
    }
  ]
};

// Ekspor ke window global untuk akses langsung di script browser
if (typeof window !== "undefined") {
  window.WISATA_DATA = WISATA_DATA;
}
