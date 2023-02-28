$("#url").change(function(){
	$.ajax({
		url: $("#url").val,
		type: "POST",
		dataType: "html",
		success: function(data) {
			
			console.log($.getElementById("hide").innerHTML)
			
		}
	});

})


