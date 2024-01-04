let NomeHeroi = "Mogli"
let NivelHeroi = "0"
let contador = "0"
let Rank = "Ferro" 
const Mensagem = "O herói de nome " + NomeHeroi + " está no nível de: " + Rank + " " 

 for(contador = "0"; contador <= "10000"; contador ++){
    NivelHeroi = contador;
}

if (NivelHeroi <= "1000"){
    console.log(Mensagem)
    console.log(NivelHeroi)
} 
