const {  Router } = require('express');
const router = Router();
const _ = require('underscore');

const usuarios = require('../sample.json');

router.get('/', (req, res) => {
    res.json(usuarios);
});

router.post('/', (req, res) =>{
    const { nombre, tipo, direccion, telefono, email }= req.body;
    if (nombre && tipo && direccion && telefono && email){
        const id = usuarios.length + 1;
        const newUsuario = {...req.body, id};
        usuarios.push(newUsuario);
        res.json(usuarios);
    }else{
        res.status(500).json({error: 'There was an error.'});
    }

});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, tipo, direccion, telefono, email }= req.body;
    if (nombre && tipo && direccion && telefono && email) {
        _.each(usuarios, (usuario, i) => {
            if (usuario.id == id){
                usuario.nombre = nombre;
                usuario.tipo = tipo;
                usuario.direccion = direccion;
                usuario.telefono = telefono;
                usuario.email = tipo;
            }
        });
        res.json(usuarios);
    }else {
        res.status(500).json({error: 'There was an error.'});
    }
});

router.delete('/:id', (req, res)=>{
    const { id } =req.params;
    _.each(usuarios, (usuario, i) => {
        if (usuario.id == id){
            usuarios.splice(i, 1);
        }
    });
    res.send(usuarios);
});

module.exports = router;