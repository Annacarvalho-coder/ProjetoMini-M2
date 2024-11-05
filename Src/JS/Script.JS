
class Pet {
    constructor(name, breed, ownerEmail) {
        this.name = name;
        this.breed = breed;
        this.ownerEmail = ownerEmail;
    }
}

let pets = [];
let editIndex = null;

function addOrUpdatePet() {
    const name = document.getElementById("petName").value;
    const breed = document.getElementById("petBreed").value;
    const ownerEmail = document.getElementById("ownerEmail").value;

    if (editIndex === null) {
        pets.push(new Pet(name, breed, ownerEmail));
    } else {
        pets[editIndex] = new Pet(name, breed, ownerEmail);
        editIndex = null;
        document.querySelector(".singUp button").textContent = "Cadastrar";
    }

    document.getElementById("petForm").reset();
    renderPetList();
}

function renderPetList() {
    const petList = document.getElementById("petList");
    petList.innerHTML = "";

    pets.forEach((pet, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>Nome:</strong> ${pet.name} - 
            <strong>Raça:</strong> ${pet.breed} - 
            <strong>Email do Dono:</strong> ${pet.ownerEmail}
            <button onclick="editPet(${index})">Editar</button>
            <button onclick="deletePet(${index})">Deletar</button>
        `;
        petList.appendChild(li);
    });
}

function editPet(index) {
    const pet = pets[index];
    document.getElementById("petName").value = pet.name;
    document.getElementById("petBreed").value = pet.breed;
    document.getElementById("ownerEmail").value = pet.ownerEmail;
    editIndex = index;
    document.querySelector(".singUp button").textContent = "Atualizar";
}

function deletePet(index) {
    pets.splice(index, 1);
    renderPetList();
}
