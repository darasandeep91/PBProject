function openLink(linkText){
	document.getElementById("dialogBox").src=linkText;
	$(".fancyBox").show();
	$(".detailPage").show();
}
function closeDialog(){
	$(".detailPage").hide();
	$(".fancyBox").hide();
}