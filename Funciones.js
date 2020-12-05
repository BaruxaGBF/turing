var pos=1;
var Cinta=[];
var ant=0;
var q0=true;
var fin=true;
var t=1000;
var F;
var idC=1;
var idAnt=1;
var palabra="";
var st;

function FormarCinta(Cinta,Cad){;
    
    var auxi = document.getElementById("error");
    auxi.className = "tipoaux";
    document.getElementById("error").innerHTML = "<p>.</p>";

    var errorByA = document.createTextNode("Ingrese una cadena que contenga solo b y a"); 
    if(!difeAyB()){
        if(document.getElementById("error").childNodes[0]!=null)
          document.getElementById("error").removeChild(document.getElementById("error").childNodes[0]); 
          
          document.getElementById("error").innerHTML = "<p> </p>";

    if(Cad.length>0){
        Cinta.push("#");
        for(let i=0;i<Cad.length;i++){
            Cinta.push(Cad.charAt(i));
        }
        Cinta.push("#");
    }
    }else{
      if(!document.getElementById("error").hasChildNodes(errorByA))
      document.getElementById("error").appendChild(errorByA);
      auxi.className = "tipo2";
      document.getElementById("error").innerHTML = "<p>Ingrese una cadena que contenga solo b y a</p>";
    }
}
function difeAyB(){
    palabra=document.getElementById("Palabra").value; 
    let rege=/[^(a|b)]/g;
    return rege.test(palabra);
}
function CrearM(){
    document.getElementById("contenedor").remove();
    var newDiv2 = document.createElement("div");
    newDiv2.setAttribute("id","contenedor");
    var currentDiv2 = document.getElementById("div1"); 
    document.body.insertBefore(newDiv2, currentDiv2);
    for(let i=0;i<Cinta.length;i++){
        var newDiv = document.createElement("textarea");
        newDiv.setAttribute("id",i);
        newDiv.disabled=true; 
        var newContent = document.createTextNode(Cinta[i]); 
        newDiv.appendChild(newContent);
        newDiv2.appendChild(newDiv);
        newDiv.className= "text-area";
    }
}
function reiniciar(){
    pos=1;
    idC=1;
    ant=0;
    idAnt=0;
    q0=true;
    fin=true;
    pos=1;
    Cinta=[];
    clearInterval(F);
    clearTimeout(st);

    palabra=document.getElementById("Palabra").value; 
    FormarCinta(Cinta,palabra);
    CrearM();
    document.getElementById("r").disabled=false;
    document.getElementById("p").disabled=false;
    document.getElementById("r").style.background="black";
    document.getElementById("p").style.background="black";
    diagrama.model.setDataProperty(diagrama.model.linkDataArray[0], "color", "black");
    diagrama.model.setDataProperty(diagrama.model.linkDataArray[1], "color", "black");
    diagrama.model.setDataProperty(diagrama.model.linkDataArray[2], "color", "black");
    diagrama.model.setDataProperty(diagrama.model.linkDataArray[3], "color", "black");
    diagrama.model.setDataProperty(diagrama.model.linkDataArray[4], "color", "black");
    diagrama.model.setDataProperty(diagrama.model.nodeDataArray[0], "color2", "black");
    diagrama.model.setDataProperty(diagrama.model.nodeDataArray[1], "color2", "black");
}
function resolver(){
    document.getElementById("r").style.background="gray";
    document.getElementById("p").style.background="gray";
    document.getElementById("r").disabled=true;
    document.getElementById("p").disabled=true;
    if(fin){
         F= setInterval(function(){
            if(fin){
                PasoAPaso();
            }else{
                clearInterval(F);
            }
        },t);
    }   
}
function PasoAPaso(){
    if(Cinta.length>0){
       if(fin){

        document.getElementById("sel").disabled=true;

        var auxi = document.getElementById("error");
        auxi.className = "tipo4";
        document.getElementById("error").innerHTML = "<p>Ejecutando...</p>";

        if(q0){
            if(Cinta[pos]==="a"){
                diagrama.model.setDataProperty(diagrama.model.nodeDataArray[0], "color2", "black");
                diagrama.model.setDataProperty(diagrama.model.linkDataArray[ant], "color", "black");
                st=setTimeout(() => {                  
                    document.getElementById(idAnt).style.border="solid 1px black";
                    diagrama.model.setDataProperty(diagrama.model.nodeDataArray[0], "color2", "rgb(98, 216, 98)")     
                    diagrama.model.setDataProperty(diagrama.model.linkDataArray[0], "color", "rgb(255, 132, 132)");
                    document.getElementById(idC).value="a";
                    document.getElementById(idC).style.border="solid 1px red";
                    idAnt=idC;
                    idC++;
                }, t/2);             
                Cinta[pos]="a";
                ant=0;
                pos++;               
            }else if(Cinta[pos]==="b"){
                diagrama.model.setDataProperty(diagrama.model.nodeDataArray[0], "color2", "black");
                diagrama.model.setDataProperty(diagrama.model.linkDataArray[ant], "color", "black");
                st=setTimeout(() => {
                    document.getElementById(idAnt).style.border="solid 1px black";
                    diagrama.model.setDataProperty(diagrama.model.nodeDataArray[0], "color2", "rgb(98, 216, 98)");   
                    diagrama.model.setDataProperty(diagrama.model.linkDataArray[1], "color", "rgb(255, 132, 132)");
                    document.getElementById(idC).value="a";
                    document.getElementById(idC).style.border="solid 1px red";
                    idAnt=idC;
                    idC++;
                }, t/2);
                Cinta[pos]="a";
                ant=1;
                pos++;
            }else if(Cinta[pos]==="#"){
                diagrama.model.setDataProperty(diagrama.model.nodeDataArray[0], "color2", "black");
                diagrama.model.setDataProperty(diagrama.model.linkDataArray[ant], "color", "black");
                st=setTimeout(() => {
                    document.getElementById(idAnt).style.border="solid 1px black";
                    diagrama.model.setDataProperty(diagrama.model.nodeDataArray[1], "color2", "rgb(98, 216, 98)");   
                    diagrama.model.setDataProperty(diagrama.model.linkDataArray[2], "color", "rgb(255, 132, 132)");
                    document.getElementById(idC).value="#";
                    document.getElementById(idC).style.border="solid 1px red";
                    idAnt=idC;
                    idC--;
                }, t/2);
                Cinta[pos]="#";
                ant=2;
                pos--;
                q0=false;
            }
        }else{
            if(Cinta[pos]==="a"){
                diagrama.model.setDataProperty(diagrama.model.nodeDataArray[1], "color2", "black");
                diagrama.model.setDataProperty(diagrama.model.linkDataArray[ant], "color", "black");
                st=setTimeout(() => {
                    document.getElementById(idAnt).style.border="solid 1px black";
                    diagrama.model.setDataProperty(diagrama.model.nodeDataArray[1], "color2", "rgb(98, 216, 98)");   
                    diagrama.model.setDataProperty(diagrama.model.linkDataArray[3], "color", "rgb(255, 132, 132)");
                    document.getElementById(idC).value="a";
                    document.getElementById(idC).style.border="solid 1px red";
                    idAnt=idC;
                    idC--;
                }, t/2);
                Cinta[pos]="a";
                ant=3;
                pos--;
            }else if(Cinta[pos]==="#"){
                diagrama.model.setDataProperty(diagrama.model.nodeDataArray[1], "color2", "black");
                diagrama.model.setDataProperty(diagrama.model.linkDataArray[ant], "color", "black");
                st=setTimeout(() => {                   
                    document.getElementById(idAnt).style.border="solid 1px black";
                    diagrama.model.setDataProperty(diagrama.model.nodeDataArray[1], "color2", "rgb(98, 216, 98)");   
                    diagrama.model.setDataProperty(diagrama.model.linkDataArray[4], "color", "rgb(255, 132, 132)");
                    document.getElementById(idC).value="#";
                    document.getElementById(idC).style.border="solid 1px red";
                    idAnt=idC;
                    idC++;
                    st=setTimeout(() => {
                        document.getElementById(idAnt).style.border="solid 1px black";
                        document.getElementById(idC).style.border="solid 1px red";
                        var auxi = document.getElementById("error");
                        auxi.className = "tipo3";
                        document.getElementById("error").innerHTML = "<p>Proceso finalizado</p>";
                    }, t/2);
                }, t/2);               
                Cinta[pos]="#";
                ant=4;
                pos++;
                document.getElementById("r").style.background="gray";
                document.getElementById("p").style.background="gray";
                document.getElementById("r").disabled=true;
                document.getElementById("p").disabled=true;

                document.getElementById("sel").disabled=false;
                
                fin=false;
            }
        } 
        } 
    }else{
        var auxi = document.getElementById("error");
        auxi.className = "tipo4";
        document.getElementById("error").innerHTML = "<p>Cadena vacía</p>";
    }
        
}
