window.onload = function(){
    RandomSelect();
};

let SelectorRandomTextElement=document.getElementById("RandomText");
let RanText="" ;

function RandomSelect(){
    let Char ="0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"
    let NumberSelect=4 ;

    for (let i=0 ; i<NumberSelect ;i++){
        RanText += Char[Math.floor((Math.random() * Char.length ) )];
    };

    SelectorRandomTextElement.innerHTML= RanText ;
};


var CNABut = document.getElementById("CNABut");
CNABut.onclick=tran2;

function tran2(){
    window.open("CreateNewAcountPage.html","_self");
}







