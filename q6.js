const jurosCompostos = (capitalInicial, taxaJuros, tempoAplicacao) => {
    const montante = capitalInicial*Math.pow((1+taxaJuros), tempoAplicacao);

    const montanteFixed = montante.toFixed(2);

    return montanteFixed;
}

const jurosSimples = (capitalInicial, taxaJuros, tempoAplicacao) => {
    
    const montante = capitalInicial * taxaJuros * tempoAplicacao;
    
    return montante;
}