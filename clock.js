let clock = document.getElementById('clock');

setInterval(()=>{

    let date = new Date();
    clock.innerHTML = date.toLocaleString(); //for  Local Time and local date
},1000) 


//toLocaleTimeString() : only for local time
//toLocaleDateString() : only for local date