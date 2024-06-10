let start = document.getElementById("start");
let getArr = JSON.parse(localStorage.getItem("Name"));
for (let i = 0; i < getArr.length; i++) {
  function nameP() {
    box = `
          <p class="text-white h1 text-capitalize" id="pWelcome">Welcome ${getArr}</p>
    `;
    document.getElementById("pWelcome").innerHTML = box;
  }
}
nameP();
