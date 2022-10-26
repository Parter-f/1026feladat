function ellenorzes(szoveg , regex){

    let helyes = false;
    helyes = regex.test(szoveg);
    return helyes

}

document.getElementById('fizetbutton').addEventListener('click' , () =>{

let nameCountryCityPattern = /^[a-zA-Z]+$/;
let streetPattern = /^[a-zA-Z0-9 ]+$/
let postCodePattern = /^[a-zA-z 0-9]$/
let cardNumPattern = /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/ 

})