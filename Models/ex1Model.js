class Pessoa {
    constructor(id, nome, cpf) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
    }

    criar() {}
    buscarPorId() {}
    atualizar() {}
    deletar() {}
}

class Usuario extends Pessoa {
    constructor(id, nome, cpf, matricula_usuario, id_biblioteca) {
        super(id, nome, cpf);
        this.matricula_usuario = matricula_usuario;
        this.id_biblioteca = id_biblioteca;
    }

    criar() {}
    buscarPorId() {}
    atualizar() {}
    deletar() {}
}

class Funcionario extends Pessoa {
    constructor(id, nome, cpf, matricula_funcional, cargo, id_biblioteca) {
        super(id, nome, cpf);
        this.matricula_funcional = matricula_funcional;
        this.cargo = cargo;
        this.id_biblioteca = id_biblioteca;
    }

    criar() {}
    buscarPorId() {}
    atualizar() {}
    deletar() {}
}

class Biblioteca {
    constructor(id, nome, endereco) {
        this.id = id;
        this.nome = nome;
        this.endereco = endereco;
    }

    criar() {}
    buscarPorId() {}
    atualizar() {}
    deletar() {}
}

class Livro {
    constructor(id, titulo, ISBN, ano_publicacao, id_biblioteca) {
        this.id = id;
        this.titulo = titulo;
        this.ISBN = ISBN;
        this.ano_publicacao = ano_publicacao;
        this.id_biblioteca = id_biblioteca;
    }

    criar() {}
    buscarPorId() {}
    atualizar() {}
    deletar() {}
}

class Emprestimo {
    constructor(id, id_usuario, id_livro, data_emprestimo, data_devolucao) {
        this.id = id;
        this.id_usuario = id_usuario;
        this.id_livro = id_livro;
        this.data_emprestimo = data_emprestimo;
        this.data_devolucao = data_devolucao;
    }

    criar() {}
    buscarPorId() {}
    atualizar() {}
    deletar() {}
}

const biblioteca1 = new Biblioteca(1, "Biblioteca Central", "Rua das Flores, 100");
const usuario1 = new Usuario(1, "Ana Souza", "123.456.789-01", "U001", biblioteca1.id);
const funcionario1 = new Funcionario(1, "Carla Mendes", "345.678.901-23", "F001", "Bibliotecária", biblioteca1.id);
const livro1 = new Livro(1, "Dom Casmurro", "978-85-359-0277-5", 1899, biblioteca1.id);
const emprestimo1 = new Emprestimo(1, usuario1.id, livro1.id, "2026-09-01", "2026-09-15");