
//--------------------------------------------------------------------
    //引数にはミリ秒を指定します。（例：5秒の場合は5000）
function sleep(a){
  var dt1 = new Date().getTime();
  var dt2 = new Date().getTime();
  while (dt2 < dt1 + a){
    dt2 = new Date().getTime();
  }
  return;
}
//---------------------------------------------------------------------
        alert('Loadingを開始します。\n Loadingには、約5秒ほどかかります。');
        
        sleep(5000);
        
        alart('Loadingが終了しました。');
        alart('リダイレクトを実行します。');
 
