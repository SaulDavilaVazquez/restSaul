//aqui va el metodo para listar invitados
const dbCon = require("../Configuracion/Config");

function listaInvitados(req,res,next){
    dbCon.any('SELECT * FROM guest')
    .then(function(data){
        res.json({
            status:"ok",
            result:data,
            mensaje:"Lista de invitados ok"
        })
    })
}


module.exports= {
    listaInvitados: listaInvitados
}