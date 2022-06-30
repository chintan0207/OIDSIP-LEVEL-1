let celsius = document.getElementById("celsius");
let fehrenheit = document.getElementById("fehrenheit");

function celTofar(){
    let output = ( parseFloat(celsius.value) * 9/5 ) + 32;
    fehrenheit.value = parseFloat(output.toFixed(2));
    console.log(output);
}

function farTocel(){
    let output = ( parseFloat(fehrenheit.value) - 32 ) * 5/9;
    celsius.value = parseFloat(output.toFixed(2));
    console.log(output);
}



