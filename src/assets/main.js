let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here

    if(answer || attempt == ''){
      setHiddenFields();
    }
    if(validateInput(input.value)){
      attempt=attempt++;
    }else{
      return false;
    }
}

//implement new functions here
function setHiddenFields(){
  let answer = Math.floor(Math.random()*10000);
  let ansStr = answer.toString();
  while (ansStr.length<4){
    ansStr = '0' + ansStr;
  };
  let attempt = 0;
  return ansStr;
}

function setMessage(msg){
  document.getElementById('message').innerHTML = msg;
}

validateInput(param){
  if(param.length = 4){
    return true;
  }else{
    setMessage("Guesses must be exactly 4 characters long");
    return false;
  }
}

getResults(param){
  document.getElementById('results').innerHTML = '<div class="row"><span class="col-md-6">'+param+'</span><div class="col-md-6">'
}
