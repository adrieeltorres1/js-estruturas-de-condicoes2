let dia = prompt('Digite o dia');

if (dia <= 0 || dia > 31) {
    console.log('Digite um dia válido');
}

if (dia % 10 == 1 || dia % 10 == 2) {
    console.log('Desenvolvedor(a)');
}
if (dia % 10 == 3 || dia % 10 == 4 || dia % 10 == 5) {
    console.log('Programador(a)');
}

if (dia % 10 == 6 || dia % 10 == 7 || dia % 10 == 8) {
    console.log('Estagiario(a)');
}
if (dia % 10 == 9 || dia % 10 == 0) {
    console.log('Senior(a)');
}


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