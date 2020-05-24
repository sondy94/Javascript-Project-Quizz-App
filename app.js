const correctAnswers = ['B','B','B','B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result-section');

form.addEventListener('submit', e => {
	e.preventDefault();

	const userAnswer = [form.q1.value,form.q2.value,form.q3.value,form.q4.value];


        var score = 0;

	userAnswer.forEach((answer,index) => {
		if (answer === correctAnswers[index]) {

			score += 25;
		}
	});

	scrollTo(0,0);
	

	let output = 0;
	 const timer = setInterval(() => {
	 	result.querySelector('span').textContent = `${output}%`;

	 	if(output === score){
	 		clearInterval(timer);
	 	} else {
	 		output++;
	 	}
	 },50);
});