const bhaskara = (ax2, bx, c) => {
    const delta = Math.sqrt(Math.pow(bx,2)-(4*ax2*c));

    if(!delta) return 'Delta é negativo' 

    const x1 = (-bx + delta)/2*ax2;
    const x2 = (-bx - delta)/2*ax2;

    return [x1,x2]
}

console.log(bhaskara(3, -5, 12))