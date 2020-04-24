var vowels = ["a","e","i","o","u"];
function makePuzzle(sentence){
  for(i =0, i < sentence.length; i++){
    if (vowels.includes(sentence[i])){
      sentence[i] = "-";
    }
  }
  return sentence;
}

$(document).ready(function(){
 $("form").submit(function(e){
    e.preventDefault();
    var sentence = $("#sentence").val();
    var result = makePuzzle(sentence);
    $("p").text(result);
 });
})