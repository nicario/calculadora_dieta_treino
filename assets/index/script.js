let nome = document.querySelector(".input__divdiv");
let peso = document.querySelector(".input__divdiv3");
let idade = document.querySelector(".input__divdiv2");
let altura = document.querySelector(".input__divdiv4");
let submit = document.querySelector(".button__main");
let imc = document.querySelector(".h3__section2");
let pmn = document.querySelector(".h3__section22");
let genero = document.querySelector(".select__divdiv5");
let calorias_man = document.querySelector(".p__divdiv4");
let prot_man = document.querySelector(".p2__dividv4");
let carbo_man = document.querySelector(".p3__divdiv4");
let gord_man = document.querySelector(".p4__divdiv4");
let calorias_buk = document.querySelector(".p__button2");
let prot_buk = document.querySelector(".p2__button2");
let carbo_buk = document.querySelector(".p3__button2");
let gord_buk = document.querySelector(".p4__button2");
let calorias_cut = document.querySelector(".p__button3");
let prot_cut = document.querySelector(".p2__button3");
let carbo_cut = document.querySelector(".p3__button3");
let gord_cut = document.querySelector(".p4__button3");
let informacoes = document.querySelector(".p__main2");
let manutencao = document.querySelector(".button__section3");
let bulking = document.querySelector(".button2__section3");
let cutting = document.querySelector(".button3__section3");
let manu = document.querySelector(".divdiv3__section3");
let buk = document.querySelector(".divdiv__button2");
let cut = document.querySelector(".divdiv__button3");

submit.addEventListener('click', (e) => {
  let numero1 = parseInt(peso.value);
  let numero2 = parseInt(altura.value);
  let numero3 = parseInt(idade.value);
  let conta = numero1/(numero2*2)*100;
  conta = Math.round(conta);
  if(conta <= 18){
    imc.textContent = `IMC ${conta} - Baixo Peso!`
  }else if(conta >= 19 && conta < 25){
    imc.textContent = `IMC ${conta} - Peso Adequado!`
  }else if(conta >= 26 && conta < 30){
    imc.textContent = `IMC ${conta} - Sobrepeso!`
  } else if(conta >= 31){
    imc.textContent = `IMC ${conta} - Obesidade!`
  }
  let conta2 = (numero2 - 100)+((numero2 - 100)*0.12);
  pmn.textContent = `PMM - ${conta2}kgs`;

  if(genero.value == 'masculino'){
    prot_man.textContent = `${2*numero1}g - ${((2*numero1)*4)} calorias`;
    prot_man = parseInt(prot_man);
    carbo_man.textContent = `${2*numero1}g - ${((2*numero1)*4)} calorias`;
    carbo_man = parseInt(carbo_man);
    gord_man.textContent = `${1*numero1}g - ${((1*numero1)*9)} calorias`;
    gord_man = parseInt(gord_man);
    calorias_man.textContent = `${((2*numero1)*4) + ((2*numero1)*4) + ((1*numero1)*9)} calorias`;
  }else if(genero.value == 'feminino'){
    prot_man.textContent = `${1.8*numero1}g - ${((1.8*numero1)*4)} calorias`;
    prot_man = parseInt(prot_man);
    carbo_man.textContent = `${1*numero1}g - ${((1*numero1)*4)} calorias`;
    carbo_man = parseInt(carbo_man);
    gord_man.textContent = `${0.8*numero1}g - ${((0.8*numero1)*9)} calorias`;
    gord_man = parseInt(gord_man);
    calorias_man.textContent = `${((1.8*numero1)*4) + ((1*numero1)*4) + ((0.8*numero1)*9)} calorias`;
  }

  if(genero.value == 'masculino'){
    prot_buk.textContent = `${2*numero1}g - ${((2*numero1)*4)} calorias`;
    prot_buk = parseInt(prot_buk);
    carbo_buk.textContent = `${5*numero1}g - ${((5*numero1)*4)} calorias`;
    carbo_buk = parseInt(carbo_buk);
    gord_buk.textContent = `${1*numero1}g - ${((1*numero1)*9)} calorias`;
    gord_buk = parseInt(gord_buk);
    calorias_buk.textContent = `${((2*numero1)*4) + ((5*numero1)*4) + ((1*numero1)*9)} calorias`;
  }else if(genero.value == 'feminino'){
    prot_buk.textContent = `${1.8*numero1}g - ${((1.8*numero1)*4)} calorias`;
    carbo_buk.textContent = `${3*numero1}g - ${((3*numero1)*4)} calorias`;
    gord_buk.textContent = `${0.8*numero1}g - ${((0.8*numero1)*9)} calorias`;
    calorias_buk.textContent = `${((1.8*numero1)*4) + ((3*numero1)*4) + ((0.8*numero1)*9)} calorias`;
  }

  if(genero.value == 'masculino'){
    prot_cut.textContent = `${2*numero1}g - ${((2*numero1)*4)} calorias`;
    prot_cut = parseInt(gord_cut);
    carbo_cut.textContent = `${1.5*numero1}g - ${((1.5*numero1)*4)} calorias`;
    carbo_cut = parseInt(carbo_cut);
    gord_cut.textContent = `${0.8*numero1}g - ${((0.8*numero1)*9)} calorias`;
    gord_cut = parseInt(gord_cut);
    calorias_cut.textContent = `${((2*numero1)*4) + ((1.5*numero1)*4) + ((0.8*numero1)*9)} calorias`;
  }else if(genero.value == 'feminino'){
    prot_cut.textContent = `${1.8*numero1}g - ${((1.8*numero1)*4)} calorias`;
    prot_cut = parseInt(prot_cut);
    carbo_cut.textContent = `${0.6*numero1}g - ${((0.6*numero1)*4)} calorias`;
    carbo_cut = parseInt(carbo_cut);
    gord_cut.textContent = `${0.6*numero1}g - ${((0.6*numero1)*9)} calorias`;
    gord_cut = parseInt(gord_cut);
    calorias_cut.textContent = `${((1.8*numero1)*4) + ((0.6*numero1)*4) + ((0.6*numero1)*9)} calorias`;
  }
  informacoes.textContent = `Olá ${nome.value}! Aqui você vê informações referente a sua dieta. Baseado no seu peso que é de ${peso.value}kgs, idade ${idade.value}anos, altura ${altura.value}cm. Veja abaixo mais informações!`
  
  manutencao.addEventListener('click', () => {
    if(manu.classList.contains('d-none')){
      manu.classList.remove('d-none');
      manu.classList.add('d-block');
    }else if(manu.classList.contains('d-block')){
      manu.classList.remove('d-block');
      manu.classList.add('d-none');
    }
  });
  
  bulking.addEventListener('click', () => {
    if(buk.classList.contains('d-none')){
      buk.classList.remove('d-none');
      buk.classList.add('d-block');
    }else if(buk.classList.contains('d-block')){
      buk.classList.remove('d-block');
      buk.classList.add('d-none');
    }
  });
  
  cutting.addEventListener('click', () => {
    if(cut.classList.contains('d-none')){
      cut.classList.remove('d-none');
      cut.classList.add('d-block');
    }else if(cut.classList.contains('d-block')){
      cut.classList.remove('d-block');
      cut.classList.add('d-none');
    }
  });

  e.preventDefault();
})


