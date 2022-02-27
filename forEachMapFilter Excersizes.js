//forEach
//double value
const numbers = [12,37,64,99,142]
const doublesArr = [];
numbers.forEach(function(num){ //using the above arrays, doubles the number and made a new array
    newNum = num *2;
    doublesArr.push(newNum);
    return doublesArr;
})

//onlyEven Values will return only the even values in a new array. Will use array numbers from above

const onlyEvenValues = []
numbers.forEach(function(num){
    let val = num % 2;
    if(val === 0){
        onlyEvenValues.push(num);
    }
    return onlyEvenValues;
})

//showFirstandLast will return only the first and last values from a word in an array of strings.

const words = ['colt','matt', 'tim', 'test']
function showfirstandlasthing(arr){
const showFirstandLast = []
words.forEach(function(word){
    let wordLength = word.length;
    let firstLetter = word[0];
    let lastLetter = word[(wordLength - 1)]
    let finalCombination = `${firstLetter}${lastLetter}`
    showFirstandLast.push(finalCombination);
})
return showFirstandLast;
}

//this next one is the addKeyAndValue function. It will add a key and value to all objects


function addKeyAndValue(obj, key, val){
    newArr = []
    obj.forEach(function(thing){
        thing[`${key}`] = val;
        newArr.push(thing);
    })
    return newArr;
}


//below will be the vowel count function

function vowelCount(word){
    let strArr = word.split("");
    let obj = {};
    const vowels = 'aeiou';

    strArr.forEach(function(w){
        let smallify = w.toLowerCase();
        if(vowels.indexOf(smallify) !== -1){
            if(obj[w]){
                obj[w]++;
            }
            else{
                obj[w] = 1;
            }
        }
    })
    return obj;
}







//Everything below here will be using the map methods
//doubling things with map
function doubleValuesWithMap(arr){
    const doubles = arr.map(function(arr){
    return arr *2;
})
return doubles;
}


//this next function will take an array and multiply with its current index
function valTimesIndex(arr){
    const power = arr.map(function(arr, i){
        return arr ** i;
    })
    return power;
}

//Will take the key out and returns a new array with the value of the key in that object.

//building off my old thing. It is here for an example to myself.
// function addKeyAndValue(obj, key, val){
//     newArr = []
//     obj.forEach(function(thing){
//         thing[`${key}`] = val;
//         newArr.push(thing);
//     })
//     return newArr;
// }

let currentObject = [
    {name: 'Elie'},
    {name: 'Tim'},
    {name: 'Matt'},
    {name: 'Colt'}
]

function extractKey(obj, key){
    return obj.map(function(val){
        return val[key];
    })
}

//That last one sucked. But on to extracting the full name!
const fullNames = [ //just to make the use in console easier
    {first: 'Elie', last:"Schoppik"},
    {first: 'Tim', last:"Garcia"},
    {first: 'Matt', last:"Lane"},
    {first: 'Colt', last:"Steele"}
  ]

  function extractFullName(obj){
    return obj.map(function(val){
        let fir = val['first']
        let las = val['last']
        return `${fir} ${las}`;
    })
}







//Done with map! Onto filter!
let exObj = [
    {first: 'Elie', last:"Schoppik"},
    {first: 'Tim', last:"Garcia", isCatOwner: true},
    {first: 'Matt', last:"Lane"},
    {first: 'Colt', last:"Steele", isCatOwner: true},
    {first: 'Tyler', last:"Brown", isCatOwner: false}
  ]


//filter the object by what is in the object value
function filterByValue(obj, key){
    return obj.filter(function(thing){
        return thing[key] === true;
    });
}

const easyArr = [1,2,3,4,5,13];
//fing a value in an array
function find(arr, key){
    return arr.filter(function(val){
        if(val === key){
            return key;
        }
    })
}

//hey! Easiest one thus far. Hate the rest of these
function findInObj(obj, key, val){
    return obj.filter(function(thing){
        return thing[key] === val;
    });
}

//almost there! this one was annoying for a little bit because I got weird error messages that were misleading
function removeVowels(str){
    str = str.toLowerCase();
    str = str.split('');
    let vowels = 'aeiou';
    return str.filter(function(letter){
        return vowels.indexOf(letter) === -1;
    })
}

const exArr = [1,2,3,4,5,16,17,119]

function doubleOddNumbers(arr){
    let odd = arr.filter(function(ex){
        let od = ex % 2;
        if(od !== 2){
            return od;
        }
    })
    return odd.map(function(dub){
        return dub * 2;
    })
}