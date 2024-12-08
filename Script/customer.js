
const tempCart = [];
let myCart = document.getElementById("myCart");

const Id = document.getElementById("Id")
const Name = document.getElementById("Name")
const Address = document.getElementById("address")
const PhoneNumber = document.getElementById("PhoneNumber")

if(Id ==='' || Name ==='' || Address ==='' || PhoneNumber ===''){
    alert("Require fill in all fields");
}
function addCustomer(){
tempCart.push({
    id:Id.value,
    name:Name.value,
    address:Address.value,
    phoneNumber:PhoneNumber.value,
})
console.table(tempCart)
setCart();
}

let obj =``;
const setCart=()=>{
    tempCart.forEach((el)=>{
obj += `
    <tr>
        <td>${el.id}</td>
        <td>${el.name}</td>
        <td>${el.phoneNumber}</td>
        <td>${el.address}</td>
        <td>
            <button onclick="updateCustomer()">✏️</button>
            <button onclick="deleteCustomer()">🗑️</button>
        </td>
    </tr>      
`
    })
    myCart.innerHTML = obj;
}

function updateCustomer(){
    
}
function deleteCustomer(){
    
}