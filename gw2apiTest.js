//jQuery.getJSON( url [, data ] [, success(data, textStatus, jqXHR) ] )

$(document).ready(function(){
	//link request
	//https://api.guildwars2.com/v1/map_names.json?id=873
	//var itemURI = "https://api.guildwars2.com/v1/items.json";

	//Example - Works!
	//var mapURI = "https://api.guildwars2.com/v1/map_names.json";
	// $.getJSON(mapURI, function(data){
	// 	$.each(data, function(map_name){
	// 		$("#content").append('<div>' + this.name + '</div>');
	// 	});

	// });

	// var gw2ItemsURI = "https://api.guildwars2.com/v1/items.json";
	// $.getJSON(gw2ItemsURI, function(data){
	// 	//get each data
	// 	$.each(data, function(item_num){
	// 		//put each item number into itemNum variable
	// 		var itemNum = this.items;
	// 		//	
	// 		var itemDetailURI = "https://api.guildwars2.com/v1/item_details.json";
	// 		$.getJSON(itemDetailURI, function(data){
	// 			$.each(data, function(item_name){
	// 				$("#content").append(+ "?item_id")
	// 			})
	// 		})


	var itemsURI = "https://api.guildwars2.com/v1/items.json";
	$.getJSON(itemsURI, function(data){
		//go get each item id from itemsURI
		$.each(data, function(item_id){
			var itemsId = data.items;
			var itemId = [];

			itemId.push(itemsId);
			$.each(itemId, function(index,value){
				$('#items').append("<option>" + value + "</option>");
			})
			
		});
	});
					

			



			// var itemDetailURI = "https://api.guildwars2.com/v1/item_details.json?item_id=" + itemID ;
			// $.getJSON(itemDetailURI, function(data){
			// 	$.each(data, function(item_details){
			// 		$("#content").append('<div>'+ data.name +'</div>');
			// 	});	
			// });


		//Example link
		//https://api.guildwars2.com/v1/item_details.json?item_id=12546



})