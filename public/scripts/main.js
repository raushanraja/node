const button = document.getElementById('button');
const loginURL = 'localhost:3200/api/users/login';
const email = document.getElementById('email');
const password = document.getElementById('password');

button.addEventListener('click',async (e)=> {
    e.preventDefault();
    const response = await fetch("/api/users/login",{
        method:'POST',
        mode:"cors",
        body:JSON.stringify(
            {
                "user": {
                  "email": email.value,
                  "password":password.value
                }
              }  
        ) , 
        headers: {
            'Content-Type': 'application/json'
          },   
    })

    result = await response.json();
    console.log(result);
    
    alert(response.statusText);

})