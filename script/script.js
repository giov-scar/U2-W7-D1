class User{
    constructor(_firstName, _lastName, _age, _location){
        this.firstName = _firstName
        this.lastName = _lastName
        this.age = _age
        this.location = _location
    }
    compareAge(user2){
        if (this.age > user2.age) {
            return this.firstName + " è più vecchio di " + user2.firstName;
            
        } else if (this.age < user2.age) {
            return this.firstName + " è più giovane di " + user2.firstName;
            
        }
        else{
            return this.firstName + " ha gli stessi anni di " + user2.firstName;
        }
    }
}

let mario = new User ("Mario", "Rossi", 20, "Roma");
let gino = new User ("Gino", "Bianchi", 30, "Roma");

console.log(mario.compareAge(gino));
console.log(gino.compareAge(mario));


// CREO RIFERIMENTI NEL DOM

const petInput = document.getElementById('pet-name')
const ownerInput = document.getElementById('owner-name')
const speciesInput = document.getElementById('species-name')
const breedInput = document.getElementById('breed-name')

// CREO CLASSE PER OGNI ANIMALE

const animals = []

class Pet{
    constructor(_petName, _ownerName, _speciesName, _breedName){
    this.petname = _petName
    this.ownername = _ownerName
    this.speciesname = _speciesName
    this.breedname = _breedName
}
compareOwner(holder){
    if (this.ownername === holder.ownername) {
        return true;
        
    } else {
        return false;
    }
}

}

// CREO LISTA DI ANIMALI

const renderList = function () {
    const card = document.querySelector('ul')
    card.innerHTML = ''
    animals.forEach((contact) => {
        const newLi = document.createElement('li')
        newLi.innerText = `${contact.petname} ${contact.ownername} ${contact.speciesname} ${contact.breedname}`
        card.appendChild(newLi)
    })
}

const formReference = document.querySelector('form')
formReference.addEventListener('submit', function (e) {
    e.preventDefault()
    const newContact = new Pet(
    petInput.value,
    ownerInput.value,
    speciesInput.value,
    breedInput.value
    )

    console.log('CONTATTO CREATO', newContact)
    animals.push(newContact)
    petInput.value = ''
    ownerInput.value = ''
    speciesInput.value = ''
    breedInput.value = ''
    renderList()
})

let anml1 = new Pet ('fufy', 'Gianni', 'gatto', 'persiano')
let anml2 = new Pet ('bobby', 'Gianni', 'cane', 'beagle')

console.log(anml2.compareOwner(anml1));


