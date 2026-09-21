class Produto {
    constructor(codigo, nome, descricao, preco) {
        this.codigo = codigo;
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
    }
    
    cadastrar() {}
    consultar() {}
    atualizar() {}
    excluir() {}
}
 
 
class Funcionario {
    constructor(nome, cpf, matricula, salario) {
        this.nome = nome;
        this.cpf = cpf;
        this.matricula = matricula;
        this.salario = salario;
    }
 
    consultarDados() {}
    atualizarDados() {}
}
 
 
class Vendedor extends Funcionario {
    constructor(nome, cpf, matricula, salario, metaVendas) {
        super(nome, cpf, matricula, salario);
        this.metaVendas = metaVendas;
    }
 
    cadastrar() {}
    consultar() {}
    atualizar() {}
    excluir() {}
    registrarPedido() {}
}
 
 
class Gerente extends Funcionario {
    constructor(nome, cpf, matricula, salario, setor) {
        super(nome, cpf, matricula, salario);
        this.setor = setor;
    }
 
    cadastrar() {}
    consultar() {}
    atualizar() {}
    excluir() {}
    gerenciarSetor() {}
}
 
 
class Cliente {
    constructor(nome, cpf, telefone, endereco) {
        this.nome = nome;
        this.cpf = cpf;
        this.telefone = telefone;
        this.endereco = endereco;
    }
 
    cadastrar() {}
    consultar() {}
    atualizar() {}
    excluir() {}
    realizarPedido() {}
}
 
 
class Pedido {
    constructor(
        numero,
        data,
        status,
        cliente,
        vendedor,
        itens = [],
        pagamento = null
    ) {
        this.numero = numero;
        this.data = data;
        this.status = status;
        this.cliente = cliente;
        this.vendedor = vendedor;
        this.itens = itens;
        this.pagamento = pagamento;
    }
 
    cadastrar() {}
    consultar() {}
    atualizar() {}
    excluir() {}
    adicionarItem() {}
    registrarPagamento() {}
}
 
 
class ItemPedido {
    constructor(quantidade, produto) {
        this.quantidade = quantidade;
        this.produto = produto;
    }
 
    cadastrar() {}
    consultar() {}
    atualizar() {}
    excluir() {}
    calcularSubtotal() {}
}
 
 
class Pagamento {
    constructor(valor, data, formaPagamento) {
        this.valor = valor;
        this.data = data;
        this.formaPagamento = formaPagamento;
    }
 
    cadastrar() {}
    consultar() {}
    atualizar() {}
    excluir() {}
    confirmarPagamento() {}
}
 
 
const produto1 = new Produto(
    'PR001',
    'Teclado',
    'Teclado mecânico',
    250
);
 
const produto2 = new Produto(
    'PR002',
    'Mouse',
    'Mouse sem fio',
    120
);
 
const vendedor1 = new Vendedor(
    'Carlos',
    '123.456.789-10',
    'V001',
    2500,
    15000
);
 
const gerente1 = new Gerente(
    'Mariana',
    '987.654.321-10',
    'G001',
    5000,
    'Vendas'
);
 
const cliente1 = new Cliente(
    'Pedro',
    '111.222.333-44',
    '(19) 99999-9999',
    'Rua das Flores, 100'
);
 
const item1 = new ItemPedido(
    1,
    produto1
);
 
const item2 = new ItemPedido(
    2,
    produto2
);
 
const pagamento1 = new Pagamento(
    490,
    '21/09/2026',
    'Cartão'
);
 
const pedido1 = new Pedido(
    'P001',
    '21/09/2026',
    'Pago',
    cliente1,
    vendedor1,
    [item1, item2],
    pagamento1
);