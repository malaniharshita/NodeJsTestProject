

function savetoLocal(event){
    event.preventDefault();
    let itemname = event.target.itemname.value;
    let description = event.target.des.value;
    let price = event.target.price.value;
    let quantity = event.target.quantity.value;
            
    console.log(itemname);
    console.log(description)
    console.log(price);
    console.log(quantity);

    const obj = {
        itemname : itemname,
        description : description,
        price: price,
        quantity: quantity
    }       
            
    axios.post('http://localhost:5000/add-item',obj)
    .then((response) => {
        //showUserOnScreen(response.data);
        //console.log(response.data+'in axios post');
        showUserOnScreen(response.data.newItemDetail);
    })
    .catch((err) => {
        document.body.innerHTML = document.body.innerHTML + '<h4>something went wrong</h4>'
        console.log('posterror ' +err);
    })
 }
 window.addEventListener("DOMContentLoaded", ()=>{
    axios.get('http://localhost:5000/get-items')
    .then((response) => {
        console.log(response);
        for(var i = 0; i<response.data.allItems.length; i++){
            showUserOnScreen(response.data.allItems[i]);
        }
    })
    .catch((error) => {
        console.log(error);
    })
})

function showUserOnScreen(obj){
     const parentEle = document.getElementById('ListOfitems');
     const childHTML = `<li id = ${obj.id} >${obj.itemname} - ${obj.description} - ${obj.price} - ${obj.quantity}
                    <button onclick = UpdateUser1('${obj.id}','${obj.itemname}','${obj.description}','${obj.price}','${obj.quantity}')> Buy1 </button>
                    <button onclick = UpdateUser2('${obj.id}','${obj.itemname}','${obj.description}','${obj.price}','${obj.quantity}')> Buy2 </button>
                    </li>`;
     parentEle.innerHTML += childHTML;
}

function UpdateUser1(id,itemname,description,price,quantity){
    let buttonId = 1;
    let itemid = id;
    let item1  = itemname;
    let des1 = description;
    let price1 = price;
    let quantity1 = quantity;
    console.log(itemid,item1,des1,price1,quantity1);
    const newData = {
        itemname:item1,
        description: des1,
        price: price,
        quantity:quantity1
    }
    axios.put(`http://localhost:5000/update-item/${itemid}/${buttonId}` ,newData)
   
    .then(response => {
        //console.log(response);
        showUserOnScreen(response.data.newItemDetail);
    })
    .catch(err => {
        console.log(itemid + 'in index.js');
        console.log('error in index.js'+err);
    })
    
}
function UpdateUser2(id,itemname,description,price,quantity){
    let buttonId = 2;
    let itemid = id;
    let item1  = itemname;
    let des1 = description;
    let price1 = price;
    let quantity1 = quantity;
    //console.log(itemid,item1,des1,price1,quantity1);
    const newData = {
        itemname:item1,
        description: des1,
        price: price,
        quantity:quantity1
    }
    axios.put(`http://localhost:5000/update-item/${itemid}/${buttonId}` ,newData)
   
    .then(response => {
        //console.log(response);
        //showUserOnScreen(response.data.newData);
    })
    .catch(err => {
        console.log(itemid + 'in index.js');
        console.log('error in index.js'+err);
    })
    
}