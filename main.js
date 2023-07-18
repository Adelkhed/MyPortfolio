var tab=[5,9,102,-65,23,9,-52,100,65];
console.log(tab);
console.log(tab.filter(item => typeof(item) ==="number"));

var person={
    d:1,
    b:2,
    c:3
}

function objectToArray(person) {
    let tab=[];

    for (let key in person) {
       tab.push([key,person[key]]);
            
        }
        return tab;
    }
    console.log(objectToArray(person));

    var Budgets=[
        { name: "John", age: 21, budget: 23000 },
        { name: "Steve",  age: 32, budget: 40000 },
        { name: "Martin",  age: 16, budget: 2700 }
      ]
      console.log(Budgets);
      function getBudgets(Budgets) {
        som=0;
        for (let index = 0; index < Budgets.length; index++) {
            som+=Budgets[index].budget;
            
        }
        return som;
      }
      console.log(getBudgets(Budgets))
      const GUEST_LIST = {
        Randy: "Germany",
        Karla: "France",
        Wendy: "Japan",
        Norman: "England",
        Sam: "Argentina"
    }
    
    function greeting(name) {
      if (GUEST_LIST.hasOwnProperty(name)) {
        return `Hi! I'm ${name}, and I'm from ${GUEST_LIST[name]}.`;
      } else {
        return "Hi! I'm a guest.";
      }
    }
    console.log(greeting("adel"));
    console.log(greeting("Randy"));
var m=9;
    function convert(m) {
    return m*60;
}
console.log(convert(m));
function cubes(a) {
    return a ** 3;
  }
  console.log(convert(m));

  function binary(nb) {
    if (nb ===0){
        return "0";
    }

    let ch="";
    while (nb > 0) {
            ch= (nb % 2)+ch;
            nb=Math.floor(nb/2);
                      
        } 
        return ch;
            
        }
        
    console.log(binary(10));
    
  
/*function isNumber(item) {
    return typeof item === "number";
  }
  
function getAbsSum(tab) {
   let sum=0;
    for (let index = 0; index < tab.length; index++) {
        sum+= Math.abs(tab[index]);
        
    }
return sum;
}
console.log(getAbsSum(tab));


function minmax(tab) {
    var min=tab[0];
    var max=tab[0];
    var tab1=[];
    for (let index = 1; index < tab.length; index++) {
    if (tab[index]<min) {
        min=tab[index];
    }
    if (tab[index]>max) {
        max=tab[index];
    }
    } */
/*tab1[0]=min;
tab1[1]=max;*/
/*
tab1.push(min);
tab1.push(max);
return tab1;
}
console.log(minmax(tab));
function min(tab) {
    var a=tab[0];
    for (let index = 1; index < tab.length; index++) {
        if (tab[index]<a) {
            a=tab[index];
        }
     }
     return a;
}
console.log(min(tab));
*/
