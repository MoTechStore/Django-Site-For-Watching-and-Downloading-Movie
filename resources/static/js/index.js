function liveSearch(value){
	value = value.trim();

	if( value != ""){
		$.ajax({
			url:"search",
			data:{searchText: value},
			dataType:"json",

			success: function(data){
				var res = "";
				//mo = JSON.stringify(data);
				mo = JSON.parse(data.results);

				console.log(mo.length)
				console.log(mo)

				console.log(mo[0].pk)
				//console.log(mo[0].fields['title'])

				// mo[i].fields['pk']



				for(var i=0; i<mo.length; i++){
					
					res += "<div>" + '<a href="download/' + mo[i]['pk'] +'">' + mo[i].fields['title'] + '</a>' + "</div>";

		
				}

				$("#results").html(res);

			}
		})

	}else{
		$("#results").html("");
	}
}