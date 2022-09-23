const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
const calcular = document.getElementById('calcular');
const reiniciar = document.getElementById('reiniciar');
const imc = document.getElementById('imc');
const progress = document.getElementById('progress');
const resultado = document.getElementById('resultado');
const progresso = document.getElementById('progresso');
const errorPeso = document.getElementById('errorPeso');
const errorAltura = document.getElementById('errorAltura');


calcular.addEventListener('click', () => {
    const pesoValue = peso.value;
    const alturaValue = altura.value;
    let imcValue = 0;
    if(pesoValue !== '' && alturaValue !== '') {
        if  (alturaValue >= 35 && alturaValue <300) {
            imcValue = pesoValue / (alturaValue ** 2) * 10000;
            errorAltura.textContent = '';
        } else if (alturaValue >= 0.35 && alturaValue < 3) {
            imcValue = pesoValue / (alturaValue ** 2);
            errorAltura.textContent = '';
        } else {
            errorAltura.textContent = 'Altura inválida';
        }
        imc.textContent = imcValue.toFixed(2);
        resultado.textContent = imcValue.toFixed(2);
        if (imcValue < 18.5) {
            progress.style.borderColor = 'hsl(200, 52%, 52%)';
        }
        if (imcValue >= 18.5 && imcValue < 25) {
            progress.style.borderColor = 'hsl(140, 52%, 52%)';
        }
        if (imcValue >= 25 && imcValue < 30) {
            progress.style.borderColor = 'hsl(60, 52%, 52%)';
        }
        if (imcValue >= 30) {
            progress.style.borderColor = 'hsl(10, 52%, 52%)';
        }
    }else if (pesoValue === '' && alturaValue === '') {
        errorPeso.textContent = 'El campo peso no puede estar vacío';
        errorAltura.textContent = 'El campo altura no puede estar vacío';
    
    } else if (pesoValue === '' && alturaValue !== '') {
        errorPeso.textContent = 'El campo peso no puede estar vacío';
        errorAltura.textContent = '';
    }else if (alturaValue === '' && pesoValue !== '') {
        errorAltura.textContent = 'El campo altura no puede estar vacío';
        errorPeso.textContent = '';
    }
    else {
        errorPeso.textContent = '';
        errorAltura.textContent = '';
    }
});

reiniciar.addEventListener('click', () => {
    peso.value = '';
    altura.value = '';
    resultado.textContent = 'IMC';
    imc.textContent = '';
    progress.style.borderColor = 'hsl(140, 29%, 72%)';
});