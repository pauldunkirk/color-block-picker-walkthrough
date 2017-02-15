$(document).ready(function(){
  console.log('ready');
  var colorArray = ['Crimson', 'CornflowerBlue', 'DarkGreen', 'Gold' ]

// step 2 create loop to add divs to dom
  for (var i = 0; i < colorArray.length; i++) {
//add new colored block - could copy and paste this with diff colors - BUT LOOP IS BETTER - SEE ABOVE
  var newColorBlock = $('<div>'); //make empty div - not added yet
  newColorBlock.css('background-color', colorArray[i]); //color to empty div
  newColorBlock.addClass('colorBlock'); //class to empty div style height/width
  newColorBlock.data('colorOfBlock', colorArray[i]);
  $('#colorBlockContainer').append(newColorBlock);//put on view and DOM

}
//step 4 create event listener
$('#colorBlockContainer').on('click', '.colorBlock', function(){
  console.log('$(this).data() : ', $(this).data().colorOfBlock);
  var colorOfBlockSelected = $(this).data().colorOfBlock;
  if (randomColor == colorOfBlockSelected) {
    $('#responseSection').text('You got it!!');
  } else {
    $('#responseSection').text('Oh no! Try again!');
  }
});


// step 3 select random color and add it to the dom

var randomNumberSelected = randomNumber(0, colorArray.length - 1); //get random # 0-4
var randomColor = colorArray[randomNumberSelected]; //uses randomNumberSelected as the number to pick from
$('#userColorPrompt').text(randomColor);

});





//outside of jquery
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
