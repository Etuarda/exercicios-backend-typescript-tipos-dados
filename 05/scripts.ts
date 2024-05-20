const soletrar = (nome: string): string => {
    return nome.split('').join('-');
};

// Exemplo de uso da função
const nomeExemplo = 'programador';
const resulta = soletrar(nomeExemplo);
console.log(resulta);
// Saída esperada: "p-r-o-g-r-a-m-a-d-o-r"
