class Restaurante {
    constructor(mesas = [], funcionarios = []) {
        this.mesas = mesas;
        this.funcionarios = funcionarios;
    }

    cadastrar() {}
    consultar() {}
    atualizar() {}
    excluir() {}
    adicionarMesa() {}
    adicionarFuncionario() {}
}
 
class Mesa {
    constructor(numero, capacidade, localizacao) {
        this.numero = numero;
        this.capacidade = capacidade;
        this.localizacao = localizacao;
    }
 
    cadastrar() {}
    consultar() {}
    atualizar() {}
    excluir() {}
}
 
 
class Funcionario {
    constructor(nome, cpf, matricula) {
        this.nome = nome;
        this.cpf = cpf;
        this.matricula = matricula;
    }

    consultarDados() {}
    atualizarDados() {}
}
 
 
class Garcom extends Funcionario {
    constructor(nome, cpf, matricula) {
        super(nome, cpf, matricula);
    }
 
    cadastrar() {}
    consultar() {}
    atualizar() {}
    excluir() {}
    atenderPedido() {}
}
 
 
class Cozinheiro extends Funcionario {
    constructor(nome, cpf, matricula) {
        super(nome, cpf, matricula);
    }
 
    cadastrar() {}
    consultar() {}
    atualizar() {}
    excluir() {}
    prepararPedido() {}
}
 
 
class Cliente {
    constructor() {}

    cadastrar() {}
    consultar() {}
    atualizar() {}
    excluir() {}
    realizarPedido() {}
}
 
 
class Pedido {
    constructor(numero, data, valorTotal, cliente, garcom, itens = []) {
        this.numero = numero;
        this.data = data;
        this.valorTotal = valorTotal;
        this.cliente = cliente;
        this.garcom = garcom;
        this.itens = itens;
    }
 
    cadastrar() {}
    consultar() {}
    atualizar() {}
    excluir() {}
    adicionarItem() {}
    calcularTotal() {}
}
 
 
class ItemPedido {
    constructor(quantidade, preco) {
        this.quantidade = quantidade;
        this.preco = preco;
    }
 
    cadastrar() {}
    consultar() {}
    atualizar() {}
    excluir() {}
    calcularSubtotal() {}
}
 
 
const mesa1 = new Mesa(1, 4, 'Área interna');
const mesa2 = new Mesa(2, 6, 'Área externa');
 
const garcom1 = new Garcom(
    'Carlos',
    '123.456.789-10',
    'G001'
);
 
const cozinheiro1 = new Cozinheiro(
    'Marcos',
    '987.654.321-10',
    'C001'
);
 
const cliente1 = new Cliente();
 
const item1 = new ItemPedido(2, 25.90);
const item2 = new ItemPedido(1, 18.50);
 
const pedido1 = new Pedido(
    'P001',
    '21/09/2026',
    70.30,
    cliente1,
    garcom1,
    [item1, item2]
);
 
const restaurante1 = new Restaurante(
    [mesa1, mesa2],
    [garcom1, cozinheiro1]
);