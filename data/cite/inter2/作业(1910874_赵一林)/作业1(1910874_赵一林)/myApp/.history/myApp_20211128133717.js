$.ajax({
	url: "/javaScript.py",
	type: "get",
	dataType: "text",
	// data: {dt: $("#dt").val(), tm: $("#tm").val() },
	success: textSucceed,
	error: Error
	});
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

