const resultado = (nota) => {

    if(nota < 38) return `Reprovado: ${nota}`;

    if(nota == 100) return `Aprovado: ${nota}`;

    if(nota > 100) return `Nota inválida: ${nota}`;

    const auxiliar = String(nota);

    if(auxiliar[1] == '8' || auxiliar[1] == '3'){
        nota = nota + 2;
    }

    if(auxiliar[1] == '9' || auxiliar[1] == '4'){
        nota = nota + 1;
    }
    
    return `Aprovado: ${nota}`;
}

console.log(resultado(1001));