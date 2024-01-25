const open_btns = document.querySelectorAll('.open-btn');
const close_btn = document.querySelector('.close-btn');
const close_btn_mobile = document.querySelector('.closeMobile');
const popup = document.querySelector('.popup');
const main_popup = document.querySelector('.bg-popup');

open_btns.forEach((open_btn) => {
  open_btn.addEventListener('click', () => {
    popup.style.display = 'flex';
    main_popup.style.cssText = 'animation:slide-in .5s ease; animation-fill-mode: forwards;'
  });
});

close_btn.addEventListener('click', () => {
  main_popup.style.cssText = 'animation:slide-out .5s ease; animation-fill-mode: forwards;'
  setTimeout(()=>{
    popup.style.display = 'none';
  }, 500);
});

close_btn_mobile.addEventListener('click', () => {
  main_popup.style.cssText = 'animation:slide-out .5s ease; animation-fill-mode: forwards;'
  setTimeout(()=>{
    popup.style.display = 'none';
  }, 500);
});

window.addEventListener('click', (e) => {
  if (e.target == document.querySelector('.popup-overlay')){
    popup.style.cssText = 'animation:slide-out .5s ease; animation-fill-mode: forwards;'
    setTimeout(()=>{
    popup.style.display = 'none';
    }, 500);
  }
});

// Código JavaScript
let inputNumber = document.getElementById("input");
let multipliedValue = document.getElementById("output");
let dolar_value = document.getElementById("change-value");

fetch('https://us-central1-cloud-funcition.cloudfunctions.net/api/value')
.then(response => response.json())
.then(data => {
    dolar_value.textContent = "Dólar hoy: 1 USD = $" + data.value.toFixed(4) + " MXN";
})
.catch(error => console.error(error));

//
inputNumber.addEventListener('input', () => {
fetchData().then(data => {
    console.log("Data:", data); // Verificar el valor de data
    const result = inputNumber.value * data;
    multipliedValue.value = result.toFixed(2);
    console.log(result)
});
});

//
multipliedValue.addEventListener('input', () => {
fetchData().then(data => {
    console.log("Data:", data); // Verificar el valor de data
    const result = multipliedValue.value / data;
    setDollarSign(result.toFixed(2));
    console.log(result)
});
});

// Esta función obtiene los datos de la API
async function fetchData(){
    // Hacer una solicitud a una API para obtener el valor de multiplicación
    const response = await fetch("https://us-central1-cloud-funcition.cloudfunctions.net/api/value");
    const clear = await response.json();
    const multiplicationValue = clear.value;  
    return multiplicationValue;
}


dolar_value.textContent = fetchData();
