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
    console.log('you are underweight.');
}
else{
    if(BMI >= 18.5 && BMI <=24.9){
        console.log('you are normal')
    }
    else{
        if(BMI >=25 && BMI <= 29.9){
            console.log('you are overweight')
        }
        else{
            console.log('you are obese')
        }
    }
}