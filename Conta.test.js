const Cliente = require('./Cliente');
const Conta = require('./Conta');

test('teste saque valor igual ao saldo', () => {
    var cliente01 = new Cliente();
    cliente01.nome = 'Jose da Silva';
    cliente01.cpf = '11100099954';
    cliente01.fone = '98705-1444';
    cliente01.endereço = 'av trevo da Alma 45';
    var contaDoCliente01 = new Conta();
    contaDoCliente01.agencia = 1101;
    contaDoCliente01.numero = 2001;    
    contaDoCliente01.cliente = cliente01;

    contaDoCliente01.depositar(100.0);
    contaDoCliente01.sacar(100.0);

    expect(contaDoCliente01.saldo).toBe(0.0);
});

test('teste saque valor maior que o saldo', () => {
    var cliente01 = new Cliente();
    cliente01.nome = 'Jose da Silva';
    cliente01.cpf = '11100099954';
    cliente01.fone = '98705-1444';
    cliente01.endereço = 'av trevo da Alma 45';
    var contaDoCliente01 = new Conta();
    contaDoCliente01.agencia = 1101;
    contaDoCliente01.numero = 2001;    
    contaDoCliente01.cliente = cliente01;

    contaDoCliente01.depositar(100.0);
    contaDoCliente01.sacar(200.0);

    expect(contaDoCliente01.saldo).toBe(100.0);
});

test('teste deposito valor maior que o saldo', () => {
    var cliente01 = new Cliente();
    cliente01.nome = 'Jose da Silva';
    cliente01.cpf = '11100099954';
    cliente01.fone = '98705-1444';
    cliente01.endereço = 'av trevo da Alma 45';
    var contaDoCliente01 = new Conta();
    contaDoCliente01.agencia = 1101;
    contaDoCliente01.numero = 2001;    
    contaDoCliente01.cliente = cliente01;

    contaDoCliente01.depositar(200.0);

    expect(contaDoCliente01.saldo).toBe(200.0);
});

test('teste deposito valor negativo', () => {
    var cliente01 = new Cliente();
    cliente01.nome = 'Jose da Silva';
    cliente01.cpf = '11100099954';
    cliente01.fone = '98705-1444';
    cliente01.endereço = 'av trevo da Alma 45';
    var contaDoCliente01 = new Conta();
    contaDoCliente01.agencia = 1101;
    contaDoCliente01.numero = 2001;    
    contaDoCliente01.cliente = cliente01;

    contaDoCliente01.depositar(-200.0);

    expect(contaDoCliente01.saldo).toBe(0);
});

