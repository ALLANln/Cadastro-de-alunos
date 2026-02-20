const alunos = []

function cadastrar(){
    let nome = document.getElementById('nome').value;
    let nota = Number(document.getElementById('nota').value);

    if (nota < 0 || nota > 100 ){
        document.getElementById('resultado').innerHTML = 'Erro: a nota deve ser entre 0 e 100';
        return;
    }

    alunos.push({nome, nota})

    document.getElementById('resultado').innerHTML = 'Aluno cadastrado com sucesso!'
    
    document.getElementById('nome').value = '';
    document.getElementById('nota').value = '';
}

function listar(){
    let texto = '<h3> Lista de alunos </h3>'

    for (let aluno of alunos){
        texto += `NOME: ${aluno.nome} | NOTA: ${aluno.nota}<br>`
    }

    document.getElementById('resultado').innerHTML = texto;
}

function media(){
    if (alunos.length === 0){
        document.getElementById('resultado').innerHTML = 'Nenhum aluno cadastrado!';
        return;
    }

    let soma = 0 

    for (let aluno of alunos){
        soma += aluno.nota
    }

    let media = soma /  alunos.length;

    document.getElementById('resultado').innerHTML = `Média geral: ${media.toFixed(2)}`
}

function aprovados(){
    let texto = '<h3> Aprovados (nota >= 70) </h3>'
    let encontrou = false

    for (let aluno of alunos){
        if (aluno.nota >= 70){
            texto += `NOME: ${aluno.nome} | NOTA: ${aluno.nota}<br>`;
            encontrou = true;
        }
    }

    if (!encontrou){
        texto = 'Nenhum aluno aprovado ainda!'
    }

    document.getElementById('resultado').innerHTML = texto
}