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
addOuro('DETALHES', titulo);
espacoOuro();
addOuro('MEDALHA DE OURO');
addOuro('Material originalmente produzido pelo Ministério Jovem da Associação Geral e adaptado pelo Ministério Jovem da Divisão Sul-Americana.');
espacoOuro(2);
addOuro('PLANO DA MEDALHA DE OURO', titulo);
addOuro('A Medalha de Ouro será entregue a jovens com idade entre 20 e 35 anos que demonstrarem grandes qualidades de desenvolvimento físico, mental e cultural. Promovida pelo Ministério Jovem da Igreja Adventista do Sétimo Dia, ela dá aos jovens a oportunidade de se superarem e realizarem atividades de alto nível. Não é pré-requisito ter recebido a Medalha de Prata ou ser membro da Igreja Adventista do Sétimo Dia.');
addOuro('Cada ganhador da Medalha de Ouro vai estar mais bem preparado para assumir seu lugar como membro positivamente ativo de sua igreja e comunidade. O esforço e a perseverança, para se classificar em todas as atividades, vão desenvolver qualidades de caráter que são tão necessárias na geração de hoje.Cada ganhador da Medalha de Ouro vai estar mais bem preparado para assumir seu lugar como membro positivamente ativo de sua igreja e comunidade. O esforço e a perseverança, para se classificar em todas as atividades, vão desenvolver qualidades de caráter que são tão necessárias na geração de hoje.');
addOuro('O futuro de nossa Igreja depende da capacidade e disposição dos jovens de servirem seus semelhantes vivendo uma vida guiada por Cristo. Pelo poder de Deus esses jovens cristãos vão ter um papel nobre e destacado nos momentos finais da história. Os desafios do povo de Deus vão ser grandes e apenas os jovens que estiverem bem firmados na Palavra de Deus em uma plataforma moral, que reflete a pureza do Senhor Jesus, vão ser capazes de resistir. A conquista da Medalha de Ouro foi estabelecida para preparar estes jovens, desenvolvendo boa saúde, pensamento puro e firmeza de visão espiritual.');
addOuro('O Diretor do Ministério Jovem da Associação/Missão é quem dirige todo o projeto de Conquista da Medalha de Ouro e supervisiona as provas. Ele pode definir outras pessoas, devidamente preparadas, para coordenarem as atividades em seu lugar.');
addOuro('Deve ser mantido um registro exato da conclusão de cada requisito completado pelo candidato. A coluna à direita contém um espaço destinado às anotações de cada requisito:');
addOuro('(1) a data de conclusão');
addOuro('(2) a pontuação (onde indicado), e ');
addOuro('(3) a assinatura do examinador autorizado pela comissão da Conquista da Medalha de Ouro.');
espacoOuro(2);
addOuro('A ENTREGA DA MEDALHA', titulo);
addOuro('A solicitação de condecoração com a Medalha de Ouro, aos candidatos que concluíram os requisitos, deve ser feita ao Diretor do Ministério Jovem da Associação/Missão. Ele definirá a realização de uma cerimônia especial para a entrega da medalha. Devem ser convidados outros oficiais da igreja ou da comunidade para participarem na cerimônia. A entrega da medalha dever ser o objetivo principal do programa e não deve ser aproveitada nenhuma cerimônia de Investidura dos Desbravadores ou Aventureiros.');
addOuro('A medalha será, definitivamente, daquele que a recebeu. Seu nome deve ser gravado no verso da medalha. ( Não deverá ser entregue nenhuma medalha sem a gravação do nome )');
espacoOuro(2);
addOuro('O PLANO DA CONQUISTA', titulo);
addOuro('O plano de Conquista da Medalha de Ouro está dividido em cinco áreas:');
addOuro('1. Preparo físico – Os requisitos foram adotados de acordo com os programas de provas nacionais.');
addOuro('2. Habilidades – São relacionadas diversas Especialidades e o candidato pode escolher duas. Os requisitos de cada Especialidade estão disponíveis no manual de Especialidades dos Desbravadores.');
addOuro('3. Expedição – O candidato pode escolher entre uma caminhada ou canoagem em uma área despovoada. São dadas orientações para uma aventura desafiadora. É importante que aqueles que planejam fazer essa atividade tenham certeza de que todas as condições foram atendidas.');
addOuro('4. Projetos de Serviço – O participante deve ter um registro no qual demonstre que desempenhou com sucesso suas responsabilidades.');
addOuro('5. Aperfeiçoamento Cultural – O participante deve ser aprovado em duas áreas de excelência cultural. Pessoas qualificadas nas áreas de arte, música e crítica literária devem garantir que o requisito foi cumprido com sucesso.');
espacoOuro(4);

