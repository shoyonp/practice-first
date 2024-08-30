// ----------------
const burgerPrice = 500;
const boughtBurger = 600;

if(burgerPrice < boughtBurger){
    // console.log('free coke');
}
else{
    // console.log('coke 30 tk')
}



// -------------------
// var weight = 53;
// var height = 6;
// var BMI = weight / (height^2);
var BMI = 27;
if(BMI < 18.5){
    // console.log('you are underweight.');
}
else{
    if(BMI >= 18.5 && BMI <=24.9){
        // console.log('you are normal')
    }
    else{
        if(BMI >=25 && BMI <= 29.9){
            // console.log('you are overweight')
        }
        else{
            // console.log('you are obese')
        }
    }
}


// ---------------------
var marks = 76;
if(marks >=90 && marks <=100){
    console.log('A');
}
else if(marks >= 80 && marks <= 89){
    console.log('B');
}
else if(marks >= 70 && marks <= 79){
    console.log('C');
}
else if(marks >= 60 && marks <= 69){
    console.log('D');
}
else{
    if(marks >= 0 && marks <= 59){
        console.log('F')
    }
}