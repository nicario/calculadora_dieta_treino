let adicionar = document.querySelector(".button__section2");
let exercicio = document.querySelector(".select__div");
let series = document.querySelector(".select__div2");
let repeticoes = document.querySelector(".select__section2");
let div = document.querySelector(".div4__section2");
let calorias = document.querySelector(".p__section");

adicionar.addEventListener('click', (e) => {
    e.preventDefault(); 
    let divextra = document.createElement("div");
    let inform = document.createElement("h5");
    let texto = document.createElement("p");
    let seriextra = document.createElement("h5");
    let textoextra = document.createElement("p");
    let repeticaoextra = document.createElement("h5");
    let textoextraextra = document.createElement("p");
    
    inform.append("Exercicio:");
    texto.append(exercicio.value)
    
    seriextra.append("Séries:");
    textoextra.append(series.value);

    repeticaoextra.append("Repetições:");
    textoextraextra.append(repeticoes.value);
    
    divextra.appendChild(inform);
    divextra.appendChild(texto);
    divextra.appendChild(seriextra);
    divextra.appendChild(textoextra);
    divextra.appendChild(repeticaoextra);
    divextra.appendChild(textoextraextra);

    
    div.appendChild(divextra);
    
    divextra.classList.add("border", "w-25", "h-25", "text-dark", "bg-warning", "p-2", "border-primary");

    let i;
    let j;

    if(exercicio.value == 'Rosca B.'){
      i =  Math.round((repeticoes.value*1.17)*series.value);
      calorias.value = i;
    }
    calorias.textContent = `${calorias.value += i} cal`
    console.log(i);
})