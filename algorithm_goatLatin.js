// Input: "The quick brown fox jumped over the lazy dog"
// Output: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"

 

// Notes:

//     S contains only uppercase, lowercase and spaces. Exactly one space between each word.
//     1 <= S.length <= 150.


// */


//1. split the string, put it into array 
//2. if arr[i][0] === (a, e, i, o, u, A, E, I, O, U), then arr[i] + ma + (i+1)*a 
//3.else, remove the fist letter of the array. then arr[i] + arr[i][0] + ma + (i+1)*a 
//4. array.join(" ")

const goatLatin(str) {
 
    arr = str.split()  //{I, speak, Goat, Latin}
    let vowelSet = new Set(['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']);
    for (i, i< arr.size, i++)
    if (vowelSet.has(arr[i][0])){
        arr[i] + ma + (i+1)*a
    }else {
        arr[i].substring(1) + arr[i][0] +ma + (i+1)*a
    }                           
}


//const goatLatin = (sting) => {
//     let newArr = string.split(' ')
//     let vowelSet = new Set(['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']);
//     let multiply = 1;

//      newArr.forEach((e)=> {
         
//          if(!vowelSet.has(e[0])){
//              e = e.substring(1) + e[0] + 'ma' + ;
//          }
//          e += 'ma' // e = e+'ma'
//          e+= 'a'.repeat(multiply);
//          multiply++;
//          }
//      })
//     let res = newArr.join(' ');
    //return res
// }
