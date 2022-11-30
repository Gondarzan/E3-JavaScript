
const numberImput = document.getElementById('numeroPizza')
const formList = document.getElementById('form')
const formBtn = document.getElementById('ingresarButton')
const pizzaContainer = document.getElementById('cardPizza')

const isEmpty = value => value === '';

const showError = (input, message) => {
    const formField = input.parentElement;
    formField.classList.remove('success');
    formField.classList.add('error');
    const errorContainer = formField.querySelector('small');
    errorContainer.textContent = message  
}

const showSuccess = (input) => {
    const formField = input.parentElement;
    formField.classList.remove('error');
    formField.classList.add('success');
    const errorContainer = formField.querySelector('small');
    errorContainer.textContent = ''  
}
  
const pizzas = [
    {
      name: "Pizza Napolitana",
      id: 1,
      price: "$500",
      imagen: "Napolitana.png",

    },
    {
      name: "Pizza Fugazzeta",
      id:2,
      price: "$300",
      imagen: "Fugazzeta.png",
    },
    {
      name: "Pizza Cuatro Quesos",
      id:3,
      price: "$1100",
      imagen: "CuatroQuesos.png",

    },
    {
      name: "Pizza Calabresa",
      id: 4,
      price: "$750",
      imagen: "Calabresa.png",
    },
    {
      name: "Pizza Hawaiana",
      id: 5,
      price: "$750",
      imagen: "Champiñones.png",
    },
    {
      name: "Pizza de Champiñones",
      id: 6,
      price: "$990",
      imagen: "Hawaiana.png",
    }
] 


const renderPizza = (pizzas) => {
    let valid = false;
    const min = 1;
    const max = 6; 
    const numeroPizza = numberImput.value.trim();

    if(isEmpty (numeroPizza)){
        showError(numberImput, 'Escribe un número.')

    } else if (numeroPizza > 6){ 
        showError(numberImput, `El numero debe ser entre ${min} y ${max} `)

    }else {
        showSuccess (numberImput)

        pizzaContainer.innerHTML = `
        <div class="card_pizza" id="cardPizza">
          <img src="assets/${pizzas.imagen}" id="imgPizza">
          <div class="card_text">
            <h2>${pizzas.name}</h2>
            <h3>${pizzas.price}</h3>
          </div>
        </div>
        `

        let pizzaJson = JSON.stringify(pizzas);
        localStorage.setItem("Pizza Detalles", pizzaJson)
        localStorage.setItem("Nombre", pizzas.name)
        localStorage.setItem("ID", pizzas.id)
        localStorage.setItem("Precio", pizzas.price)
        localStorage.setItem("Imagen", pizzas.imagen)     
        valid = true;
    }    
}

const searchPizza = (value) => pizzas.find((pizzas) => pizzas.id === value)
const sendForm = (e) => {
    e.preventDefault()
    const inputSearch = numberImput.value
    const resultPizza = searchPizza(Number(inputSearch))
    renderPizza(resultPizza)
}

const init = () => {
    formList.addEventListener('submit', sendForm)
}
init()



