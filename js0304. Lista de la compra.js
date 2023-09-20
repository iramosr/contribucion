"use strict";
const prompt = require('prompt-sync')();

let listacompra = [];
let producto;

while(true){
    producto = String(prompt('Introdsuce un producto: '));

    if(listacompra.includes(producto)){
        console.log("ya existe");

    }else if(producto == ''){
        console.log(listacompra);
        break;
    }else{
listacompra.push(producto)
        console.log("ya se ha añadido");
    }

}
    