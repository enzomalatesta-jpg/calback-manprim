 function operar(a, b, operacaoCallback) {
    return operacaoCallback(a , b);
 }

 function somar(a, b) {
    return a + b;
 }
 function multiplicar(a, b) {
    return a * b;
 }
 console.log(operar(4, 10, somar));
 console.log(operar(4, 10, multiplicar));