const content = document.getElementById("content")
const title_content = document.getElementById("title");
const desc_text = document.getElementById("desc-text");
const box = document.getElementById("box")
const desc_img = document.getElementById("desc-img");
const button_group = document.getElementById("button-group");
const button_iya = document.getElementById("button-iya");
const button_tidak = document.getElementById("button-tidak");

button_iya.addEventListener('click', ()=> {
  title_content.innerHTML = "Anda Berbohong!";
  desc_text.innerHTML = "Anda adalah seorang Teknisi";
  box.style.backgroundColor = "#E12E2E";
  desc_img.src = "Assets/teknisi.svg";
  button_group.style.display = 'none';
});

button_tidak.addEventListener('click', ()=> {
  title_content.innerHTML = "Anda Benar!";
  desc_text.innerHTML = "Anda adalah seorang Mahasiswa";
  box.style.backgroundColor = "#6FD240"
  desc_img.src = "Assets/mahasiswa.svg";
  button_group.style.display = 'none';
});
