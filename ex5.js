function simularDownload(nomeArquivo, callbackConclusao) { 
    console.log(`Iniciando download do arquivo ...`);
    setTimeout(() => {
        callbackConclusao();
    }, 1500);
}

function concluirDownload() {
    console.log(` ✅ Download finalizado com sucesso no disco!`);
}
simularDownload("arquivo.txt", concluirDownload);

