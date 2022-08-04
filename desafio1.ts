
const funcionario = {
    codigo: 101,
    nome: 'alberto'
};


const funcionario2: {codigo: number, nome: string} = {
    codigo: 101,
    nome: 'alberto'
}


interface Funcionario { 
    codigo: number,
    nome: string
};

const funcionarioObj = {} as Funcionario;
funcionarioObj.codigo = 101;
funcionarioObj.nome = 'alberto';

const funcionarioObj2: Funcionario = {
    codigo: 101,
    nome: 'alberto'
}