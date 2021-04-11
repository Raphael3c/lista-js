const verifica = (numero) => {
    const result = numero%3;

    if(!result) return "É divisivel"

    return "Não é divisivel"
}

console.log(verifica(9481993))