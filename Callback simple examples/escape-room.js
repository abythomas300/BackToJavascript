//Escape room simulation

//You're trapped in a high-tech digital escape room with 5 security stages.
//You must complete each stage in order to unlock the next.
//Each stage takes some time (simulated with setTimeout).
//You must complete all in order, and finally see: "🚪 Escape successful! You are free!"

function stage1(callback) {
    setTimeout(()=>{
        console.log(`Stage 1 complete 🏁 (${3.5}s)`)
        callback()
    }, 3000) 
}

function stage2(callback) {
    setTimeout(()=>{
        console.log(`Stage 2 complete 🏁 (${2.5}s)`)
        callback()
    }, 2500)
}

function stage3(callback) {
    setTimeout(()=>{
        console.log(`Stage 3 complete 🏁 (${1}s)`)
        callback()
    }, 1000)
}

function stage4(callback) {
    setTimeout(()=>{
        console.log(`Stage 4 complete 🏁 (${1.2}s)`)
        callback()
    }, 1200)
}

function stage5(callback) {
    setTimeout(()=>{
        console.log(`Final stage complete 🏁 (${4.5}s)`)
        callback()
    }, 4500)
}

function escapeRoomComplete() {
    console.log("🚪 Escape successful! You are free!")
}


console.log("- - - - - ESCAPE ROOM SIMULATION - - - - -")
stage1(()=>{
    stage2(()=>{
        stage3(()=>{
            stage4(()=>{
                stage5(()=>{
                    escapeRoomComplete();
                })
            })
        })
    })
});
