var btnTranslate = document.querySelector("#select-me");
var text_val = document.querySelector("#text");
// console.log(btnTranslate);
btnTranslate.addEventListener('click', function clickEventHandler(){
    console.log(text_val.value);
    });
 
var textwo = document.querySelector('#text2');

function Translate(txt){
    var url = 'https://api.funtranslations.com/translate/pirate.json';
        return url + "?text=" + txt;
}

function errorHandler(error){
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")

}
function call() {
var gett = text_val.value;
fetch(Translate(gett)).then(response => response.json()).then(
    json => { var output = json.contents.translated;
    textwo.innerText = output;
    console.log(output);
    })
    .catch(errorHandler)
};
// Calling the button to perform the function on click
btnTranslate.addEventListener('click',call);