const verificaRecordes = (listaPontuacao) => {

    const listaPontuacaoOrganizada = listaPontuacao.split(' ');

    let recorde = Number(listaPontuacaoOrganizada[0]);
    let piorJogo = Number(listaPontuacaoOrganizada[0]);

    let recordes = 0;
    let diaDoPiorJogo = 0;

    for(let i=1; i < listaPontuacaoOrganizada.length; i++){
        
        if(recorde < Number(listaPontuacaoOrganizada[i])){
            recordes++
            recorde = Number(listaPontuacaoOrganizada[i])
        }

        if(piorJogo > Number(listaPontuacaoOrganizada[i])){
            piorJogo = Number(listaPontuacaoOrganizada[i])
            diaDoPiorJogo = i + 1;
        } 
    }

    return [recordes, diaDoPiorJogo]

}



const listaPontuacao ='10 20 20 8 25 3 0 30 1'

console.log(verificaRecordes(listaPontuacao))