//Global Variable
// ==============================================================
var wordBank = ["superman", "batman", 
"wonder-woman", "flash", "robin", 
"martian-manhunter", "aquaman", 
"cyborg", "firestorm", "shazam", "doctor-fate",
"red-tornado", "raven","beastboy", "hawkgirl", "harley-quinn","deadshot",
"joker","brainiac","darkseid",
"lex-luthor","reverse-flash", 
"general-zod","el-diablo","zoom","enchantress",
"poison-ivy", "riddler","vandal-savage", "bizarro"];
var spaces = "";
var userGuesses = [];
var wrongLetter = [];
var underScores = [];
var wins = 0;
var loss = 0;
var guessesLeft = 10;
var randomWord;
//Function
// ==============================================================
function startGame(){
	//picks random word
	randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
	randomWord = randomWord.replace(/\s/g, "-");
	
	
	for (var i = 0; i < randomWord.length; i++)
	{
		underScores.push("_");
	}
	//Putting underscores on screen
	document.getElementById("underscores").textContent = underScores.join(" ");

	//reset
	wrongLetter = [];
	guessesLeft = 10;

	//HTML
	document.getElementById("lives").textContent = guessesLeft;

}
//User input
document.onkeyup = function(event)
{
	userGuesses = event.key;

	if(randomWord.indexOf(userGuesses) > -1)
	{
		for (var i = 0; randomWord.length; i++) 
		{
			if (randomWord[0] === userGuesses) 
			{
				underScores[i] = userGuesses;
			}
		}
	}
	else
	{
		wrongLetter.push(userGuesses);
		guessesLeft--;
	}
}

//MISSING JS CODES
Was unable to replace "_" with a letter
Guessed letters don't appear
Lives don't change
startGame();