/*  let qntdCartas = prompt("Com quantas cartas deseja jogar?");
console.log(qntdCartas);
*/

   function virarCarta(elemento){

      const escondido = document.querySelector(".escondido");
      if (escondido !== null){
         escondido.classList.toggle("back-face");
      } else {
      elemento.classList.toggle("face");
      }

      console.log(elemento)
   }
   


/* 


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


 function trocaCarta(){
   const carta = document.querySelectorAll(".carta-normal");
   carta.classlist.toggle("carta-virada");   
   console.log(carta);
 }
 
 como deixar a carta virada ao selecionar a 1, e depois selecionar a 2
function ficarCarta(){
    
} */

