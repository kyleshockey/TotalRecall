            $( document ).ready(function() {

              var usableData = totalRecall.data.slice(0);

              var correct = newPrompt();
              $('#next').toggle();
              var score = 0, total = 0;

              function newPrompt(){
                var usedIndexes = [];
                var correctIndex = Math.ceil(Math.random() * 3);
                var person = getRandomPerson(usedIndexes);
                $('.img-square').attr("src", person[1]);
                $('#' + correctIndex).text(person[0]);

                //cycle through the 3 buttons

                for (var i = 1; i < 4; i++){
                    //make sure you don't overwrite the button with the correct answer
                    if (i !== correctIndex){
                        //populate buttons
                        var person = getRandomPerson(usedIndexes);
                        $('#' + i).text(person[0]);
                      }
                    }
                    return correctIndex;
                  };

                  function getRandomPerson(usedIndexes){
                    usedIndexes = usedIndexes || [];
                    var index = Math.floor((Math.random() * usableData.length));
                    if(usedIndexes.indexOf(index) === -1) {
                      usedIndexes.push(index);
                      return usableData[index];
                    } else {
                      return getRandomPerson();
                    }
                  }

            //Event handler for clicking on button. Update scores, calls paintButtons method.
            $('.btn.btn-default.btn-lg.btn-block').click(function(){
              if ($(this).attr('id') === correct.toString()){
                score++;
                usableData.splice(usableData.indexOf(correct),1);
              }
              total++;
              $(this).css("background-color","#FF0000");
              $('.score').text('Score: ' + score + ' out of ' + total + ' (' + Math.round((score / total * 100)) + '%)');
              paintButtons();
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
              correct = newPrompt();
              for (var i = 1; i < 4; i++){
                var button = $('#' + i);
                $(button).css("background-color", "white");
                $(button).prop("disabled",false);
              }
              $(this).toggle();
            });

          });
