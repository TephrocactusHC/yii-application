$("#url").change(function(){
	alert('changed')
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


