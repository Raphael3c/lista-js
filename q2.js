function wichTriangule(ladoA, ladoB, ladoC){
    if(ladoA == ladoB && ladoB == ladoC && ladoA == ladoC){
        console.log('Equilátero')  
    }else if(ladoA == ladoB || ladoB == ladoC || ladoA == ladoC){ 
        console.log('Isósceles')  
    }else{
        console.log('Escaleno')  
    }
}

wichTriangule(3,3,3)