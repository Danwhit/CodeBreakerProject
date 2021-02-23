let answerInput = document.getElementById('answer');
let attemptDiv = document.getElementById('attempt');
let answer = Math.floor(Math.random()*10000);
let ansStr = answer.toString();
let attempt = 0;
let guess = document.getElementById('guessing-div');
let replay = document.getElementById('replay-div');
let code = document.getElementById('code');

function guessNum() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here

    if(answerInput || attemptDiv == ''){
      setHiddenFields();
    }
    if(validateInput(input.value)){
      attempt++;
    }else{
      return false;
    }
    if(getResults(input.value)){
      setMessage('You Win!');
      showAnswer(true);
      showReplay();
    }else if (attempt>10) {
      setMessage('You lose!');
      showAnswer(false);
      showReplay();
    }else{
      setMessage('Incorrect, try again');
    };

}

//implement new functions here
function setHiddenFields(){
  while (ansStr.length<4){
    ansStr = '0' + ansStr;
  };
  return ansStr;
}

function setMessage(msg){
  document.getElementById('message').innerHTML = msg;
}

function validateInput(param){
  if(param.length = 4){
    return true;
  }else{
    setMessage("Guesses must be exactly 4 characters long");
    return false;
  }
}

function getResults(param){
  document.getElementById('results').insertAdjacentHTML('beforeend','<div class="row"><span class="col-md-6">'+param+'</span><div class="col-md-6">');
  let paramArray = param.split('');
  let ansArray = ansStr.split('');
  let correct = 0;
  for(var i=0;i<ansArray.length;i++){
    if(ansArray.includes(paramArray[i])){
      if(ansArray[i]===paramArray[i]){
        document.getElementById('results').insertAdjacentHTML('beforeend','<span class="glyphicon glyphicon-ok"></span>');
        correct++;
      }else{
        document.getElementById('results').insertAdjacentHTML('beforeend','<span class="glyphicon glyphicon-transfer"></span>');
      }
    }else{
      document.getElementById('results').insertAdjacentHTML('beforeend','<span class="glyphicon glyphicon-remove"></span>');
    }
  }
  document.getElementById('results').insertAdjacentHTML('beforeend','</div></div>');
  if(correct===4){
    return true;
  }else{
    return false;
  }
}
function showAnswer(boo){
  code.innerHTML = '<strong>'+ansStr+'</strong>';
  if(boo){
    code.className += ' success';
  }else{
    code.className += ' failure';
  }
}
function showReplay(){
  guess.style.display = 'none';
  replay.style.display = 'block';
}
