function curriedSum(numArgs) {
    const numbers = [];

    return function _curriedSum(number){
        numbers.push(number);
        if (numbers.length === numArgs){
            return numbers.reduce( function(sum,num) {
                return sum += num;
            });
        } else {
            return _curriedSum;
        }
    }
};

// const sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1));

// let arr = [{id: '1' }, {id: '2'}]
// let obj = arr.reduce((acc, curr) => {
//     acc[curr.id] = curr
//     return acc;
// }, {})
// console.log(obj)

// const first = obj['1']

// const slowFirst = arr.find(el => el.id === '1')
// console.log(first)
// console.log(slowFirst)

Function.prototype.curry = function(numArgs){
    const curryArgs = [];
    let that = this;

    function _curry(arg) {  
        if (curryArgs.length < numArgs) {
            curryArgs.push(arg);   
        }

        if (curryArgs.length === numArgs) {
            that.apply(null, curryArgs);
        } else {
            return _curry;
        }
    }
    return _curry;
};

