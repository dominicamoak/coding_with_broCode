
function learnJavaScript() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const learntJavaScript = true;

            if (learntJavaScript) {
                resolve("I feel confident with JavaScript! 💪🏽");
            } else {
                reject("I don't feel confident with JS 😭");
            }
        }, 3000);
    });
}

function learnTypeScript() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const learntTypeScript = true;

            if (learntTypeScript) {
                resolve("I feel confident with TypeScript! 💪🏽");
            } else {
                reject("I don't feel confident with TypeScript 😭");
            }
        }, 1500);
    });
}

function learnPython() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const learntPython = true;

            if (learntPython) {
                resolve("I feel confident with Python! 💪🏽");
            } else {
                reject("I don't feel confident with Python 😭")
            }
        }, 2000);
    });
}

function learnSQL() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const learntSQL = true;

            if (learntSQL) {
                resolve("I feel confident with SQL! 💪🏽");
            } else {
                reject("I don't feel confident with SQL 😭")
            }
        }, 1500);
    });
}

function learnNodeJS() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const learntNodeJS = true;

            if (learntNodeJS) {
                resolve("I feel confident with NodeJS! 💪🏽");
            } else {
                reject("I don't feel confident with NodeJS 😭")
            }
        }, 2500);
    });
}

function learnC() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const learntC = true;

            if (learntC) {
                resolve("I feel confident with C! 💪🏽");
            } else {
                reject("I don't feel confident with C 😭")
            }
        }, 3000);
    });
}

learnJavaScript()
.then(value => {
    console.log(value);
    return learnTypeScript();
})
.then(value => {
    console.log(value); 
    return learnPython();
})
.then(value => {
    console.log(value); 
    console.log("Apply for Software Engineer roles 😌")
    return learnNodeJS();
})
.then(value => {
    console.log(value); 
    return learnSQL()
})
.then(value => {
    console.log(value); 
    return learnC()
})
.then(value => {
    console.log(value); 
    console.log("Feeling good as a Programmer! 🫡")
})
.catch(error => console.error(error));



