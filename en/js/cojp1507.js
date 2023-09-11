$(document).ready(function(){

//キャンセルをclickで閉じる
$(".js-mdlCls").click(function(){
  $(this).parents(".confModal").removeClass("show");
  return false;
});

//背景をclickで閉じる
$(".confModal").click(function(){
  $(this).removeClass("show");
  return false;
});

//イベント伝播を阻止
$(".confModal .kiyakuBox").click(function(e){
  e.stopImmediatePropagation();
});

});//DocRdyFncEnd