//https://scotch.io/tutorials/javascript-promises-for-dummies#toc-creating-a-promise
var isMomHappy = true;

// Promise
var willIGetNewPhone = new Promise((resolve, reject) => {
    if (isMomHappy) {
        var phone = {
            brand: 'Samsung',
            color: 'black'
        };
        console.log("Passei 1");
        resolve(phone); // fulfilled
    } else {
        console.log("Passei 2");
        var reason = new Error('mom is not happy');
        reject(reason); // reject
    }
});

console.log("Passei 3");
var askMom = () => {
    console.log("Passei 4");
    willIGetNewPhone
    .then(function (fulfilled) {
            console.log("Passei 5");
            // yay, you got a new phone
            console.log(fulfilled);
            // output: { brand: 'Samsung', color: 'black' }
        })
        .catch(function (error) {
            console.log("Passei 6");
            // oops, mom don't buy it
            console.log(error.message);
            // output: 'mom is not happy'
        });
    };
    
console.log("Passei 7");
askMom();
console.log("Passei 8");