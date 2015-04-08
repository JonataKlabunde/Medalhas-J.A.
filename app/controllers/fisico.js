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
addOuro('SEÇÃO I - PREPARO FÍSICO', titulo);
addOuro('MASCULINO:');
addOuro('Ser aprovado em quatro dos cinco grupos apresentados.');
espacoOuro();
addOuro('Grupo 1 – Atletismo/Corrida');
addOuro('A. Corrida – 50m em 6.7 seg.');
addOuro('B. Corrida – 100m em 13,2 seg.');
addOuro('C. Corrida – 200m em 26 seg.');
addOuro('D. Corrida – 400m em 63 seg.');
addOuro('E. Corrida – 1.500m em 5 min. 34 seg.');
addOuro('F. Corrida – 10.000m em 44in.');
espacoOuro();
addOuro('Grupo 2 – Provas de Campo');
addOuro('A. Salto em extensão - sem impulso - 2,4m');
addOuro('B. Salto em distância - 4,8m');
addOuro('C. Salto em altura -1,47m');
addOuro('D. Arremesso de peso - 7,25kg – 10,36m');
espacoOuro();
addOuro('Grupo 3 – Força e Resistência – Escolher duas opções.');
addOuro('A. 65 Flexões abdominais em 2 min.');
addOuro('B. 13 Flexões de braço na barra.');
addOuro('C. 42 Flexões de solo');
addOuro('D. Subir 6,2m em uma corda apenas com as mãos.');
espacoOuro();
addOuro('Grupo 4 – Coordenação, Agilidade e Equilíbrio – Escolher três opções.');
addOuro('A. Acertar 9 lances livres de Basquete em 10 arremessos, ou ...');
addOuro('Pular corda acertando, no mínimo, 300 pulos seguidos.');
addOuro('B. Corrida de ida e volta - 10m em 9seg. ou ...');
addOuro('Cócoras (burpy) – 20 vezes em 30seg. – ver explicações');
addOuro('C. Salto mortal para frente com apoio das mãos, ou ... ');
addOuro('Cambalhota para trás – ver explicações – ou ...');
addOuro('Parada de cabeça – 10seg. (plantar bananeira) – ver explicação – ou ...');
addOuro('Parada de sapo – ver explicação.');
addOuro('Grupo 5 – Natação – Escolher uma opção.');
addOuro('A. Estilo livre – 100m em 1 min. 17 seg.');
addOuro('B. Estilo costas - 100m em 1 min. 23 seg.');
addOuro('C. Estilo peito - 100m em 1 min. 28 seg.');
addOuro('FEMININO:');
addOuro('Ser aprovado em quatro dos cinco grupos apresentados.');
addOuro('Grupo 1 – Atletismo/Corrida – Escolher duas opções.');
addOuro('A. Corrida – 50m em 7,9 seg.');
addOuro('B. Corrida – 200m em 33 seg.');
addOuro('C. Marcha atlética - 600m em 2 min. 23 seg.');
addOuro('D. Corrida – 1.500m em 6 min. 40 seg.');
addOuro('E. Correr e andar 5.000m em 25 min. 30 seg.');
addOuro('Grupo 2 – Provas de Campo – Escolher duas opções.');
addOuro('A. Salto em extensão, sem impulso, 1,95m');
addOuro('B. Salto em distância - 3,35m');
addOuro('C. Salto em altura - 1,25m');
addOuro('D. Arremesso bola de beisebol (ou correspondente) - 39,7m');
addOuro('Grupo 3 – Força e Resistência – Escolher três opções.');
addOuro('A. 48 Flexões abdominais em 2min.');
addOuro('B. Sustentar o peso do corpo na barra com os braços flexionados 25seg. – ver explicação.');
addOuro('C. 20 Flexões de braço no solo. – ver explicação.');
addOuro('Grupo 4 – Coordenação, Agilidade e Equilíbrio – Escolher três opções.');
addOuro('A. Acertar 9 lances livres de Basquete em 10 arremessos, ou');
addOuro('Pular corda acertando, no mínimo, 300 pulos seguidos.');
addOuro('B. Corrida de ida e volta - 10m em 9min 07seg. ou');
addOuro('C. Salto mortal para frente, com apoio das mãos, ou');
addOuro('Parada de cabeça – 10seg. (plantar bananeira) – ver explicação – ou');
addOuro('Parada de sapo – ver explicação.');
addOuro('Cócoras (burpy) – 20 vezes em 30seg. – ver explicação');
addOuro('Grupo 5 – Natação – Escolher uma opção.');
addOuro('A. Estilo livre – 100m em 1 min. 17 seg.');
addOuro('B. Estilo costas - 100m em 1 min. 23 seg.');
addOuro('C. Estilo peito - 100m em 1 min. 28 seg.');
addOuro('INFORMAÇÕES ADICIONAIS');
addOuro('MASCULINO');
addOuro('Flexões de braço na barra: A forma correta de segurar a barra é com a empunhadura reversa da mão. O queixo deve subir acima da barra de flexão. Os braços devem ficar quase que totalmente estendidos, com os cotovelos levemente flexionados.');
addOuro('Flexões de braço no solo: O peso nas flexões de solo deve ser distribuído por igual. As mãos um pouco abaixo dos ombros. Pés juntos. Erga os braços, mantendo o corpo retesado, até que os cotovelos fiquem retos. Ao voltar à posição anterior, continue mantendo o corpo retesado e reto, baixando o corpo até quase tocar o solo. Ele deve ser contínuo.');
addOuro('Cambalhota para trás: Posição inicial: Abaixar-se para trás como se estivesse sentado em uma cadeira baixa. Atenue a queda com as mãos, tendo os dedos estirados para frente no colchão. Rolar pra trás com o apoio das palmas das mãos colocadas ao lado da cabeça e acima dos ombros. Não tocar os joelhos no chão, indo diretamente aos pés. Repetir três séries de três movimentos.');
addOuro('FEMININO');
addOuro('Sustentar o peso do corpo na barra, com os braços flexionados - Posição Inicial : (Uma barra horizontal com cerca de 4 cm de diâmetro deve ser ajustada, aproximadamente, à altura da pessoa em pé). A candidata segura a barra com as palmas das mãos voltadas para a barra. Com a ajuda de duas pessoas, uma na frente e outra atrás, a aluna levanta seu corpo até atingir uma posição onde o queixo fique acima da barra, os cotovelos flexionados e o peito perto da barra. Essa posição deve ser mantida por, pelo menos, 25segundos a fim de ser aprovada no teste.');
addOuro('O cronômetro deve começar a marcar logo que a candidata atingir a posição correta e parar no momento em o queixo tocar a barra, ou a cabeça pender para trás para manter o queixo acima da barra ou o queixo ficar abaixo da barra.');
addOuro('O registro deverá ser feito arredondando o segundo mais próximo do tempo em que a candidata manteve a posição correta.');
addOuro('Flexões de braço no solo: Posição Inicial : braços estendidos, com as mãos espalmadas no chão, voltadas para frente, um pouco abaixo e levemente fora do alinhamento com os ombros. Joelhos no chão e corpo reto da cabeça até os joelhos. Flexionar os joelhos e erguer a ponta dos pés.');
addOuro('Em seguida, manter o corpo retesado e reto, flexionar os cotovelos sem tocar o chão com o peito. Depois, voltar à posição inicial. Manter o corpo reto; não levantar as nádegas; o abdômen não deve arquear.');
addOuro('MASCULINO E FEMININO');
addOuro('Flexões abdominais: Posição Inicial : O candidato deita de costas com as pernas estendidas, separadas cerca de 30 cm, enquanto outra pessoa segura seus tornozelos a fim de manter os calcanhares firmados contra o solo. Dado o sinal, o candidato senta-se e toca seus pés com os dedos das mãos, voltando, em seguida à posição inicial. Ai, então, cada flexão é contada.');
addOuro('Corrida de ida e volta: Dois marcadores, do mesmo tamanho, devem ser colocados a uma distância de 10 metros da linha de início. Dado o sinal, o candidato deve correr, pegar o marcador, voltar até a linha inicial, deixar o marcador, voltar correndo e pegar o outro marcador e trazê-lo até a linha de chegada. Ai, então, estará concluída a prova.');
addOuro('Cócoras (Burpy): Equipamento para o exercício: Um cronômetro, ou um relógio com marcador de segundos. Posição Inicial : O aluno fica em posição de firme.');
addOuro('Dado o sinal o candidato flexiona os joelhos e coloca as mãos no chão, na frente dos pés. Os braços podem estar posicionados em frente aos joelhos, entre eles ou ao lado, de cócoras. Em seguida, arremessar as pernas para trás de tal forma a deixar o corpo perfeitamente alinhado – dos ombros aos pés (como na posição de flexão de solo). Arremessar, então os pés para frente, voltando à posição de cócoras e então voltar à posição inicial, em pé firme. Após o sinal inicial, o coordenador da prova marca 30 segundos e conclui a prova.');
addOuro('Parada de Sapo: Palmas das mãos apoiadas no solo, afastadas na mesma largura dos ombros. Flexionar os braços, apoiando os joelhos nos cotovelos, elevando os pés do chão. Ficar nesta posição por 7 segundos (somente as 2 palmas das mãos em contato com o solo).');
addOuro('Parada de Cabeça: Apoiar ambas as mãos no solo, na largura dos ombros, e formar, com o apoio da cabeça, um triangulo no solo. Levantar e estender as pernas, unidas, mantendo o corpo equilibrado nesta posição por sete segundos (Plantar bananeira).');
espacoOuro(2);




