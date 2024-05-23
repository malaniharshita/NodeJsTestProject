const { get } = require('http');
const Item = require('../Model/Item')
const postItem = async(req,res,next) => {
    try{
        //console.log('in controller');
        const itemname = req.body.itemname;
        //console.log('itemname'+ itemname);
        
        const description = req.body.description;
        //console.log('description '+ description);
        const price = req.body.price;
        //console.log('price'+price);
        const quantity = req.body.quantity;
        //console.log('quantity '+quantity);
        const data = await Item.create({
            itemname : itemname,
            description : description,
            price: price,
            quantity: quantity
        })
        res.status(201).json({newItemDetail: data});
        console.log(JSON.stringify(data));
    
        }
        catch(err)  {
            res.status(500).json({
                error:err
            })
        }
}

const getItem = async(req,res,next)=>{
    try{
        const items = await Item.findAll();
        res.status(200).json({allItems: items});
    }
    catch(err){
        console.log('Get Item is failing', JSON.stringify(err));
        res.status(500).json({error:err});
    }
}
const updateItem = async(req,res,next)=>{
    console.log('hello');
    let Iid = req.params.id;
    let decrementvalue = req.params.buttonId;
    let itemname = req.body.itemname;
    let description = req.body.description;
    let price = req.body.price;
    price = price-decrementvalue;
    const quantity = req.body.quantity;
    console.log('this update controller' +Iid+ decrementvalue);
    try{
        const result = await Item.update(
           { price: price},
           {where: {id:Iid}}
        )
    }
    catch(err){
        console.log(err+ 'err in update');
    }
}

module.exports = {
    postItem,
    getItem,
    updateItem
    
}