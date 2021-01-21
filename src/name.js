const getname = document.querySelector('.getname'),
    name = document.getElementById('name'),
    greeting = document.querySelector('.js-greetings')

const SHOWING_CN="showing";


function askName(){
    getname.classList.add(SHOWING_CN);
    getname.addEventListener('submit', handleSubmit);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue= name.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}


function paintGreeting(text){
    getname.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`
}

function saveName(user){
    localStorage.setItem("User",user)
}

function loadName(){
    const currentUser = localStorage.getItem('name')
    if(currentUser === null){
        askName()
    } else{
        paintGreeting(currentUser);
    }
    
}

function init(){
    loadName();

}

init();