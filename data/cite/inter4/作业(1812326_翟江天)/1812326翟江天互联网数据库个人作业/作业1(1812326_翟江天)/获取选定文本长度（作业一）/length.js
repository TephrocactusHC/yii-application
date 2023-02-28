//made by zjt on 2020.4.7

function genericOnClick(info, tab) {
    //获取选定文本的字符串长度
    var number = info.selectionText.length;
    //输出信息
  alert("The length of selected text is:  "+number);
}


var contexts = ["selection"];
var title = "Length of selected text";

var id = chrome.contextMenus.create({"title":title, "contexts":contexts,
									"onclick":genericOnClick});


