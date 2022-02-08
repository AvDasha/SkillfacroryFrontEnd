const intervalId = setInterval(function (a, b) {
    for ( let i = a; i<=b; i++ )
       console.log(i);
    
    }, 1000, 1, 18); 
    
    setTimeout(function(){
      clearInterval(intervalId);
    }, 3000);