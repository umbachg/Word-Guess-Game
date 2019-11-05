
// var possibleWords = ["America ", "Spain", "France", "Lithuania", "Argentina", "Russia", "PuertoRico", "Turkey", "Brazil", "Australia"];
var possibleWords = [
    {
        name: "Ada Lovelace",
        cardimage: "Alice_Gardner img",
        cardinfo: "Ada Lovelace was born in 1815 in London, UK. Ada was born nearly 100 yearsbefore the first prototype of the modern-day computer was built, but she is still regarded as a pioneer in programming. Ada’s reputation can be attributed to her work on the interpretation of Charles Babbage’s analytical engine. The analytical engine enabled the mechanizing of mathematical operations and is hence considered a major event in the timeline of computer evolution. The Ada programming language, named after her, is an object-oriented, high-level programming language that has built-in support for design by contract, strong typing, concurrency, offering tasks, synchronous message passing, protected objects, and non-determinism."
    },

    {
        name: "Grace Hopper",
        cardimage: "Alice_Gardner img",
        cardinfo: "Grace Hopper was a computer scientist born in New York on December 9, 1906. She wasn’t just a scientist; she also served in the US navy. Her technological contributions and achievements include the invention of the first compiler for a programming language and the pioneer ship in the programming of the Harvard Mark 1 computer. She was the mind behind popularizing machine-independent programming languages which later paved the way for one of the first high-level programming languages, COBOL."
    },

    {
        name: "ENIAC",
        cardimage: "Alice_Gardner img",
        cardinfo: "Six women programmers created the first programmable computer that was fully electronic. The women were Kathleen McNulty Mauchly Antonelli, Jean Jennings Bartik, Frances Snyder Holder, Marlyn Wescoff Meltzer, Frances Bilas Spence, and Ruth Lichterman Teitelbaum. The project was run by the US Army and was a secret World War II project. There weren’t any programming languages then and programming had to be done based on logic diagrams. The outcome of their efforts was a computer performing complex calculus in seconds. They, however, didn’t receive due credit for their work. These women were later called the six great women of ENIAC. An ENIAC programmers project is now dedicated to researching their work and getting them the honor that is their due."
    },

    {
        name: "Edith Clarke",
        cardimage: "Alice_Gardner img",
        cardinfo: "Edith Clarke was the first female electrical engineer. She was also the first female professor of electrical engineering at the University of Texas at Austin. Born to a family of nine children, she was orphaned at the age of 12. She used her inheritance to fund her college education and became a graduate in mathematics. She taught at a private school before joining AT&T. While she worked there, she managed to complete her degree in electrical engineering from Columbia University. She later became the first woman to enroll and earn a master’s degree in electrical engineering from Massachusetts Institute of technology. Her most famous contribution is the Clarke calculator that solved equations involving hyperbolic functions ten times faster than other devices of the time. With her perseverance and hard work, Edith followed her passion and pursued a highly successful career in electrical engineering."
    },

    {
        name: "Evelyn Boyd Granville",
        cardimage: "Alice_Gardner img",
        cardinfo: "Evelyn Boyd Granville was the second African-American woman to earn a Ph.D. in mathematics from an American University. She went to Smith college, Massachusetts, and later earned her Ph.D in 1949 from Yale University. She started her career with a teaching position at Fisk University. She then joined the US space technology laboratories, where she helped US space missions by studying rocket trajectories and orbit computations. In 1967, she returned to her teaching career and continued her advocacy for women’s education in tech for the remaining 30 years of her career."
    },

    {
        name: "Sister Mary Kenneth Keller",
        cardimage: "Alice_Gardner img",
        cardinfo: "Among the first people in the US to receive a doctorate, Keller was a pioneer in computer science. After earning her masters in mathematics from DePaul University, she worked at the National Science Foundation where she developed the programming language BASIC to make computer education more accessible to the masses. After her doctorate, Keller set up the computer science department at Clarke College to promote computer education."
    },

    {
        name: "Carol Shaw",
        cardimage: "Alice_Gardner img",
        cardinfo: "Carol Shaw is believed to be the first female video game designer. A graduate in electrical engineering from the University of California, Berkeley, she began her career at Atari Inc. She created some of the most popular games for Atari Inc. such as Polo, 3-D Tic-Tac-Toe, and River Raid."
    },

    {
        name: "Janese Swanson",
        cardimage: "Alice_Gardner img",
        cardinfo: "American software developer, Swanson is famous for founding Girl Tech, a company for making technology more interesting to women. At the age of 15, she started working as a salesperson  in the television and sound system department at Sears. Her experience in sales came in handy when she became the manager of the technology department at a store called My Child’s destiny. She did her certifications in computers from Berkeley and a Ph.D before creating Girl Tech."
    },

    {
        name: "Radia Perlman",
        cardimage: "Alice_Gardner img",
        cardinfo: "Radia Perlman is a software developer who invented the STP (Spanning-Tree Protocol), which is fundamental to the operation of the Internet. While studying at MIT, she took up an undergraduate research opportunity and developed a child-friendly robotic language, TORTIS (Toddler’s Own Recursive Turtle Interpreter System). She made many notable contributions to network design and standardization including link-state protocols. She is also the inventor of  TRILL, a software that overcomes the shortcomings of spanning-trees. A pioneer in computer programming, she holds over 100 issued patents."
    },

    {
        name: "Parisa Tabriz",
        cardimage: "Alice_Gardner img",
        cardinfo: "Parisa Tabriz turned her passion for cyber security into her profession. Parisa was drawn to website security during her college days, after her own website was hacked. She researched extensively on network security and privacy enhancing technology during her graduation. She was soon selected for summer internship at Google that later turned into a full-time role. She now leads Internet Security for Google chrome, world wide."
    }

]

