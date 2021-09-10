const socket = io('http://localhost:3030')

const form = document.getElementById('send-container')
const inpMsg= document.getElementById('message-input')
const messageContainer = document.getElementById('message-container')

const append= (message,postion)=>{
    const newmsg= document.createElement('div')
    newmsg.innerText= message
    newmsg.classList.add('mssg')
    newmsg.classList.add(postion)
    messageContainer.append(newmsg)

}

const name= prompt('enter your name to chat')


socket.emit('new-user-joined',name)
socket.on('user-join', newuser =>{
    console.log(newuser)
    append(`${newuser} joined the chat`,'right')
})

socket.on('recive',data=>{
    append(`${data.name}:${data.message}`,'left')
})

form.addEventListener('submit', e =>{
    e.preventDefault()
    const msg= inpMsg.value
    append(`YOU: ${msg}`,'right')
    socket.emit('send',msg)
    inpMsg.value='k'
})


