function traerCategorias(req, res){
    const id = req.body.id;
    res.send('todas las categorias');
}

function traerCategoria(req, res){
    const id = req.body.id;
    const color = req.body.color;
    const descripcion = req.body.descripcion;
    res.send('Los datos de la categoria ' + id + " " + color + " " + descripcion)
}

function crearCategoria(req,res){
    const id = req.query.id;
    const color = req.body.color;
    const descripcion = req.body.descripcion;
    res.send('Creando categoria ' + id + " " + color + " " + descripcion)
}

function eliminarCategoria(req,res){
    const id = req.body.id;
    res.send('Eliminando categoria ' + id)
}

function actualizarCategoria(req,res){
    const id = req.body.id;
    const color = req.body.color;
    const descripcion = req.body.descripcion;
    res.send('Actualizando categoria ' + id + " " + color + " " + descripcion)
}

module.exports = {
    traerCategorias,
    traerCategoria,
    crearCategoria,
    eliminarCategoria,
    actualizarCategoria
}
