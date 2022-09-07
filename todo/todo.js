const addBtn = document.querySelector('#addBtn')
const todo= document.querySelector("#todo")


addBtn.addEventListener(
    "click",
    function()  {
        addNote()
    }
)
/* <div class="note">
    <div class="tool">
        <i class="fa-solid fa-floppy-disk"></i>
        <i class="fa-solid fa-trash"></i>
    </div>
    <textarea placeholder="write your task"></textarea>
  </div> */



const addNote = () =>{
    const note=document.createElement('div')
    note.classList.add("note")
    note.innerHTML= 
    `<div class="tool">
        <i class=" save fa-solid fa-floppy-disk"></i>
        <i class=" trash fa-solid fa-trash"></i>
    </div>
    <textarea placeholder="write your task"></textarea>
  </div>
  `;
  note.querySelector(".trash").addEventListener(
    "click",
    function() {
         note.remove()

    }
  )
  todo.appendChild(note);
}








