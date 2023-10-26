//elements
const todolist=document.getElementById("todolist")
const input=document.getElementById("input")
const addbtn=document.getElementById("button")


//empty array
let arr=[];

//first func
addbtn.addEventListener("click",()=>{
    // add the array
    arr.push(input.value)
    input.value=" "
    // call the ShowList function
    ShowList()
})

//second func
function ShowList(){
    //everytime the func runs we have to clear the container list
    todolist.innerHTML=" "
    //HOF= foreach loop- append all the list item from the function
    arr.forEach((el,i)=>{
        let listItem=document.createElement("li")
        let anchor1=document.createElement("a")
        let anchor2=document.createElement("a")
        listItem.innerText=el;
        anchor1.innerText=" Edit"
        anchor1.onclick=()=>{
            EditList();
        }
        anchor2.innerText="x | "
        anchor2.onclick=()=>{
            DeleteList();
        }
        listItem.append(anchor1,anchor2)
        todolist.append(listItem)
        // anchor2.style.marginRight ='px';
        
})
}

//third func
function EditList(index){
    //showing a prompt- getting a value
    let newValue=prompt("Insert new task")

    //replacing the value at the particular index
    arr.splice(index,1,newValue);
    ShowList()
}
//fourth func
function DeleteList(el,index){
    arr.splice(index,1)
    ShowList()
}