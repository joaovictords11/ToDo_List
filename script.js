const addBtn = document.getElementById('add-task-btn')
const input = document.getElementById('input-task')
const checkBtn = document.getElementById('check')
const deleteBtn = document.getElementById('delete')
const lista = document.getElementById('list')
const inputWarn = document.getElementById('input-warn')

let listaDeItens =  []

recarregarTarefas()

function recarregarTarefas(){
    const tarefasLocalStorage = localStorage.getItem('lista')

    if (tarefasLocalStorage) {
        listaDeItens = JSON.parse(tarefasLocalStorage)
    }

    mostrarTarefasNaTela()
}

addBtn.addEventListener('click', ()=>{

    if(input.value !== ""){
        addTarefa()
        inputWarn.style.display = "none"
        input.style.border = "none"

    }else{
        inputWarn.style.display = "flex"
        input.style.border = "solid 1px #ff0000"
    }
})

input.addEventListener('input', (e) => {
    const inputValue = e.target.value

    if(inputValue !== ""){
        inputWarn.style.display = "none"
        input.style.border = "none"
    }
})

function addTarefa(){

    listaDeItens.push({
        tarefa: input.value,
        concluida: false
    })

    mostrarTarefasNaTela()

    input.value = ""
}

function mostrarTarefasNaTela(){

    let novaLi = ""

    listaDeItens.forEach((item, index) => {

        novaLi += `
            <li class="${item.concluida && "done"} group bg-[#f2f2f2] shadow-md flex items-center justify-between h-12 px-4 rounded-md mb-5 hover:"> 
                <img onclick="concluirTarefa(${index})" id="check" class="h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-400 cursor-pointer" src="./Assets/checked.png" alt="check na tarefa">
                <p class="font-medium text-lg">${item.tarefa}</p>
                <img onclick="deletarItem(${index})" id="delete" class="h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-400 cursor-pointer" src="./Assets/trash.png" alt="apagar tarefa">
            </li>
        `
    })

    lista.innerHTML = novaLi

    localStorage.setItem("lista", JSON.stringify(listaDeItens))
}

function deletarItem(index){
    listaDeItens.splice(index, 1)
    mostrarTarefasNaTela()
}

function concluirTarefa(index){
    listaDeItens[index].concluida = true
    mostrarTarefasNaTela()
}