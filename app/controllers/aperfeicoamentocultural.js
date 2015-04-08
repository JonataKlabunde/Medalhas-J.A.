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
addOuro('SEÇÃO V - APERFEIÇOAMENTO CULTURAL', titulo);
espacoOuro();
addOuro('Cumprir um grupo.');
addOuro('Grupo 1 – Música');
addOuro('Concluir uma das opções:');
addOuro('1. Apresentar um recital de música clássica ou sacra com, pelo menos, 30 minutos de duração incluindo, pelo menos, outros três participantes (vocal ou instrumental). O repertório e apresentação devem ser avaliados por um especialista em música, nomeado pela Comissão da Medalha de Ouro.');
addOuro('2. Assistir a três concertos e apresentar um relatório com, no mínimo, 1.500 palavras, a respeito dos artistas, das composições e dos compositores. O relatório deverá ser avaliado por um especialista nomeado pela Comissão da Medalha de Ouro.');
addOuro('Grupo 2 – Arte');
addOuro('Concluir uma das opções:');
addOuro('1. Fazer exposição pública de, pelo menos, cinco obras originais (pintura, escultura, gravura, etc.) que tenha produzido. O trabalho deve ser avaliado e aprovado por um especialista em arte nomeado pela Comissão da Medalha de Ouro.');
addOuro('2. Visitar uma galeria de arte ou comparecer a três exposições de arte, apresentando um relatório escrito contendo, no mínimo, 1.500 palavras a respeito da arte observada. Um especialista em artes, indicado pela Comissão da Medalha de Ouro, irá julgar o texto.');
addOuro('Grupo 3 – Literatura Sagrada');
addOuro('Concluir uma das opções:');
addOuro('1. Ler um livro de Ellen G. White com, pelo menos, 300 páginas.');
addOuro('2. Ler o Novo Testamento em uma versão moderna.');
addOuro('Grupo 4 – Etnia');
addOuro('Escolher um país, que não seja o seu, e que tenha reconhecimento das Nações Unidas. Em seguida descrever sua origem, cultura, antecedentes religiosos. Apresentar, também, um estudo sobre a origem, desenvolvimento e trabalho atual dos Adventistas do Sétimo Dia na região. A pesquisa deve incluir contato pessoal ou por correspondência com pessoas da região pesquisada. Devem ser incluídas, pelo menos, cinco imagens para ilustrar o trabalho dos Adventistas do Sétimo Dia no país escolhido.');
espacoOuro(2);



//** Prata
espacoPrata(2);
addPrata('SEÇÃO V - APERFEIÇOAMENTO CULTURAL', titulo);
espacoPrata();
addPrata('Cumprir um dos requisitos:');
addPrata('1. Ler o livro do curso de leitura JA do ano em curso.');
addPrata('2. Ler 200 páginas de um ou mais livros escritos por Ellen G. White.');
addPrata('3. Escrever um artigo ou história com, pelo menos, mil palavras e tê-lo aceito para publicação em um jornal ou revista da Igreja.');
addPrata('4. Ler um livro com, pelo menos, 200 páginas sobre desenvolvimento de liderança, discipulado ou arrecadação de fundos.');
espacoPrata(2);


