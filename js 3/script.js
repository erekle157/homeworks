///////////////////დავალება 1 
// let user = {
//     name: 'John',
//     surname: 'Smith'
//     };
//     user.name = 'Pete'
//     // delete user.name
//     console.log (user)

    

///////////////////დავალება 2
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//     }

// console.log(salaries.Ann + salaries.John + salaries.Pete)

/////////////////დავალება 3

// let array = ["jazz", "blues"]

// array[2] = "Rock-n-Roll"


// console.log(array)

// let middle = array[(array.length - 1) / 2]
// console.log(middle)

// array[middle] = "classic"

// // console.log(array[0])
// console.log(array.shift())
// console.log(array.unshift("Prepend Rap","reggea"))


///////////////////დავალება 4
// let array = [2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (i = 2; i < 11; i++) {
//     if (i % 2 === 0) {
//       console.log(i);  
//     }
// }

// let i = 0
// while (i <= 8) {
//    i +=2
//    console.log(i)
// }

///////////////////დავალება 5
// 1)
// const array = [1, 5, 987, 21, 56, 928, 1, 23, 5, 91, 34, 51]

// const callbackfn = (Element) => {
//     if (Element % 2 == 0){
//         return false
//     } else {
//         console.log(Element) 
//     }
// }

// array.forEach(callbackfn)

// 2)
// const result = array.filter(array => array % 2 == 1)

// console.log(result)

// console.log(result.length)

//3)
// let minNum = (array, minNum = array[0]) => {
//     for (let i = 0; i < array.length; i++) {
//         if(minNum > array[i]) minNum = array[i]
//     }
//     return minNum
// }
// console.log(array(minNum))

/////////////////////დავალება 6

// const array = [1, 5, 987, 21, 56, 928, 1, 23, 5, 91, 34, 51]

// let map1 = array.map(x => x * 2)

// console.log(map1)

/////////////////////დავალება 7

// let array = [{
//     name: 'erekle',
//     solary: 502,
//     occupation: 'web developer',
//     },{ 
//     name: 'saba',
//     solary: 500,
//     occupation: 'menagve',
//     },{ 
//     name: 'toko',
//     solary: 500,
//     occupation: 'danagvianeba',
//     }, { 
//     name: 'giorgi',
//     solary: 500,
//     occupation: 'web dacva',
//     }, { 
//     name: 'giorgi2',
//     solary: 501,
//     occupation: 'web developer',
// }] 
// const callbackfn = (item) => item.solary > 500

// const result = array.filter(callbackfn)

// console.log(result)
