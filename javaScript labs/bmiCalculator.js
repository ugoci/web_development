function bmiCalculator (weight, height) {
    var bmi = weight / (height * height);
    return bmi
    }
    
bmiCalculator(65, 1.8);


function bmiCalculator (weight, height) {
    var weight = prompt("what is your weight?")
    var height = prompt("what is your height?")
    var bmi = weight / (height * height);
    
    if (bmi < 18.5){console.log("Your BMI is " + bmi + " so you are underweight");}
    if (bmi > 18.5 && bmi <= 24.9){console.log("Your BMI is " + bmi + " so you are normal weight");}
    if (bmi > 24.9){console.log("Your BMI is " + bmi + " so you are overweight");}
    
    
    return bmi
    }
    
bmiCalculator();


function bmiCalculator (weight, height) {
    var bmi = weight / (height * height);
    
    if (bmi < 18.5){var interpretation = "Your BMI is " + bmi + ", so you are underweight.";}
    if (bmi > 18.5 && bmi <= 24.9){var interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";}
    if (bmi > 24.9){var interpretation = "Your BMI is " + bmi + ", so you are overweight.";}
    
    return interpretation;
}