const qrCodeDiv = document.getElementById("qr-code");
const qrCode = new QRCode(qrCodeDiv, {
    text: "https://www.youtube.com/",
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});
qrCode.makeCode("https://www.youtube.com/");