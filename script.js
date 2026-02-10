
const btnAbrirForm = document.getElementById('btn-abrir-form');
const formSection = document.getElementById('form-selection');
const btnFecharForm = document.getElementById('btn-cancelar');
const formulario = document.getElementById('contato-form');
let contatoSendoEditado = null;
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
    renderizarContatos();
    esconderFormulario();
    formulario.reset();
    
}

 formulario.addEventListener('submit', salvarContato);


function renderizarContatos() {
    const lista = document.getElementById('lista-contatos');
    lista.innerHTML = "";
    
   
    contatos.forEach(function(contato) {
        console.log("Renderizando...")
        const item = document.createElement('li');
       item.innerHTML = `
            <div class="contato-info">
                <strong>${contato.nome}</strong> - ${contato.email} - ${contato.telefone}
            </div>
            <div class="contato-acoes">
                <button class="btn-editar" onclick="prepararEdicao('${contato.email}')">Editar</button>
                <button class="btn-excluir" onclick="excluirContato('${contato.nome}')">Excluir</button>
            </div>
        `;
        lista.appendChild(item);
    });
}


function excluirContato(nomeParaExcluir) {
    
    contatos = contatos.filter(contato => contato.nome !== nomeParaExcluir);
    
    
    renderizarContatos();
}

function prepararEdicao(emailParaEditar) {
    const contato = contatos.find(c => c.email === emailParaEditar);

    if (contato) {
        document.getElementById('nome').value = contato.nome;
        document.getElementById('email').value = contato.email;
        document.getElementById('telefone').value = contato.telefone;

        contatoSendoEditado = emailParaEditar; 
        mostrarFormulario();
    }
}

function salvarContato(event) {
    event.preventDefault();

    const nomeValor = document.getElementById('nome').value;
    const emailValor = document.getElementById('email').value;
    const telefoneValor = document.getElementById('telefone').value;

    if (contatoSendoEditado) {
        
        const index = contatos.findIndex(c => c.email === contatoSendoEditado);
        contatos[index] = { nome: nomeValor, email: emailValor, telefone: telefoneValor };
        
        contatoSendoEditado = null; 
    } else {
        
        contatos.push({ nome: nomeValor, email: emailValor, telefone: telefoneValor });
    }

    renderizarContatos();
    esconderFormulario();
    formulario.reset();
}