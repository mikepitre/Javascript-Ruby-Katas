// Normal Mode

var sayHelloWorld = function () {
  console.log("Hello World!")
};

var fizzbuzz = function(range) {
  for (var i = 1; i <= range; i++ ) {
    if ((i % 3 === 0) && (i % 5 === 0))
        console.log("fizzbuzz");
    else if (i % 3 === 0)
        console.log("fizz");
    else if (i % 5 === 0)
        console.log("buzz");
    else
        console.log(i);
  }
}

var ageVerifier = function(age) {
  if (age < 21)
    console.log("Too young");
  else
    console.log("Proceed");
}


// Hard Mode

var pigatize = function(word) {
    if (word[0].toLowerCase() === ("a" || "e" || "i" || "o" || "u"))
        console.log(word + "way");
    else
        console.log(word.slice(1) + word[0] + "ay");
}

// Nightmare Mode

var arrayAgeVerifier = function(age_arr) {
  age_arr.forEach(ageVerifier);
}



sayHelloWorld();
fizzbuzz(50);
ageVerifier(25);
ageVerifier(15);
pigatize("apple");
pigatize("Apple");
pigatize("fantastic");
arrayAgeVerifier([1, 23, 45, 17]);

