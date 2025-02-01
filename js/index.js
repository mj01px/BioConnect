function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
}

function openAndDownloadPDF() {
    // Caminho para o PDF
    const pdfPath = "assets/CV%20Mauro%20Junior.pdf";

    // Abrir o PDF em uma nova aba
    window.open(pdfPath, "_blank");

    // Criar um elemento temporário para o download
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = "Curriculo_Mauro_Junior.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}