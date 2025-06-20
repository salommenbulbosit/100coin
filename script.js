let son1 = prompt('1-hohlagan soningizni kiritnig')
let son2 = prompt('2-hohlagan soningizni kiritnig')
let son3 = prompt('3-hohlagan soningizni kiritnig')
let ortaSon = ('ntopilmadi')  

if(son2 < son1 > son3){
   ortaSon = son1
    
}else if(son3 < son1 > son2){
    ortaSon = son1
    
}
else if(son2 < son3 > son1){
   ortaSon = son3
    
}    
else if(son1 < son3 > son2){
    ortaSon = son3
    
}
else if(son1 < son2 > son3){
   ortaSon = son2
    
}    

else{
   ortaSon = son2
    
}

alert('siz kiritgan sonlardan ortasi bu: ' + ortaSon)

