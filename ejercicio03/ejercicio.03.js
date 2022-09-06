
//Con un Bucle For
//////////////////////////
var f=10;
let a = 1;

for(let i = 1; i<=f;i++){
    a=a*i

}
console.log(a)

//Con un Bucle While
//////////////////////////
let i=1
let b=1
while(i<=f){
    b=b*i
    i++  
}
console.log(b)

//Con un bucle while, una bifurcación if y una sentencia break
//////////////////////////

let e=1
let c=1
bucleWhile: while(true){
    
    c=c*e
    e++  
    if(c==3628800){
        break bucleWhile;
    }
}
console.log(c)