test('teste transferir 50 da contaA para contaB', () => {
    var cliente1 = new Cliente();
    var cliente2 = new Cliente();

    cliente1.nome = 'Jose da silva';
    cliente1.cpf = '11100099954';
    cliente1.fone = '98755-6032';
    cliente1.endereço = 'av osvaldo cruz 54';

    cliente2.nome = 'Maria de oliveira';
    cliente2.cpf = '55544478530';
    cliente2.fone = '98705-1444';
    cliente2.endereço = 'av trevo da Alma 45';

    contaDoCliente1 = new Conta();
    contaDoCliente1.agencia = 1101;
    contaDoCliente1.numero = 2001;    
    contaDoCliente1.cliente = cliente1;
    
    contaDoCliente2 = new Conta();
    contaDoCliente2.agencia = 1101;
    contaDoCliente2.numero = 2084;    
    contaDoCliente2.cliente = cliente2;
    
    contaDoCliente1.depositar(100.0);
    contaDoCliente2.depositar(50.0);
    
    contaDoCliente1.transferir(50.0, contaDoCliente2);
    
    expect(contaDoCliente1.saldo).toBe(50.0);
    expect(contaDoCliente2.saldo).toBe(100.0);
});
    
    test('teste transferir 50 da contaB para contaA', () => {
    var cliente1 = new Cliente();
    var cliente2 = new Cliente();

    cliente1.nome = 'Jose da silva';
    cliente1.cpf = '11100099954';
    cliente1.fone = '99801-8809';
    cliente1.endereço = 'Rua 3 de Março 87';

    cliente2.nome = 'Maria de oliveira';
    cliente2.cpf = '55544478530';
    cliente2.fone = '99908-6930';
    cliente2.endereço = 'vila martins 66';

    contaDoCliente1 = new Conta();
    contaDoCliente1.agencia = 1101;
    contaDoCliente1.numero = 2001;    
    contaDoCliente1.cliente = cliente1;
    
    contaDoCliente2 = new Conta();
    contaDoCliente2.agencia = 1101;
    contaDoCliente2.numero = 2084;    
    contaDoCliente2.cliente = cliente2;
    
    contaDoCliente1.depositar(100.0);
    contaDoCliente2.depositar(50.0);
    
    contaDoCliente2.transferir(50.0, contaDoCliente1);
    
    expect(contaDoCliente1.saldo).toBe(150.0);
    expect(contaDoCliente2.saldo).toBe(0.0);
});
    
    test('teste transferir -100 da contaA para contaB', () => {
    var cliente1 = new Cliente();
    var cliente2 = new Cliente();

    cliente1.nome = 'Jose da silva';
    cliente1.cpf = '11100099954';
    cliente1.fone = '98506-8566';
    cliente1.endereço = ' rua santa terezinha 98';

    cliente2.nome = 'Maria de oliveira';
    cliente2.cpf = '55544478530';
    cliente2.fone = '99908-6930';
    cliente2.endereço = 'vila martins 66';

    contaDoCliente1 = new Conta();
    contaDoCliente1.agencia = 1101;
    contaDoCliente1.numero = 2001;    
    contaDoCliente1.cliente = cliente1;
    
    contaDoCliente2 = new Conta();
    contaDoCliente2.agencia = 1101;
    contaDoCliente2.numero = 2084;    
    contaDoCliente2.cliente = cliente2;
    
    contaDoCliente1.depositar(100.0);
    contaDoCliente2.depositar(50.0);
    
    contaDoCliente1.transferir(-100.0, contaDoCliente2);
    
    expect(contaDoCliente1.saldo).toBe(100.0);
    expect(contaDoCliente2.saldo).toBe(50.0);
});
    
    test('teste transferir 500 da contaA para contaB', () => {
    var cliente1 = new Cliente();
    var cliente2 = new Cliente();
    cliente1.nome = 'Jose da silva';
    cliente1.cpf = '11100099954';
    cliente1.fone = '98850-5532';
    cliente1.endereço = 'Rua Antonio lins 55';

    cliente2.nome = 'Maria de oliveira';
    cliente2.cpf = '55544478530';
    cliente2.fone = '99908-6930';

    contaDoCliente1 = new Conta();
    contaDoCliente1.agencia = 1101;
    contaDoCliente1.numero = 2001;    
    contaDoCliente1.cliente = cliente1;
    
    contaDoCliente2 = new Conta();
    contaDoCliente2.agencia = 1101;
    contaDoCliente2.numero = 2084;    
    contaDoCliente2.cliente = cliente2;
    
    contaDoCliente1.depositar(100.0);
    contaDoCliente2.depositar(50.0);
    
    contaDoCliente1.transferir(500.0, contaDoCliente2);
    
    expect(contaDoCliente1.saldo).toBe(100.0);
    expect(contaDoCliente2.saldo).toBe(50.0);
});
    
    test('teste transferir 500 da contaA para contaB', () => {
    var cliente1 = new Cliente();
    var cliente2 = new Cliente();
    cliente1.nome = 'Jose da silva';
    cliente1.cpf = '11100099954';

    cliente2.nome = 'Maria de oliveira';
    cliente2.cpf = '55544478530';
    cliente2.fone = '98855-0632';
    cliente2.endereço = 'Rua são Jose 58';
    contaDoCliente1 = new Conta();
    contaDoCliente1.agencia = 1101;
    contaDoCliente1.numero = 2001;    
    contaDoCliente1.cliente = cliente1;
    
    contaDoCliente2 = new Conta();
    contaDoCliente2.agencia = 1101;
    contaDoCliente2.numero = 2084;    
    contaDoCliente2.cliente = cliente2;
    
    contaDoCliente1.depositar(100.0);
    contaDoCliente2.depositar(50.0);
    
    contaDoCliente1.transferir(500.0, contaDoCliente2);
    
    expect(contaDoCliente1.saldo).toBe(100.0);
    expect(contaDoCliente2.saldo).toBe(50.0);
});
    
    test('teste transferir 100 da contaA para contaA', () => {
    var cliente1 = new Cliente();
    
    cliente1.nome = 'Jose da silva';
    cliente1.cpf = '11100099954';
    cliente1.fone = '98874-5560';
    cliente1.endereço = 'vila são josé 55';
    
    contaDoCliente1 = new Conta();
    contaDoCliente1.agencia = 1101;
    contaDoCliente1.numero = 2001;    
    contaDoCliente1.cliente = cliente1;
    
    contaDoCliente1.depositar(100.0);
    
    contaDoCliente1.transferir(500.0, contaDoCliente1);
    
    expect(contaDoCliente1.saldo).toBe(100.0);
});