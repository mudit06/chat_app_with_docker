const io = require('socket.io')(3030,{
    cors:{
        origin:'*',
    }
})

const users={}

io.on('connection', socket=>{
    console.log('socket-module started')
    socket.on('new-user-joined', name =>{
        users[socket.id]= name
        socket.broadcast.emit('user-join',name)
        console.log(name)
    })

    socket.on('send',message =>{
        socket.broadcast.emit('recive',{message: message,name: users[socket.id]})

    })
})