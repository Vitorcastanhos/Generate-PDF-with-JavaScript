const btnGenerate = document.querySelector("#generate-pdf")

btnGenerate.addEventListener("click", () => {
    //conteudo do pdf
    const content = document.querySelector("#content")

    //configuração do arquivo final de pdf
    const options = {
        margin: [10, 10, 10, 10],
        filename: "arquivo.pdf",
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait", floatPrecision: 16},
    };
    //gerar e baixar o PDF
    html2pdf().set(options).from(content).save()
})