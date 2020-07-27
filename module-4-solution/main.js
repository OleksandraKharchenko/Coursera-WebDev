/*  This function takes an array of names and tells each of names "Hello" or "Goodbay"
    If the word starts with "j" or "J" it prints out "Goodbye JSomeName."
    If the name starts with any other letter, you are to print out "Hello SomeName."
* */


(function (window) {
    names = ['Yaakov', 'James', 'jack', 'Kim', 'Jack', 'Amanda']
    for (var person in names) {
        var res = names[person].toLowerCase();
        var ourString = function (res) {
            return res.charAt(0).toUpperCase() + res.slice(1);
        }


        if (res.startsWith('j')) {
            goodbayPerson.sayGoodbay(ourString(res));
        } else {
            helloPerson.greeting(ourString(res));
        }
    }


})(window)