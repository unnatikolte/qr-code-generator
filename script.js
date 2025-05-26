const input = document.getElementById("text");
const generateBtn = document.getElementById("generate");
const qrCodeContainer = document.getElementById("qrcode");
const loader = document.getElementById("loader");
const downloadBtn = document.getElementById("download");

generateBtn.addEventListener("click", () => {
  const value = input.value.trim();
  if (!value) return;

  qrCodeContainer.innerHTML = "";
  downloadBtn.style.display = "none";
  loader.classList.remove("hidden");

  setTimeout(() => {
    loader.classList.add("hidden");

    QRCode.toDataURL(value, { width: 200, margin: 2 }, (err, url) => {
      if (err) return console.error(err);

      const img = new Image();
      img.src = url;
      qrCodeContainer.appendChild(img);

      downloadBtn.href = url;
      downloadBtn.style.display = "inline-block";
    });
  }, 1000); // Simulate loading
});
