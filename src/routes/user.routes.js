//definir url's, se puede agrupar, se puede crear url de usuario
//rutas son las url que una aplicacion cliente o una aplicacion frontend o mobil puede llamar

import { Router } from "express";

const router = Router();

router.get('/users',(req, res)=>{
    res.send('Obteniendo todos los usuario')
})

router.get('/users/:id',(req, res)=>{
    const {id} =req.params
    res.send('Obteniendo usuario '+ id)
})

router.post('/users',(req, res)=>{
    res.send('Creando usuario')
})

router.delete('/users/:id',(req, res)=>{
    const {id} =req.params
    res.send('Eliminando usuario '+id)
})

router.put('/users/:id',(req, res)=>{
    const {id} =req.params
    res.send('Actualizando usuario '+id)
})

export default router;