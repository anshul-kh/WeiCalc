const button = document.getElementById('button');
var text2 =document.getElementById('result');

button.onclick=function (){
    const select = document.getElementById('planet').value;
    const weight = document.getElementById('weight').value;

    switch (select) {
        case "Venus":
            text2.innerHTML= `Your Weight will be ${weight*0.9}kg`;
            break;
        case "Moon":
            text2.innerHTML= `Your Weight will be ${weight*0.165}kg`;
            break;
        case "Mars":
            text2.innerHTML= `Your Weight will be ${weight*0.380}kg`;
            break;
        case "Jupiter":
            text2.innerHTML= `Your Weight will be ${weight*2.528}kg`;
            break;
        case "Saturn":
            text2.innerHTML= `Your Weight will be ${weight*1.08}kg`;
            break;
    
        default:
            break;
    }
    //  if(select==="Venus"){
    //  text2.innerHTML= `Your Weight will be ${weight*0.9}kg`;
    //  }
    
}


