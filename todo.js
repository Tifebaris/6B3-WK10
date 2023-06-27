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
    liELSpan2.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>`
  
    liELSpan3.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-[#454545]">
    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
  </svg>
  `

    inputEL.value = ''

    liELSpan2.addEventListener('click', ()=>{
        liELSpan1.classList.toggle('line-through')
        liELSpan1.classList.toggle('text-[#FF6000]')

    })

    liELSpan3.addEventListener('click', ()=>{
        liEL.remove()
        

    })
    
}