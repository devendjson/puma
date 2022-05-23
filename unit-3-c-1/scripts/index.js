//store the products array in localstorage as "products"
document.querySelector("form").addEventListener("submit", myFun);

var dataArr = JSON.parse(localStorage.getItem("products")) || [];
function myFun() {
  event.preventDefault();
  var dataObj = {
    type: document.querySelector("#type").value,
    desc: document.querySelector("#desc").value,
    price: document.querySelector("#price").value,
    image: document.querySelector("#image").value,
  };
  dataObj.push(dataArr);
  //   dataArr.push(dataObj);

  localStorage.setItem("products", JSON.stringify(dataArr));
  document.querySelector("type").value = "";
  document.querySelector("desc").value = "";
}
