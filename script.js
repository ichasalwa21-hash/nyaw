
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Menutup menu seluler setelah link navigasi diklik
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

const aiResponses = {
    jadwal: `
        <div style="text-align: left; line-height: 1.7;">
            <h4 style="color: #6366f1; margin-bottom: 10px; font-size: 1.1rem;">🗓️ Rekomendasi Jadwal Produktif Harian AI</h4>
            <p style="margin-bottom: 10px; color: #64748b; font-size: 0.9rem;">
                <i>Disusun berdasarkan siklus ritme sirkadian untuk fokus maksimal.</i>
            </p>
            <ul style="list-style: none; padding: 0;">
                <li style="margin-bottom: 8px;"><b>08.00 - 10.30:</b> 🚀 <i>Deep Work Session</i> (Selesaikan tugas berat/analitis tanpa gangguan).</li>
                <li style="margin-bottom: 8px;"><b>10.30 - 10.45:</b> ☕ <i>Short Break</i> (Lakukan peregangan fisik & hidrasi air putih).</li>
                <li style="margin-bottom: 8px;"><b>11.00 - 12.30:</b> 📩 Rapat Tim & Respons Email / Komunikasi Penting.</li>
                <li style="margin-bottom: 8px;"><b>12.30 - 13.30:</b> 🥗 Makan Siang Sehat & Istirahat Pemulihan Energi.</li>
                <li style="margin-bottom: 8px;"><b>14.00 - 16.30:</b> 📝 Pengerjaan Tugas Rutin, Dokumentasi & Evaluasi Harian.</li>
            </ul>
        </div>
    `,
    
    makan: `
        <div style="text-align: left; line-height: 1.6;">
            <h4 style="color: #ec4899; margin-bottom: 10px; font-size: 1.1rem;">🥗 Rekomendasi Resep AI: Salad Ayam Panggang Wijen</h4>
            <p style="margin-bottom: 12px; color: #64748b; font-size: 0.85rem;">
                <b>Estimasi Nutrisi:</b> ~480 Kalori | Protein: 38g | Karbohidrat: 18g | Lemak Sehat: 14g
            </p>
            
            <h5 style="color: #1e293b; margin-bottom: 6px; font-size: 0.95rem;">🛒 Bahan-Bahan Utama:</h5>
            <ul style="margin-bottom: 12px; padding-left: 20px; color: #334155;">
                <li>200 gram dada ayam filleting (tanpa kulit)</li>
                <li>1 genggam daun selada/romaine segar (cuci bersih dan potong)</li>
                <li>1/2 buah timun Jepang (iris tipis)</li>
                <li>5 buah tomat ceri (belah dua)</li>
                <li>1/2 buah alpukat sedang (potong dadu)</li>
                <li>1 sdm minyak zaitun / olive oil</li>
                <li>Secukupnya garam, lada hitam, dan bubuk bawang putih</li>
            </ul>

            <h5 style="color: #1e293b; margin-bottom: 6px; font-size: 0.95rem;">🧴 Bahan Dressing Wijen:</h5>
            <ul style="margin-bottom: 12px; padding-left: 20px; color: #334155;">
                <li>2 sdm saus wijen sangrai (Roasted Sesame)</li>
                <li>1 sdt kecap asin rendah natrium</li>
                <li>1/2 sdt perasan jeruk nipis/lemon</li>
            </ul>

            <h5 style="color: #1e293b; margin-bottom: 6px; font-size: 0.95rem;">👩‍🍳 Langkah Pembuatan:</h5>
            <ol style="padding-left: 20px; color: #334155;">
                <li style="margin-bottom: 5px;"><b>Marination:</b> Lumuri dada ayam dengan minyak zaitun, garam, lada hitam, dan bubuk bawang putih. Diamkan selama 10 menit.</li>
                <li style="margin-bottom: 5px;"><b>Memanggang:</b> Panaskan teflon dengan api sedang. Panggang dada ayam selama 5–6 menit di setiap sisi hingga matang sempurna dan berwarna cokelat keemasan. Angkat, diamkan 2 menit, lalu iris tipis.</li>
                <li style="margin-bottom: 5px;"><b>Penyajian:</b> Susun selada, timun, tomat ceri, dan alpukat di dalam mangkuk. Letakkan irisan ayam panggang di atasnya.</li>
                <li style="margin-bottom: 5px;"><b>Finishing:</b> Siram dengan dressing wijen dan perasan lemon. Salad siap dinikmati!</li>
            </ol>
        </div>
    `,

    hemat: `
        <div style="text-align: left; line-height: 1.7;">
            <h4 style="color: #10b981; margin-bottom: 10px; font-size: 1.1rem;">💡 Rencana Strategi Keuangan Harian AI</h4>
            <p style="margin-bottom: 10px; color: #64748b; font-size: 0.9rem;">
                <i>Hasil analisis pengeluaran harian dan potensi penghematan bulanan Anda.</i>
            </p>
            <ul style="list-style: none; padding: 0;">
                <li style="margin-bottom: 10px;">
                    <b>1. Evaluasi Kopi & Jajanan Ringan:</b><br>
                    <span style="color: #475569; font-size: 0.9rem;">Pengeluaran jajanan Anda terdeteksi Rp 35.000/hari. Beralih menyeduh sendiri di kantor 3x seminggu dapat menghemat hingga <b>Rp 420.000/bulan</b>.</span>
                </li>
                <li style="margin-bottom: 10px;">
                    <b>2. Optimalisasi Langganan Digital:</b><br>
                    <span style="color: #475569; font-size: 0.9rem;">Terdapat 2 layanan streaming paralel yang jarang diakses secara bersamaan. Batalkan salah satu untuk menghemat <b>Rp 65.000/bulan</b>.</span>
                </li>
                <li style="margin-bottom: 10px;">
                    <b>3. Aturan Alokasi 50/30/20:</b><br>
                    <span style="color: #475569; font-size: 0.9rem;">Pastikan 50% pendapatan untuk Kebutuhan Pokok, 30% Keinginan, dan minimal 20% langsung masuk ke Rekening Tabungan/Investasi Otomatis.</span>
                </li>
            </ul>
        </div>
    `
};


function getAISuggestion(type) {
    const demoText = document.getElementById('demo-text');
    const buttons = document.querySelectorAll('.demo-btn');

    if (!demoText) return;


    buttons.forEach(btn => btn.classList.remove('active'));
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }

    demoText.innerHTML = `
        <div style="padding: 20px; color: #6366f1;">
            <span style="display: inline-block; animation: pulse 1s infinite;">⚙️</span> 
            <i>AI sedang menyusun data lengkap untuk Anda...</i>
        </div>
    `;

    setTimeout(() => {
        demoText.innerHTML = aiResponses[type] || "<p>Data tidak ditemukan.</p>";
    }, 500);
}
