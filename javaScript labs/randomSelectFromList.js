function whosPaying(names) {
    
        var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];   
        var numberPeople = names.length;
        var selector = Math.random();
        var selector = selector * numberPeople;
        var selector = Math.floor(selector);
        var payer = names[selector];
    
        return payer + " is going to buy lunch today!"
    
    }