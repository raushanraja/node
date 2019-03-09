let socket = io.connect('http://localhost:4500')
let name=document.getElementById('newID')
let submit = document.getElementById('submit');
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("submit").click();
    }
  }); 

submit.onclick = () => {
    let msg = document.getElementById('startadding')
    console.log(document.getElementById('message-to-send').value);
    msg.innerHTML += `<li class="clearfix"><div class="message-data align-right"><span class="message-data-time" >10:PM, Today</span> &nbsp; &nbsp;<span class="message-data-name" >Olia</span> <i class="fa fa-circle me"></i></div><div class="message other-message float-right">${document.getElementById("message-to-send").value}</div></li>`
    socket.emit('message', {
        message: document.getElementById('message-to-send').value
    })

    var container = document.getElementsByTagName("ul")[0];
    var lastchild = container.lastChild;

    function myFunction() {
        lastchild.scrollIntoView();
    }
    myFunction();

}

socket.on('message', (data) => {
    let msg = document.getElementById('startadding')
    msg.innerHTML += `<li>
    <div class="message-data">
    <span class="message-data-name"><i class="fa fa-circle online"></i> Vincent</span>
    <span class="message-data-time">11:PM, Today</span>
    </div>
    <div class="message my-message">
    ${data.message}
    </div>
    </li>`
    var container = document.getElementsByTagName("ul")[0];
    var lastchild = container.lastChild;

    function myFunction() {
        lastchild.scrollIntoView();
    }
    myFunction();
})