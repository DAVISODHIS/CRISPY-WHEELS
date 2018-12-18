$(document).ready(function(){
	$(".cont form").submit(function(event){
		
		$(".cont").hide()
		$("#submited").show()
		event.preventDefault()
	})
})
