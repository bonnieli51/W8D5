function sum() {
    let result = 0; 

    for (let i = 0; i < arguments.length; i++){
        result += arguments[i];
    };
    return result;
};


function sum(...args) {
    let result = 0; 

    for (let i = 0; i < args.length; i++){
        result += args[i];
    };
    return result;
};

console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2, 3, 4, 5));