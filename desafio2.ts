
enum Trabalho {
    Atriz,
    Padeiro,
    Engenherio,
    Professora
}

type Humano = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let pessoa1: Humano = {
    nome: 'paulo ricardo',
    idade: 29,
    profissao: Trabalho.Padeiro
};

let pessoa2: Humano = {
    nome: 'carla cristina',
    idade: 19,
    profissao: Trabalho.Professora
};

let pessoa3: Humano = {
    nome: 'francisca',
    idade: 32,
    profissao: Trabalho.Atriz
};

let pessoa4: Humano = {
    nome: 'adolfo',
    idade: 19,
    profissao: Trabalho.Engenherio
};
