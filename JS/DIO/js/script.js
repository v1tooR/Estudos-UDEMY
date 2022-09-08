/*const PRECO = 2;
var desconto = 0.2;
var total = PRECO - desconto;

console.log(total);*/

/*function soma(a, b){
    return a + b;
}

console.log(soma(3, 5))*/
/*function returnEvenValues(array){
    
    let evenNums = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2!==0){
            evenNums.push(`${array[i]}`);
        }else{
            document.write(`<h3>${array[i]} não é impar!<br><br>`);
        }
    }
    document.write((evenNums));
}
let array = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8]
returnEvenValues(array);*/
let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
	count++;
	CURRENT_NUMBER.innerHTML = count;
}

function decrement() {
	count--;
	CURRENT_NUMBER.innerHTML = count;
}
