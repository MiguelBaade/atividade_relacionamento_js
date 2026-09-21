class Curso {
    constructor(
        nome,
        descricao,
        duracao,
        preco,
        instrutor,
        modulos = [],
        alunos = []
    ) {
        this.nome = nome;
        this.descricao = descricao;
        this.duracao = duracao;
        this.preco = preco;
        this.instrutor = instrutor;
        this.modulos = modulos;
        this.alunos = alunos;
    }
 
    cadastrar() {}
    consultar() {}
    atualizar() {}
    excluir() {}
    adicionarModulo() {}
}
 
 
class Modulo {
    constructor(titulo, descricao, ordemApresentacao, aulas = []) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.ordemApresentacao = ordemApresentacao;
        this.aulas = aulas;
    }
 
    cadastrar() {}
    consultar() {}
    atualizar() {}
    excluir() {}
    adicionarAula() {}
}
 
 
class Aula {
    constructor(titulo, duracao, conteudo) {
        this.titulo = titulo;
        this.duracao = duracao;
        this.conteudo = conteudo;
    }
 
    cadastrar() {}
    consultar() {}
    atualizar() {}
    excluir() {}
}
 
 
class Aluno {
    constructor(nome, cpf, email, dataCadastro) {
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.dataCadastro = dataCadastro;
    }
 
    cadastrar() {}
    consultar() {}
    atualizar() {}
    excluir() {}
    matricularEmCurso() {}
}
 
 
class Funcionario {
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }
 
    consultarDados() {}
    atualizarDados() {}
}
 
 
class Instrutor extends Funcionario {
    constructor(nome, cpf, especialidade) {
        super(nome, cpf);
        this.especialidade = especialidade;
    }
 
    cadastrar() {}
    consultar() {}
    atualizar() {}
    excluir() {}
    ministrarCurso() {}
}
 
 
class Administrador extends Funcionario {
    constructor(nome, cpf, setor) {
        super(nome, cpf);
        this.setor = setor;
    }
 
    cadastrar() {}
    consultar() {}
    atualizar() {}
    excluir() {}
    administrarPlataforma() {}
}
 
 
const aula1 = new Aula(
    'Introdução ao JavaScript',
    60,
    'Variáveis e tipos de dados'
);
 
const aula2 = new Aula(
    'Classes',
    90,
    'Programação orientada a objetos'
);
 
const modulo1 = new Modulo(
    'Fundamentos',
    'Fundamentos de JavaScript',
    1,
    [aula1, aula2]
);
 
const aluno1 = new Aluno(
    'Ana',
    '123.456.789-10',
    'ana@email.com',
    '21/09/2026'
);
 
const aluno2 = new Aluno(
    'Pedro',
    '987.654.321-10',
    'pedro@email.com',
    '21/09/2026'
);
 
const instrutor1 = new Instrutor(
    'Roberto',
    '111.222.333-44',
    'Programação'
);
 
const administrador1 = new Administrador(
    'Mariana',
    '222.333.444-55',
    'Administrativo'
);
 
const curso1 = new Curso(
    'JavaScript',
    'Curso de JavaScript',
    40,
    299.90,
    instrutor1,
    [modulo1],
    [aluno1, aluno2]
);