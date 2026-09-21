class Pessoa {
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }

    consultarDados() {}
    atualizarDados() {}
}


class Usuario extends Pessoa {
    constructor(nome, cpf, matriculaUsuario) {
        super(nome, cpf);
        this.matriculaUsuario = matriculaUsuario;
    }

    cadastrar() {}
    consultar() {}
    atualizar() {}
    excluir() {}
    realizarEmprestimo() {}
}


class Funcionario extends Pessoa {
    constructor(nome, cpf, matriculaFuncional, cargo) {
        super(nome, cpf);
        this.matriculaFuncional = matriculaFuncional;
        this.cargo = cargo;
    }

    cadastrar() {}
    consultar() {}
    atualizar() {}
    excluir() {}
}


class Livro {
    constructor(titulo, isbn, anoPublicacao) {
        this.titulo = titulo;
        this.isbn = isbn;
        this.anoPublicacao = anoPublicacao;
    }

    cadastrar() {}
    consultar() {}
    atualizar() {}
    excluir() {}
}


class Emprestimo {
    constructor(usuario, livro) {
        this.usuario = usuario;
        this.livro = livro;
    }

    cadastrar() {}
    consultar() {}
    atualizar() {}
    excluir() {}
    registrarDevolucao() {}
}


const usuario1 = new Usuario(
    'Ana Souza',
    '123.456.789-01',
    'U001'
);

const usuario2 = new Usuario(
    'Bruno Lima',
    '234.567.890-12',
    'U002'
);


const funcionario1 = new Funcionario(
    'Carla Mendes',
    '345.678.901-23',
    'F001',
    'Bibliotecária'
);

const funcionario2 = new Funcionario(
    'Diego Alves',
    '456.789.012-34',
    'F002',
    'Auxiliar'
);


const livro1 = new Livro(
    'Dom Casmurro',
    '9788535914849',
    1899
);

const livro2 = new Livro(
    'O Cortiço',
    '9788503011815',
    1890
);


const emprestimo1 = new Emprestimo(
    usuario1,
    livro1
);

const emprestimo2 = new Emprestimo(
    usuario2,
    livro2
);
