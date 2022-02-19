
let screen= document.getElementById('screen');
let buttons= document.querySelectorAll('button')

let screenvalue="";
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttontext=e.target.innerText;
        console.log("button is",buttontext);

        if (buttontext=='X') {
            buttontext="*";
            screenvalue+=buttontext;
            screen.value+=screenvalue;
        }
        else if (buttontext=='c') {
            screenvalue='';
            screen.value=screenvalue;
        }
        else if (buttontext=='=') {
            screen.value=eval(screenvalue);
        }
        else{
            screenvalue+=buttontext;
            screen.value=screenvalue;
        }

    })
}










// let screen= document.getElementById('screen');
// let button =document.querySelectorAll('button');

// let screenvalue="";
// for(item of button){
//     item.addEventListener('click',(e)=>{
//         buttontext=e.target.innerText;
//         console.log("button is",buttontext)

//         if (buttontext=='X') {
//             buttontext='*';
//             screenvalue=buttontext;
//             screen.value+=screenvalue;
            
//         }
//         else if (buttontext=='c') {
//             screenvalue='';
//             screen.value=screenvalue;

//         }
//         else if (buttontext=='=') {
//             screen.value=eval(screenvalue);
//         }
//         else{
//             screenvalue=buttontext;
//             screen.value+=screenvalue;
//         }
//     })
// }
