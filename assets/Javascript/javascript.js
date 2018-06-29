alert("Press the space key to begin!");

var gameObject = {
    
    currentLetter: "",

    allGuesses: [],
    incorrectGuesses: [],
    correctGuesses: [],
    correctGuessesInOrder: [],

    characterArray: [
        {name: "BATMAN", image: "assets/Images/batman.png", text: "Dark Knight. Caped Crusader. World’s Greatest Detective. Whatever you know him as, wherever you know him from—the blockbuster movies, TV shows, video games, cartoons, or millions of comics—Batman is proof you don’t need superpowers to be a superhero… and the poster boy for what a bad childhood can do to you."},
        {name: "SUPERMAN", image: "assets/Images/superman.png", text: "Look! Up in the sky! It’s a bird! It’s a plane! It’s…Well, you know how it ends, don’t you? It’s a sentence so iconic, there are probably kids shouting it in Swahili as you read this."},
        {name: "WONDER WOMAN", image:"assets/Images/wonderWoman.png", text: "OK, let’s just come out and say it: Wonder Woman is the most famous heroine of all time. No offense to the Lara Crofts, Buffys, or Disney princesses of the world, but none of them have been plastered on as many magazine covers, adorned as many T-shirts, or sold the countless comics, dolls, and action figures that Wonder Woman has. The full package of beauty, brains, and brawn, she’s been a feminist icon since her star-spangled intro in 1941."},
        {name: "CYBORG", image:"assets/Images/cyborg.png", text: "Nowadays, everyone’s juggling an offline and online persona. But only one hero is a literal marriage of technology and man. Half human, half machine, Victor Stone is Cyborg, a digital and physical tank—and a true superhero for the modern age."},
        {name: "THE FLASH", image:"assets/Images/theFlash.png", text: "Indy cars, bullet trains, supersonic aircraft… The Flash leaves them all in the dust."},
        {name: "GREEN LANTERN",image:"assets/Images/greenLantern.png", text: "Imagine if the ring on your finger was more than a piece of gaudy jewelry. Instead, it’s the universe’s most powerful weapon. It can create whatever you wish out of pure energy, its might limited only by your imagination and will. And with it comes exclusive membership to an exclusive intergalactic police force with alien officers spanning the cosmos."},
        {name: "AQUAMAN", image:"assets/Images/aquaman.png", text: "Make all the sushi jokes, YouTube spoofs, and SNL sketches you want, Aquaman’s been an icon for over seventy years. The King of the Seven Seas. Reluctant ruler of Atlantis. A man who holds his own against heroes like Superman and Wonder Woman. He’s so recognizable that when officials speak about the perils of sea pollution, they’ll whip out Aquaman references to sound hip."},
        {name: "RAVEN", image:"assets/Images/raven.png", text: "Emotions can drive people to act in strange and unusual ways. Love can cause you to do crazy things. Sadness can throw you into lethargy. Anger can lead you to violence. But for the hero known as Raven, any extreme emotion can do far worse: It can unleash her demonic side and cause her to destroy the world."},
        {name: "GREEN ARROW", image:"assets/Images/greenArrow.png", text: "What was the last thing you took home from an island getaway? A tacky souvenir? A great tan? More boring slideshows than you have friends to show?"},
        {name: "STARFIRE", image:"assets/Images/starfire.png", text: "A princess who became a slave. A slave who became a warrior. A warrior who became one of the world’s greatest super heroes."},
        {name: "CATWOMAN", image:"assets/Images/catwoman.png", text: "She's made countless comic book appearances since her debut in 1940's BATMAN #1. She's been portrayed by two Oscar-nominated actresses—Michelle Pfeiffer in Tim Burton's classic film 'Batman Returns' and Anne Hathaway in director Christopher Nolan's critically acclaimed blockbuster 'The Dark Knight Rises.' And she's been featured in almost every Batman-related animated or video game incarnation."},
        {name: "THE JOKER", image:"assets/Images/theJoker.png", text: "Don't make us laugh. The green hair. The crazed smile. The maniacal cackle. You know exactly who he is and how far he'd go to put a smile on your face."},
        {name: "HARLEY QUINN", image:"assets/Images/harleyQuinn.png", text: "Love makes us do crazy things. And for the bubbly and psychotic Harley Quinn, that includes dressing in costume, becoming a super-villain, carrying gag-themed weaponry, and murdering countless civilians—all just to put a smile on her puddin's face. "},
        {name: "GORILLA GRODD",image:"assets/Images/gorillaGrodd.png", text: "Through millions of years of adaptation and change, human beings evolved to become the dominant species on the planet Earth. But for the super-villain known as Grodd, the world shouldn't belong to the humans. It belongs to the apes."},
        {name: "POISON IVY", image:"assets/Images/poisonIvy.png", text: "Some of the most beautiful plants in the world are dangerous. They’re alluring, beckoning you closer with their shape and their bloom, and by the time you realize the peril you’re in, it’s too late. In nature, beauty can be a weapon. So it’s fitting that Poison Ivy, Gotham’s beautiful-but-deadly eco-terrorist, would use it as hers."},
        {name: "SCARECROW", image:"assets/Images/scarecrow.png", text: "As the Guardian of Gotham, Batman strikes fear into the hearts of his enemies—utilizing terror itself as a weapon in his crusade against the villains that plague his city. However, there is another denizen of Gotham that knows how to use fear to his advantage. One that turns Batman's own weapon against him and revels in terror and dread: the Scarecrow."},
        {name: "MR FREEZE", image:"assets/Images/mrFreeze.png", text: "Having a cold heart doesn't mean you're incapable of feeling love. Just ask Victor Fries. His is a sad tale of loss, obsession and villainy."},
        {name: "DARKSEID", image:"assets/Images/darkseid.png", text: "Some villains want to increase their financial standings. Some want to best their enemy in battle. Others want to take over a country and a few even desire to rule the planet. One stands above them all. One whose ambition extends beyond simply conquering the world. One that doesn't want to rule humanity—but all of existence. He is Darkseid, and when it comes to villains in the DC Universe, it doesn't get any bigger or badder than him."},
        {name: "ATROCITUS", image:"assets/Images/atrocitus.png", text: "Red Lantern Atrocitus seeks revenge against all members of the Sinestro Corps for their murderous oppression of his homeworld. His hate blazes a path across the galaxy leading him to Earth."},
        {name: "KILLER FROST",image:"assets/Images/killerFrost.png", text: "After gaining the ability to absorb heat from living beings and to project cold and ice, Caitlin Snow emerged a changed woman—and became the villain Killer Frost."},
        {name: "IRON MAN", image:"assets/Images/ironMan.png", text: "Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man."},
        {name: "CAPTAIN AMERICA", image:"assets/Images/captainAmerica.png", text: "Vowing to serve his country any way he could, young Steve Rogers took the super soldier serum to become America's one-man army. Fighting for the red, white and blue for over 60 years, Captain America is the living, breathing symbol of freedom and liberty."},
        {name: "SPIDERMAN", image:"assets/Images/spiderman.png", text: "Bitten by a radioactive spider, high school student Peter Parker gained the speed, strength and powers of a spider. Adopting the name Spider-Man, Peter hoped to start a career using his new abilities. Taught that with great power comes great responsibility, Spidey has vowed to use his powers to help people."},
        {name: "BLACK PANTHER", image:"assets/Images/blackPanther.png", text: "T'Challa's senses and physical attributes have been enhanced to superhuman levels by the heart-shaped herb. T'Challa is a brilliant tactician, strategist, scientist, tracker and a master of all forms of unarmed combat whose unique hybrid fighting style incorporates acrobatics and aspects of animal mimicry."},
        {name: "SCARLET WITCH", image:"assets/Images/scarletWitch.png", text: "The Scarlet Witch can tap into mystic energy for reality-altering effects; she later became able to alter reality on a far greater scale, creating entire armies of enemies from nowhere. Although the Scarlet Witch has been trained in basic sorcery techniques, she lacks the specialized mystic training required to fully control her power."},
        {name: "BLACK WIDOW",image:"assets/Images/blackWidow.png", text: "Natasha Romanova, known by many aliases, is an expert spy, athlete, and assassin. Trained at a young age by the KGB's infamous Red Room Academy, the Black Widow was formerly an enemy to the Avengers. She later became their ally after breaking out of the U.S.S.R.'s grasp, and also serves as a top S.H.I.E.L.D. agent."},
        {name: "THE HULK", image:"assets/Images/theHulk.png", text: "Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. An all too often misunderstood hero, the angrier the Hulk gets, the stronger the Hulk gets."},
        {name: "DOCTOR STRANGE", image:"assets/Images/doctorStrange.png", text: "Doctor Strange is one of the most powerful sorcerers in existence. Doctor Strange is a skilled athlete and martial artist with substantial medical and magical knowledge. Though an expert surgeon, Strange's nerve-damaged hands prevent him from performing surgery except when supplemented by magic."},
        {name: "THOR", image:"assets/Images/thor.png", text: "As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate. He's self-assured, and he would never, ever stop fighting for a worthwhile cause."},
        {name: "WOLVERINE", image:"assets/Images/wolverine.png", text: "Born with super-human senses and the power to heal from almost any wound, Wolverine was captured by a secret Canadian organization and given an unbreakable skeleton and claws. Treated like an animal, it took years for him to control himself. Now, he's a premiere member of both the X-Men and the Avengers."},
        {name: "THANOS", image:"assets/Images/thanos.png", text: "The Mad Titan Thanos, a melancholy, brooding individual, consumed with the concept of death, sought out personal power and increased strength, endowing himself with cybernetic implants until he became more powerful than any of his brethren."},
        {name: "ULTRON", image:"assets/Images/ultron.png", text: "Arguably the greatest and certainly the most horrific creation of scientific genius Dr. Henry Pym, Ultron is a criminally insane rogue sentient robot dedicated to conquest and the extermination of humanity."},
        {name: "WINTER SOLDIER", image:"assets/Images/winterSoldier.png", text: "Bucky Barnes is an Olympic-class athlete and expectional acrobat highly skilled in both unarmed and armed hand-to-hand combat and extremely accurate marksman. he is fluent in four languages including German and Russian."},
        {name: "RED SKULL", image:"assets/Images/redSkull.png", text: "Johann Schmidt was a Nazi general officer and confidant of Adolf Hitler. He has been closely affiliated with Hydra and is an enemy of S.H.I.E.L.D., the Avengers, and the interests of the United States and the free world in general. He has been seemingly killed in the past, only to return time and time again to plague the world with schemes of world domination and genocide."},
        {name: "HELA", image:"assets/Images/hela.png", text: "Hela was born in Jotunheim, the land of the giants. She is the child of Loki (albeit a different incarnation who died during a previous Asgardian Ragnarok) and the giantess Angrboða. When she came of age, Odin appointed her as the Goddess of the Dead, giving her rulership over the dead in the realms of Hel and Niflheim."},
        {name: "GREEN GOBLIN", image:"assets/Images/greenGoblin.png", text: "The father of Peter Parker's best friend, Harry, businessman Norman Osborn moonlights as the unstable Green Goblin and has caused Spider-Man more tragedy than any other foe!"},
        {name: "MAGNETO", image:"assets/Images/magneto.png", text: "Magneto was born Max Eisenhardt sometime in the late 1920s to a middle-class German-Jewish family. Max's father, Jakob Eisenhardt, was a decorated World War I veteran. Magneto is a mutant with the power to manipulate magnetic fields to achieve a wide range of effects."},
        {name: "VENOM", image:"assets/Images/venom.png", text: "While Eddie Brock’s academic career seemed to take off, his personal life was in shambles due to his quick temper and inability to connect with women on any level, and Eddie became isolated, but when his old friend Peter Parker contacted him, he felt a rush of enthusiasm: here, at last, was someone with whom he could truly bond."},
        {name: "LOKI", image:"assets/Images/loki.png", text: "Loki is one of several powerful beings from the magical realm of Asgard, who have been worshipped as gods. Loki possesses physical abilities far superior to humans, and is perhaps the most powerful sorcerer in all of Asgard."},
        {name: "DOCTOR OCTOPUS", image:"assets/Images/drOctopus.png", text: "Prior to his criminal career, Otto was a brilliant and respected nuclear physicist, atomic research consultant, inventor, and lecturer. He designed a set of highly advanced mechanical arms controlled via a brain–computer interface to assist him with his research into atomic physics."},
    ],
    
    randomWord: "",
    randomImage: "",
    randomText: "",
    characterLetters: [],

    isMatch: null,
    isRepeat: null,

    guessesRemaining: 10,
    loseCount: 0,
    winCount: 0,

    generateWord: function() {
        var randomNumber = Math.random() * 41;
        randomNumber = Math.floor(randomNumber);

        this.randomWord = this.characterArray[randomNumber].name;
        this.characterLetters = this.randomWord.split("");
        this.randomImage = this.characterArray[randomNumber].image;
        this.randomText = this.characterArray[randomNumber].text;
        console.log(this.randomWord + " " + this.characterLetters);

        this.allGuesses = [];
        this.incorrectGuesses = [];
        this.correctGuesses = [];
        this.correctGuessesInOrder = [];
        this.guessesRemaining = 10;
    },

    checkRepeat: function() {
        var repeatCounter = -1;

        for (var i = 0; i < this.allGuesses.length; i++) {
            if (this.currentLetter == this.allGuesses[i]) {
                repeatCounter++;
            }
        }

        if (repeatCounter == 0) {
            this.isRepeat = false;
        }
        else { 
            this.isRepeat = true;
        }
    },

    checkMatch: function() {
        var matchCounter = 0;
        
        for (var i = 0; i < this.characterLetters.length; i++) {
            if (this.currentLetter == this.characterLetters[i]) {
                matchCounter++;
            }
        }
        
        if (matchCounter == 0) {
            this.isMatch = false;
        }

        else { 
            this.isMatch = true;
        }
    },

    match_repeatComparison: function() {
        if (this.isRepeat == true) {
            this.allGuesses.pop(this.currentLetter);
        }

        if (this.isRepeat == false && this.isMatch == false) {
            this.incorrectGuesses.push(this.currentLetter);
            this.guessesRemaining--;
        }

        if (this.isRepeat == false && this.isMatch == true) {
            this.correctGuesses.push(this.currentLetter);
        }
    },

    revealCharacter: function() {
        if (this.correctGuesses.length == 0) {
            for (var i = 0; i < this.characterLetters.length; i++) {
                this.correctGuessesInOrder[i] = "_";
            }
        }

        else {
            for (var i = 0; i < this.characterLetters.length; i++) {
                if (this.correctGuessesInOrder[i] != this.characterLetters[i]) {
                    for (var j = 0; j < this.correctGuesses.length; j++) {
                        if (this.correctGuesses[j] == this.characterLetters[i]) {
                            this.correctGuessesInOrder[i] = this.characterLetters[i];
                        }

                        else {
                            this.correctGuessesInOrder[i] = "_";
                        }
                    }
                }
            }
        }

        document.getElementById("charSelect").innerHTML = this.correctGuessesInOrder.join(" ");
        document.getElementById("totalWins").innerHTML = this.winCount;
        document.getElementById("totalLosses").innerHTML = this.loseCount;
        document.getElementById("lettersGuessed").innerHTML = this.incorrectGuesses;
        document.getElementById("remainingGuesses").innerHTML = this.guessesRemaining;
    },

    checkProgress: function() {
        var counter = 0;

        for (var i = 0; i < this.characterLetters.length; i++) {
            if (this.correctGuessesInOrder[i] == this.characterLetters[i]) {
                counter++;
            }
        }

        if (counter == this.characterLetters.length) {
            alert("You win! Press the space key to continue.");
            document.getElementById("charImage").src = this.randomImage;
            document.getElementById("flavorText").innerHTML = this.randomText;
			this.winCount++;
            this.generateWord();
        }

		if (this.guessesRemaining == 0) {
			alert("You lose! Press Space key to continue.");
			this.loseCount++;
			this.generateWord();
		}
    },
}

var userStartedGame = false;

document.onkeydown = function(q) {
    gameObject.currentLetter = String.fromCharCode(q.keyCode).toUpperCase();

    if (gameObject.currentLetter == " " && userStartedGame == false) {
        gameObject.generateWord();
        userStartedGame = true;
    }

    gameObject.allGuesses.push(gameObject.currentLetter);

    console.log("Current letter:" + gameObject.currentLetter + "\n" + gameObject.characterLetters + "\n" + "All Guesses:" + gameObject.allGuesses);

    gameObject.checkRepeat();
    gameObject.checkMatch();

    gameObject.match_repeatComparison();

    console.log("Correct Guesses: " + gameObject.correctGuesses);
	console.log("Incorrect Guesses: " + gameObject.incorrectGuesses);
    console.log("Guesses Remaining:" + gameObject.guessesRemaining);
    
    gameObject.revealCharacter();
    console.log(gameObject.correctGuessesInOrder);

    gameObject.checkProgress();
}