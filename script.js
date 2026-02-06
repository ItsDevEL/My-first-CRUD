
const btnAbrirForm = document.getElementById('btn-abrir-form');
const formSection = document.getElementById('form-selection');
const btnFecharForm = document.getElementById('btn-cancelar');
const formulario = document.getElementById('contato-form');
let contatos = [];


function mostrarFormulario() {
    formSection.classList.remove('escondido');
}

btnAbrirForm.addEventListener('click', mostrarFormulario);

function esconderFormulario() {
    formSection.classList.add('escondido');
}

btnFecharForm.addEventListener('click', esconderFormulario);


function salvarContato(event) {
    event.preventDefault();
    const nomeValor = document.getElementById('nome').value;
    const emailValor = document.getElementById('email').value;
    const telefoneValor = document.getElementById('telefone').value;
    const novoContato = {
        nome: nomeValor,
        email: emailValor,
        telefone: telefoneValor,
    };

    contatos.push(novoContato);
    redenrizarContatos();
    esconderFormulario();
    formulario.reset();
    
}

 formulario.addEventListener('submit', salvarContato);


function redenrizarContatos() {
    const lista = document.getElementById('lista-contatos');
    lista.innerHTML = "";
    
    //nao entendi muito bem o que isso faz
    contatos.forEach(function(contato) {
        console.log("Renderizando...")
        const item = document.createElement('li');
       item.innerHTML = `
            <div class="contato-info">
                <strong>${contato.nome}</strong> - ${contato.email} - ${contato.telefone}
            </div>
            <div class="contato-acoes">
                <button class="btn-editar">Editar</button>
                <button class="btn-excluir">Excluir</button>
            </div>
        `;
        lista.appendChild(item);
    });
}



