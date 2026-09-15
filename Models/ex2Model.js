class Funcionario{
    constructor(nome, cpf, matricula){
        this.nome = nome;
        this.cpf = cpf;
        this.matricula = matricula;
    }

    criar() {}
    buscarPorId() {}
    atualizar() {}
    deletar() {}
}

class Cozinheiro extends Funcionario{
    constructor(nome, cpf, matricula){
        super(nome, cpf, matricula);
    }
}

class Garcom extends Funcionario{
    constructor(nome, cpf, matricula){
        super(nome, cpf, matricula);
    }
}

class Pedido{
    constructor(itens, quantidade, preco, numero, data, valor_total){
        this.itens = itens;
        this.quantidade = quantidade;
        this.preco = preco;
        this.numero = numero;
        this.data = data;
        this.valor_total = valor_total;
    }

    criar() {}
    buscarPorId() {}
    atualizar() {}
    deletar() {}
}

class Mesa{
    constructor(numero, capacidade, localizacao){
        this.numero = numero;
        this.capacidade = capacidade;
        this.localizacao = localizacao;
    }

    criar() {}
    buscarPorId() {}
    atualizar() {}
    deletar() {}
}

class Cliente{
    realizar_pedido(){}
}

const cozinheiro1 = new Cozinheiro(2, "Maria Oliveira", "999.888.777-66", "C001");
const garcom1 = new Garcom(1, "João Pereira", "555.666.777-88", "G001");
const pedido1 = new Pedido(1, 101, "2026-09-15", 85.50, cliente1.id, garcom1.id);
const mesa1 = new Mesa(1, 10, 4, "Salão Principal");
const cliente1 = new Cliente(1, "Carlos Silva", "111.222.333-44");