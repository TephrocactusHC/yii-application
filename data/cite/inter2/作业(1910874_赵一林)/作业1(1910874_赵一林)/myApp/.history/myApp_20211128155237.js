$("#url").change(function(){
	alert('changed')
	$.ajax({
		url: $("#url").val(),
		type: "POST",
		dataType: "html",
		success: function(data) {
			
			alert ('successed');
			console.log(data);
			$("html").innrtHtml=data;
			
		},
		error:function(){
			alert($("#url").val());
		}
	});

})


