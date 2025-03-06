// index.html 

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/styles.css">
    <script src="scripts/main.js" defer></script>
    <title>DOM</title>
</head>

<body>
    <h1 id='main-title'>Bienvenidos al DOM </h1>

    <div class="container">
        <div class="box">
            <p>Div-1</p>
        </div>
        <div class="box">
            <p>Div-2</p>
        </div>
        <div class="box">
            <p>Div-3</p>
        </div>
        <div class="box">
            <p>Div-4</p>
        </div>
        <div class="box">
            <p>Div-5</p>
        </div>
        <div class="box">
            <p>Div-6</p>
        </div>
    </div>

    <div class="box">
        <p>Div-Externo</p>
    </div>
    <div class="titles-container">
        <h1>Este es un titulo alternativo</h1>
        <h1>Mi segundo titulo del contenedor</h1>
    </div>
    
</body>

</html>

****************************************************************************

main.js 

// Metodos clasicos 

const title = document.getElementById('main-title');
console.log(title.textContent);
title.textContent ="Este es un titulo diferente";

const boxes = document.getElementsByClassName('box');
console.log(boxes);

const boxesArray = Array.from(boxes);

console.log(boxesArray);

// Metodos modernos 

const sameTitle = document.querySelector('.titles-container h1');
console.log(sameTitle);    

const allTitles = document.querySelectorAll('.titles-container h1'); 
console.log(allTitles);

const allTitlesArray = Array.from(allTitles);
console.log(allTitlesArray);

const querySelectorBoxes = document.querySelectorAll('.container .box');
const querySelectorBoxesArray = Array.from(querySelectorBoxes);
console.log(querySelectorBoxesArray);

// Creando nodos con JS 
const myNewTitle = document.createElement('h1');
const textTitle = document.createTextNode('Soy un nuevo titulo');
myNewTitle.appendChild(textTitle); 
const titlesContainer = document.querySelector('.titles-container');
titlesContainer.appendChild(myNewTitle);

//Creando un div con un parrafo dentro

const myNewBox = document.createElement('div');
const pBox = document.createElement('p');
const textBox = document.createTextNode('Div creado con JS');
pBox.appendChild(textBox);
myNewBox.appendChild(pBox);
myNewBox.style.backgroundColor = 'Red'; 
myNewBox.classList.add('box');
const container = document.querySelector('.container');
container.appendChild(myNewBox);

// Removiendo Nodos

const boxToBeRemoved = document.querySelector('.box');
console.log(boxToBeRemoved);
container.removeChild(boxToBeRemoved);

/* while(container.firstChild) {
    container.removeChild(container.firstChild); 
} */ 

const myNewTitle2 = document.createElement('h1');
myNewTitle2.textContent = 'Soy un nuevo titulo 2';
titlesContainer.appendChild(myNewTitle2);


const newImage = document.createElement('img');
newImage.src = 'https://optimumpet.com.br/media/uploads/2023/05/anos-vive-gato-01.webp';
newImage.alt = 'gato';
newImage.style.width = '15rem';
titlesContainer.appendChild(newImage); 


*****************************************************************************************

styles.css 

.container{
    display : flex; 
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem; 
    
    color: white;
}

.box{

    background-color: cornflowerblue;
    width: 15rem;
    height: 15rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container .box{
    background-color: crimson;
}

.titles-container h1{
    color: crimson;
}