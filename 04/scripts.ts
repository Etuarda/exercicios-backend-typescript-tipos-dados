interface Etiqueta {
    produto: string;
    lote: number;
    ano: number;
    qtd: number;
}

const gerarEtiquetas = (etiqueta: Etiqueta): string[] => {
    const { lote, ano, qtd } = etiqueta;
    const etiquetas: string[] = [];

    for (let i = 1; i <= qtd; i++) {
        const numeroEtiqueta = i.toString().padStart(3, '0');
        const novaEtiqueta = `${lote}-${ano}-${numeroEtiqueta}`;
        etiquetas.push(novaEtiqueta);
    }

    return etiquetas;
};

const etiquetaExemplo: Etiqueta = {
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 5,
};

const resultado = gerarEtiquetas(etiquetaExemplo);
console.log(resultado);

