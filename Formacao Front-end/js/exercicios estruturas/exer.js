// trocar de cor

let cor = 'azul';
console.log(cor);

cor = 'yellow';
console.log(cor);

// tipo da variavel

const data = '18/05/2005';
console.log(typeof data)

//  math para encontrar valores

console.log(Math.min(3, 9, 1 , 15));
console.log(Math.max(3, 9, 1 , 15));
console.log(Math.round(7.4)); // arredonda para o num inteiro mais prox
console.log(Math.floor(1.019)); // arredonda para baixo
console.log(Math.ceil(1.019)); // arredonda para cima

// prompt e alert

//const filme = prompt('diga seu filme favorito!');
//alert('Seu filme favorito digitado foi: ' + filme);

// if e else

const age = prompt('digite sua idade abaixo: ');

if(age >= 18){
  alert('Você já é de maior!');
}else{
  alert('Você ainda é de menor!');
}

// Loop while

let num = 0;

while(num <= 5){
  console.log(`contagem: ${num}`)
  num++;
}

//do while

let nume = 10;

do{
  console.log(`numero: ${nume}`)
  nume--;
}while(nume >= 1);

//loop for

for(let i = 0; i <=10; i++){
  if(i % 2 == 0){
    console.log(`numero par: ${i++}`);
  }
}

// break

for(let p = 0; p <=10; p++){
  console.log(`${p}`);

  if(p == 5){
    console.log(`${p}`);
    break;
  }
}

//continue loop

for(let g = 1; g <= 10; g++){
  if(g == 7){
    continue;
  }
  console.log(`${g}`)
}

// switch case

let diaSemana = 'sa';

switch(diaSemana){
  case 'segunda':
    console.log('inicio da semana');
    break;
  case 'terca':
    console.log('terca feira ainda ;-;');
    break;
  case 'quarta':
    console.log('metade da semana');
    break;
  case 'quinta':
    console.log('quase fim de semana');
    break;
  case 'sexta':
    console.log('sextouuu');
    break;
  default:
    console.log('dia da semana inválido');
    break;  
}