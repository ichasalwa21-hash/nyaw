// --- Responsive Menu Toggle ---
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// --- Data Respon AI Simpel ---
const aiResponses = {
    jadwal: `
        <h3>🗓️ Rekomendasi Jadwal AI</h3>
        <ul>
            <li><b>08:00 - 10:30:</b> Pekerjaan Utama & Prioritas Tinggi</li>
            <li><b>10:30 - 10:45:</b> Istirahat & Minum Air Putih</li>
            <li><b>11:00 - 12:30:</b> Rapat & Balas Email</li>
            <li><b>12:30 - 13:30:</b> Makan Siang</li>
            <li><b>14:00 - 16:30:</b> Tugas Rutin & Evaluasi</li>
        </ul>
    `,

    makan: `
        <h3>🥗 Resep: Salad Ayam Panggang Wijen</h3>
        <p><b>Kalori:</b> ~480 kcal | <b>Protein:</b> 38g</p>
        
        <h4>🛒 Bahan-Bahan:</h4>
        <ul>
            <li>200g dada ayam (tanpa kulit)</li>
            <li>1 genggam selada & 5 tomat ceri</li>
            <li>1/2 timun & 1/2 alpukat</li>
            <li>2 sdm saus wijen sangrai</li>
            <li>1 sdm minyak zaitun, garam & lada</li>
        </ul>

        <h4>👩‍🍳 Cara Membuat:</h4>
        <ol>
            <li>Lumuri ayam dengan minyak zaitun, garam, dan lada.</li>
            <li>Panggang ayam di teflon selama 5-6 menit per sisi hingga matang, lalu potong-potong.</li>
            <li>Campurkan sayuran dan potongan ayam ke dalam mangkuk.</li>
            <li>Tuangkan saus wijen sangrai di atasnya, siap disajikan!</li>
        </ol>
    `,

    hemat: `
        <h3>💡 Tips Keuangan</h3>
        <ul>
            <li><b>Kurangi Kopi Kekinian:</b> Menyeduh sendiri 3x seminggu menghemat Rp 400.000+/bulan.</li>
            <li><b>Cek Langganan Digital:</b> Batalkan aplikasi/streaming yang jarang dipakai.</li>
            <li><b>Gunakan Aturan 50/30/20:</b> 50% Kebutuhan, 30% Keinginan, 20% Tabungan.</li>
        </ul>
    `
};

// --- Fungsi Tombol Demo ---
function getAISuggestion(type) {
    const demoText = document.getElementById('demo-text');
    const buttons = document.querySelectorAll('.demo-btn');

    // Tandai tombol aktif
    buttons.forEach(btn => btn.classList.remove('active'));
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }

    // Tampilkan indikator loading singkat
    demoText.innerHTML = "<p><i>Mengambil data dari AI...</i></p>";

    // Tampilkan resep/informasi lengkap
    setTimeout(() => {
        demoText.innerHTML = aiResponses[type] || "<p>Pilih salah satu menu di atas.</p>";
    }, 400);
}
