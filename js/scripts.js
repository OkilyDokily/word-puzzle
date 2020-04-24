var vowels = ["a","e","i","o","u"];


function makePuzzle(sentence){
  var newSentence = "";
  for(i = 0; i < sentence.length; i++){
    if (vowels.includes(sentence.toLowerCase()[i])){
      newSentence += "-"
    }
    else{
      newSentence += sentence[i];
    }
  }
  return newSentence;
}

$(document).ready(function(){
 $("form").submit(function(e){
    hideForm();
    e.preventDefault();
    var sentence = $("#sentence").val();
    var result = makePuzzle(sentence);
    $("p").text(result);
    
    function hideForm(){
      $("form").hide();
      $("#showform").show();
    }
 });

 $("#showform").click(function(){
    $("form").show();
 });
})