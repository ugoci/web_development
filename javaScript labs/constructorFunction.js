function HouseKeeper (name, salary, languages){
    this.name = name,
    this.salary = salary,
    this.languages = languages
    this.clean = function (){
        clean();
    }
}

var houseKeeper = new HouseKeeper ("Sally", "100000", ["Arabic", "English"]);

console.log(houseKeeper.name);