class Pessoa{
    constructor(nome, CPF, dataNascimento){
        this.nome = nome;
        this.CPF = CPF;
        this.dataNascimento = dataNascimento;
    }

    criar() {}
    buscarPorId() {}
    atualizar() {}
    deletar() {}
}
class Aluno extends Pessoa{
    constructor(nome, CPF, dataNascimento, matricula){
        super(nome, CPF, dataNascimento);
        this.matricula = matricula;
    }

    criar() {}
    buscarPorId() {}
    atualizar() {}
    deletar() {}
}
class Professor extends Pessoa{
    constructor(nome, CPF, dataNascimento, matriculaFuncional){
        super(nome, CPF, dataNascimento, matriculaFuncional);
        this.matriculaFuncional = matriculaFuncional;
    }

    criar() {}
    buscarPorId() {}
    atualizar() {}
    deletar() {}
}
class Disciplinas{
    constructor(nome, codigo, cargaHorario){
        this.nome = nome;
        this.codigo = codigo;
        this.cargaHorario = cargaHorario;
    }

    criar() {}
    buscarPorId() {}
    atualizar() {}
    deletar() {}
}
class Turma{
    constructor(codigo, sala, horario){
        this.codigo = codigo;
        this.sala = sala;
        this.horario = horario;
    }

    criar() {}
    buscarPorId() {}
    atualizar() {}
    deletar() {}
}