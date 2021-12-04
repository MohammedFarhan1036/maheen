obj1 = {i:5,f: function(){return this.i;} };
var obj2 = {i:1,f: function(){return this.i;} };
var h1=document.getElementById("h1");
console.log(this);
console.log(this.obj1.f());
const btn=document.getElementById("button");
const btn2=document.getElementById("button1");
btn.addEventListener("click", this.helloworld.bind(this)) ;
btn2.addEventListener("click", this.helloworld1.bind(this)) ;
function helloworld(){
   
    
    // btn.value=i;
    console.log("hello",this);
    this.obj1.i++;
    console.log(this.obj1);
    
    console.log(obj1.i);
    btn.innerText=obj1.i;
}
function helloworld1(){
    console.log("minus",this.obj1.i);
    if (this.obj1.i===0){
        h1.innerText="Maheen Chutiye";
        this.obj1.i=0;
        console.log(h1); 
        
    }
    else{
        this.obj1.i--;
        h1.innerText="chutiye";
    }
    
    // this.obj1.i = this.obj1.i<=0 ="Maheen Chutiye"? this.obj1.i :this.obj1.i-1;
    btn.innerText=obj1.i;
}



console.log(obj1.i);
btn.innerText=obj1.i;
// debugger;