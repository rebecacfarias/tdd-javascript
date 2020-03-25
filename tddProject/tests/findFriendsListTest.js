const should = require('should');
const findFriends = require('../findFriends');

describe('find friends',() => {
    it('Somar amigos',() => {
        findFriends.sumFriends(2,3).should.be.equal(5);
    })

    it('Passar um nome e retornar mensagem de pessoa nao encontrada',() => {
        findFriends.searchFriend('Banguela The Cat').should.be.equal("Couldn't find friend");

    })
    it('Passar um nome e retornar mensagem de pessoa encontrada',()=>{
        findFriends.searchFriend('Dunga The Dog').should.be.equal("Dunga The Dog is your friend");
    })
    it('Retorna mensagem de que nome é obrigatório', ()=>{
        findFriends.searchFriend().should.be.equal('Name field is empty')
    })
    it('Retorna mensagem de tipo inválido',()=>{
        findFriends.searchFriend(123).should.be.equal('Invalid type');
    })
})