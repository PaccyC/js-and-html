function Animal(name,sound,legs,tail){
    this.name=name
    this.sound=sound
    this.legs=legs
    this.tail=tail
    this.bio=function(){
        console.log(this.name+" has legs "+this.legs +" makes sound "+this.sound +" ");
    }
}
let cat=new Animal("cat","nyawo",4,"long");
cat.bio();
let hen=new Animal("hen","kokoko",2,"short")
hen.bio();
function Rectangle(){
    this.name
    this.width
    this.height
    this.calculateArea=function(){
        return this.width * this.height;
    }

}
let rect1=new Rectangle();
rect1.width=5;
rect1.height=10;
console.log(rect1.calculateArea());
function Person(name,height,age){
    this.name=name
    this.height=height
    this.age=age
   this.description=function(){
        console.log("Hi my names are "+this.name +" , my height is "+this.height+" and my age is "+this.age);
    }


}
let paccy=new Person("paccy",1.70 +"m",15);
paccy.description()
//prototypes
// function Student(){
// this.name="paccy"
// this.height='1.75 m'

// }
// let stdnt1=new Student();
// stdnt1.age=15;
// console.log((stdnt1.age));
// let stdnt2=new Student();
// console.log((stdnt2.age));
//using prototypes
function Student(){
    this.name="paccy"
    this.height='1.75 m'
    
    }
Student.prototype.age=42;
    let stdnt1=new Student();
    console.log((stdnt1.age));
    let stdnt2=new Student();
    console.log((stdnt2.age));
    //changing prototype
    Student.prototype={age:54};
    stdnt3=new Student();
    console.log(stdnt3.age);
    console.log(stdnt1.age);
    console.log(stdnt2.age);

   
      
       var proto=Object.getPrototypeOf(stdnt1);
       console.log(proto.constructor);
       console.log(Student.hasOwnProperty('name'));
       function Foo(){};
       function Bar(){};
       Bar.prototype=Object.create(Foo.prototype);
       const bar=new Bar();
       console.log(Foo.prototype.isPrototypeOf(bar));
       console.log(Bar.prototype.isPrototypeOf(bar));