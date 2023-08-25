const diario=['<iframe src="https://www.abc.com.py/" height="1000px" width="1000px"></iframe>', ' <iframe src="https://www.ultimahora.com/" height="1000px" width="1000px"></iframe>', ' <iframe src="https://www.hoy.com.py/" height="1000px" width="1000px"></iframe>']
iframe=document.getElementById("iframe");
var a=0;
function ready(){
    iframe.innerHTML=diario[0];
}
function siguiente(){
    a++;
    if(a==diario.length){
        iframe.innerHTML=diario[0];
        a=0;
    }
    else{
        iframe.innerHTML=diario[a]
    }
}
function anterior(){
    if(a==0){
        iframe.innerHTML=diario[(diario.length)-1];
        a=diario.length-1;
    }
    else{
        a--;
        iframe.innerHTML=diario[a];
    }
}
