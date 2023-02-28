
var PageName = 'Home';
var PageId = 'p3377c7a8998449c288cbf87cc44f8ac4'
var PageUrl = 'Home.html'
document.title = 'Home';

if (top.location != self.location)
{
	if (parent.HandleMainFrameChanged) {
		parent.HandleMainFrameChanged();
	}
}

var $OnLoadVariable = '';

var $CSUM;

var hasQuery = false;
var query = window.location.hash.substring(1);
if (query.length > 0) hasQuery = true;
var vars = query.split("&");
for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0].length > 0) eval("$" + pair[0] + " = decodeURIComponent(pair[1]);");
} 

if (hasQuery && $CSUM != 1) {
alert('Prototype Warning: Variable values were truncated.');
}

function GetQuerystring() {
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&CSUM=1';
}

function PopulateVariables(value) {
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  return value;
}

function OnLoad() {

}

eval(GetDynamicPanelScript('u2', 2));

var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'top';
var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'center';
var u54 = document.getElementById('u54');

var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'top';
var u60 = document.getElementById('u60');

var u29 = document.getElementById('u29');

var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'top';
var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'center';
var u104 = document.getElementById('u104');

var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'top';
var u83 = document.getElementById('u83');

var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'center';
var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'center';
var u79 = document.getElementById('u79');

var u139 = document.getElementById('u139');

var u42 = document.getElementById('u42');

var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'center';
var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'center';
var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'top';
var u99 = document.getElementById('u99');

var u5 = document.getElementById('u5');

var u23 = document.getElementById('u23');

var u76 = document.getElementById('u76');

var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'center';
var u155 = document.getElementById('u155');

var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'top';
var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'top';
var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'center';
var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'top';
var u48 = document.getElementById('u48');

var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'top';
var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'center';
var u141 = document.getElementById('u141');

var u11 = document.getElementById('u11');

var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'center';
var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'top';
var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'center';
var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'top';
var u133 = document.getElementById('u133');

var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'top';
var u87 = document.getElementById('u87');

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'center';
var u93 = document.getElementById('u93');

var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'center';
var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'top';
var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'top';
var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'top';
var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'center';
var u52 = document.getElementById('u52');

var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'center';
var u158 = document.getElementById('u158');

var u36 = document.getElementById('u36');

var u89 = document.getElementById('u89');

var u81 = document.getElementById('u81');

var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'center';
var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'top';
var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'top';
var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'top';
var u101 = document.getElementById('u101');

var u0 = document.getElementById('u0');

var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'center';
var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'center';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'center';
var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'center';
var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'center';
var u15 = document.getElementById('u15');

var u21 = document.getElementById('u21');

var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'top';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'top';
var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'top';
var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u65 = document.getElementById('u65');

var u128 = document.getElementById('u128');

u128.style.cursor = 'pointer';
if (bIE) u128.attachEvent("onclick", Clicku128);
else u128.addEventListener("click", Clicku128, true);
function Clicku128(e)
{

if (true) {

	self.location.href="card.html" + GetQuerystring();

}

}

var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'top';
var u160 = document.getElementById('u160');

var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'top';
var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'top';
var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'center';
var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'center';
var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'center';
var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'center';
var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'top';
var u137 = document.getElementById('u137');

var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'top';
var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'top';
var u126 = document.getElementById('u126');

var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'top';
var u117 = document.getElementById('u117');

var u85 = document.getElementById('u85');

var u120 = document.getElementById('u120');

var u91 = document.getElementById('u91');

var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'top';
var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'center';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'center';
var u17 = document.getElementById('u17');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'center';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'top';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u135 = document.getElementById('u135');

var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'top';
var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'top';
var u25 = document.getElementById('u25');

var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'top';
var u97 = document.getElementById('u97');

var u59 = document.getElementById('u59');

var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'center';
var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'top';
var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'center';
var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'center';
var u132 = document.getElementById('u132');

var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'top';
var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'top';
var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'top';
var u129 = document.getElementById('u129');

var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'top';
var u157 = document.getElementById('u157');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u157ann'), "<div id='u157Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u157', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u157').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u157based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u157base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u157based = document.getElementById('u157based');
            
InsertBeforeEnd(u157based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 人工颁布的荣誉标牌。<BR><BR></div>");

var u144 = document.getElementById('u144');

var u131 = document.getElementById('u131');

var u95 = document.getElementById('u95');

var u122 = document.getElementById('u122');

var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'top';
var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'top';
var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'top';
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'center';
var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'center';
var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'top';
var u28 = document.getElementById('u28');

u28.style.cursor = 'pointer';
if (bIE) u28.attachEvent("onclick", Clicku28);
else u28.addEventListener("click", Clicku28, true);
function Clicku28(e)
{

if (true) {

	SetPanelStateu2("pd1u2");

}

}

var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'center';
var u2 = document.getElementById('u2');

var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'center';
var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u50 = document.getElementById('u50');

var u19 = document.getElementById('u19');

var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'top';
var u7 = document.getElementById('u7');

var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'top';
var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'center';
var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'top';
var u123 = document.getElementById('u123');

var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'center';
var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'top';
var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'top';
var u13 = document.getElementById('u13');

var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'center';
var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'center';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'top';
var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'top';
var u35 = document.getElementById('u35');

u35.style.cursor = 'pointer';
if (bIE) u35.attachEvent("onclick", Clicku35);
else u35.addEventListener("click", Clicku35, true);
function Clicku35(e)
{

if (true) {

	SetPanelStateu2("pd0u2");

}

}

var u57 = document.getElementById('u57');

var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'top';
var u63 = document.getElementById('u63');

var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'top';
var u38 = document.getElementById('u38');

var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'center';
var u3 = document.getElementById('u3');

if (window.OnLoad) OnLoad();
