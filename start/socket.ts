import Ws from 'App/Services/Ws'
Ws.boot()

/**
 * Listen for incoming socket connections
 */
Ws.io.on('connection', (socket) => {
  console.log('WebSocket connected:', socket.id);
  socket.join("main-lobby");
  socket.to("main-lobby").emit('connected', { hello: 'world' })
})
