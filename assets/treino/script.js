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
let video = document.querySelector("#video");
let tempo_label = document.querySelector(".div6__section2");
let series_label = document.querySelector(".div2__section2");
let repeticoes_label = document.querySelector(".div3__section2");
let descanso_label = document.querySelector(".div5__section2");
let descanso = document.querySelector(".select3__section2");



exercicio.addEventListener('change', () => {
  if(exercicio.value == 'Rosca B.'){
    video.setAttribute('src', './assets/image/exercicioroscab.mp4');
    video.classList.remove('d-none');
    img.classList.remove('d-block');
    img.classList.add('d-none');
    series_label.classList.remove('d-none');
    series_label.classList.add('d-block');
    repeticoes_label.classList.remove('d-none');
    repeticoes_label.classList.add('d-block');
    descanso_label.classList.remove('d-none');
    descanso_label.classList.add('d-block');
    tempo_label.classList.add('d-none');

  } else if(exercicio.value == 'Rosca S.') {
    video.setAttribute('src', './assets/image/exercicioroscas.mp4');
    video.classList.remove('d-none');
    img.classList.remove('d-block');
    img.classList.add('d-none');
    series_label.classList.remove('d-none');
    series_label.classList.add('d-block');
    repeticoes_label.classList.remove('d-none');
    repeticoes_label.classList.add('d-block');
    descanso_label.classList.remove('d-none');
    descanso_label.classList.add('d-block');
    tempo_label.classList.remove('d-block');
    tempo_label.classList.add('d-none');

  }else if(exercicio.value == 'Esteira'){
    img.setAttribute('src', './assets/image/exercicioesteira.jpg')
    img.classList.remove('d-none');
    img.classList.add('d-block');
    video.classList.add('d-none');
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
    video.setAttribute('src', './assets/image/exercicioalternadoh.mp4');
    video.classList.remove('d-none');
    img.classList.remove('d-block');
    img.classList.add('d-none');
    series_label.classList.remove('d-none');
    series_label.classList.add('d-block');
    repeticoes_label.classList.remove('d-none');
    repeticoes_label.classList.add('d-block');
    descanso_label.classList.remove('d-none');
    descanso_label.classList.add('d-block');
    tempo_label.classList.remove('d-block');
    tempo_label.classList.add('d-none');
  
  }else if(exercicio.value == 'Alternado M.') {
    video.setAttribute('src', './assets/image/exercicioalternadom.mp4');
    video.classList.remove('d-none');
    img.classList.remove('d-block');
    img.classList.add('d-none');
    series_label.classList.remove('d-none');
    series_label.classList.add('d-block');
    repeticoes_label.classList.remove('d-none');
    repeticoes_label.classList.add('d-block');
    descanso_label.classList.remove('d-none');
    descanso_label.classList.add('d-block');
    tempo_label.classList.remove('d-block');
    tempo_label.classList.add('d-none');
  
  } else if(exercicio.value == 'Triceps C.') {
    video.setAttribute('src', './assets/image/exerciciotricepsc.mp4');
    video.classList.remove('d-none');
    img.classList.remove('d-block');
    img.classList.add('d-none');
    series_label.classList.remove('d-none');
    series_label.classList.add('d-block');
    repeticoes_label.classList.remove('d-none');
    repeticoes_label.classList.add('d-block');
    descanso_label.classList.remove('d-none');
    descanso_label.classList.add('d-block');
    tempo_label.classList.remove('d-block');
    tempo_label.classList.add('d-none');
  
  } else if(exercicio.value == 'Triceps T.') {
    video.setAttribute('src', './assets/image/exerciciotricepst.mp4');
    video.classList.remove('d-none');
    img.classList.remove('d-block');
    img.classList.add('d-none');
    series_label.classList.remove('d-none');
    series_label.classList.add('d-block');
    repeticoes_label.classList.remove('d-none');
    repeticoes_label.classList.add('d-block');
    descanso_label.classList.remove('d-none');
    descanso_label.classList.add('d-block');
    tempo_label.classList.remove('d-block');
    tempo_label.classList.add('d-none');
  
  } else if(exercicio.value == 'Triceps F.') {
    video.setAttribute('src', './assets/image/exerciciotricepsf.mp4');
    video.classList.remove('d-none');
    img.classList.remove('d-block');
    img.classList.add('d-none');
    series_label.classList.remove('d-none');
    series_label.classList.add('d-block');
    repeticoes_label.classList.remove('d-none');
    repeticoes_label.classList.add('d-block');
    descanso_label.classList.remove('d-none');
    descanso_label.classList.add('d-block');
    tempo_label.classList.remove('d-block');
    tempo_label.classList.add('d-none');
 
  } else if(exercicio.value == 'Supino F.') {
    video.setAttribute('src', './assets/image/exerciciosupinof.mp4');
    video.classList.remove('d-none');
    img.classList.remove('d-block');
    img.classList.add('d-none');
    series_label.classList.remove('d-none');
    series_label.classList.add('d-block');
    repeticoes_label.classList.remove('d-none');
    repeticoes_label.classList.add('d-block');
    descanso_label.classList.remove('d-none');
    descanso_label.classList.add('d-block');
    tempo_label.classList.remove('d-block');
    tempo_label.classList.add('d-none');
  
  }else if(exercicio.value == 'Supino R.') {
    video.setAttribute('src', './assets/image/exerciciosupinor.mp4');
    video.classList.remove('d-none');
    img.classList.remove('d-block');
    img.classList.add('d-none');
    series_label.classList.remove('d-none');
    series_label.classList.add('d-block');
    repeticoes_label.classList.remove('d-none');
    repeticoes_label.classList.add('d-block');
    descanso_label.classList.remove('d-none');
    descanso_label.classList.add('d-block');
    tempo_label.classList.remove('d-block');
    tempo_label.classList.add('d-none');
  
  } else if(exercicio.value == 'Supino I.') {
    video.setAttribute('src', './assets/image/exerciciosupinoi.mp4');
    video.classList.remove('d-none');
    img.classList.remove('d-block');
    img.classList.add('d-none');
    series_label.classList.remove('d-none');
    series_label.classList.add('d-block');
    repeticoes_label.classList.remove('d-none');
    repeticoes_label.classList.add('d-block');
    descanso_label.classList.remove('d-none');
    descanso_label.classList.add('d-block');
    tempo_label.classList.remove('d-block');
    tempo_label.classList.add('d-none');
  }

})

