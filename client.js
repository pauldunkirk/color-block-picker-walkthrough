$(document).ready(function(){
  console.log('ready');
  var colorArray = ['Crimson', 'CornflowerBlue', 'DarkGreen', 'Gold' ]

// step 2 create loop to add divs to dom
  for (var i = 0; i < colorArray.length; i++) {
//add new colored block - could copy and paste this with diff colors - BUT LOOP IS BETTER - SEE ABOVE
  var newColorBlock = $('<div>'); //make empty div - not added yet
  newColorBlock.css('background-color', colorArray[i]); //color to empty div
  newColorBlock.addClass('colorBlock'); //class to empty div style height/width
  $('#colorBlockContainer').append(newColorBlock);//put on view and DOM
}
// step 3 select random color and add it to the dom

var randomNumberSelected = randomNumber(0, colorArray.length - 1); //get random # 0-4
var randomColor = colorArray[randomNumberSelected]; //uses randomNumberSelected as the number to pick from
$('#userColorPrompt').text(randomColor);

});

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
