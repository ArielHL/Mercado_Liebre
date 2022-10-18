const express = require ('express');
const path = require ('path');
const app = express();

const port = 3300;

// definir carpeta publica
const publicPath = path.resolve('public')
app.use(express.static(publicPath));
// app.use(express.json());
// app.use(express.urlencoded());

// run server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
// routes
app.get ('/', (req, res) => {
    res.sendFile(path.resolve('views/home.html'));

})

app.get ('/registro', (req, res) => {
    res.sendFile(path.resolve('views/registro.html'));
})

app.post ('/', (req, res) => {
    // const datosPeticion = req.body;
    // if (datosPeticion.email == null)
    // return res.send(req.body);
    res.sendFile(path.resolve('views/home.html'));
})


app.get ('/login', (req, res) => {
    res.sendFile(path.resolve('views/ingresa.html'));
})