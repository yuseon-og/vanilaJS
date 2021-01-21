const toDoForm = document.querySelector('.js-form'),
    toDoInput = toDoForm.querySelector('input'),
    doneList = document.querySelector('.js-dones'),
    toDoList  = document.querySelector('.js-todos')

let toDos = [];
let finished=[];

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    const sp = btn.previousSibling;
    // console.log(sp.innerText)
    // console.log(li.span.text);
    toDoList.removeChild(li);
    
     
    const cleanToDos = toDos.filter(toDo=>{
        // console.log(toDo.id,parseInt(li.id))
        
        return toDo.id !== parseInt(li.id);
    })

   
    toDos = cleanToDos;
    saveTodos();
    
}



function deleteDone(event){
    const btn = event.target;
    const li = btn.parentNode;
    doneList.removeChild(li);
     
    const clean = finished.filter(done=>{
        //  console.log(done.id,parseInt(li.id))
        
        return done.id !== parseInt(li.id);
    })

   
    finished = clean;
    saveFinished();
    
}


    function saveTodos(){
        localStorage.setItem("Pending", JSON.stringify(toDos));
        // localStorage.setItem("Finished", JSON.stringify(finished));
    }

    function saveFinished(){
        localStorage.setItem("Finished", JSON.stringify(finished));
    }
//Todo 새로 생성 파트

    function createTodo(text){
        const elementLi = document.createElement('li')
        const delBtn = document.createElement('button')
        const doneBtn = document.createElement('button')
        const span = document.createElement("span")
        const newId = toDos.length+1;
        delBtn.innerText = '❌';
        doneBtn.innerText = '⭕';
        delBtn.addEventListener("click", deleteToDo);
        doneBtn.addEventListener("click",moveTodo)
        span.innerText = text;
        elementLi.appendChild(span);
        elementLi.appendChild(delBtn);
        elementLi.appendChild(doneBtn);
        elementLi.id=newId;
        toDoList.appendChild(elementLi);
        const toDoObj = {
            text:text,
            id : newId
        }  
        toDos.push(toDoObj) ;
        // console.log(toDos);
        saveTodos();
        }

        function createDone(text){
            const elementLi = document.createElement('li')
            const delBtn = document.createElement('button')
            const doneBtn = document.createElement('button')
            const span = document.createElement("span")
            const newId = finished.length+1;
            delBtn.innerText = '❌';
            doneBtn.innerText = '✅';
            delBtn.addEventListener("click", deleteDone);
            doneBtn.addEventListener("click",backTodo)
            span.innerText = text;
            elementLi.appendChild(span);
            elementLi.appendChild(delBtn);
            elementLi.appendChild(doneBtn);
            elementLi.id=newId;
            doneList.appendChild(elementLi);
            const toDoObj = {
                text:text,
                id : newId
            }  
            finished.push(toDoObj) ;
            // console.log(toDos);
            saveFinished();
            }



        // V버튼

        function moveTodo(event){
            // console.dir(event.target)
            // console.log(sp);
            const btn = event.target;
            const li = btn.parentNode;
            const firstBtn = btn.previousSibling;
            const sp=firstBtn.previousSibling;
            deleteToDo(event)
            
            const elementLi = document.createElement('li')
            const delBtn = document.createElement('button')
            const doneBtn = document.createElement('button')
            const span = document.createElement("span")
            const newId = finished.length+1;
            delBtn.innerText = '❌';
            doneBtn.innerText = '✅';
            delBtn.addEventListener("click", deleteDone);
            doneBtn.addEventListener("click",backTodo)
            span.innerText = sp.innerText;
            elementLi.appendChild(span);
            elementLi.appendChild(delBtn);
            elementLi.appendChild(doneBtn);
            elementLi.id=newId;
            doneList.appendChild(elementLi);
            const toDoObj = {
                text:sp.innerText,
                id : li.id
            }  
            finished.push(toDoObj) ;
            // console.log(finished);
            saveFinished();
            }
    

            function backTodo(event){
                const btn = event.target;
                const li = btn.parentNode;
                const firstBtn = btn.previousSibling;
                const sp=firstBtn.previousSibling;
                deleteDone(event)


                const elementLi = document.createElement('li')
                const delBtn = document.createElement('button')
                const doneBtn = document.createElement('button')
                const span = document.createElement("span")
                const newId = toDos.length+1;
                delBtn.innerText = '❌';
                doneBtn.innerText = '⭕';
                delBtn.addEventListener("click", deleteToDo);
                doneBtn.addEventListener("click",moveTodo)
                span.innerText = sp.innerText;
                elementLi.appendChild(span);
                elementLi.appendChild(delBtn);
                elementLi.appendChild(doneBtn);
                elementLi.id=newId;
                toDoList.appendChild(elementLi);
                const toDoObj = {
                    text:sp.innerText,
                    id : li.id
                }  
                toDos.push(toDoObj) ;
                // console.log(toDos);
                saveTodos();
                // saveFinished();
                }





function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    createTodo(currentValue);
    // console.log(currentValue);
    toDoInput.value="";
}


function loadToDos(){
    const loadedToDos = localStorage.getItem("Pending");
    if(loadedToDos!==null){
        // console.log(loadedToDos);
        const parsedToDos = JSON.parse(loadedToDos);
        // console.log(parsedToDos);
        parsedToDos.forEach(toDo =>{
            createTodo(toDo.text);
            // console.log(toDo.text);
        }
            
        );
    }
}

function loadDone(){
    const loadedDone = localStorage.getItem("Finished");
    if(loadedDone!==null){
        // console.log(loadedDone);
        const parsedDone = JSON.parse(loadedDone);
        // console.log(parsedDone);
        parsedDone.forEach(toDo =>{
            createDone(toDo.text);
            // console.log(toDo.text);
        }
            
        );
    }
}


function init(){
        loadToDos();
        loadDone();
        toDoForm.addEventListener("submit",handleSubmit);
    }

    init();