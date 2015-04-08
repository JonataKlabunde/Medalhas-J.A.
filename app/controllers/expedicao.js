var titulo = 'titulo';

function addOuro(texto, tipo){
    tamanhoFont = (tipo == 'titulo') ? 40 : 30;
    tab = (tipo == 'titulo') ? '': '      ';
    $.scrollOuroID.add(Ti.UI.createLabel({
        text : '      '+texto,
        top : 5,
        left : 0,
        font : {
            fontSize : tamanhoFont,
            fontFamily : 'NexaRegular',
        },
        color : 'white',
        shadowColor : '#15201a',
        shadowRadius : 2
    }));
    espacoOuro();
}
function addPrata(texto, tipo){
    tamanhoFont = (tipo == 'titulo') ? 40 : 30;
    tab = (tipo == 'titulo') ? '': '      ';
    $.scrollPrataID.add(Ti.UI.createLabel({
        text : '      '+texto,
        top : 5,
        left : 0,
        font : {
            fontSize : tamanhoFont,
            fontFamily : 'NexaRegular',
        },
        color : 'white',
        shadowColor : '#15201a',
        shadowRadius : 2
    }));
    espacoPrata();
}



function onOpen(e){
    $.scrollOuroID.setVisible(false);
    $.scrollPrataID.setVisible(false);
    $.scrollOuroID.scrollTo(0,0);
    (Alloy.Globals.botaoClicado == 'ouro') ? $.scrollOuroID.setVisible(true) : $.scrollPrataID.setVisible(true);
}



//** espaço
function espacoPrata(quantidade){
    var distancia = (quantidade != null) ? quantidade * 30 : 30;
    $.scrollPrataID.add(Ti.UI.createView({
        height : distancia,
        width : Ti.UI.FILL
    }));
}
function espacoOuro(quantidade){
    var distancia = (quantidade != null) ? quantidade * 30 : 30;
    $.scrollOuroID.add(Ti.UI.createView({
        height : distancia,
        width : Ti.UI.FILL
    }));
}



//** Ouro
espacoOuro(2);
addOuro('SEÇÃO III - EXPEDIÇÃO', titulo);
espacoOuro();
addOuro('Complete um dos seguintes:');
addOuro('1. Caminhada na mata com, pelo menos 40 quilômetros, envolvendo uma noite em acampamento.');
addOuro('a. A expedição deve ser composta por, no mínimo, três jovens acima de 18 anos e, no máximo, oito. Não é necessário que todos os participantes estejam cumprindo requisitos para a conquista da Medalha de Ouro.');
addOuro('b. Os acampantes devem levar todo o equipamento, alimentos, etc. em mochilas.');
addOuro('c. Devem fazer um relatório completo, acompanhado de mapa da excursão, com observações relativas ao terreno, à flora e à fauna.');
addOuro('d. O planejamento da excursão deve ser feito em conjunto, sendo aprovado pelo examinador indicado pela Comissão de Outorga da Medalha de Ouro.');
addOuro('2. Percurso em canoa com, pelo menos 64 quilômetros, envolvendo uma noite em acampamento.');
addOuro('a. Os acampantes devem transportar todo o equipamento, alimentos, etc. na canoa e em mochilas quando necessário.');
addOuro('b. Devem fazer um relatório completo acompanhado de mapa da excursão, com observações relativas ao terreno, à flora e à fauna.');
addOuro('c. Devem participar da viagem em canoa, pelo menos, quatro pessoas (duas por canoa) embora não seja necessário que todos os participantes estejam cumprindo requisitos para a conquista da Medalha de Ouro.');
addOuro('d. O planejamento da excursão deve ser feito em conjunto, sendo aprovado pelo examinador indicado pela Comissão de Outorga da Medalha de Ouro.');
espacoOuro(2);


//** Prata
espacoPrata(2);
addPrata('SEÇÃO III - EXPEDIÇÃO', titulo); 
espacoPrata();
addPrata('1. Caminhada na mata, pelo menos 36 quilômetros , incluindo duas noites a céu aberto ou em barracas. Essas duas noites devem ser passadas em acampamentos distantes 8 km um do outro.');
addPrata('2. O grupo deverá ser formado por, no mínimo, três e no máximo seis pessoas. Nem todos precisam estar participando da prova.');
addPrata('3. Apresentar um diário completo da prova, incluindo um mapa do trajeto, com observações da vida selvagem, das plantas ou algum outro estudo auxiliar da expedição.');
addPrata('4. O planejamento deve ser feito em equipe, sendo aprovado pelo Ministério Jovem da Associação/Missão, ou seu representante, antes da caminhada.');
addPrata('5. Deve ser levado todo o alimento necessário. Utilizar alimentos desidratados quando necessário para ter um cardápio balanceado.');
addPrata('6. Os participantes da caminhada devem levar um kit pessoal normal, além de equipamentos leves de camping, bússola, utensílios de cozinha e kit de primeiros socorros.');
espacoPrata(2);
















