function criaCartao(categoria,pergunta,resposta){
   let container =  document.getElementById('container')
   let article  =  document.createElement('article')
   article.className  =  'cartao'
   article.innerHTML = `
   <div class="cartao-conteudo">
   <h3> ${categoria} </h3>
   <div class= "cartao-conteudo-pergunta">
     <p> ${pergunta} </p>
     </div>
   <div class= "cartao-conteudo-resposta">
   <p> ${resposta} </p>
   </div>
   </div>
   
   `

   container.appendChild(article) 
}


criaCartao('biologia', 'qual é a funçao da mitocondria', 'produção de energia')
criaCartao('matematica','como é definido um grupo','é um conjunto de uma operação onde está  é  fechada no conjunto e tem algumas propriedades ')
criaCartao('Piada','qual é o carro que avisa que irá chover','celta preto')
criaCartao('pergunta','como comprar um pc gamer?','<img src="img/download.jpeg" alt="">')