// //** dimensões do dispositivo
// Alloy.Globals.alturaDoDipositivo = Ti.Platform.displayCaps.platformHeight;
// Alloy.Globals.larguraDoDipositivo = Ti.Platform.displayCaps.platformWidth;
//
//
// 
// if (Ti.Platform.Android) {
//     Alloy.Globals.currentActivity = Titanium.Android.currentActivity;
// }
//
//
// //** botão
// Alloy.Globals.botaoClicado = '';
//
//
//
// //** dimensões
// Alloy.Globals.larguraMedalha = Alloy.Globals.larguraDoDipositivo * 35 /100;
// Alloy.Globals.larguraIconesSesoes = Alloy.Globals.larguraDoDipositivo * 28 /100;
// Alloy.Globals.warning = Alloy.Globals.larguraDoDipositivo * 15 /100;
//
//
//
// var matrix = Ti.UI.create2DMatrix();
// Alloy.Globals.efeitoClick = function(view, funcao){
//     view.addEventListener('click', function(e){
//         var animation = Ti.UI.createAnimation({
//             duration : 80,
//             transform : matrix.scale(0.8)
//         });
//         view.animate(animation, function callback(e){
//             animation.transform = matrix.scale(1.0);
//             animation.duration = 10;
//             view.animate(animation);
//             funcao();
//         });
//     });
// };
//
//
//
// //** create Controllers
// Alloy.Globals.secoes = Alloy.createController('secoes').getView();
// Alloy.Globals.fisico = Alloy.createController('fisico').getView();
// Alloy.Globals.habilidade = Alloy.createController('habilidade').getView();
// Alloy.Globals.expedicao = Alloy.createController('expedicao').getView();
// Alloy.Globals.projetoeservico = Alloy.createController('projetoeservico').getView();
// Alloy.Globals.aperfeicoamentocultural = Alloy.createController('aperfeicoamentocultural').getView();
// Alloy.Globals.detalhes = Alloy.createController('detalhes').getView();
//
