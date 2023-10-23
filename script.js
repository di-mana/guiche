function generateQRCodeAndStore() {
    var url = document.getElementById('url').value;

    if (url.trim() === "") {
        alert("Por favor, insira um URL antes de gerar o QR Code.");
        return;
    }

    
    var qrCodeElement = document.getElementById("qrCode");
    qrCodeElement.innerHTML = "";

    var qrcode = new QRCode(qrCodeElement, {
        text: url,
        width: 200,
        height: 200,
        backgroundColor: "white"
    });

   
    setTimeout(function() {
        var qrImage = qrCodeElement.querySelector("img");
        if (qrImage) {
            var qrImageBase64 = qrImage.src;
            localStorage.setItem("qrImageBase64", qrImageBase64);
        } else {
            console.error("A imagem do QR Code ainda não foi gerada. Tente novamente.");
        }
    }, 500);
}

