const people = ["Chris", "Anne", "Colin", "Terri", "Lola", "Sam", "Kay", "Bruce", "Phil" ];
var admit = [];
var refuse = [];

function doSecurityCheck(){
    for(const x of people){
        if(x === "Phil"){
            refuse.push(x);
        }else if(x === "Lola"){
            refuse.push(x);
        }else{
            admit.push(x);
        }
    }
}

function doPublishAdmittedList(){
    console.log("- - - ADMITTED LIST - - -");
    for(const y of admit){
        console.log(y);
    }
}

function doPublishRefusedList(){
    console.log("\n- - - REFUSED LIST - - -");
    for(const z of refuse){
        console.log(z);
    }
}


doSecurityCheck();
doPublishAdmittedList();
doPublishRefusedList();