// const colors = ['teal', 'cyan', 'peach', 'purple']

// function yell(val, i){
//     const caps =val.toUpperCase();
//     console.log(`At index ${i}, ${caps}`);
// }

// colors.forEach(yell)

// const prices = [30.99, 19.99, 2.5, 99.0];

// let total = 0;

// prices.forEach(function(price){
//     total += price;
// })

// console.log(total);




// function myForEach(arr, func){
//     for(let i=0; i => arr.length; i++){
//         let answer = func(arr[i], i);
//         console.log(answer)
//     }
// }

//ALL OF THE ABOVE IS FOR THE forEach ARRAY METHOD

//map is below here, it creates a new array and iterates through an old array. Running a callback for each value in the old array. Then it adds the effect from the callback on the old array into the new array. Then returns the new array

// const numbers = [21,37,64,99,142]

// const negatives = numbers.map(function(num){
//     return num*-1;
// });

// const doubles = numbers.map(function(num){
//     return num *2;
// })


// const todos = [
//     {
//      id: 1,
//      text: 'walk the dog',
//      priority: 'high'   
//     },
//     {
//         id: 2,
//         text: 'walk the chickens',
//         priority: 'medium'   
//     },
//     {
//         id: 3,
//         text: 'feed the cat',
//         priority: 'low'   
//     },
//     {
//         id: 4,
//         text: 'put out fire in my garage',
//         priority: 'very high'   
//     }
// ]

// const todoText = todos.map(function(todo){
//     return todo.text;
// })

// const links = Array.from(document.querySelectorAll('a'))

// const urls = links.map(function(a){
//     return a.href;
// })
//own version of map

// const arr = [1,2,3]

// function myMap(arr, func){
//     const mappedArray = []
//     for(let i = 0; i<arr.length; i++){
//         const val = func(arr[i], i, arr)
//         mappedArray.push(val);
//     }
//     return mappedArray;
// }

//the below can be any type of function, doesn't have to be a math one.

// const changedMap = myMap(arr, function(math){
//     return math*4;
// }
// )



//own version of map
//all of the above are map methods. Pretty fun.



//below here is filter demo
//creates a new array, loops through old array and runs callback function on each value in the array. If callback function is true, the new value is pushed into array, if false it is not in the new array.

const words = [
    'immunoelectrophoretically',
	'rotavator',
	'tsktsk',
	'psychophysicotherapeutics',
	'squirrelled',
	'crypt',
	'uncopyrightable',
	'cysts',
	'pseudopseudohypoparathyroidism',
	'unimaginatively'
]

const longWords = words.filter(function(word){
    return word.length >=20;
})

const cOrUWords = words.filter(function(word){
    return word[0] === 'u'|| word[0] === 'c';
});

const isVowel = function(char){
    return 'aeiou'.indexOf(char) !== -1;
}

const containsVowel = function(word){
    for(let char of word){
        if(isVowel(char)) return true;
    }
    return false
}

// const hasVowels = words.filter(containsVowel);

// const noVowels = words.filter(function(word){
//     return !containsVowel(word);
// })

// const allCheckBoxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));

// const checked = allCheckBoxes.filter(function(box){
//     return box.checked;
// })

// const completedItems = checked.map(function(checkbox){
//     return checkbox.parentElement.innerText;
// })

// function extractCompletedTodos(){
//     const allCheckBoxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));
//      return allCheckBoxes
//      .filter(function(box){
//         return box.checked;
//     })
//      .map(function(checkbox){
//         return checkbox.parentElement.innerText;
//     });
// }

// Making my own filter

function myFilter(arr, func){
    const newArr = [];
        for(let i=0; i < arr.length; i++){
            if(func(arr[i], i, arr)){
                newArr.push(arr[i]);
            }
        }
    return newArr
}