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
    
// ___________________________________________________________________

    const tabela = document.querySelector('#tabela');
        getprodutos();

        function getprodutos() {
            produtos.forEach((produto) => {

                tabela.innerHTML += `<tr id="a${produto.id}">`;

                for (let propriedade in produto) {
                    document.querySelector("#" + 'a' + produto.id).innerHTML += `<td> ${produto[propriedade]} </td>`;
                }

                tabela.innerHTML += "</tr>";
            });
        }


function cadastrar() {
    //PASSO 1: pegando as informações que o usuario digitou e colocando em variaveis
    const idInsere = document.querySelector('#id').value;
    const nomeInsere = document.querySelector('#nome').value;
    const precoInsere = document.querySelector('#preco').value;

    //PASSO 2: criando um objeto produto 
    let produto = {
        id : idInsere,
        nome : nomeInsere,
        preco : precoInsere
    }

    //PASSO 3: inserindo o objeto PRODUTO no vetor PRODUTOS
    produtos.push(produto);
    
    //PASSO4: inserindo os elementos na tabela com INNERHTML
    tabela.innerHTML += `<tr id="a${produto.id}">`;
    document.querySelector("#" + 'a' + produto.id).innerHTML += `<td> ${produto.id} </td>`;
    document.querySelector("#" + 'a' + produto.id).innerHTML += `<td> ${produto.nome} </td>`;
    document.querySelector("#" + 'a' + produto.id).innerHTML += `<td> ${produto.preco} </td>`;
    tabela.innerHTML += "</tr>";

    //PASSO4: inserindo os elementos na tabela com APPENDCHILDS
    // let tr = document.createElement('tr');
    // tr.setAttribute('id', `a${produto.id}`);

    // let td1 = document.createElement('td');
    // let td2 = document.createElement('td');
    // let td3 = document.createElement('td');              
   
    // td1.innerHTML=produto.id;
    // td2.innerHTML=produto.nome;
    // td3.innerHTML=produto.preco;

    // tr.appendChild(td1);
    // tr.appendChild(td2);
    // tr.appendChild(td3);          

    // tabela.appendChild(tr);         
}