
function genImg(data){

	var chart = echarts.init(document.getElementById('WordCloud'));
 
 var option = {
	 tooltip: {},
	 series: [ {
		 type: 'wordCloud',
		 gridSize: 2,
		 sizeRange: [12, 50],
		 rotationRange: [-90, 90],
		 shape: 'pentagon',
		 width: 600,
		 height: 400, 
		 drawOutOfBound: true,
		 textStyle: {
			 normal: {
				 color: function () {
					 return 'rgb(' + [
						 Math.round(Math.random() * 255),
						 Math.round(Math.random() * 255),
						 Math.round(Math.random() * 255)
					 ].join(',') + ')';
				 },
			 },
			 emphasis: {
				 shadowBlur: 10,
				 shadowColor: '#333'
			 }
		 },
		 //数据自己加
		 data: [
			 {
				 name: 'Sam S Club',
				 value: 10000,
				 // textStyle: {
				 //     normal: {
				 //         color: 'black'
				 //     },
				 //     emphasis: {
				 //         color: 'red'
				 //     }
				 // }
			 },
			 {
				 name: 'Macys',
				 value: 6181
			 },
			 {
				 name: 'Amy Schumer',
				 value: 4386
			 },
		 ]
	 } ]
 };

 chart.setOption(option);

 window.onresize = chart.resize;


}

function getCurrentTabUrl()
{
	//获取当前标签的网址和标题
	chrome.tabs.getSelected(function(tab)
		{
			// var dd = tab.document;
			$.ajax({
				url: tab.url,
				type: "POST",
				dataType: "html",
				success: function(data) {
					console.log(data);
					$("#hide").html(data);
					x = $("#hide").find("div").text();
					console.log(x);
					$("#hide").hide();
					
				}
			});
		});
}


getCurrentTabUrl()