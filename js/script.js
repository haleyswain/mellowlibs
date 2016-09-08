$(document).ready(function(){
  $("#form form").submit(function(event){
    var human1Input = $("input#human1").val();
    var animal1Input = $("input#animal1").val();
    var verbInput = $("input#verb").val();
    var adjectiveInput = $("input#adjective").val();
    var nounInput = $("input#noun").val();

    $(".human1").text(human1Input);
    $(".animal1").text(animal1Input);
    $(".verb").text(verbInput);
    $(".adjective").text(adjectiveInput);
    $(".noun").text(nounInput);

    $("#story").show();

    event.preventDefault();
  });
});
