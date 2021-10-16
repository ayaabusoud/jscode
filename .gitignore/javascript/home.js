function toFarenheit(){
    var cel = prompt('Enter a Celsius degree :');
    var far = (cel * 9/5)+32 ;
    var h1=document.createElement('h1');
    var answer = document.createTextNode('Farenheit degree = ' + far);
    h1.setAttribute('id' , 'far');
    h1.appendChild(answer);
    document.getElementById('flex-result').appendChild(h1);
    console.log(far);
}

function reset (){
    document.getElementById('far').remove();
}

function toCelsius(){
    var f = prompt('Enter a Farenheit degree :');
    var c = (f - 32)*(5/9) ;
    var h1=document.createElement('h1');
    var answer = document.createTextNode('Celsius degree = ' + c);
    h1.setAttribute('id' , 'c');
    h1.appendChild(answer);
    document.getElementById('result').appendChild(h1);
    console.log(c);
}

function resete (){
    document.getElementById('c').remove();
}