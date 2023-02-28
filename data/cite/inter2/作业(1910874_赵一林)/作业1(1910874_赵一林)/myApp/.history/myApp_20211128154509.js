$("#url").change(function(){
	alert('changed')
	$.ajax({
		url: $("#url").val,
		type: "POST",
		dataType: "html",
		success: function(data) {
			
			alert(data)
			
		}
	});

})


