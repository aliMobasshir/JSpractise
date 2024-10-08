const form = document.querySelector('form')

form.addEventListener("submit",function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector("#results")

    const bmi = (weight/((height*height)/10000)).toFixed(2)

    if(height==="" || height == 0 || isNaN(height)){
result.innerHTML = "please enter a valid height"
    } else if (weight==="" || weight == 0 || isNaN(weight)){
        result.innerHTML = "please enter a valid weight"}
        else if(bmi<18.6){
    result.innerHTML = `<span>${bmi}</span> ${"underweight"}`} else if (18.6<bmi && bmi<24.9){
        result.innerHTML = `<span>${bmi}</span> ${"normal"}`} else if(bmi>24.9){
            result.innerHTML = `<span>${bmi}</span> overweight` 
        }
})