(function(){

$(document).ready(function(){

	// Variables

	var querystring = window.location.search.replace("?", "");
	var searchParameters = {
		querystring: querystring
	}

	// Caching the DOM

	var $faq = $("#faq");
	var $templateFaq = $("#template-faq").html();

	// Run script

	getFaqData(searchParameters, renderFaq);

	// Methods

	function getFaqData(searchParameters, callback){
		var JsonData;
		
		$.ajax({
			method: "POST",
			url: "php/getdata-faq.php",
			data: searchParameters,
			dataType: "json"
		}).done(function(data){
			console.log(data)
			JsonData = data;
			callback(JsonData);
		});
	}

	function renderFaq(JsonData){
		var data = {
			faq: JsonData
		}
		var rendered = Mustache.render($templateFaq, data);
		$faq.html(rendered);
	}

})// $(document).ready END

})("JQuery") // END