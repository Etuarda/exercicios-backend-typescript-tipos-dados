const soletrar = (nome: string): string => {
    return nome.split('').join('-');
};

const nomeExemplo = 'programador';
const resulta = soletrar(nomeExemplo);
console.log(resulta);
