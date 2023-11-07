let count = 0 ;
function alterarStatus(id)
 {
    let cliqueBotao = document.getElementById(`game-${id}`);
    let imagem = cliqueBotao.querySelector('.dashboard__item__img');
    let botao = cliqueBotao.querySelector('.dashboard__item__button');
   

 if(botao.innerHTML != 'Alugar' && count > 0)
    {
        botao.classList.remove('dashboard__item__button--return');
        botao.innerHTML = 'Alugar';
       imagem.classList.remove('dashboard__item__img--rented');
       alert('O jogo foi devolvido');
       count = 0;
       console.log(count)
     }else if(botao.innerHTML == 'Alugar' && count == 0)
        {
            botao.classList.add('dashboard__item__button--return');
            botao.innerHTML = 'Devolver';
            imagem.classList.add('dashboard__item__img--rented');
           
            alert('O jogo foi reservado');
            count = 1
            console.log(count)
        }else 
            {
                alert('Voce já tem um jogo alugado');
            }
   



 }
 
    // if(imagem.classList.contains('dashboard__item__img--rented'))
  //  {
  //      imagem.classList.remove('dashboard__item__img--rented');
   //     botao.classList.remove('dashboard__item__button--return');
   //     botao.innerHTML = 'Alugar';
  //  }else {
   //     imagem.classList.add('dashboard__item__img--rented');
  //      botao.classList.add('dashboard__item__button--return');
   //     botao.innerHTML = 'Devolver';
  //  }
