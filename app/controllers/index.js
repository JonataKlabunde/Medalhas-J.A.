
//** teste
Alloy.Globals.efeitoClick($.viewOuroID, function(e){
    Alloy.Globals.botaoClicado = 'ouro';
    setTimeout(function(e){
        Alloy.Globals.secoes.open();
    },50);
});

Alloy.Globals.efeitoClick($.viewPrataID, function(e){
    Alloy.Globals.botaoClicado = 'prata';
    setTimeout(function(e){
        Alloy.Globals.secoes.open();
    },50);
});



//** Fechar o aplicativo.
$.winIndexID.addEventListener('android:back', function(e) {
    Alloy.Globals.currentActivity.finish();
});



$.winIndexID.open();


