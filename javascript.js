function handleSearch(event) {
    event.preventDefault();

    const searchInput = document.querySelector('input[name="search"]');
    const searchValue = searchInput.value.trim();

    if (searchValue) {
        window.location.href='descolor.html'
    } else {
        alert('Masukan index warna dengan benar');
    }
    searchInput.value = ''
}
document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.querySelector('.search-container form');
    searchForm.addEventListener('submit', handleSearch);
});

// pindah hal 2
function goToPage() {
    window.location.href = 'halaman 2.html'; 
}

// Fungsi untuk mengubah gambar background setiap beberapa detik
let currentImageIndex = 0; // Index gambar yang aktif
const backgroundImages = [
    'url("21.png")', // Ganti dengan link gambar Anda
    'url("5.png")',
    'url("10.png")',
    'url("13.png")',
    'url("16.png")',
];

function changeBackground() {
    const heroSection = document.querySelector('.hero'); // Pilih section dengan class 'hero'
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length; // Perbarui index secara siklikal
    heroSection.style.backgroundImage = backgroundImages[currentImageIndex]; // Ganti background
}

// Panggil fungsi setiap 5 detik (5000 ms)
setInterval(changeBackground, 2000);

// Fungsi untuk mengarahkan ke halaman lain ketika tombol ditekan
function goToPage() {
    window.location.href = 'halaman 2.html'; // Ganti dengan halaman tujuan Anda
}
