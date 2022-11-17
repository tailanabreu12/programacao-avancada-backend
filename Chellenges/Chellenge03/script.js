// Transforme a função a seguir em uma arrow function.

// function out(){
//     let x = 7
//     function sumXand5(){
//         return x+5
//     }
//     return sumXand5()
// }



// funcao como arrow function
/* const out = () => {
    let x = 7
    const sumXand5 = () => {
        return x+5
    }
    return sumXand5()
} */

// funcao como arrow function simplificada
const out = () => {
    let x = 7
    const sumXand5 = () => x+5
    return sumXand5()
}


// console.log(out()); // 12


// versao do professor
const fora = () => ((x=7), ()=>x+5)  ()

console.log(fora());