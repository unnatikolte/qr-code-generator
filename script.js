function generateQRCode() {
  const input = document.getElementById("text-input").value;
  const qrImage = document.getElementById("qr-code");
  const loader = document.getElementById("loader");
  const downloadLink = document.getElementById("download-link");

  if (input.trim() === "") {
    alert("Please enter a valid text or URL");
    return;
  }

  const qrAPI = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(input)}&size=200x200`;

  loader.classList.remove("hidden");
  qrImage.onload = () => {
    loader.classList.add("hidden");
    downloadLink.href = qrImage.src;
  };
  qrImage.src = qrAPI;
}