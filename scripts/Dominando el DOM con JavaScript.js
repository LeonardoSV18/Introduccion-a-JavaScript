<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="scripts/main.js" defer></script>
    <link rel="stylesheet" href="styles/styles.css">
    <title>Eventos</title>
</head>
<body>
    <div class="main-content">
        <h1>Prueba el botón</h1>
        <div class="image-container">
            <img src="" alt="cat">
        </div>
        <button>Click</button>
    </div>
</body>
</html>

-------------------------------------------------------------------------------------------------------------
// 1 - Seleccionamos el elemento

const btn = document.querySelector('.main-content button');

// 3 - Definimos que queremos que haga cuando se ejecuta el evento

const handleButton = () => {

    const imageContainer = document.querySelector('.image-container');
    const image = imageContainer.children[0];
    if(image){
        image.remove();
    } else {
        const newImage = document.createElement('img');
        newImage.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwfGB6dUnr2_mIK2bbLG3JM0IWyfATg0efwQ&s'; 
        newImage.alt = 'cat';
        imageContainer.appendChild(newImage);
    }
}


const suma = (a, b) => a + b ; 


// 2 - Agregamos su event listener 

btn.addEventListener('click',()=> handleButton()); 

console.log(suma(5,10)); 



--------------------------------------------------------------------------------------

.main-content{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.image-container{
    width: 20rem;
}
.image-container img{
    width: 100%;
}
.main-content button{
    background-color: crimson;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: none;
}