adicionar.addEventListener('click', (e) => {
    e.preventDefault(); 
    let divextra = document.createElement("div");
    let divdiv = document.createElement("div");
    let divdiv2 = document.createElement("div");
    let divdiv3 = document.createElement("div");
    let inform = document.createElement("h5");
    let texto = document.createElement("p");
    let seriextra = document.createElement("h5");
    let textoextra = document.createElement("p");
    let repeticaoextra = document.createElement("h5");
    let textoextraextra = document.createElement("p");
    let remover = document.createElement("span");
    
    inform.append("Exercicio:");
    texto.append(exercicio.value)
    
    seriextra.append("Séries:");
    textoextra.append(series.value);

    repeticaoextra.append("Repetições:");
    textoextraextra.append(repeticoes.value);

    remover.classList.add("material-symbols-outlined");
    remover.append("close");
    
    divextra.appendChild(remover);
    divextra.appendChild(divdiv);
    divextra.appendChild(divdiv2);
    divextra.appendChild(divdiv3);
    divdiv.appendChild(inform);
    divdiv.appendChild(texto);
    divdiv2.appendChild(seriextra);
    divdiv2.appendChild(textoextra);
    divdiv3.appendChild(repeticaoextra);
    divdiv3.appendChild(textoextraextra);

    
    div.appendChild(divextra);
    
    divdiv.classList.add("d-flex", "justify-content-between", "align-items-center", "ps-3", "pe-3");
    divdiv2.classList.add("d-flex", "justify-content-between", "align-items-center", "ps-3", "pe-3");
    divdiv3.classList.add("d-flex", "justify-content-between", "align-items-center", "ps-3", "pe-3");divextra.classList.add("border", "w-50", "h-50", "text-dark", "bg-warning", "p-2", "border-primary", "d-flex", "justify-content-around", "flex-column");

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
      t = Math.round(t+(parseInt(descanso.value)*parseInt(series.value))+(parseInt(series.value)*0.40)/60)
    }else if(exercicio.value == 'Esteira'){
      t += parseInt(tempo_exerc.value) + parseInt(descanso.value);
      i = Math.round(6*parseInt(tempo_exerc.value));
      j += i;
    }

  calorias.textContent = `${j} cal`;
  serie.textContent = a;
  repeticao.textContent = b;
  tempo.textContent = `${t} minutos`;
  
  remover.addEventListener('click', () => {
    div.removeChild(divextra);
    if(exercicio.value == 'Rosca B.' || exercicio.value == 'Rosca S.' || exercicio.value == 'Alternado H.' || exercicio.value == 'Alternado M.' || exercicio.value == 'Triceps C.' || exercicio.value == 'Triceps T.' || exercicio.value == 'Triceps F.' || exercicio.value == 'Supino F.' || exercicio.value == 'Supino R.' || exercicio.value == 'Supino I.'){
      i =  Math.round((repeticoes.value*1.17)*series.value);
      j -= i;
      a -= parseInt(series.value);
      b -= (parseInt(repeticoes.value)*parseInt(series.value));
      t = Math.round(t-(parseInt(descanso.value)*parseInt(series.value))+(parseInt(series.value)*0.40)/60)
    }else if(exercicio.value == 'Esteira'){
      t -= parseInt(tempo_exerc.value) + parseInt(descanso.value);
      i = Math.round(6*parseInt(tempo_exerc.value));
      j -= i;
    }

  calorias.textContent = `${j} cal`;
  serie.textContent = a;
  repeticao.textContent = b;
  tempo.textContent = `${t} minutos`;
  })

})