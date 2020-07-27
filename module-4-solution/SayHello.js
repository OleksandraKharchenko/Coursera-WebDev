(function(window){
    var helloPerson={};
    var firstHello='Hello';
    helloPerson.greeting=function(name){
        console.log(firstHello+" "+name);
    }

    window.helloPerson=helloPerson;
})(window)