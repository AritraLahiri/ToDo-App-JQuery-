//Completed Todo's
$("ul").on("click","li",function(event) {
$(this).toggleClass('choppedoff');
});
//Delete Todo's
$("ul").on("click","span",function(event) {
$(this).parent().fadeOut('1000', function() {
$(this).remove();
});;
event.stopPropagation();
});
//Dynamic Todo's
$("input").keypress(function(event) {
if (event.which===13){
$("ul").append('<li> <span> <i class="far fa-trash-alt"></i> </span>' + $(this).val()+'</li>');
$(this).val("")
}
});
//Expanding and Collapsing
$('#expand').click(function(event) {
$('input').toggleClass('hideInput');
});