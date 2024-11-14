// array untuk menyimpan riwayat navigasi
let navigationHistory = [];

// event listener untuk klik "Next"
document.getElementById("next-icon").addEventListener("click", (event) => {
  event.preventDefault();

  // simpan url saat ini dalam riwayat navigation
  navigationHistory.push(window.location.href);

  // Navigasi ke halaman berikutnya
  window.location.href = "../Kelas_xi/kelas11.html";
});

window.addEventListener("popstate", (event) => {
  if (navigationHistory.length > 0) {
    navigationHistory.pop();

    if (navigationHistory.length > 0) {
      window.location.href = navigationHistory[navigationHistory.length - 1];
    }
  }
});
