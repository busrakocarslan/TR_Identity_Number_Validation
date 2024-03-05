const TC = document.getElementById("Tc-input");
const btn = document.getElementById("gönder-btn");
const msg = document.querySelector(".info");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const yeniTC = Array.from(TC.value);
  let deneme =
    ((Number(yeniTC[0]) +
      Number(yeniTC[2]) +
      Number(yeniTC[4]) +
      Number(yeniTC[6]) +
      Number(yeniTC[8])) *
      7 -
      (Number(yeniTC[1]) +
        Number(yeniTC[3]) +
        Number(yeniTC[5]) +
        Number(yeniTC[7]))) %
    10;
  yeniTC[9] = deneme;
  yeniTC[10] =
    (Number(yeniTC[0]) +
      Number(yeniTC[1]) +
      Number(yeniTC[2]) +
      Number(yeniTC[3]) +
      Number(yeniTC[4]) +
      Number(yeniTC[5]) +
      Number(yeniTC[6]) +
      Number(yeniTC[7]) +
      Number(yeniTC[8]) +
      deneme) %
    10;
  if (TC.value.length < 11) {
    msg.textContent = "TC Kimlik Numaranız 11 haneli olmalıdır!";
    setTimeout(() => {
      msg.textContent = "";
      TC.value = "";
    }, 2000);
    e.preventDefault();
  } else if (Number(TC.value) != yeniTC.join("")) {
    msg.textContent = "Geçersiz TC Numarası!";
    setTimeout(() => {
      msg.textContent = "";
      TC.value = "";
      TC.focus();
    }, 2000);
    e.preventDefault();
  } else {
    msg.textContent = "Doğru giriş yaptınız.Sayfaya yönlendiriliyorsunuz!";
    setTimeout(() => {
      msg.textContent = "";
      TC.value = "";
      TC.focus();
    }, 2000);
    e.preventDefault();
  }
});
