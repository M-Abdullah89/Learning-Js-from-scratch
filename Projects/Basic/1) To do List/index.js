function create() {
  var container = document.querySelector(".container");
  var input = document.querySelector("#main_text").value;
  if (input == "") {
    //! if the entered string is empty then nothing will happen
  } else {
    //! Parent Element res (for result)
    var res = document.createElement("div");
    res.classList.add("res");
    res.id = "res";
    const text = document.createElement("div");
    text.classList.add("text");
    text.innerText = input;
    res.appendChild(text);
    var buttons = document.createElement("div");
    var delete1 = document.createElement("button");
    //! creating X button
    delete1.innerText = "✗";
    delete1.classList.add("delete1");
    //! Creating ✓ button
    var checked = document.createElement("button");
    checked.innerHTML = "✓";
    checked.classList.add("checked");
    buttons.appendChild(delete1);
    buttons.appendChild(checked);
    res.appendChild(buttons);
    container.appendChild(res);
    //! To delete res on  click of X

    delete1.addEventListener("click", () => {
      res.remove();
    });
    //! to add & remove textdecoration on click of button
    checked.addEventListener("click", () => {
      text.classList.toggle("text2");
    });
  }
}
