$("#url").change(function(){
	alert('changed')
	$.ajax({
		url: $("#url").val,
		type: "POST",
		dataType: "html",
		success: function(data) {
			
			console.log(data)
			
		},
		error:function(){
			alert('error');
		}
	});

})


