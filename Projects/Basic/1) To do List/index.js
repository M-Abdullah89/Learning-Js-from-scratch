const inputValue = document.querySelector(".Write-input").value;
const button = document.querySelector(".add-btn");
const result = document.querySelector(".result");
const container = document.querySelector(".container");

var checkbox1 = document.querySelector(".checkbox1");

button.addEventListener("click", (e) => {
  e.preventDefault();
  let inputValue = document.querySelector(".Write-input").value;
  if (inputValue == "") {
  } else {
    const res2 = result.cloneNode(true);
    res2.childNodes[5].innerText = inputValue;
    container.appendChild(res2);
    document.querySelector(".Write-input").value = "";
  }
});

checkbox1.addEventListener('change', (e) => {
  if (e.target.checked) {
    console.log('Checkbox is checked');
} else {
    console.log('Checkbox is not checked');
}
});
