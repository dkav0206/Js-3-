let globalArray = [];

function getELE(id){
    return document.getElementById(id);
}

function appendtoList(arrayName, buttonId){
    let addedNum = Number(getELE(buttonId).value);
    arrayName.push(addedNum);
}

function addNumber(){
    appendtoList(globalArray, "arrayNum");
    getELE("arrayHolder").innerHTML = "🤑" + globalArray;
}

//Bài 1 

function totalPositive(){
    let totalPlusNum = 0; 
    for(let i = 0; i <= globalArray.length; i++){ 
        if(globalArray[i]>0){
            totalPlusNum += globalArray[i];
        }
    }
    getELE("resultB1").innerHTML = "🤑" + totalPlusNum;
}


//Bài 2

function findcountPositive(){
    let countPlusNum = 0; 
    for(let i = 0; i <= globalArray.length; i++){ 
        if(globalArray[i]>0){
            countPlusNum ++;
        }
    }
    return countPlusNum;
}

function countPositive(){
    getELE("resultB2").innerHTML = "🤑" + findcountPositive();
}

//Bài 3
function findSmallest(){
    let smallestNum = [];
    for(let i = 0; i <= globalArray.length; i++){ 
        smallestNum.push(globalArray[i]);
    }
    smallestNum.sort();
    if (typeof(smallestNum[0] === "undefined")){
        getELE("resultB3").innerHTML = "🤑 Mảng chưa nhập giá trị" ;
    }else{
        getELE("resultB3").innerHTML = "🤑" + smallestNum[0];
    }
}

//Bài 4

function findSmallestPlus(){
    let smallestNumArray = [];
    for(let i = 0; i <= globalArray.length; i++){ 
        if(globalArray[i]>0){
            smallestNumArray.push(globalArray[i]);
        }
    }
    smallestNumArray.sort();

    if (typeof(smallestNumArray[0] === "undefined")){
        getELE("resultB4").innerHTML = "🤑 Không có số dương" ;
    }else{
        getELE("resultB4").innerHTML = "🤑" + smallestNumArray[0];
    }
}

//Bài 5
function lastOddNum(){
    let oddNum = [];
    for(let i = 0; i <= globalArray.length; i++){ 
        if(globalArray[i]%2 == 0){
            oddNum.push(globalArray[i]);
        }
    }
    if (typeof(oddNum[oddNum.length-1]) === "undefined"){
        getELE("resultB5").innerHTML = "🤑 -1 (không có sỗ chẵn trong mảng)";
    } else { 
        getELE("resultB5").innerHTML = "🤑" + oddNum[oddNum.length-1];
    }
}

//Bài 6

function swapIndex(){
    let indexOne = Number(getELE("indexOne").value);
    let indexTwo = Number(getELE("indexTwo").value);
    let indexSwap = globalArray[indexOne];
    globalArray[indexOne] = globalArray[indexTwo];
    globalArray[indexTwo] = indexSwap;
    getELE("resultB6").innerHTML = "🤑" + globalArray;
}

//Bài 7

function sorting(){
    globalArray.sort((a,b) => a - b);
    getELE("resultB7").innerHTML = "🤑" + globalArray;
}

//Bài 8
function findPrime(){
    let isPrime = true; 
    let firstPrime; 

    for(let a = 0; a <= globalArray.length; a++){
        if (globalArray[a] > 1){ 
            for (let i = 2; i < globalArray[a]; i++) {
                if (globalArray[a] % i == 0) {
                    isPrime = false;
                    break;  
                }
            }

            if (isPrime){ 
                firstPrime = globalArray[a];
                break;
            }
        }
        isPrime = true;
    }

    if (typeof(firstPrime) === "undefined"){
        getELE("resultB8").innerHTML = "🤑 -1 (không có só nguyên tố trong mảng)";
    } else { 
        getELE("resultB8").innerHTML = "🤑" + firstPrime;
    }
}

//Bài 9 
let newArray = [];

function addNumberInt(){
    appendtoList(newArray,"arrayNumInt");
    getELE("resultB9ArrayHolder").innerHTML = "🤑" + newArray;
}

function countInt(){
    let countIntNum = 0; 
    for(let i = 0; i <= newArray.length; i++){ 
        if(Number.isInteger(newArray[i])){
            countIntNum ++;
        }
    }
    getELE("resultB9").innerHTML = "🤑" + countIntNum;
}

//Bài 10
function findcountNegative(){
    let countMinusNum = 0; 
    for(let i = 0; i <= globalArray.length; i++){ 
        if(globalArray[i]<0){
            countMinusNum ++;
        }
    }
    return countMinusNum;
}

function comparePlusMinus(){
    if(findcountNegative() > findcountPositive()){
        getELE("resultB10").innerHTML = "🤑 Số âm > Số dương";
    } else if (findcountNegative() < findcountPositive()){ 
        getELE("resultB10").innerHTML = "🤑 Số dương > Số âm";
    } else {
        getELE("resultB10").innerHTML = "🤑 Số dương = Số âm";
    }
}
