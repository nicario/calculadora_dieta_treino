let adicionar = document.querySelector(".button__section2");
let exercicio = document.querySelector(".select__div");
let series = document.querySelector(".select__div2");
let repeticoes = document.querySelector(".select__section2");
let div = document.querySelector(".div4__section2");
let calorias = document.querySelector(".p__section");
let serie = document.querySelector(".p2__section");
let repeticao = document.querySelector(".p3__section");
let tempo = document.querySelector(".p4__section");
let tempo_exerc = document.querySelector(".select2__section2");
let img = document.querySelector("#img");
let tempo_label = document.querySelector(".div6__section2");
let series_label = document.querySelector(".div2__section2");
let repeticoes_label = document.querySelector(".div3__section2");
let descanso_label = document.querySelector(".div5__section2");
let descanso = document.querySelector(".select3__section2");



exercicio.addEventListener('click', () => {
  if(exercicio.value == 'Rosca B.'){
    img.setAttribute('src', './assets/image/exercicioroscab.jpg');
    series_label.classList.remove('d-none');
    series_label.classList.add('d-block');
    repeticoes_label.classList.remove('d-none');
    repeticoes_label.classList.add('d-block');
    descanso_label.classList.remove('d-none');
    descanso_label.classList.add('d-block');
    tempo_label.classList.add('d-none');

  } else if(exercicio.value == 'Rosca S.') {
    img.setAttribute('src', './assets/image/exercicioroscas.jpg')
    series_label.classList.remove('d-none');
    series_label.classList.add('d-block');
    repeticoes_label.classList.remove('d-none');
    repeticoes_label.classList.add('d-block');
    descanso_label.classList.remove('d-none');
    descanso_label.classList.add('d-block');
    tempo_label.classList.add('d-none');

  }else if(exercicio.value == 'Esteira'){
    img.setAttribute('src', './assets/image/exercicioesteira.jpg')
    series_label.classList.remove('d-block');
    series_label.classList.add('d-none');
    repeticoes_label.classList.remove('d-block');
    repeticoes_label.classList.add('d-none');
    tempo_label.classList.remove('d-none');
    tempo_label.classList.add('d-block');
    descanso_label.classList.remove('d-none');
    descanso_label.classList.add('d-block');
    series.value = 0;
    repeticoes.value = 0;

  } else if(exercicio.value == 'Alternado H.') {
    img.setAttribute('src', './assets/image/exercicioalternadoh.jpg')
    series_label.classList.remove('d-none');
    series_label.classList.add('d-block');
    repeticoes_label.classList.remove('d-none');
    repeticoes_label.classList.add('d-block');
    descanso_label.classList.remove('d-none');
    descanso_label.classList.add('d-block');
    tempo_label.classList.add('d-none');
  
  }else if(exercicio.value == 'Alternado M.') {
    img.setAttribute('src', './assets/image/exercicioalternadom.jpg')
    series_label.classList.remove('d-none');
    series_label.classList.add('d-block');
    repeticoes_label.classList.remove('d-none');
    repeticoes_label.classList.add('d-block');
    descanso_label.classList.remove('d-none');
    descanso_label.classList.add('d-block');
    tempo_label.classList.add('d-none');
  
  } else if(exercicio.value == 'Triceps C.') {
    img.setAttribute('src', './assets/image/exerciciotricepsc.jpg')
    series_label.classList.remove('d-none');
    series_label.classList.add('d-block');
    repeticoes_label.classList.remove('d-none');
    repeticoes_label.classList.add('d-block');
    descanso_label.classList.remove('d-none');
    descanso_label.classList.add('d-block');
    tempo_label.classList.add('d-none');
  
  } else if(exercicio.value == 'Triceps T.') {
    img.setAttribute('src', './assets/image/exerciciotricepst.jpg')
    series_label.classList.remove('d-none');
    series_label.classList.add('d-block');
    repeticoes_label.classList.remove('d-none');
    repeticoes_label.classList.add('d-block');
    descanso_label.classList.remove('d-none');
    descanso_label.classList.add('d-block');
    tempo_label.classList.add('d-none');
  
  } else if(exercicio.value == 'Triceps F.') {
    img.setAttribute('src', './assets/image/exerciciotricepsf.jpg')
    series_label.classList.remove('d-none');
    series_label.classList.add('d-block');
    repeticoes_label.classList.remove('d-none');
    repeticoes_label.classList.add('d-block');
    descanso_label.classList.remove('d-none');
    descanso_label.classList.add('d-block');
    tempo_label.classList.add('d-none');
 
  } else if(exercicio.value == 'Supino F.') {
    img.setAttribute('src', './assets/image/exerciciosupinof.jpg')
    series_label.classList.remove('d-none');
    series_label.classList.add('d-block');
    repeticoes_label.classList.remove('d-none');
    repeticoes_label.classList.add('d-block');
    descanso_label.classList.remove('d-none');
    descanso_label.classList.add('d-block');
    tempo_label.classList.add('d-none');
  
  }else if(exercicio.value == 'Supino R.') {
    img.setAttribute('src', './assets/image/exerciciosupinor.jpg')
    series_label.classList.remove('d-none');
    series_label.classList.add('d-block');
    repeticoes_label.classList.remove('d-none');
    repeticoes_label.classList.add('d-block');
    descanso_label.classList.remove('d-none');
    descanso_label.classList.add('d-block');
    tempo_label.classList.add('d-none');
  
  } else if(exercicio.value == 'Supino I.') {
    img.setAttribute('src', './assets/image/exerciciosupinoi.jpg')
    series_label.classList.remove('d-none');
    series_label.classList.add('d-block');
    repeticoes_label.classList.remove('d-none');
    repeticoes_label.classList.add('d-block');
    descanso_label.classList.remove('d-none');
    descanso_label.classList.add('d-block');
    tempo_label.classList.add('d-none');
  }

})

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
    let a = parseInt(serie.textContent);
    let b = parseInt(repeticao.textContent);
    let t = parseInt(tempo.textContent);
    let j = parseInt(calorias.textContent);
    let c;

    if(exercicio.value == 'Rosca B.' || exercicio.value == 'Rosca S.' || exercicio.value == 'Alternado H.' || exercicio.value == 'Alternado M.' || exercicio.value == 'Triceps C.' || exercicio.value == 'Triceps T.' || exercicio.value == 'Triceps F.' || exercicio.value == 'Supino F.' || exercicio.value == 'Supino R.' || exercicio.value == 'Supino I.'){
      i =  Math.round((repeticoes.value*1.17)*series.value);
      j += i;
      a += parseInt(series.value);
      b += (parseInt(repeticoes.value)*parseInt(series.value));
      t = Math.round(t+(parseInt(descanso.value)*parseInt(series.value))+(parseInt(series.value)*40)/60)
    }else if(exercicio.value == 'Esteira'){
      t += parseInt(tempo_exerc.value) + parseInt(descanso.value);
    }

  calorias.textContent = `${j} cal`;
  serie.textContent = a;
  repeticao.textContent = b;
  tempo.textContent = `${t} minutos`;
  


})