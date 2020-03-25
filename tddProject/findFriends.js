const friendsList = [
    "Dunga The Dog",
    "Su The Cat",
    "Nico The Furia"
]

const searchFriend = (nome) => {
   try{
    validate(nome);
    const friendFound = friendsList.find(friend => friend === nome);
    return friendFound ? friendFound+" is your friend" : "Couldn't find friend";
   }catch(err){
      return err;
   }
}

const validate = (nome) => {
    if(!nome) throw 'Name field is empty';
    if(typeof nome !== 'string') throw 'Invalid type';
}

const sumFriends = (a,b) => {
    return a+b;
};
module.exports = {
    sumFriends,
    searchFriend
}
