  // Menunggu dokumen di-load sebelum menjalankan JavaScript
  document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a'); // Mendapatkan semua tautan menu navigasi
    const sections = document.querySelectorAll('main section'); // Mendapatkan semua bagian utama

    // Iterasi untuk setiap tautan menu navigasi
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Menghentikan aksi bawaan klik
            const targetId = link.getAttribute('href').substring(
            1); // Mendapatkan id target dari atribut href
            const targetSection = document.getElementById(
            targetId); // Mendapatkan bagian target berdasarkan id
            window.scrollTo({ // Bergulir ke bagian target dengan gerakan halus
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    const options = {
        threshold: 0.5
    };

    // Membuat Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(
                'in-view'); // Menambahkan kelas 'in-view' ketika bagian terlihat di layar
            } else {
                entry.target.classList.remove(
                'in-view'); // Menghapus kelas 'in-view' ketika bagian tidak terlihat di layar
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section); // Mengamati setiap bagian utama
    });
});

// Mendapatkan referensi tombol kembali ke atas
const btnBackToTop = document.getElementById('btnBackToTop');

// Menampilkan atau menyembunyikan tombol kembali ke atas berdasarkan posisi scroll
function toggleBackToTopButton() {
    if (window.scrollY > 300) {
        btnBackToTop.style.display = 'block';
    } else {
        btnBackToTop.style.display = 'none';
    }
}

// Event listener untuk mengatur perilaku tombol kembali ke atas
btnBackToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    }); // Bergulir ke atas dengan gerakan halus saat tombol diklik
});

// Event listener untuk menampilkan atau menyembunyikan tombol kembali ke atas saat melakukan scroll
window.addEventListener('scroll', toggleBackToTopButton);