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



//** OURO
espacoOuro(2);
addOuro('SEÇÃO II - HABILIDADES', titulo);
espacoOuro();
addOuro('Concluir duas das Especialidades nas áreas: Atividades Profissionais ou Habilidades Domésticas. Além delas, concluir mais duas das especialidades abaixo, não concluídas na Medalha de Prata.');
addOuro('Salvamento de Afogados');
addOuro('Saúde & Cura');
addOuro('Canoagem');
addOuro('Vida Silvestre');
addOuro('Esqui Aquático');
addOuro('Primeiros Socorros - Nível Avançado');
addOuro('Orientação');
addOuro('Liderança Campestre');
addOuro('Reanimação Cardiopulmonar');
addOuro('Vela');
addOuro('Ginástica Acrobática - Avançada');
addOuro('Ciclismo - Avançado');
addOuro('Mergulho Livre');
espacoOuro(2);

//** Prata
espacoPrata(2);
addPrata('SEÇÃO II - HABILIDADES',titulo);
espacoPrata();
addPrata('Completar duas especialidades:');
addPrata('Salvamento de Afogados');
addPrata('Resgate Básico');
addPrata('Canoagem');
addPrata('Enfermagem Básica');
addPrata('Ciclismo');
addPrata('Primeiros Socorros');
addPrata('Orientação');
addPrata('Liderança Campestre');
addPrata('Excursionismo Pedestre com Mochila');
addPrata('Fotografia');
addPrata('Evangelismo pessoal');
espacoPrata(2);





















