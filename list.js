
class List{
  constructor(userArray = []){
    let result = this.constructor.createList(userArray);
    this.value = result.value;
    this.rest = result.rest;  
  }

  static createList(array){
    let value = array.shift();
    if(value === undefined) return null;
    let rest = List.createList(array);
    return {value,rest};
  }

  pushElement(element){
    let x = this;
    while(x.rest !== null){
     x = x.rest;
    }
    x.rest = {};
    x.rest.value = element;
    x.rest.rest = null;
  }

  popElement(element){
    let x = this;
    let pom;
    while(x.rest !== null){
      //console.log(x.rest);
    pom = x; 
     x = x.rest;
    }
    pom.rest = null;
    return pom.value;
  }

}
