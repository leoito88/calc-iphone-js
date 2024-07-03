let history = document.getElementById("history");

function calculation(val){
    para = document.createElement("p");
    data = val + " = " + eval(val);
    para.innerText = data;
    history.appendChild(para);
    console.log("correcto");
    return eval(val);
}

// Code for backspace

function backspace(b){
    return b.slice(0, b.length-1);
}