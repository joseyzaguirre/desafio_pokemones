const express = require('express');
const axios = require('axios');

const app = express();

app.get('/pokemones', async (req, res) => {
    const datosPoke = await axios.get('https://pokeapi.co/api/v2/pokemon/');
    const pokemones = datosPoke.data;

    /* const data = await Promise.all([
        axios.get(pokemones[0].url),
        axios.get(pokemones[1].url)
    ])
    */

    res.send(pokemones);

});

app.listen(3000, () => {
    console.log('servidor corriendo en el puerto 3000');
});