const about = {
    title:"Hello little dragon",
    description:"this is a test",
    history:"Far far away , long time ago",
    menu: 'something'
};
const menuDelDia = [{
id: 1,
title: 'zapato de chocolate',
description: 'Entrada Carpaccio de salmón con cítricos ',
price:'$5',
},
{
id: 2,
title: 'caracol rápido',
description: 'Entrada Carpaccio de salmón con cítricos ',
price:'$1000',
},
{
id: 3,
title: 'Salchicha',
description: 'Entrada Carpaccio de salmón con cítricos ',
price:'$1',
},
{
id: 4,
title: 'Pollo tres muslos',
description: 'Entrada Carpaccio de salmón con cítricos ',
price:'$15.79',
},
{
id: 5,
title: 'Poroto potente',
description: 'Entrada Carpaccio de salmón con cítricos ',
price:'$15',
}]; 
        

const path = require("path");
const mainController={

index: (req, res)=> {
    res.render('index',{about: about, menu: menuDelDia})
},
detail: (req,res) =>{
    let plato= menuDelDia.find( plato=> plato.id == req.params.menuId )
 
    res.render('detalleMenu',{ plato: plato });
},

};

module.exports = mainController;