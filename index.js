var numbers = document.querySelectorAll("p");
var generate = document.querySelector("button");
var arrayOfNumbers = [numbers.length];
var squares = document.getElementsByClassName("number");

var  rand;


//Event Listener - Each Square
for(var i = 0; i < squares.length; i++){
    squares[i].addEventListener("click", function(){
        var temp = this.textContent;
        removeFromArray(temp);
        console.log(temp);
    })
}

generateNumbers();


function generateNumbers(){
    for(var i = 0; i < numbers.length; i++){

        rand = Math.floor((Math.random() * 59) + 1);
       
        while(arrayOfNumbers.includes(rand)){
            rand = Math.floor((Math.random() * 59) + 1);
        }
        arrayOfNumbers[i] = rand;

        numbers[i].textContent = rand;
    }
        console.log(arrayOfNumbers);
}

//Event Listener - Generate Button
generate.addEventListener("click", function(){
    for(var i = 0; i < numbers.length; i++){   
         arrayOfNumbers[i] = 0;
    }               
    generateNumbers();
});


function removeFromArray(num){
    for(var i = 0; i < arrayOfNumbers.length; i++){
        if(arrayOfNumbers[i] == num){
            console.log("hey");
            arrayOfNumbers[i] = 0;
           generateNewNumber(i);
        }
        
    }
}

function generateNewNumber(index){
    
    var tempRand;
    tempRand = Math.floor((Math.random() * 59) + 1);
    
    while(arrayOfNumbers.includes(tempRand)){
        tempRand = Math.floor((Math.random() * 59) + 1);
    }
    
    arrayOfNumbers[index] = tempRand;
    numbers[index].textContent =  tempRand;
    
    
}

