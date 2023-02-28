chrome.extension.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.action === "copy") {
            var addr, info;
            //var ctrl = $("#sb_form_q");
            var ctrl = $(".text-align-title");
            if (ctrl.length > 0) {
                for(var i = 0; i < ctrl.length; i++){
                    if (ctrl[i].innerText.indexOf("奖学金") != -1){
                        var parentHTML = ctrl[i].parentElement.outerHTML;
                        var hrefl = parentHTML.indexOf(".href=")+7;
                        var hrefr = parentHTML.indexOf(";\"")-1;
                        var partadd = "https://cc.nankai.edu.cn/";
                        var partadd2 = parentHTML.substring(hrefl, hrefr);
                        if(partadd2.indexOf("page.htm")!= -1){
                            partadd2 = partadd+partadd2;
                        }else{
                            continue;
                        }
                        addr=partadd2;
                        info = ctrl[i].innerText
                        break;
                    }
                }
                //alert(addr);
                if (sendResponse) sendResponse({addr:addr, info:info});
            } else {
                alert("No data");
            }
        } else if (request.action === "paste") {
            var ctrl = $("#input");
            if (ctrl.length > 0) {
                ctrl.val(request.data);
                sendResponse("OK");
            } else {
                alert("No data");
            }
        }
        return true;
    }
);