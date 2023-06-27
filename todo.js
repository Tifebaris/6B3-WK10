const formEL = document.querySelector('form')
const ulEL = document.querySelector('ul')
const inputEL = document.querySelector('input')

formEL.addEventListener('submit', handleSubmit)

function handleSubmit(e){
    e.preventDefault()
    todoList()
}

function todoList(){
    // alert(inputEL.value)
    const liEL = document.createElement('li')
    const liELSpan1 = document.createElement('span')
    const liELSpan2 = document.createElement('span')
    const liELSpan3 = document.createElement('span')

    ulEL.appendChild(liEL)
    liEL.appendChild(liELSpan1)
    liEL.appendChild(liELSpan2)
    liEL.appendChild(liELSpan3)

    liELSpan1.innerText = inputEL.value
    liELSpan2.innerText = 'mark'
    liELSpan3.innerText = 'delete'

    inputEL.value = ''

    liELSpan2.addEventListener('click', ()=>{
        liELSpan1.classList.toggle('line-through')
        liELSpan1.classList.toggle('text-[#FF6000]')

    })

    liELSpan3.addEventListener('click', ()=>{
        liEL.remove()
        

    })
    
}