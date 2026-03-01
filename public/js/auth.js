import { signInWithEmailAndPassword } from 
"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import { auth } from "./firebase-config.js";

window.login = function(){

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth,email,password)
    .then(()=>{
        window.location="dashboard.html";
    })
    .catch(error=>{
        alert(error.message);
    });
}
