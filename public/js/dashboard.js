import { db } from "./firebase-config.js";
import { ref, onValue } from 
"https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

onValue(ref(db,"scans"), snapshot=>{

    const data = snapshot.val();
    if(!data) return;

    const scans = Object.values(data);
    const high = scans.filter(s=>s.status==="HIGH").length;

    let level="GREEN";

    if(high>20) level="RED";
    else if(high>5) level="YELLOW";

    document.getElementById("threatLevel").innerHTML=
        "Global Threat Level: "+level;
});
