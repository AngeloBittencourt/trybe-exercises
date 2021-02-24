let a = 10;
let b = 2;


let soma = a+b;
let subt = a-b;
let multi = a*b;
let divi = a/b;
let mod = a**b

let operador = "**" ;

if (operador === "+"){
  console.log(soma);
}

else if (operador === "-"){
  console.log(subt);
}

else if (operador === "*"){
  console.log(multi);
}

else if (operador === "/"){
  console.log(divi);
}

else if (operador === "**"){
  console.log(mod);
}

else {
  console.log("Nenhum operador selecionado")
}