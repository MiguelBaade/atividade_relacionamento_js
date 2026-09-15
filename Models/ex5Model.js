class Curso{
    constructor(nome, descricao, duracao, preco){
        this.nome = nome;
        this.descricao = descricao;
        this.duracao = duracao;
        this.preco = preco;
    }

    criar() {}
    buscarPorId() {}
    atualizar() {}
    deletar() {}
}
class Modulos{
    constructor(titulo, descricao, ordemApresentacao){
        this.titulo = titulo;
        this.descricao = descricao;
        this.ordemApresentacao = ordemApresentacao;
    }

    criar() {}
    buscarPorId() {}
    atualizar() {}
    deletar() {}
}
class Aula{
    constructor(titulo, duracao, conteudo){
        this.titulo = titulo;
        this.duracao = duracao;
        this.conteudo = conteudo;
    }

    criar() {}
    buscarPorId() {}
    atualizar() {}
    deletar() {}
}
class Pessoa{
    constructor(nome, CPF){
        this.nome = nome;
        this.CPF = CPF;
    }

    criar() {}
    buscarPorId() {}
    atualizar() {}
    deletar() {}
}
class Aluno extends Pessoa{
    constructor(nome, CPF, email, dataCadastro){
        super(nome, CPF);
        this.email = email;
        this.dataCadastro = dataCadastro;
    }
    fazerMatricula(){}
    criar() {}
    buscarPorId() {}
    atualizar() {}
    deletar() {}
}
class Instrutor extends Pessoa{
    constructor(nome, CPF, especialidade){
        super(nome, CPF);
        this.especialidade = especialidade;
    }
    criar() {}
    buscarPorId() {}
    atualizar() {}
    deletar() {}
}
class Administrador extends Pessoa{
    constructor(nome, CPF, setor){
        super(nome, CPF);
        this.setor = setor;
    }
    criar() {}
    buscarPorId() {}
    atualizar() {}
    deletar() {}
}