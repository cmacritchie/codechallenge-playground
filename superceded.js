/// ANAGRAM START
// const anagram = (stringOne, stringTwo) => {
//     return cleanString(stringOne) === cleanString(stringTwo)
// }

// const cleanString = (text) => {
//     return text.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
// }

// console.log(anagram('Coding Test!', 'test: code'))
/// ANAGRAM End


//fibonacci print out nth number in fibonacci sequence
// const slowFib = (n) => {
//     if (n < 2) {
//         return n
//     }

//     return fib(n-1) + fib(n-2)
// }




// const memoize = (fn) => {
//     const cache ={}

//     return function(...args) {
//         // console.log('args, ', args, cache)
//         if (cache[args]) {
//           return cache[args];
//         }
    
//         // console.log("this, args", args)
//         const result = fn.apply(this, args);
//         cache[args] = result;
//         // console.log(cache)
//         return result;
//       };

// }
// startTime = performance.now();
// const fib = memoize(slowFib)
// endTime = performance.now()
// console.log(fib(35))
// console.log((endTime- startTime) / 1000)


const fibon = (n) => {
    if(n < 2){
        return n
    }
    return fastFib(n-1) + fastFib(n-2)
}

const memoize = (func) => {
    const cache = {}

    return function(...args) {
        if(cache[args]) {
            return cache[args]
        }

        const result = func.apply(this, args)
        cache[args] = result
        return result
    }
}

fastFib = memoize(fibon)

console.log(fibon(8))