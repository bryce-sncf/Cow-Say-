const cowsay = require("cowsay");
const userInfo = require('./information');

console.log(cowsay.say({
    text : `Salut ${userInfo.userInfo.name} de la ${userInfo.userInfo.campus} `,
    e : "oO",
    T : "U "
}));

