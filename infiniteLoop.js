 // ! INFINITE LOOP WARNING !

var no = 1;
function loop1(){
    for(;;){
     console.log(`${no} @abythomas300 hacked into this mainframe.(L1)`);
     no++;
     loop2();
     } 
 }
 
 function loop2(){
     for(;;){
     console.log(`${no} @abythomas300 hacked into this mainframe.(L2)`);
     no++;
     } 
 }
 
 loop1();

