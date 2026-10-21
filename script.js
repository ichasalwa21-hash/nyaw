// --- Responsive Mobile Navbar Toggle ---
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// --- Data Simulasi Response AI ---
const aiResponses = {
    jadwal: "🤖 Rekomendasi Jadwal AI:**<br>• 08:00 - Focus Work (Prioritas 1)<br>• 11:00 - Istirahat & Retrospeksi Tim<br>• 14:00 - Pengerjaan Tugas Rutin",
    makan: "🥗 Saran Resep AI (Bahan Kulkas):<br>Salad Ayam Panggang + Dressing Wijen Sangrai. Sesuai dengan batas target 550 kalori harian Anda! ",
    makan: "🥗 Saran Resep AI (Bahan Kulkas):<br>📋 Bahan-Bahan
1. Ayam Panggang
300 gram dada ayam fillet

1 sdm kecap asin

1 sdt minyak wijen

1/2 sdt bubuk bawang putih (atau 1 siung bawang putih cincang)

1/4 sdt garam dan merica bubuk

2. Isian Salad
100 gram daun selada (romaine/lettuce), cuci bersih dan potong-potong

1 buah mentimun, potong dadu atau iris tipis

1/2 buah wortel, potong korek api

5 buah tomat ceri, belah dua

1/2 buah jagung manis pipil (rebus matang)

3. Dressing Wijen Sangrai
3 sdm wijen putih (sangrai hingga harum dan berwarna keemasan)

3 sdm mayones

1 sdm kecap asin

1 sdm cuka beras (bisa diganti 1 sdt perasan jeruk nipis/lemon)

1 sdt minyak wijen

1 sdt madu atau gula pasir

1–2 sdm air hangat (untuk menyesuaikan kekentalan)

🥣 Cara Membuat
Langkah 1: Panggang Ayam
Marinasi dada ayam dengan kecap asin, minyak wijen, bubuk bawang putih, garam, dan merica. Diamkan selama 15–20 menit di dalam kulkas.

Panaskan wajan anti-lengket (pan) dengan sedikit minyak/mentega dengan api sedang.

Panggang dada ayam hingga matang dan berwarna kecokelatan di kedua sisinya (sekitar 5–7 menit tiap sisi).

Angkat, diamkan sebentar, lalu potong-potong atau iris tipis (slice).

Langkah 2: Buat Dressing Wijen Sangrai
Haluskan sebagian besar wijen yang sudah disangrai menggunakan ulekan atau blender (sisakan sedikit wijen utuh untuk taburan).

Campurkan wijen halus dengan mayones, kecap asin, perasan jeruk nipis/cuka, minyak wijen, dan madu.

Aduk rata. Jika dressing terlalu kental, tambahkan 1–2 sdm air hangat hingga mencapai tekstur yang diinginkan.

Langkah 3: Penyajian
Susun daun selada, mentimun, wortel, tomat ceri, dan jagung manis di dalam mangkuk saji.

Letakkan irisan ayam panggang di atas sayuran.

Siram dengan Dressing Wijen Sangrai dan taburi dengan sisa wijen sangrai utuh di atasnya.

Salad siap dinikmati!

💡 Tips Tambahan:

Anda bisa menambahkan topping renyah seperti crouton (roti panggang dadu) atau kacang almond sangrai.

Pastikan sayuran salad disajikan dalam keadaan dingin dan benar-benar kering setelah dicuci agar rasa dressing tidak menjadi hambar/encer. ",
    hemat: "💡 Tips Keuangan AI:**<br>Pengeluaran kopi bulanan Anda terdeteksi melampaui estimasi 15%. Coba seduh kopi sendiri 2x seminggu untuk hemat Rp 200.000/bulan!"
};

// --- Interactive Demo Handler ---
function getAISuggestion(type) {
    const demoOutput = document.getElementById('demo-text');
    const buttons = document.querySelectorAll('.demo-btn');

    // Update state tombol aktif
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Efek loading simpel
    demoOutput.innerHTML = "⏳ <i>AI sedang berpikir dan menganalisis...</i>";

    setTimeout(() => {
        demoOutput.innerHTML = aiResponses[type] || "Silakan pilih salah satu opsi.";
    }, 600);
}
