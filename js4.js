let stud=['ganesh','murugan','kevin'];
console.log(stud)
stud.forEach(cap);
function cap(v,i,a){
    a[i]=v[0].toUpperCase()+v.substr(1);
}
stud.forEach(print);
function print(v){
    console.log(v);
}
console.log('...........................')

let stud2=['GANESH','MURUGAN','KEVIN'];
document.getElementById('t1').innerHTML='Q1:'+stud2
function task1(){
// task1
//method1

stud2.forEach((v,i,a)=>{
   a[i]= v.toLowerCase();
    console.log(a[i]);
    // document.getElementById('ar').innerHTML=stud2

})
document.getElementById('ar').innerHTML=stud2
// method 2

stud2.forEach(caps);
function caps(v,i,a){
    a[i]=v.toLowerCase();
}
stud2.forEach(prints);
function prints(v){
    console.log('method2',v);
    
}
document.getElementById('ar').innerHTML=stud2;
console.log('.....................');

}

// task2
let stud3=['ganesh','murugan','kevin']
document.getElementById('tq2').innerHTML='Q2:'+stud3
function task2(){
   
    stud3.forEach((v,i,a)=>{
        a[i]=v[0]+v.substr(1).toLocaleUpperCase();
        console.log(a[i],"task2");
    })
    document.getElementById('t2').innerHTML=stud3
}

