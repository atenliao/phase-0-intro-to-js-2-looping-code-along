// Code your solutions in this file
// for(let age = 30; age<40; age++){
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
// }



function writeCards(names, event){
    const msg = [];
    for(let i= 0; i<names.length; i++){
        msg.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }

    return msg;
}

writeCards(["Charlie","Samip","Ali"], "birthday");


function countDown(number){
    let i = number;
    while( i >= 0){
        console.log(i--);
        debugger;
        
    }
}

countDown(10);
