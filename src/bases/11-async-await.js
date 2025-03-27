

const getImage = async () =>{ // async indica que la función es asíncrona y que retorna una promesa

    try {
    // llamo la api de Giphy para no dejar expuesta la API KEY en el código 
    // la cual se encuentra en el archivo .env y se accede a ella con process.env.REACT_APP_API_KEY
    const apiKey =process.env.REACT_APP_API_KEY; //API KEY de Giphy 
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`); //await indica que la función debe esperar a que la promesa se resuelva
    const {data} = await resp.json();// await indica que la función debe esperar a que la promesa se resuelva 

    const {url} = data.images.original; //destructuracion de objetos  data.images.original.url
    const img = document.createElement('img'); //creamos un elemento img
    // img.src = url; // le asignamos la url de la imagen
    // console.log(url);

    img.src = url; // le asignamos la url de la imagen
    document.body.append(img);

    } catch (error) {
        // manejo del error
        console.error(error);
    }


}

getImage();
