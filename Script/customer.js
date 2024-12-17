

let Customer = [
    {
        CustomerId: "C001",
        CusName: "Malith",
        CusPhoneNumber: "0704895125",
        CusAddress:"Kaluthara" ,
    },
    {
        CustomerId: "C002",
        CusName: "Kasun",
        CusPhoneNumber: "0745895125",
        CusAddress:"Mathara" ,
    },
    {
        CustomerId: "C003",
        CusName: "Nadun",
        CusPhoneNumber: "0745834525",
        CusAddress:"Walana" ,
    },
    {
        CustomerId: "C004",
        CusName: "Kamal",
        CusPhoneNumber: "0744595125",
        CusAddress:"Galle" ,
    }

  ];
  
  
  function loadTable() {
    console.log(Customer);
  
    let tblBody = document.getElementById("myCart");
    let body = ``;
  
    Customer.forEach((el,index) => {
      body += `
        <tr>
            <td>${el.CustomerId}</td>
            <td>${el.CusName}</td>
            <td>${el.CusPhoneNumber}</td>
            <td>${el.CusAddress}</td>
            <td>
                <button onclick="EditCustomer(${index})">✏️</button>
                <button onclick="deleteCustomer(${index})">🗑️</button>
            </td>
        </tr>       
      `;
    });
    tblBody.innerHTML = body;
  }
  loadTable();
  
  function addCustomer() {
    let CustomerId = document.getElementById("Id").value;
    let CusName = document.getElementById("Name").value.trim();
    let CusPhoneNumber = document.getElementById("PhoneNumber").value.trim();
    let CusAddress = document.getElementById("address").value.trim();
  
    if (!CustomerId || !CusName || !CusPhoneNumber || !CusAddress) {
      alert("Please fill out all fields correctly.");
      return;
    }
  
    Customer.push({
        CustomerId: CustomerId,
        CusName: CusName,
        CusPhoneNumber: CusPhoneNumber,
        CusAddress: CusAddress,     
    })

    loadTable();
  
       document.getElementById("Id").value = "";
       document.getElementById("Name").value = "";
       document.getElementById("PhoneNumber").value = "";
       document.getElementById("address").value = "";
  }
  //  delete Customer 
  function deleteCustomer(index) {
    Customer.splice(index,1);
    loadTable(); 
  }
  

  // -------------Update Customer------------

  function EditCustomer(index) {
    let customer = Customer[index];
  
    document.getElementById("Id").value =  customer. CustomerId;
    document.getElementById("Name").value = customer.CusName;
    document.getElementById("PhoneNumber").value = customer.CusPhoneNumber;
    document.getElementById("address").value = customer.CusAddress;
  
    let addButton = document.getElementById("addButton");
    addButton.innerText = "Save Changes";
  
    addButton.onclick = function () {
      updateCustomer(index);
    };
  }
  
  function updateCustomer(index) {
  
    let CustomerId = document.getElementById("Id").value.trim();
    let CusName = document.getElementById("Name").value.trim();
    let CusPhoneNumber = document.getElementById("PhoneNumber").value.trim();
    let CusAddress = document.getElementById("address").value.trim();
  
    if (!CustomerId || !CusName || !CusPhoneNumber || !CusAddress) {
      alert("Please fill out all fields correctly.");
      return;
    }
  
    // Update array
    Customer[index] = {
      CustomerId: CustomerId,
      CusName: CusName,
      CusPhoneNumber: CusPhoneNumber,
      CusAddress: CusAddress,
    };
  
    console.log(`Customer updated at index ${index}:`, Customer[index]);
  
    let addButton = document.getElementById("addButton");
    addButton.innerText = "Add Customer";
    addButton.onclick = addCustomer;
    
  
    document.getElementById("Id").value = "";
    document.getElementById("Name").value = "";
    document.getElementById("PhoneNumber").value = "";
    document.getElementById("address").value = "";
  
    loadTable();
  }
  
  
// function saveLocalStorage() {
//   localStorage.setCustomer("Customer", JSON.stringify(Customer));
// }

// function loadCustomerTable(){
//     const storeCus = localStorage.getCustomer('Customer');
//     if(storeCus){
//         Customer = JSON.parse(storeCus);
//         refreshTable();
//     }

// }

