let produtos =
    [
        // { id: numid, nome: nomes, preco: valor }
        {   id:1 , nome: 'sapato', preco: 100.00 } ,
        {   id:2 , nome: 'sandalia', preco: 250.00 },
        {   id:3 , nome: 'cinto', preco: 450.00},
        {   id:4 , nome: 'bolsa', preco: 650.00}
    ]



    produtos.forEach((produto) => {            
            
        document.querySelector('.tabela').innerHTML += `<tr id="a${produto.id}">`;             
        
        for (let propriedade in produto) {
            document.querySelector("#"+ 'a'+ produto.id).innerHTML += `<td> ${produto[propriedade]} </td>`;
        }
    
        document.querySelector('.tabela').innerHTML += "</tr>";
    }); 


function inserir() {

    let numid = document.getElementById('idproduto').value;
    let nomes = document.getElementById('nomeproduto').value;
    let valor = document.getElementById('precoproduto').value;

    




}