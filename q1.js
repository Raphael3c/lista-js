const interface = () => {
    return {
        soma: (x,y) => x+y,
        multi: (x,y) => x*y,
        div: (x,y) => x/y,
        sub: (x,y) => x-y
    }
}

const calc = (x,y) => {
    console.log(`Soma: ${interface().soma(x,y)}\nSub: ${interface().sub(x,y)}\nDiv: ${interface().div(x,y)}\nMulti: ${interface().multi(x,y)}`)
}

calc(1,2)