function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    // Imprime no console para fins de depuração (pode ser removido em produção)
    
    let campoPesquisa = document.getElementById ("campo-pesquisa").value

    // se campoPoesquisa for um string sem nada 
    if(!campoPesquisa){
      section.innerHTML = " <p>Ídolo não encontrado. Você não colocou nome de um idolo do timmão</p>"
      return
    }
   
    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo ="";
    let descricao ="";
    let tags ="";
  
    // Itera sobre cada item de dados (assumindo que 'dados' é um array de objetos)
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()
      // se titulo includes campoPesquisa
      if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)|| tags.includes(campoPesquisa)){

         // Concatena HTML para criar um novo item de resultado
         resultados += `
        <div class="item-resultado">
          <h2><a href="https://www.youtube.com/youtube.com/watch?v=7UMrmX1uNDo" target="_blank">${dado.titulo}</a></h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank"> Mais Informações</a>
        </div>`;
      }
    } 

    if (!resultados){
        resultados = "Ídolo não encontrado"

    }
  
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }
  
