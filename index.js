var readlineSync = require('readline-sync');

var score = 0;

// data of high score
var highScores = [
	{
		name: 'Bawa',
		score: 10
	},

	{
		name: 'Vikram',
		score: 9
	}
];

// array of objects
var questions = [
	{
		question: 'Which team is the champions of Europe? ',
		answer: 'Chelsea'
	},
	{
		question: 'Who Scored the Goal In Ucl final? ',
		answer: 'Havertz'
	},
	{
		question: 'How MAny Ucl titles Have Chelsea Won? ',
		answer: '2'
	},
  {
     question:'Which team did Chelsea played against in Super Cup Final?',
      answer:'Villareal'
  },
  {
    question:'Who is the manager of Chelsea?',
    answer:'Tuchel',
  },
  {
    question:'Who was the predecessor Of Tuchel?',
    answer:'Lampard'
  },
  {
    question:'Was Lampard a Chelsea Player?',
    answer:'Yes'
  },
  {
    question:'In which Position lampard played at chelsea?',
    answer:'Midfield'
  },
  {
     question:'Which club did tuchel left to join chelsea?',
    answer:'Psg'
  }
];

function benvenuto() {
	var userName = readlineSync.question("Buongiorno! What's your name? ");

	console.log('Benventuro! ' + userName + ' to Football Quiz');
}

// play function
function play(question, answer) {
	var userAnswer = readlineSync.question(question);

	if (userAnswer.toLowerCase() === answer.toLowerCase()) {
		// branching
		console.log('Siuuu Bravo !');
		score = score +3 ;
	} else {
		console.log('Oh! Oh! La prossima volta sarai più fortunato ! -1 for wrong answers');
    score=score-1;
	}

	console.log('current score: ', score);
	console.log('-------------');
}

function game() {
	for (var i = 0; i < questions.length; i++) {
		var currentQuestion = questions[i];
		play(currentQuestion.question, currentQuestion.answer);
	}
}

function showScores() {
	console.log('Grazie! You SCORED: ', score);

	console.log(
		"Check out the high scores, if you should be there ping me and I'll update it"
	);
  console.log("\nThese are the top scorers")
console.log("Name\t\tScore")
for(var i = 0; i < highScores.length; i++) {
  console.log(highScores[i].name + "\t\t" + highScores[i].score);
}

}


benvenuto();
game();
showScores();
