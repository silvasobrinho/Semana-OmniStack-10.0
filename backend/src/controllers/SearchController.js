const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {

    async index(request, response){
        const { latitude, longitude, techs} = request.query;
     
        const techsArray = parseStringAsArray(techs);
        
        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location:{
                $near: {
                    $geometry:{
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            },
        });


        return response.json({devs})
    },

    async update(request, response){
        const { github_username, avatar_url, bio, name} = request.body;
                     
       
        Dev.updateOne( { github_username },{ 
        name,
        avatar_url,
        bio,
        
       }, (err, doc) =>{
        try{
        if(doc.nModified == 0){
            return response.status(500).send('Nenhum registro foi modificado!');
        }
         return response.status(200).send('Dados atualizados com sucesso!');
    }catch{
        return response.status(500).send('Houve um erro!');
    }
       })
       
         
    },


    async delete(request, response){
        const { github_username} = request.params;
        try{
        Dev.deleteOne({ github_username 
        },function(err, results) {

            if(results.deletedCount == 0){
                return response.status(500).send('Registro não encontrado');
            }
            return response.status(200).send("sucesso, registro apagado.");
        }
            );
        
        } catch{
            return response.status(500).send('Houve um erro!');
        }
    }
}