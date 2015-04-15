$( document ).ready(function() {

  totalRecall.sets.forEach(function(val){ // drop a button in .set-selection for every set we have.
    var $input = $('<input/>', { type: "button", id: val, value: val, class: "tr-selectButton btn btn-default"});
    $input.appendTo($(".set-selection"));
  });

$('.tr-selectButton').each(function(){
  if ( totalRecall.defaultSets.indexOf($(this).attr('id') !== -1)) {
    $(this).addClass('btn-success').removeClass('btn-default');
  }
})


  var usableData = [];
  totalRecall.defaultSets.forEach(function(val){
    usableData = usableData.concat(totalRecall[val]);
  })

  var allData = usableData.slice(0);

  var correct = newPrompt();
  $('#next').toggle();
  var score = 0, total = 0;

  function newPrompt(){
    function getRandomPerson(){
      var index = Math.floor((Math.random() * usableData.length));
      if(usedIndexes.indexOf(index) === -1) {
        usedIndexes.push(index);
        return usableData[index];
      } else {
        return getRandomPerson();
      }
    }

    function getRandomPersonFromData(){
      var index = Math.floor((Math.random() * allData.length));
      if(usedIndexes.indexOf(index) === -1) {
        usedIndexes.push(index);
        return allData[index];
      } else {
        return getRandomPersonFromData();
      }
    }


    var usedIndexes = [];
    var correctIndex = Math.ceil(Math.random() * 3);
    var person = getRandomPerson();
    $('.img-square').attr("src", person[1]);
    $('#' + correctIndex).text(person[0]);

    //cycle through the 3 buttons

    for (var i = 1; i < 4; i++){
      //make sure you don't overwrite the button with the correct answer
      if (i !== correctIndex){
        //populate buttons
        var person = getRandomPersonFromData();
        $('#' + i).text(person[0]);
      }
    }
    console.log()
    return correctIndex;
  };

  //Event handler for clicking on button. Update scores, calls paintButtons method.
  $('.btn.btn-default.btn-lg.btn-block').click(function(){
    if ($(this).attr('id') === correct.toString()){
      score++;
      var name = $(this).text(); // string of correct person's name
      var indexToRemove;
      usableData.forEach(function(person, i){ // 
        if(person[0] === name) {
          indexToRemove = i;
        }
      });
      var removed = usableData.splice(indexToRemove,1);
    }
    total++;
    $(this).css("background-color","#FF0000");
    $('.score').text(score + ' out of ' + total + ' (' + Math.round((score / total * 100)) + '%)');
    paintButtons();
  });

  $('#playAgainButton').click(function(){
    location.reload(); // this is hacky, there's definitely a better way to do this
  });

  //Colors the correct button button green, disables all, shows next.
  function paintButtons(){
    for (var i = 1; i < 4; i++){
      var button = $('#' + i);
      if (button.attr('id') === correct.toString()){
        $(button).css("background-color","#0CFA1C");
        $(button).prop("disabled",true);
      } else {
        $(button).prop("disabled",true);
      }
    }
    $('#next').toggle();
  }

  $('#next').click(function(){
    if(usableData.length > 0) {
      correct = newPrompt();
      for (var i = 1; i < 4; i++){
        var button = $('#' + i);
        $(button).css("background-color", "white");
        $(button).prop("disabled",false);
      } 
    } else {
        // show end-game div
        $('#gameplay').hide();
        $('#endgame').show();
        //insert the final score into the endgame div
        $('#finalScore').text(score + ' out of ' + total + ' (' + Math.round((score / total * 100)) + '%)');


      }
    $(this).toggle();
  });

  $('.tr-selectButton').click(function(){
    $(this).toggleClass('btn-success btn-default');
    score = 0;
    total = 0;
    $('.score').text(score + ' out of ' + total);
    usableData = [];
    $('.tr-selectButton.btn-success').each(function(){
      usableData = usableData.concat(totalRecall[$(this).attr('id')]);
    });
  });
});
