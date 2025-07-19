let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = inp.value;
    ul.appendChild(item);

    let delBtn = document.createElement("button"); 
    delBtn.innerText = "del";
    delBtn.classList.add("delete"); 

    item.appendChild(delBtn);
    inp.value = "";
});

ul.addEventListener("click", function(event) {
    console.log(event.target);
    
    console.log("clicked!");
    
})


// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns) {
//     delBtn.addEventListener("click", function() {
//         let par = this.parentElement;
//         par.remove();
//     })
// }