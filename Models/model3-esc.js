class Pessoa {
    constructor(nome, cpf, dataNascimento) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
    }
 
    consultarDados() {}
    atualizarDados() {}
}
 
 
class Aluno extends Pessoa {
    constructor(nome, cpf, dataNascimento, matricula) {
        super(nome, cpf, dataNascimento);
        this.matricula = matricula;
    }
 
    cadastrar() {}
    consultar() {}
    atualizar() {}
    excluir() {}
    matricularEmTurma() {}
}
 
 
class Professor extends Pessoa {
    constructor(nome, cpf, dataNascimento, matriculaFuncional) {
        super(nome, cpf, dataNascimento);
        this.matriculaFuncional = matriculaFuncional;
    }
 
    cadastrar() {}
    consultar() {}
    atualizar() {}
    excluir() {}
    lecionarTurma() {}
}
 
 
class Disciplina {
    constructor(nome, codigo, cargaHoraria) {
        this.nome = nome;
        this.codigo = codigo;
        this.cargaHoraria = cargaHoraria;
    }
 
    cadastrar() {}
    consultar() {}
    atualizar() {}
    excluir() {}
}
 
 
class Turma {
    constructor(codigo, sala, horario, disciplina, professor, alunos = []) {
        this.codigo = codigo;
        this.sala = sala;
        this.horario = horario;
        this.disciplina = disciplina;
        this.professor = professor;
        this.alunos = alunos;
    }
 
    cadastrar() {}
    consultar() {}
    atualizar() {}
    excluir() {}
    adicionarAluno() {}
}
 
 
const aluno1 = new Aluno(
    'Ana',
    '123.456.789-10',
    '15/03/2009',
    'A001'
);
 
const aluno2 = new Aluno(
    'Pedro',
    '987.654.321-10',
    '20/05/2009',
    'A002'
);
 
const professor1 = new Professor(
    'Roberto',
    '111.222.333-44',
    '10/04/1985',
    'P001'
);
 
const disciplina1 = new Disciplina(
    'Matemática',
    'MAT01',
    80
);
 
const turma1 = new Turma(
    'T001',
    'Sala 10',
    '07:30',
    disciplina1,
    professor1,
    [aluno1, aluno2]
);