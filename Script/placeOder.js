
function searchItem(){
    const itemId = document.getElementById("Id").value;
    const itemData = JSON.parse(localStorage.getItem(itemes));
    console.log(itemData);
    
    itemData.forEach(element => {
        if(element.itemCode == itemId){
            document.getElementById("Id").value = element.itemCodel;
            document.getElementById("name").value = element.itemCodel;
            // document.getElementById("").value = element.itemCodel;

        }else{

        }
    });
}

const CartArray = JSON.parse(localStorage.getItem("cart")) || [];

function OderPlace(){

const itemId = document.getElementById("Id").value;
let Qty = document.getElementById("QTY").value;
const name = document.getElementById("name").value;
const number = document.getElementById("contact").value;
let discount = document.getElementById("discount").value;

    const cart = {
        ItemId:itemId,
        qty:Qty,
        Name:name,
        number:number,
        discount:discount
    }
    CartArray.push(cart);
    localStorage.setItem("cart",JSON.stringify(CartArray));

    console.log(CartArray);
    
}
