
//declaration of class
class employee{
    //initiallizing an object
    constructor(id,name){
        this.id=id;
        this.name=name;
    }
    //declaring method
    detail(){
        document.writeln(this.id+""+this.name+"<br>")
    }
}
//passing object to a variable
var e1=new employee(101,"Martin Roy");
var e2=new employee(102,"Duke William");
e1.detail();//calling method
e2.detail();