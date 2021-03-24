//aqui va el metodo para listar invitados
const dbCon = require("../Configuracion/Config");

function listaAsistencia(req,res,next){
    dbCon.any('SELECT * FROM status')
    .then(function(data){
        res.json({
            status:"ok",
            result:data,
            mensaje:"Lista de asistencia ok"
        })
    })
}


module.exports= {
    listaAsistencia: listaAsistencia
}