const addbtn=document.getElementById('addbtn');
const listContainer=document.getElementById('listcontainer');
const input=document.getElementById('add');

addbtn.addEventListener('click',addTask);


function addTask(){
    if(input.value===''){
        alert("Please input a task!");
    }
    else{
        const li=document.createElement("li");
        li.innerHTML=input.value;
        listContainer.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML='\u00d7';
        li.appendChild(span);
    }
    input.value='';
    saveData();
}

listContainer.addEventListener('click',function myfunc(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.nodeName==='SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem('data',listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem('data');
}
showTask();


