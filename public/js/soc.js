import { db } from "./firebase-config.js";
import { ref, onValue } from 
"https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

onValue(ref(db,"scans"), snapshot=>{

    const data = snapshot.val();
    if(!data) return;

    const scans = Object.values(data);

    document.getElementById("liveFeed").innerHTML=
        scans.slice(-10).map(s=>
            "[ "+new Date(s.time).toLocaleTimeString()+" ] "
            + s.status
        ).join("<br>");
});
