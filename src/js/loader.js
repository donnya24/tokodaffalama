// Loader untuk memuat komponen HTML secara terpisah
document.addEventListener("DOMContentLoaded", function () {
  // Daftar komponen yang akan dimuat
  const components = [
    { id: "navbar", file: "src/components/navbar.html" },
    { id: "hero", file: "src/components/hero.html" },
    { id: "produk", file: "src/components/produk.html" },
    { id: "tentang", file: "src/components/tentang.html" },
    { id: "kontak", file: "src/components/kontak.html" },
    { id: "footer", file: "src/components/footer.html" },
  ];

  // Load setiap komponen
  components.forEach((component) => {
    fetch(component.file)
      .then((response) => response.text())
      .then((data) => {
        document.getElementById(component.id).innerHTML = data;

        // Khusus untuk navbar, pastikan sticky setelah dimuat
        if (component.id === "navbar") {
          setTimeout(() => {
            const navbarContainer = document.getElementById("navbar");
            navbarContainer.style.position = "sticky";
            navbarContainer.style.top = "0";
            navbarContainer.style.zIndex = "50";
          }, 100);
        }
      })
      .catch((error) => {
        console.error(`Error loading ${component.file}:`, error);
        document.getElementById(component.id).innerHTML =
          `<p class="text-red-500 text-center">Gagal memuat komponen</p>`;
      });
  });
});
