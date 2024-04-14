
function connectSession({uri,authToken}){
    const ws = new WebSocket(`ws://${uri}/connect-session?token=${authToken}`);
    
    ws.onopen = (event)=>{
        console.log('connected to server');
        console.log(event);
    }
    
    return ws;
}

export default connectSession;
