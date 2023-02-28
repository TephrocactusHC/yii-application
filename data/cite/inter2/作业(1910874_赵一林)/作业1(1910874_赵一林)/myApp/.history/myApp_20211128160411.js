$("#button").click(function(){
	$.ajax({
		url: $("#url").val(),
		type: "POST",
		dataType: "html",
		success: function(data) {
			window.resizeTo(800, 600);
			$("html").html(data);
		},
		error:function(){
			alert($("#url").val()+' error');
		}
	});

})


