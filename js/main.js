function clearData () {
    document.getElementById('result').value="";
    document.getElementById('output').innerHTML="";
}

function clickedvalue(me) {
    document.getElementById('result').value+=me;
}

function solve(){
    if(document.getElementById('result').value === ""){
        e.preventDefault(e);
    }
    else{
        let x =  document.getElementById('result').value;
        let y = eval(x);
        document.getElementById('output').innerHTML = y;
    }
    
}
function sliceValue(){
    let str = document.getElementById('result').value;
    let slicedItem = str.slice(0, -1);
    document.getElementById('result').value = slicedItem;
}

function addClass() {
    document.getElementById('calc').classList.toggle('dark-theme');
    document.getElementById("switch-img").src="assets/day-mode.png";
}