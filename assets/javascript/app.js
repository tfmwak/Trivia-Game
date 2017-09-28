$('#start').on('click', function(){
	$('#start').remove();
	for(var i=0; i<questions.length; i++){
		$('#subwrapper').append('<h2>' +questions[i].question+'</h2');
		for (var j=0; j<questions[i].answers.length; j++) {
			$("#subwrapper").append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>" +questions[i].answers[j])
		}
	}
})

var questions = [{
	question: "Which of the following is an all-female race?",
	answers:["Elcor", "Hanar", "Turians", "Asari"],
	correctAnswer: "Asari"
}, {
	question: "What is the Krogan homeworld?",
	answers: ["Palaven", "Tuchanka", "Thessia", "Rannoch"],
	correctAnswer: "Tuchanka"
}, {
	question: "What is default Shepard's first name?",
	answers:["Jacob", "Jack", "John", "Jared"],
	correctAnswer: "John"
} , {
	question: "What is the name of the bar on the planet of Omega?",
	answers: ["Dark Star Lounge", "Purgatory", "Flux", "Afterlife Club"],
	correctAnswer: "Afterlife Club"
} , {
	question: "Who is Archangel?",
	answers: ["Miranda", "Legion", "Garrus", "Kaidan"],
	correctAnswer: "Garrus"
}]

var game = {
	correct: 0,
	incorrect: 0,
	counter: 120,
	countdown: function(){
		game.counter--;
		$('#counter').html(game.counter);
		if(game.counter<=0) {
			console.log("Time is up!");
			game.done();

		}
	},
	start: function{
		timer = setInterval(game.countdown,1000);
		$('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>');
		$('#start').remove();
		for(var i=0; i<questions.length; i++){
			$('#subwrapper').append('<h2>' +questions[i].question+'</h2');
			for (var j=0; j<questions[i].answers.length; j++) {
				$("#subwrapper").append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>" +questions[i].answers[j])
			}
		}
	},
	done: function(){
		$.each($('input[name="question-0]" :checked'),function(){
			if ($(this).val()==questions[0].correctAnswer) {
				game.correct++;
			} else{
				game.incorrect++;
			}
		
		});
		$.each($('input[name="question-1]" :checked'),function(){
			if ($(this).val()==questions[1].correctAnswer) {
				game.correct++;
			} else{
				game.incorrect++;
			}
		
		});
		$.each($('input[name="question-2]" :checked'),function(){
			if ($(this).val()==questions[2].correctAnswer) {
				game.correct++;
			} else{
				game.incorrect++;
			}
		
		});
		$.each($('input[name="question-3]" :checked'),function(){
			if ($(this).val()==questions[3].correctAnswer) {
				game.correct++;
			} else{
				game.incorrect++;
			}
		
		});
		$.each($('input[name="question-4]" :checked'),function(){
			if ($(this).val()==questions[4].correctAnswer) {
				game.correct++;
			} else{
				game.incorrect++;
			}
		
		});
		}
	}




}
