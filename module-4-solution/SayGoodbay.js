(function(window){
    var goodbayPerson={};
    var goodbay='Goodbay';
    goodbayPerson.sayGoodbay=function(name){
        console.log(goodbay+" "+name);
    }
    window.goodbayPerson=goodbayPerson;
})(window)