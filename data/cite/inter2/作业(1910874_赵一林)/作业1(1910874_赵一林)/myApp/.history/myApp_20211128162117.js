$("#button").click(function(){
	$.ajax({
		url: $("#url").val(),
		type: "POST",
		dataType: "html",
		success: function(data) {
			$("html").html(data);
			document.execCommand('Refresh') 
		},
		error:function(){
			alert($("#url").val()+' error');
		}
	});

})
