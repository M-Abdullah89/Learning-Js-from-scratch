function create() {
  var container = document.querySelector(".container");
  const input = document.querySelector("#main_text").value;
  var separation = document.querySelector(".separation");
  var completed = document.querySelector(".completed");

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
    var button = document.createElement("button");
    //! creating X button
    button.innerText = "✗";
    button.classList.add("remove");
    var button2 = document.createElement("button");
    //! Creating ✓ button
    button2.innerHTML = "✓";
    button2.classList.add("checked");
    buttons.appendChild(button);
    buttons.appendChild(button2);
    res.appendChild(buttons);
    container.insertBefore(res, separation);
    //! To remove on  click of X
    button.addEventListener("click", () => {
      res.remove();
    });
    button2.addEventListener("click", () => {
      var res2 = document.createElement("div");
      res2.classList.add("res2");
      var text = document.createElement("div");
      text.classList.add("text2");
      text.innerText = input;
      res2.appendChild(text);
      var checked2 = document.createElement("button");
      checked2.innerText = "✗";
      checked2.classList.add("checked2");
      res2.appendChild(checked2);
      container.appendChild(res2);
      completed.style.display = "block";
      separation.style.display = "block";

      checked2.addEventListener("click", () => {
        res2.remove();
        completed.remove();
      });
    });
  }
}