espacoPrata(2);
addPrata('SEÇÃO I - PREPARO FÍSICO', titulo);
espacoPrata(); 
addPrata('MASCULINO:');
addPrata('Ser aprovado em três dos cinco grupos apresentados.');
addPrata('Grupo 1 – Atletismo/Corrida – Escolher quatro opções.');
addPrata('A.    Corrida - 50m em 7,4 seg.');
addPrata('B.    Corrida - 100m em 15,5 seg.');
addPrata('C.    Corrida - 200m em 28 seg.');
addPrata('D.    Corrida 400m em 66,6 seg.');
addPrata('E.    Marcha atlética - 600m em 1 min. 37 seg.');
addPrata('F.     Corrida - 1.500m em 5 min. 36 seg.');
addPrata('G.    Corrida - 3.000m 12 min. 27 seg.');
addPrata('H.    Corrida 5.000m 23 min. 5 seg.');
addPrata('Grupo 2 – Provas de Campo – Escolher três opções.');
addPrata('A.    Salto em extensão sem impulso - 2,25m');
addPrata('B.    Salto em Distância – 3,40m');
addPrata('C.    Salto em Altura - 1,25m');
addPrata('D.    Arremesso de peso - 5,44kg - 10,36m');
addPrata('E.    Arremesso bola de beisebol (ou correspondente) – 56m');
addPrata('Grupo 3 – Força e Resistência – Escolher duas opções.');
addPrata('A.    55 Flexões abdominais em 2min.');
addPrata('B.    12 Flexões de braço na barra.');
addPrata('C.    40 Flexões de braço no solo.');
addPrata('D.    Subir 5m em uma na corda usando apenas as mãos.');
addPrata('Grupo 4 – Coordenação, Agilidade e Equilíbrio – Escolher três opções.');
addPrata('A.    Acertar 7 cestas em 10 arremessos (Basquete).');
addPrata('B.    Corrida de ida e volta - 10m. em 10,1seg.');
addPrata('C.    Cócoras (burpy) – 15 vezes em 30seg. – ver explicação.');
addPrata('D.    1. Cambalhota Frente - ver explicação');
addPrata('D.    2. Cambalhota para trás – ver explicação.');
addPrata('D.    3. Parada de sapo – ver explicação.');
addPrata('D.    4. Parada de cabeça (plantar bananeira) – ver explicação.');
addPrata('D.    5. Salto mortal com apoio das mãos – ver explicação');
addPrata('E.    Pular corda acertando, no mínimo, 150 pulos seguidos.');
addPrata('Grupo 5 – Natação – Escolher uma opção.');
addPrata('A.    Estilo livre - 100m em 1 min. 38 seg.');
addPrata('B.    Estilo costas - 100m em 1 min. 55 seg.');
addPrata('C.    Estilo peito - 100m em 2 min.');
addPrata('FEMININO:');
addPrata('Ser aprovado em três dos cinco grupos apresentados.');
addPrata('Grupo 1 – Atletismo/Corrida – Escolher duas opções.');
addPrata('A.    Corrida - 50m em 8,5 seg.');
addPrata('B.    Corrida - 100m em 18 seg.');
addPrata('C.    Corrida - 200m em 36s eg.');
addPrata('D.    Corrida - 400m – 1 min 25 seg.');
addPrata('E.    Marcha atlética - 600m em 2 min. 36 seg.');
addPrata('F.     Marcha atlética - 1.500m em 8 min. 40 seg.');
addPrata('G.    Corrida - 3.000m em 19 min. 55 seg.');
addPrata('H.    Corrida - 5.000m em 39 min. 20 seg.');
addPrata('Grupo 2 – Provas de Campo – Escolher duas opções.');
addPrata('A.    Salto em extensão sem impulso - 1,80m.');
addPrata('B.    Salto em extensão - 2,50m.');
addPrata('C.    Salto em Altura - 1,10m.');
addPrata('D.    Arremesso bola de beisebol (ou correspondente) - 27m.');
addPrata('Grupo 3 – Força e Resistência – Escolher duas opções.');
addPrata('A.    40 Flexões abdominais em 2 min.');
addPrata('B.    Sustentar o peso do corpo na barra, com os braços flexionados, por 19 seg. – ver explicação.');
addPrata('C.    30 Flexões de braço no solo – ver explicação.');
addPrata('Grupo 4 – Coordenação, Agilidade e Equilíbrio – Escolher três opções.');
addPrata('A.    Acertar 6 cestas em 10 arremessos (Basquete)');
addPrata('B.    Corrida de ida e volta - 10m em 11,3 seg.');
addPrata('C.    Cócoras (burpy) – 15 vezes em 30 seg. – ver explicação.');
addPrata('D.    1. Cambalhota Frente - ver explicação');
addPrata('D.    2. Cambalhota para trás – ver explicação.');
addPrata('D.    3. Parada de sapo – ver explicação.');
addPrata('D.    4. Parada de cabeça (plantar bananeira) – ver explicação.');
addPrata('E.    Pular corda acertando, no mínimo, 150 pulos seguidos.');
addPrata('Grupo 5 – Natação – Escolher uma opção.');
addPrata('A.    Estilo livre - 100m em 1 min.40 seg.');
addPrata('B.    Estilo costas - 100m em 2 min.05 seg.');
addPrata('C.    Estilo peito - 100m em 2 min.11 seg.');
espacoPrata();
addPrata('INFORMAÇÕES ADICIONAIS');
addPrata('MASCULINO');
addPrata('Grupo 3 – Requisito B - Flexões de braço na barra: A forma correta de segurar a barra é com a empunhadura reversa da mão. O queixo deve subir acima da barra de flexão. Os braços devem ficar quase que totalmente estendidos, com os cotovelos levemente flexionados para baixo.');
addPrata('Grupo 3 – Requisito C - Flexões de braço no solo: O peso nas flexões de solo deve ser distribuído por igual. As mãos um pouco abaixo dos ombros. Pés juntos. Erga os braços, mantendo o corpo retesado, até que os cotovelos fiquem retos. Ao voltar à posição anterior, continue mantendo o corpo retesado e reto, baixando o corpo até quase tocar o solo.');
addPrata('FEMININO');
addPrata('Grupo 3 – Requisito B - Sustentar o peso do corpo na barra, com os braços flexionados - Posição Inicial: (Uma barra horizontal com cerca de 4 cm de diâmetro deve ser ajustada, aproximadamente, à altura da pessoa em pé). A candidata segura a barra com as palmas das mãos voltadas para a barra. Com a ajuda de duas pessoas, uma na frente e outra atrás, a aluna levanta seu corpo até atingir uma posição onde o queixo fique acima da barra, os cotovelos flexionados e o peito perto da barra. Essa posição deve ser mantida por, pelo menos, 19 segundos a fim de ser aprovada no teste.');
addPrata('O cronômetro deve começar a marcar logo que a candidata atingir a posição correta e parar no momento em o queixo tocar a barra, ou a cabeça pender para trás para manter o queixo acima da barra ou o queixo ficar abaixo da barra.');
addPrata('O registro deverá ser feito arredondando o segundo mais próximo do tempo em que a candidata manteve a posição correta.');
addPrata('Grupo 3 – Requisito C - Flexões de braço no solo: Posição Inicial : braços estendidos, com as mãos espalmadas no chão, voltadas para frente, um pouco abaixo e levemente fora do alinhamento com os ombros. Joelhos no chão e corpo reto da cabeça até os joelhos. Flexionar os joelhos e erguer a ponta dos pés.');
addPrata('Em seguida, manter o corpo retesado e reto, flexionar os cotovelos sem tocar o chão com o peito. Depois, voltar à posição inicial. Manter o corpo reto; não levantar as nádegas; o abdômen não deve arquear.');
espacoPrata();
addPrata('MASCULINO E FEMININO');
addPrata('Grupo 3 – Requisito A - Flexões abdominais: Posição Inicial : O candidato deita de costas com as pernas estendidas, separadas cerca de 30 cm, enquanto outra pessoa segura seus tornozelos a fim de manter os calcanhares firmados contra o solo. Dado o sinal, o candidato senta-se e toca seus pés com os dedos das mãos, voltando, em seguida à posição inicial. Ai, então, cada flexão é contada.');
addPrata('Grupo 4 – Requisito B - Corrida de ida e volta: Dois marcadores, do mesmo tamanho, devem ser colocados a uma distância de 10 metros da linha de início. Dado o sinal, o candidato deve correr, pegar o marcador, voltar até a linha inicial, deixar o marcador, voltar correndo e pegar o outro marcador e trazê-lo até a linha de chegada. Ai, então, estará concluída a prova.');
addPrata('Grupo 4 – Requisito C – Cócoras (Burpy): Equipamento para o exercício: Um cronômetro, ou um relógio com marcador de segundos. Posição Inicial: O candidato fica em posição de firme.');
addPrata('Dado o sinal o candidato flexiona os joelhos e coloca as mãos no chão, na frente dos pés. Os braços podem estar posicionados em frente aos joelhos, entre eles ou ao lado, de cócoras. Em seguida, arremessar as pernas para trás de tal forma a deixar o corpo perfeitamente alinhado – dos ombros aos pés (como na posição de flexão de solo). Arremessar, então, os pés para frente, voltando à posição de cócoras e então voltar à posição inicial, em pé firme. Após o sinal inicial, o coordenador da prova marca 30 segundos e conclui a prova.');
addPrata('Grupo 4 – Requisito D.1 - Cambalhota para Frente: Realizar séries de 3 cambalhotas. Ficar na posição inicial, agachado, para fazer o movimento para frente. O queixo deve estar tocando no peito, as mãos espalmadas em um colchonete e o peso igualmente distribuído. Dado o sinal, encurvar-se, soltar o peso e colocá-lo na parte de trás do pescoço e dos ombros e não na cabeça. Repetir três séries de três movimentos.');
addPrata('Grupo 4 – Requisito D.2 - Cambalhota para trás: Posição inicial: Abaixar-se para trás como se estivesse sentado em uma cadeira baixa. Atenue a queda com as mãos, tendo os dedos estirados para frente no colchão. Rolar pra trás com o apoio das palmas das mãos colocadas ao lado da cabeça e acima dos ombros. Não tocar os joelhos no chão, indo diretamente aos pés. Repetir três séries de três movimentos.');
addPrata('Grupo 4 – Requisito D.3 – Parada de Sapo: Palmas das mãos apoiadas no solo, afastadas na mesma largura dos ombros. Flexionar os braços, apoiando os joelhos nos cotovelos, elevando os pés do chão. Ficar nesta posição por 7 segundos (somente as 2 palmas das mãos em contato com o solo).');
addPrata('Grupo 4 – Requisito D.4 – Parada de Cabeça: Apoiar ambas as mãos no solo, na largura dos ombros, e formar com o apoio da cabeça um triângulo no solo. Levantar e estender as pernas, unidas, mantendo o corpo equilibrado nesta posição por sete segundos (Plantar bananeira).');
espacoPrata(2);










