// Pilih elemen dengan class option text
const Kelas = document.querySelector(".option-text");
const logout = document.getElementById("btn2")

logout.addEventListener("click", function goBack() {
  window.location.href="login.html";
  }
)

// Menambahkan event listener untuk klik ke hlm selanjutnya
Kelas.addEventListener("click", () => {
  // simpan status klik di local storage

  window.location.href = "kelas.html";
});

const Kelas2 = document.getElementById("opsi2");

Kelas2.addEventListener("click", () => {
  // simpan status klik di local storage
  
  window.location.href = "kelas11.html";
});

const Kelas3 = document.getElementById("opsi3");

Kelas3.addEventListener("click", () => {
  // simpan status klik di local storage
  window.location.href = "kelas12.html";
});


