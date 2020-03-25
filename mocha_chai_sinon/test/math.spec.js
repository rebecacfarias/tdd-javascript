//MOCHA-CHAI-SINON exemplo de utilização
// para mais info consultar documentação

//para testar e validar o comportamento:
const assert = require('assert'); //modulo nativo do node usado do exemplo 1, porém é limitado
const Math = require('../src/math.js'); //importar a classe
//introduzindo o CHAI
const expect = require('chai').expect;
//introduzindo SINON
const sinon = require('sinon');

//utilizado function() pois arrow function nao permite o uso de funcionalidades necessarias
describe('Math class',function(){
    //qualquer erro aqui dentro falha o teste
    
    //HOOKS - forma de executar código e evitar repetição
    beforeEach(function(){ 
        aux = 0;
    });
    //existe também o afterEach, etc;
    
    it('Sum two numbers', function(done){
        const math = new Math();
        
        // this.timeout(valor) -> caso precise de um timeout maior que o default do mocha, que é 2000
        //ex assincrono c callback
        aux = 5;
        math.sum(aux,5,(value)=>{
            //fazendo com assert do node: assert.equal(value,10);
            //fazendo com expect do CHAI: 
            expect(value).to.equal(10);
            done();  //precisa do done para funcionar
        }); //verificar funcionamento  

    });
    // o metodo .only permite executar apenas um teste
    // o metodo .skip permite ignorar um teste, ele fica como pending
    // é possivel escrever testes antes de existir a função, o estado fica pendente
    
    //aqui aux volta a ser ZERO
    it('Multiply two numbers',function(){
        const math = new Math();
        //assert.equal(math.multiply(aux,5),0);
        //com CHAI:
        expect(math.multiply(aux,5)).to.equal(0);
    
        //ex CHAI na validação de objetos
        const obj = {
            name: 'Rebeca Farias'
        }
        expect(obj).to.have.property('name');
        //verificar valores das propriedades
        expect(obj).to.have.property('name').equal('Rebeca Farias');
        //expect(obj).to.deep.equal(obj2)  verifica se os valores dos obj são iguals, sem o to deep, verifica a referencia
        });
    
    it.only('Calls req with sum and index values',function() {
        //CRIANDO FUNÇÃO ESPIÃ QUE TRAZ INFORMAÇÕES SOBRE UMA FUNÇÃO SER CHAMADA OU NAO
        const req = {};
        const res = {
            load: function load(){
                console.log('Called'); //ver se foi chamada
            }
        };

        sinon.spy(res,'load'); //para adicionar a capacidade de observar se foi chamada e os valores
        //sinon.stub(obj,metodo) para substituir o metodo, .returns para return customizado
        const math = new Math();

        math.printSum(req,res,5,5);

        expect(res.load.calledOnce).to.be.true;
        //expect(res.load.args[0][x].to.equal(x)); para verificar valores

    });
    
});