$(document).ready(function(){
  $("#form form").submit(function(event){
    var human1Input = $("input#human1").val();
    var animal1Input = $("input#animal1").val();
    var verbInput = $("input#verb").val();
    var adjectiveInput = $("input#adjective").val();
    var nounInput = $("input#noun").val();
    var nounInput = nounInput.toUpperCase();
    var animal2Input = $("input#animal2").val();
    var adjective2Input = $("input#adjective2").val();
    var noun2Input = $("input#noun2").val();

    $(".human1").text(human1Input);
    $(".animal1").text(animal1Input);
    $(".verb").text(verbInput);
    $(".adjective").text(adjectiveInput);
    $(".noun").text(nounInput);
    $(".animal2").text(animal2Input);
    $(".adjective2").text(adjective2Input);
    $(".noun2").text(noun2Input);


    $("#story").show();
    $("#letter").show();


    event.preventDefault();
  });
});
