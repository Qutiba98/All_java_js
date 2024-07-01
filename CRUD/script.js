function ValidateForm() {
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var address = document.getElementById("address").value;
  var email = document.getElementById("email").value;

  if (name === "") {
    alert("Name is required");
    return false;
  }
  if (age === "") {
    alert("Age is required");
    return false;
  }
  if (address === "") {
    alert("Address is required");
    return false;
  }
  if (email === "") {
    alert("Email is required");
    return false;
  } else if (!email.includes("@")) {
    alert("Invalid email address");
    return false;
  }
  return true;
}

function ShowData() {
  var peoplelist = localStorage.getItem("peoplelist")
    ? JSON.parse(localStorage.getItem("peoplelist"))
    : [];

  var html = "";
  peoplelist.forEach(function (element, index) {
    html += "<tr>";
    html += "<td>" + element.name + "</td>";
    html += "<td>" + element.age + "</td>";
    html += "<td>" + element.address + "</td>";
    html += "<td>" + element.email + "</td>";
    html +=
      '<td><button onclick="deletedata(' +
      index +
      ')" class="btn btn-danger">Delete</button></td>';
    html +=
      '<td><button onclick="updatedata(' +
      index +
      ')" class="btn btn-warning m-2">Edit</button></td>';
    html += "</tr>";
  });
  document.querySelector("#crudTable tbody").innerHTML = html;
}

//loads all data when document is loaded
window.onload = ShowData;

//function to add data
function AddData() {
  if (ValidateForm()) {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;

    var peoplelist = localStorage.getItem("peoplelist")
      ? JSON.parse(localStorage.getItem("peoplelist"))
      : [];

    peoplelist.push({
      name: name,
      age: age,
      address: address,
      email: email,
    });
    localStorage.setItem("peoplelist", JSON.stringify(peoplelist));
    ShowData();

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("address").value = "";
    document.getElementById("email").value = "";
  }
}

//function to delete data
function deletedata(index) {
  var peoplelist = localStorage.getItem("peoplelist")
    ? JSON.parse(localStorage.getItem("peoplelist"))
    : [];
  peoplelist.splice(index, 1);
  localStorage.setItem("peoplelist", JSON.stringify(peoplelist));
  ShowData();
}

//function to update data
function updatedata(index) {
  var peoplelist = localStorage.getItem("peoplelist")
    ? JSON.parse(localStorage.getItem("peoplelist"))
    : [];
  document.getElementById("name").value = peoplelist[index].name;
  document.getElementById("age").value = peoplelist[index].age;
  document.getElementById("address").value = peoplelist[index].address;
  document.getElementById("email").value = peoplelist[index].email;

  document.getElementById("submit").style.display = "none";
  document.getElementById("update").style.display = "block";

  document.getElementById("update").onclick = function () {
    if (ValidateForm()) {
      peoplelist[index].name = document.getElementById("name").value;
      peoplelist[index].age = document.getElementById("age").value;
      peoplelist[index].address = document.getElementById("address").value;
      peoplelist[index].email = document.getElementById("email").value;
      localStorage.setItem("peoplelist", JSON.stringify(peoplelist));
      ShowData();

      document.getElementById("name").value = "";
      document.getElementById("age").value = "";
      document.getElementById("address").value = "";
      document.getElementById("email").value = "";

      document.getElementById("submit").style.display = "block";
      document.getElementById("update").style.display = "none";
    }
  };
}
