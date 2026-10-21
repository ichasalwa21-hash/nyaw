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
    jadwal: "🤖 **Rekomendasi Jadwal AI:**<br>• 08:00 - Focus Work (Prioritas 1)<br>• 11:00 - Istirahat & Retrospeksi Tim<br>• 14:00 - Pengerjaan Tugas Rutin",
    makan: "🥗 **Saran Resep AI (Bahan Kulkas):**<br>Salad Ayam Panggang + Dressing Wijen Sangrai. Sesuai dengan batas target 550 kalori harian Anda!",
    hemat: "💡 **Tips Keuangan AI:**<br>Pengeluaran kopi bulanan Anda terdeteksi melampaui estimasi 15%. Coba seduh kopi sendiri 2x seminggu untuk hemat Rp 200.000/bulan!"
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
