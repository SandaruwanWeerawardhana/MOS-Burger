
const Customer = [];
// let PointIndex = -1;
let myCart = document.getElementById("myCart");

const Id = document.getElementById("Id")
const Name = document.getElementById("Name")
const Address = document.getElementById("address")
const PhoneNumber = document.getElementById("PhoneNumber")

if(Id ==='' || Name ==='' || Address ==='' || PhoneNumber ===''){
    alert('Require fill in all fields');
     
}
function addCustomer(){
    Customer.push({
    id:Id.value,
    name:Name.value,
    address:Address.value,
    phoneNumber:PhoneNumber.value,
})

console.table(Customer)
setCart();
}

const setCart=()=>{
    Customer.forEach((el)=>{
        myCart.innerHTML += `
    <tr>
        <td>${el.id}</td>
        <td>${el.name}</td>
        <td>${el.phoneNumber}</td>
        <td>${el.address}</td>
        <td>
            <button onclick="EditCustomer()">✏️</button>
            <button onclick="deleteCustomer()">🗑️</button>
        </td>
    </tr>      
`
})

}

// function EditCustomer(index){
//     const Customer = Customer[index];
//     document.getElementById("Id").value = Customer.Id;
//     document.getElementById("Name").value = Customer.Name;
//     document.getElementById("address").value = Customer.address;
//     document.getElementById("PhoneNumber").value = Customer.PhoneNumber;

//  document.querySelector('addCustomerbtn').innerText = 'Update Customer';
//  PointIndex = index;
// }

function deleteCustomer(){
    
}

function saveLocalStorage() {
  localStorage.setItem("Customer", JSON.stringify(Customer));
}

function loadCustomerTable(){
    const storeCus = localStorage.getItem('Customer');
    if(storeCus){
        Customer = JSON.parse(storeCus);
        refreshTable();
    }

}

function refreshTable(){
    const tableBody = document.getElementById("myCart")
    tableBody.innerHTML = '';
    Customer.forEach((Customer,index) =>{
        addCustomer(Customer,index);
    });
}