// Swal.fire({
//     title: 'Error!',
//     text: 'Do you want to continue',
//     type: 'error',
//     confirmButtonText: 'Cool'
//   })

var maxGuess = 26;
var pauseGame = false;
var guessedLetters = [];
var guessingWord = [];
var person;
var numGuess;
var wins = 0;
// var win = card;
// var lose = new Audio("");
// i dont know why but it will not let me use the normal way of attaching a file. im going to try again in the morning.
// var lose = new Audio("C:\Users\panth\Desktop\HOMEWORK\HW4\Word-Guess-Game\assets\sounds\front-desk-bells-daniel_simon (1).mp3");
// var win = new Audio("C:\Users\panth\Desktop\HOMEWORK\HW4\Word-Guess-Game\assets\sounds\foghorn-daniel_simon.mp3");
resetGame();

document.onkeypress = function (event) {

    if (isAlpha(event.key) && !pauseGame) {
        checkForLetter(event.key.toUpperCase());
    }
}

function checkForLetter(letter) {
    var foundLetter = false;

    var wordToMatch = person.name.toUpperCase()

    for (var i = 0, j = wordToMatch.length; i < j; i++) {
        if (letter === wordToMatch[i]) {
            guessingWord[i] = letter;
            foundLetter = true;


            if (guessingWord.join("") === wordToMatch) {
                
                Swal.fire({
                    
                    title: person.name,
                    text: person.cardinfo,
                    // type: 'success',
                    confirmButtonText: 'play again!',
                    onClose: resetGame,
                  });
                
                wins++;
                pauseGame = true;
                updateDisplay();
                // setTimeout(resetGame, 3000);
            }
        }
    }

    if (!foundLetter) {

        if (!guessedLetters.includes(letter)) {
            guessedLetters.push(letter);
            numGuess--;
        }
        if (numGuess === 0) {
            guessingWord = wordToMatch.split();
            pauseGame = true;
            setTimeout(resetGame, 3000);
        }
    }
    updateDisplay();
}

function isAlpha(ch) {
    return /^[A-Z]$/i.test(ch);
}

function resetGame() {
    numGuess = maxGuess;
    pauseGame = false;

    person = possibleWords[Math.floor(Math.random() * possibleWords.length)];
    console.log(person);

    guessedLetters = [];
    guessingWord = [];


    var wordToMatch = person.name.toUpperCase()

    for (var i = 0, j = person.name.length; i < j; i++) {

        if (wordToMatch[i] === " ") {
            guessingWord.push(" ");
        } else {
            guessingWord.push("_");
        }
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("totalWins").innerHTML = wins;
    document.getElementById("currentWord").innerHTML = guessingWord.join("");
    document.getElementById("remainingGuesses").innerHTML = numGuess;
    document.getElementById("guessedLetters").innerHTML = guessedLetters.join(" ");
}