
/*Declarar constantes*/
const listaApp = document.querySelector(".lista");
const listaInput = document.querySelector(".lista-input");
const listaBtn = document.querySelector(".lista-btn");
const listaList = document.querySelector(".lista-list");

/*Añadir eventos*/

listaBtn.addEventListener("click", addListaList);
listaList.addEventListener("click", listaAction);

document.addEventListener("DOMContentLoaded", getListaLocal);


/* Funcion para añadir a la lista*/

function addListaList(event) {


    const listaNewDiv = document.createElement("div");
    listaNewDiv.classList.add("lista-item-list");

    const listaNewInput = document.createElement("span");
    listaNewInput.innerHTML = '<i class="bi bi-app"></i>';
    listaNewDiv.appendChild(listaNewInput);

    const listaNewP = document.createElement("p");
    listaNewP.innerHTML = listaInput.value;
    listaNewDiv.appendChild(listaNewP);
    saveListaLocal(listaInput.value);

    const listaNewAction = document.createElement("span");
    listaNewAction.innerHTML = '<i class="bi bi-trash3-fill close"></i>';
    listaNewDiv.appendChild(listaNewAction);



    listaList.appendChild(listaNewDiv);
    listaInput.value = "";
}

// Agregando lista accion

function listaAction(e) {
    const listaItem = e.target;

    //Tarea completada

    if (listaItem.classList[1] === "bi-app") {
        listaItem.classList.toggle('bi-check2-square');
        const listaComplete = listaItem.parentElement;
        const listaCompleted = listaComplete.parentElement;
        listaCompleted.classList.toggle('completed');
    }

    // Eliminar lista tarea

    if (listaItem.classList[2] === "close") {
        const listaDeleteElement = listaItem.parentElement;
        const listaDeleteElementTask = listaDeleteElement.parentElement;
        listaDeleteElementTask.remove();
        deleteListaLocal(listaDeleteElementTask);


    }
}

/*guardar la lisra en local*/

function saveListaLocal(listaItem) {
    let lista;
    if (localStorage.getItem('lista') === null) {
        lista = [];
    }
    else {
        lista = JSON.parse(localStorage.getItem('lista'));

    }

    lista.push(listaItem);
    localStorage.setItem("lista", JSON.stringify(lista));
}

/* recuperar el listado de los items*/

function getListaLocal(listaItem) {
    let lista;
    if (localStorage.getItem('lista') === null) {
        lista = [];
    }
    else {
        lista = JSON.parse(localStorage.getItem('lista'));
    }

    lista.forEach(function (lista) {
        const listaNewDiv = document.createElement("div");
        listaNewDiv.classList.add("lista-item-list");

        const listaNewInput = document.createElement("span");
        listaNewInput.innerHTML = '<i class="bi bi-app"></i>';
        listaNewDiv.appendChild(listaNewInput);

        const listaNewP = document.createElement("p");
        listaNewP.innerHTML = lista; // get values from local storage
        listaNewDiv.appendChild(listaNewP);


        const listaNewAction = document.createElement("span");
        listaNewAction.innerHTML = '<i class="bi bi-trash3-fill close"></i>';
        listaNewDiv.appendChild(listaNewAction);

        listaList.appendChild(listaNewDiv);
    });
}
/*funcion eliminar lista local*/
function deleteListaLocal(listaDelete) {
    let lista;
    if (localStorage.getItem('lista') === null) {
        lista = [];
    }
    else {
        lista = JSON.parse(localStorage.getItem('lista'));
    }


    const listaDeleteIndex = listaDelete.children[1].innerHTML;
    lista.splice(lista.indexOf(listaDeleteIndex), 1);

    localStorage.setItem('lista', JSON.stringify(lista));
}
