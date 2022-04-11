function flipCarta(virada){
      const escondido = document.querySelector(".escondido");
      if (escondido !== null){
         escondido.classList.toggle("back-face");
      } else {
      virada.classList.toggle("face");
      }
   }

 
   const pergunta = prompt("Com qual número (par) de cartas você gostaria de jogar?")
   const card = [pergunta];

   function numeroCartas(){
      const container = document.querySelector(".container");
    for (i = 0; i < pergunta.length; i++){

      container.innerHTML += `
      <div class="container">${card[indice]}</div>
    `;
    }
    
     
   }

   
   numeroCartas.sort(comparador); 

function comparador() { 
	return Math.random() - 0.5; 
}
   


/* 
let qntdCartas = prompt("Com quantas cartas deseja jogar?");
let tamanhoCartas = [qntdCartas];
console.log(qntdCartas)


 function numeroCartas(){
      for (let i = 0; i > tamanhoCartas.length; i++)
      classList.remove(".carta")
   }

      elemento.innerHTML = (`<div class ="carta" onclick="virarCarta(this)">
            <img class="face" src="Fotos/front.png">
            <img class="back-face .escondido" src="Fotos/metalparrot.gif"> 
            </>`)





elemento.innerHTML = (`<div class ="carta" onclick="virarCarta(this)">
      <img class="back-face face" src="Fotos/front.png">
      <img class="front-face face" src="Fotos/metalparrot.gif"> 
      </>`)


      
      elemento.classList.toggle("back-face")


 usar o "innerhtml" para o numero de cartas do usuario serem escolhidas no jogo
    innerhtml.container (classlist.add)



 
 como deixar a carta virada ao selecionar a 1, e depois selecionar a 2
function ficarCarta
*/