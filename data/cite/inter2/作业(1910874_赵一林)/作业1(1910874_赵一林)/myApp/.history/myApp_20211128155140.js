$("#url").change(function(){
	alert('changed')
	$.ajax({
		url: $("#url").val(),
		type: "POST",
		dataType: "html",
		success: function(data) {
			
			alert ('successed');
			$("html").innrtHtml=data;
			
		},
		error:function(){
			alert($("#url").val());
		}
	});

})


