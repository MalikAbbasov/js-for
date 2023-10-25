// 1.prompt ilə daxil olunan ədədin , 2-nin quvveti  olub olmadigini tapan alqoritm yazin.
// let num = prompt("ededi daxil edin")
// for (let i = 0; i < num; i++) {
//     if (Math.pow(2, i) === num) {
//         console.log("duzdur");
//         break;
//     }
//     else{
//         console.log("yanlisdir");
//     }
// }


// 2.Göndərilmiş 2 ədəddən 1-cisini 2-cisinin qüvvətinə yüksəldən alqoritm yazin 
// let a = prompt("daxil edin")
// let b = prompt("daxil edin")
// let num = Math.pow(a, b);
// console.log(num);


// 3.1- den 1000e qeder  ededler icerisinde  reqemleri eyni olan ededlerin cemin tapin. example(11 ,222,333 ve  s)
// let a = 0;
// for (let i = 0; i < 1000; i++) {
//     a=
   
// }


// 4.Verilmis array-de cut ededlerin en boyuyunu tapan alqoritm yazin.
// const arr = [12, 45, 190, 201, 55]
// let num = 0
// for (let i = 0; i < arr.length; i++) {
//     if (num < arr[i] && arr[i]%2 === 0) {
//         num = arr[i]
//     }
// }
//  console.log(num);


//  5.Verilmis array-de tek ededlerin en kiciyinin index-ni tapan alqoritm yazin.
// const arr = [12, 45, 190, 201, 55, 33, 40, 44, 55]
// let num = 0
// for (let i = 0; i < arr.length; i++) {
//     if (num< arr[i]) {
//         num = arr[i]
        
//     }
// }

// let num2 = num
// for (let i = 0; i < arr.length; i++) {
//     if (num2> arr[i] && arr[i]%2 === 1) {
//         num2 = arr[i]
//         console.log(i);
//     }
    
// }

 

// 6.Verilmis array-de  sade ve murekkeb ededlerin sayini tapan alqoritm yazin.
// const arr = [12, 45, 190, 201, 55, 40, 44, 55, 13, 17];
// let sade = 0;
// let murekkeb = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0 || arr[i] % 3 === 0 || arr[i] % 5 === 0) {
//         murekkeb +=1
//     }
//     else{
//         sade +=1
//     }
    
// }
// console.log(murekkeb);
// console.log(sade);



// 7.Verilmis array-de minimum ededle maksimum ededin cemini array-in ededi ortasindan boyuk olub olmadigini yoxlayin.
// 8.Verilmish ededin en boyuk reqemini tapan alqoritm yazin. example: 709 en boyuk 9-dir, 37 en boyuk 7-dir.