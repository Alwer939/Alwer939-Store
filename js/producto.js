let numero, i;

const num = (i) => localStorage.setItem(numero, i);
const clean = () => localStorage.removeItem(numero);
const agregado = () => alert("Producto agregado al carrito! siuuu!!");

function pr(){
    let nu = localStorage.getItem(numero);
    if(nu == 1){
        document.getElementById('titulo').innerHTML = 'Alwito Original';
        document.getElementById('img').src = "../img/Camisas/Alwito_Original.png";
        document.getElementById('info').innerHTML = "La camiseta del original y unico Alwito en su primera edición!!";
    }
    if(nu == 2){
        document.getElementById('titulo').innerHTML = 'Alwito Happy';
        document.getElementById('img').src = "../img/Camisas/Alwito_Happy.png";
        document.getElementById('info').innerHTML = "La camiseta que representa a los Alwerdianos felices del mundo!";
    }
    if(nu == 3){
        document.getElementById('titulo').innerHTML = 'Alwito Celebrando';
        document.getElementById('img').src = "../img/Camisas/Alwer_Celebrando.png";
        document.getElementById('info').innerHTML = "La camiseta de Alwito celebrando con confetti como núnca!!";
    }
    if(nu == 4){
        document.getElementById('titulo').innerHTML = 'Alwito Enojado';
        document.getElementById('img').src = "../img/Camisas/Alwito_Enojado.png";
        document.getElementById('info').innerHTML = "La camiseta que demuestra que un Alwito enojado es un Alwito peligroso!";
    }
    if(nu == 5){
        document.getElementById('titulo').innerHTML = 'Alwito Enamorado';
        document.getElementById('img').src = "../img/Camisas/Alwito_Enamorado.png";
        document.getElementById('info').innerHTML = "La camiseta para todos esos Alwerdianos enamorados! demuestra tu amor único con ésta camisa!";
    }
    if(nu == 6){
        document.getElementById('titulo').innerHTML = 'Alwito Sorprendido';
        document.getElementById('img').src = "../img/Camisas/Alwito_Sorprendido.png";
        document.getElementById('info').innerHTML = "La camiseta que dejará a tus amigos como Alwito! nada como verte cool y sorprender!!";
    }
    if(nu == 7){
        document.getElementById('titulo').innerHTML = 'Alwito Riendo';
        document.getElementById('img').src = "../img/Camisas/Alwito_Riendo.png";
        document.getElementById('info').innerHTML = "Ríe con Alwito de lenguita!! jaja jijij jojo jujuju";
    }
    if(nu == 8){
        document.getElementById('titulo').innerHTML = 'Alwito Llorando';
        document.getElementById('img').src = "../img/Camisas/Alwito_Llorando.png";
        document.getElementById('info').innerHTML = "La camiseta que demuestra cuando no tamos mien u.u pero con estilo guiño guiño";
    }
    if(nu == 9){
        document.getElementById('titulo').innerHTML = 'Team 939';
        document.getElementById('img').src = "../img/Camisas/Team_939.png";
        document.getElementById('info').innerHTML = "La camiseta del equipo completo y oficial de Alwer939!!!";
    }
    if(nu == 10){
        document.getElementById('titulo').innerHTML = 'Alwito Siuuuu';
        document.getElementById('img').src = "../img/Camisas/Alwito_Siuu.png";
        document.getElementById('info').innerHTML = "Nada como un Siuuu de Alwito pa recordarte que la vida es siuuuu!!! ";
    }
    if(nu == 11){
        document.getElementById('titulo').innerHTML = 'Alwito F';
        document.getElementById('img').src = "../img/Camisas/Alwito_F.png";
        document.getElementById('info').innerHTML = "Funcional para esos momentos en que las cosas no van bien pero quieres darle un toque de gracia :)";
    }
    if(nu == 12){
        document.getElementById('titulo').innerHTML = 'Sir';
        document.getElementById('img').src = "../img/Camisas/Sir.png";
        document.getElementById('info').innerHTML = "SIII!! llegaron!!! las camisetas de Siiir!! y si llevas la de Miru hay descuento jiji";
    }
    if(nu == 13){
        document.getElementById('titulo').innerHTML = 'Mirunova';
        document.getElementById('img').src = "../img/Camisas/Mirunova.png";
        document.getElementById('info').innerHTML = "Si es lo que crees!! una camisa de Mirunovaa!!! y si llevas la de Sir no hay decuento.. si Miru es una puerk :d";
    }
    if(nu == 14){
        document.getElementById('titulo').innerHTML = 'Pita';
        document.getElementById('img').src = "../img/Camisas/Pita.png";
        document.getElementById('info').innerHTML = "Un personaje no muy frecuente pero importante para Alwer939! pues es nuestra dibujante oficial!! apoyala usando esta camisa!!";
    }
}

