import { db } from "./firebase-config.js";
import { ref, push } from 
"https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

let high=0, medium=0, low=0;

window.toggleSenior = function(){
    document.body.classList.toggle("senior");
}

window.scanText = function(){

    const text = document.getElementById("inputText").value.toLowerCase();
    let score = 0;

    const patterns=[
        "otp","kode","verifikasi",
        "transfer","account suspended",
        "click","hadiah","link"
    ];

    patterns.forEach(p=>{
        if(text.includes(p)) score+=15;
    });

    if(text.match(/http/)) score+=20;
    if(text.match(/\d{4,6}/)) score+=20;

    let status="LOW";

    if(score>=60){ status="HIGH"; high++; }
    else if(score>=30){ status="MEDIUM"; medium++; }
    else{ low++; }

    document.getElementById("result").innerHTML=
        "Score: "+score+" → "+status;

    document.getElementById("explain").innerHTML=
        "Detected: "+patterns.filter(p=>text.includes(p)).join(", ");

    push(ref(db,"scans"),{
        text,
        score,
        status,
        time:Date.now()
    });

    updateChart();
}

function updateChart(){
    const ctx=document.getElementById("chart");

    new Chart(ctx,{
        type:"bar",
        data:{
            labels:["High","Medium","Low"],
            datasets:[{
                data:[high,medium,low]
            }]
        }
    });
}
