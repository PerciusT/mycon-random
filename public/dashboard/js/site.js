$(document).ready(function(){
	if($("#sitestatus").html()=="Online")
	{
		$("#siteopener").removeAttr("hidden")
		$("#statustitle").attr("hidden",true);
	}
})