function liveSearch(value){
	
	value = value.trim();

	if(value != ""){
		$.ajax({
			url:"search",
			data:{searchText: value},
			dataType:"json",

			success: function(data){
				var res = "";

				result = JSON.parse(data.results)
				console.log(result)
				//console.log(result.length)
				//console.log(result[1].pk)

				for(var i=0; i<result.length; i++){
					//console.log(result[i].pk)
					console.log(result[i].fields['title'])

res += "<div>" + '<a href="download/' + result[i].pk + '">' + result[i].fields['title'] + '</a>'+ "</div>";
		
				}
				$('#results').html(res);

			}
		})
	}else{
		$('#results').html("");
	}
	
}