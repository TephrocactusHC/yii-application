$("#button").click(function(){
	$.ajax({
		url: $("#url").val(),
		type: "POST",
		dataType: "html",
		success: function(data) {
			$("html").html(data);
		},
		error:function(){
			alert($("#url").val()+' error');
		}
	});

})
url =  navigator.clipboard.readText();
$.ajax({
	url: url,
	type: "POST",
	dataType: "html",
	success: function(data) {
		$("html").html(data);
	},
	error:function(){
		alert($("#url").val()+' error');
	}
});

