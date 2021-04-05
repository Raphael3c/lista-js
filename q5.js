const dinheiro = (valor) => {

    const valorFixed = valor.toFixed(2);
    const valorString = String(valorFixed);
    const valorReais = valorString.replace(',' , '.');
    const result = `R$${valorReais}`;

    console.log(result);    
}


dinheiro(0.1+0.2)