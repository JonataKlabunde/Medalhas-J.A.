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
addOuro('SEÇÃO IV - PROJETOS DE SERVIÇO', titulo);
espacoOuro();
addOuro('Concluir um dos requisitos:');
addOuro('1. Durante, pelo menos um semestre, estar envolvido, satisfatoriamente, na liderança da Sociedade JA , da Escola Sabatina, dos Ministérios da Saúde, do Clube de Desbravadores, do Clube de Aventureiros ou outra atividade correspondente, que o Ministério Jovem da Associação/Missão escolha como substituto.');
addOuro('2. Servir como estudante missionário por, pelo menos, dez semanas.');
addOuro('3. Envolver-se ativamente por, pelo menos, 12 semanas, em atividades de evangelismo (“A Voz da Juventude”, classes Bíblicas, Pequenos Grupos, Projeto Missionário na Universidade, Evangelismo comunitário, estudos bíblicos, etc.).');
addOuro('4. Participar em um projeto de serviço comunitário com, pelo menos, duas semanas de duração, que não tenha sido realizado para a Medalha de Prata. Escolher entre um dos seguintes:');
addOuro('• Avaliação da comunidade.');
addOuro('• Cursos de orientação profissional.');
addOuro('• Alfabetização de adultos.');
addOuro('• Assistência às vítimas de catástrofes.');
addOuro('• Assistência a famílias carentes.');
addOuro('• Prevenção de saúde pública.');
addOuro('• Desenvolvimento rural.');
addOuro('• Atuação voluntária em uma instituição de atendimento a carentes.');
addOuro('• Desenvolvimento urbano.');
espacoOuro(2);


//** Prata
espacoPrata(2);
addPrata('SEÇÃO IV - PROJETOS DE SERVIÇO', titulo);
espacoPrata();
addPrata('Concluir um dos requisitos:');
addPrata('A. Durante, pelo menos, um semestre estar envolvido, satisfatoriamente, na liderança da Sociedade JA , da Escola Sabatina, dos Ministérios da Saúde, do Clube de Desbravadores, do Clube de Aventureiros ou outra atividade correspondente, que o Ministério Jovem da Associação/Missão escolha como substituto.');
addPrata('B. Participar em um projeto de serviço comunitário com, pelo menos, uma semana de duração. Escolher entre um dos seguintes:');
addPrata('• Avaliação da comunidade.');
addPrata('• Cursos de orientação profissional.');
addPrata('• Alfabetização de adultos.');
addPrata('• Assistência às vítimas de catástrofes.');
addPrata('• Assistência a famílias carentes.');
addPrata('• Prevenção de saúde pública.');
addPrata('• Desenvolvimento rural.');
addPrata('• Atuação voluntária em uma instituição de atendimento a carentes.');
addPrata('• Desenvolvimento urbano.');
espacoPrata(2);








