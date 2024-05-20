const tabuadas = (): string => {
    let resultado: string = '';
    const n = 1;

    for (let i = 0; i <= 10; i++) {
        resultado += `${n} x ${i} = ${n * i}\n`;
    }

    return resultado;
}

console.log(tabuadas());
