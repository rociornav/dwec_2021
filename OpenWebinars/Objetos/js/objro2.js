
/*
[{'a': 5}, {'b': 4}...]
[{letra: 'a', contador: 5}, {letra: 'b', contador: 4}...]
*/
function getStats(cad){
   // const cad=document.getElementById("cadena")?.value?.toLowerCase();
    const abecedario=[['a','á'],'b','c','d',['e','é'],'f','g','h',['i','í'],'j','k','l','m','n','ñ',['o','ó'],'p','q','r','s','t',['u','ú'],'v','w','x','y','z'];
    let veces=[];

    //comprobar si la cad existe o no esta vacia
    if(cad && cad!=''){
        //recorro con for each el ABECEDARIO
        abecedario.forEach(element => {
            let letra;
            if(Array.isArray(element)){
                let counter = 0;
                element.forEach(e => counter+=(cad.match(new RegExp(e,'g')) || []).length);
                letra = {
                    letra: element[0], 
                    contador: counter
                }
                
            }else{
                letra = {
                    letra: element, 
                    contador: (cad.match(new RegExp(element,'g')) || []).length
                }
            }
            
            veces.push(letra);
            letra=null;
        });
    }else{
        //aparece cero veces porque no hay cadena XD
        abecedario.forEach(e => veces.push({letra: (Array.isArray(e) ? e[0] : e), contador: 0}));
    }
    return veces;
    //console.log(veces);
}

function show(){
    const cadVal=document.getElementById("cadena")?.value?.toLowerCase();
    const stats=getStats(cadVal);
    //alert(JSON.stringify(stats)); sirve tmbn
    document.getElementById("res1").innerHTML = ""
    stats.forEach(elem => document.getElementById("res1").innerHTML += "<li>Letra:"+elem.letra+", Veces:"+elem.contador+"</li>");
    document.getElementById("res2").innerHTML = '<tr><th>Letra</th><th>Veces</th></tr>'
    stats.forEach(elem => document.getElementById("res2").innerHTML += "<tr><td>"+elem.letra+"</td><td>"+elem.contador+"</td></tr>");
}




