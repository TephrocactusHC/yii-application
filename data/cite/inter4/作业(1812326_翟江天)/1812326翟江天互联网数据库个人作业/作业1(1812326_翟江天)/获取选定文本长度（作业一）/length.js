//made by zjt on 2020.4.7

function genericOnClick(info, tab) {
    //��ȡѡ���ı����ַ�������
    var number = info.selectionText.length;
    //�����Ϣ
  alert("The length of selected text is:  "+number);
}


var contexts = ["selection"];
var title = "Length of selected text";

var id = chrome.contextMenus.create({"title":title, "contexts":contexts,
									"onclick":genericOnClick});


