
let input=document.getElementById("text")
const button=document.getElementById("button")
const tasklist=document.getElementById("task-list")
const tasks=[]

button.addEventListener("click",()=>{
    if(input.value===""){
        alert("テキストが空白です")
    }else{
        tasks.push(input.value)
        input.value=""
        SetTaks()
    }
})

const SetTaks=()=>{
    tasklist.innerHTML=""
    tasks.map((text,index)=>{
        const li=document.createElement("li")
        li.innerHTML=text+'<i class="fas fa-trash"></i>'
        li.children[0].addEventListener("click",()=>RemoveTask(index))
        tasklist.appendChild(li)
    })
}

const RemoveTask=(index)=>{
    tasks.splice(index,1)
    SetTaks()
}