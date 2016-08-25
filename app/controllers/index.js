
$.barraWidget.setScrollableView($.scroll);




var Admob = require('ti.admob');
var adMobView = Admob.createView({ publisherId:"ca-app-pub-4602457716032817/6115395688", bottom: 0});
// adMobView.addEventListener(Admob.AD_RECEIVED,function(){ Ti.API.info("ad received");});
// adMobView.addEventListener(Admob.AD_NOT_RECEIVED,function(){ Ti.API.info("ad not received");});

$.winIndexID.add(adMobView);
function open(){
}

 


function viewSelecionada(e) {}
function scrollAlterado(e) {}
function voltar(e) {}



$.winIndexID.open();
