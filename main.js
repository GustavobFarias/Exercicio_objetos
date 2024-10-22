function veiculo(modelo, marca, ano, preco) {
    this.modelo = modelo;
    this.marca = marca;
    this.ano = ano;
    this.preco = preco;

    console.log(`Modelo: ${this.modelo}, Marca: ${this.marca}, Ano: ${this.ano}, Preço: ${this.preco}`);

    let precoDoVeiculo = preco;

    this.getPrecoVeiculo = function() {
        return precoDoVeiculo;
    }

    this.setPrecoVeiculo  = function(valor) {
        if (typeof valor === 'number') {
            precoDoVeiculo = valor;
        }
    }
}

function parcelasCarro1(modelo, marca, ano, preco) {
    veiculo.call(this, modelo, marca, ano, 130000)

    this.parcelaCarro1 = function() {
        const novoPreco = this.getPrecoVeiculo() * 1.1;
        this.setPrecoVeiculo(novoPreco);
    }
}

function parcelasCarro2(modelo, marca, ano, preco) {
    veiculo.call(this, modelo, marca, ano, 130000)

    this.parcelaCarro2 = function() {
        const novoPreco = this.getPrecoVeiculo() * 1.2;
        this.setPrecoVeiculo(novoPreco);
    }
}

function moto(modelo, marca, ano, preco) {
    this.modelo = modelo;
    this.marca = marca;
    this.ano = ano;
    this.preco = preco;

    console.log(`Modelo: ${this.modelo}, Marca: ${this.marca}, Ano: ${this.ano}, Preço: ${this.preco}`);

    let precoDaMoto = preco;

    this.getPrecoMoto = function() {
        return precoDaMoto;
    }

    this.setPrecoMoto = function(valor) {
        if (typeof valor === 'number') {
            precoDaMoto = valor;
        }
    }
}

function parcelasMoto1(modelo, marca, ano, preco) {
    moto.call(this, modelo, marca, ano, 80000)

    this.parcelaMoto1 = function() {
        const novoPreco = this.getPrecoMoto() * 1.1;
        this.setPrecoMoto(novoPreco)
    }
}

function parcelasMoto2(modelo, marca, ano, preco) {
    moto.call(this, modelo, marca, ano, 80000)

    this.parcelaMoto2 = function() {
        const novoPreco = this.getPrecoMoto() * 1.2;
        this.setPrecoMoto(novoPreco)
    }
}

// financiamento do carro

const carro1 = new parcelasCarro1("Civic g10", "Honda", "2017", 130000);

carro1.parcelaCarro1();
console.log(`O Valor do financiamento por 10 anos ${carro1.getPrecoVeiculo()}.`);

const carro2 = new parcelasCarro2("Civic g10", "Honda", "2017", 130000);

carro2.parcelaCarro2();
console.log(`O Valor do financiamento por 30 anos ${carro2.getPrecoVeiculo()}.`);

// financiamento da Moto
const moto1 = new parcelasMoto1("Z1000", "Kawasak", "2024", 80000);

moto1.parcelaMoto1();
console.log(`O Valor do financiamento por 10 anos ${moto1.getPrecoMoto()}.`);

const moto2 = new parcelasMoto2("Z1000", "Kawasak", "2024", 80000);

moto2.parcelaMoto2();
console.log(`O Valor do financiamento por 30 anos ${moto2.getPrecoMoto()}.`)