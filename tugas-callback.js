// console.log("satu");
// setTimeout(() => {
//     console.log("Dua")
// }, 3000);
// console.log("Tiga");




// console.log("Sate Padang");


// setTimeout(() => {
//     console.log("Sate Ayam Madura")
// }, 1000);

// function wait(Callback) {
//     console.log("Batagor");
//     Callback()
// }

// function makan1() {
console.log("Sate Padang")
// }

function makan2(callback) {
    setTimeout(function () {
        console.log("Sate Ayam Madura")
        callback()
    }, 1000);
}

function makan3() {
    console.log("Batagor")
}

// makan1()
makan2(makan3)


// const hitung = (angka1, angka2) => {
//     let hasil = angka1 * angka2
//     let result = `${angka1} + ${angka2} = ${hasil}`
//     return result;
// }

// const cd = () => {
//     return "Ini Callback"
// }

// console.log(hitung(10, 20, cd))