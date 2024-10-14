let dia = prompt('Digite o dia');

if (dia < 1 || dia > 31) {
    console.log('Digite um dia válido');
} else {
    const ultimoDigito = dia % 10;
    if (ultimoDigito === 1 || ultimoDigito === 2) {
        console.log('Desenvolvedor(a)');
    } else if (ultimoDigito === 3 || ultimoDigito === 4 || ultimoDigito === 5) {
        console.log('Programador(a)');
    } else if (ultimoDigito === 6 || ultimoDigito === 7 || ultimoDigito === 8) {
        console.log('Estagiário(a)');
    } else {
        console.log('Sênior(a)');
    }
}
// Se você digitar o dia 27:
// O if verifica se 27 está entre 1 e 31. Como está, ele entra no else.
// Dentro do else, é calculado 27 % 10, que resulta em 7.
// Então, a constante ultimoDigito recebe o valor 7.
// Em seguida, o código verifica se esse último dígito (7) corresponde a alguma das categorias definidas (estagiário, nesse caso).

btn.onclick = function(){
    switch(Number(mes.value)){
        case 1:
            console.log("bugado(a);");
        break;
        case 2:
            console.log("do CTRL C, CTRL V;");
        break;
        case 3:
            console.log("das gambiarras;");
        break;
        case 4:
            console.log("que culpa o cache;");
        break;
        case 5:
            console.log("que esquece o que faz;");
        break;
        case 6:
            console.log("do git vazio;");
        break;
        case 7:
            console.log("das try/catch vazia;");
        break;
        case 8:
            console.log("famosinho do linkedin;");
        break;
        case 9:
            console.log("caçador de bugs;");
        break;
        case 10:
            console.log("do windows pirata;");
        break;
        case 11:
            console.log("do update sem where;");
        break;
        case 12:
            console.log("do commit bugado;");
        break;
    }
}