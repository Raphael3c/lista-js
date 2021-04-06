const dinheiro = (valor) => {

    const valorFixed = valor.toFixed(2);
    const valorString = String(valorFixed);
    const valorEmReais = valorString.replace(',' , '.');
    const result = `R$${valorEmReais}`;

    console.log(result);    
}


dinheiro(0.1+0.2)