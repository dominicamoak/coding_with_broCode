
function aceSection(callback) {
    setTimeout(() => {
        console.log("Num 1");
        callback()
    }, 3000);
}

function syncSection() {
    console.log("Num 2")
    console.log("Num 3")
    console.log("Num 4")
    console.log("Num 5")
}

aceSection(syncSection);