addOuro('by Jonata Klabunde');
addOuro('contato: Jonata_k@yahoo.com.br', titulo);




//** Prata
espacoPrata(2);
addPrata('DETALHES', titulo);
espacoPrata();
addPrata('PLANO DA MEDALHA DE PRATA', titulo);
addPrata('A Medalha de Prata foi preparada para jovens cristãos de 14 a 19 anos de idade (acima de 20 anos será opcional) que demonstrarem grandes qualidades de desenvolvimento físico, mental e cultural. Promovida pelo do Ministério Jovem da Igreja Adventista do Sétimo Dia, ela dá aos jovens a oportunidade de se superarem e se realizarem com atividades de alto nível.');
addPrata('Cada participante e ganhador da Medalha de Prata vai estar mais bem preparado para assumir seu lugar como membro positivamente ativo de sua igreja e comunidade. O esforço e a perseverança, para se classificar em todas as atividades, vão desenvolver qualidades de caráter que são tão necessárias na geração de hoje.');
addPrata('O futuro de nossa Igreja depende da capacidade e disposição dos jovens de servirem seus semelhantes vivendo uma vida guiada por Cristo. Pelo poder de Deus esses jovens cristãos vão ter um papel nobre e destacado nos momentos finais da história. Os desafios do povo de Deus vão ser grandes e apenas os jovens que estiverem bem firmados na Palavra de Deus em uma plataforma moral, que reflete a pureza do Senhor Jesus, vão ser capazes de resistir. A conquista da Medalha de Prata foi estabelecida para preparar estes jovens, desenvolvendo boa saúde, pensamento puro e firmeza de visão espiritual.');
espacoPrata(2);
addPrata('A CONQUISTA DA MEDALHA', titulo);
addPrata('O Diretor do Ministério Jovem da Associação/Missão é quem dirige todo o projeto de Conquista da Medalha de Prata e supervisiona as provas. Ele pode definir outras pessoas, devidamente preparadas, para coordenarem as atividades em seu lugar.');
addPrata('Na igreja local o diretor de jovens será o coordenador da comissão de Conquista da Medalha de Prata. Essa comissão deve definir examinadores bem preparados e submeter todo o projeto à aprovação do Ministério Jovem da Associação/Missão. O projeto se destina especialmente aos jovens Adventistas do Sétimo Dia, mas não é exigido que aquele que recebe a medalha seja membro da Igreja.');
addPrata('Deve ser mantido um registro exato da conclusão de cada requisito completado pelo candidato. A coluna à direita contém um espaço destinado às anotações de cada requisito: (1) a data de conclusão, (2) a pontuação (onde indicado), e (3) a assinatura do examinador autorizado pela comissão da Conquista da Medalha de Prata.');
espacoPrata(2);
addPrata('A ENTREGA DA MEDALHA', titulo);
addPrata('A entrega da Medalha de Prata deve ser feita em uma cerimônia marcante e especial, na qual o diretor do Ministério Jovem da Associação/Missão esteja presente. Podem ser convidados outros oficiais da igreja ou da comunidade para participarem na cerimônia. A entrega da medalha deverá ser a parte principal do programa.');
addPrata('A medalha será, definitivamente, daquele que a recebeu. Seu nome deve ser gravado no verso da medalha. (Não deverá ser entregue nenhuma medalha sem a gravação do nome)');
espacoPrata(2);
addPrata('O PLANO DA CONQUISTA', titulo);
addPrata('O plano de Conquista da Medalha de Prata está dividido em cinco áreas:');
addPrata('1. Preparo físico – Existem várias opcões, mas é fundamental que cada pessoa classificada receba um certificado, do examinador oficialmente designado, quando seus registros finais forem concluidos.');
addPrata('2. Especialidades – O desenvolvimento de habilidades segue os requisitos apresentados no programa de Especialidades dos Desbravadores . São apresentadas dez Especialidades e o participante deve se classificar em duas.');
addPrata('3. Expedição – São dadas orientações para uma desafiadora expedição e é muito importante que aqueles que pensam em fazê-la confiram, com o examinador qualificado, se todas as condições foram devidamente cumpridas e conferidas.');
addPrata('4. Projetos de Serviço – Nesta seção o participante precisa ter um registro, demonstrando que cumpriu, com sucesso, suas responsabilidades.');
addPrata('5. Aperfeiçoamento Cultural – O participante pode escolher, mas precisa receber um certificado, oficialmente reconhecido, após sua leitura ou redação.');
espacoPrata(4);
addPrata('by Jonata Klabunde');
addPrata('contato: Jonata_k@yahoo.com.br', titulo);









