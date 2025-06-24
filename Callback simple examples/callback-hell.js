function task1(callback) { // 5 sec -
    setTimeout(()=>{
       console.log("Task 1 complete.") 
       callback();
    }, 5000)
}
function task2(callback) { //5.5 sec -
    setTimeout(()=>{
        console.log("Task 2 complete.");
        callback();
     }, 5500) 
}
function task3(callback) { //1 sec -
    setTimeout(()=>{
        console.log("Task 3 complete.");
        callback();
     }, 1000)
}
function task4(callback) { //6 sec -
    setTimeout(()=>{
        console.log("Task 4 complete.");
        callback();
     }, 6000)
}
function task5(callback) { //0.1sec -
    setTimeout(()=>{
        console.log("Task 5 complete.");
        callback();
     }, 100)
}
function task6(callback) { //0.2sec -
    setTimeout(()=>{
        console.log("Task 6 complete.");
        callback(); 
     }, 200)
}
function task7(callback) { //4.5 sec -
    setTimeout(()=>{
        console.log("Task 7 complete.");
        callback(); 
     }, 4500)
}
function task8(callback) { //1sec -
    setTimeout(()=>{
        console.log("Task 8 complete.");
        callback(); 
     }, 1000)
}
function task9(callback) { //2sec -
    setTimeout(()=>{
        console.log("Task 9 complete.");
        callback(); 
     }, 2000)
}
function task10(c1) { //1.5sec -
    setTimeout(()=>{
        console.log("Task 10 complete.");
        c1();
     }, 1500)
}

function completionMsg() { //~0sec -
    console.log("Every task is now complete.");
    console.log("Callback Hell is now intact!");
}



//invoking outer method and passing callback using arrow function method.
task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=>{
                task5(()=>{
                    task6(()=>{
                        task7(()=>{
                            task8(()=>{
                                task9(()=>{
                                    task10(()=>{
                                        completionMsg();
                                    });
                                })
                            })
                        })
                    })
                })
            })
        })
    });
})

