var x = "";
var e = null;

function cntchar(m) {
	if(window.document.forms[0].content.value.length > m) {
		window.document.forms[0].content.value = x;
	} else {
		x = window.document.forms[0].content.value;
	}
	if(e == null)
	e = document.getElementById('cntChars');
	else
	e.childNodes[0].data = window.document.forms[0].content.value.length;
}
