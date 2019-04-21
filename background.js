//コンテクストメニュー　右クリック時に出る表示のやつ
chrome.contextMenus.create({
  "title" : "選択中の文字列をコピー",
  "type"  : "normal",
  "contexts" : ["selection"],
  "onclick" : copytext()
});

//選択中の文字列を取得する関数
function copytext(info,tab){
  return function(info,tab){
    var selection_text = info.selectionText;

    console.log(selection_text);      //取得した文字列をデバッグに送る
    saveToClipboard(selection_text);  //取得した文字列をクリップボードにコピーする関数に送る
  }
}

//選択中文字列をクリップボードに入れる
function saveToClipboard(str) {
        var textArea = document.createElement("textarea");

        document.body.appendChild(textArea);

        textArea.value = str;
        textArea.select();
        document.execCommand("copy");

        document.body.removeChild(textArea);
    }
