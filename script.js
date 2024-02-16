const options = [
	{
		id: "option1",
		text: 'JavaScript',
		votes: 0
	},
	{
		id:	"option2",
		text: 'Python',
		votes: 0
	},
	{
		id:	"option3",
		text: 'C#',
		votes: 0
	},
	{
		id:	"option4",
		text: 'Golang',
		votes: 0
	},
]

function submitVote(){

	const selectedOption = document.querySelector('input[name="poll"]:checked')

	// console.log(selectedOption.value);

	if(!selectedOption) {
		alert('Please select an option')
		return

		//how does the return work
	}



	const optionId = selectedOption.value;

	const selectOptionObj = options.find((option) => option.id === optionId)


	if(selectOptionObj) {
		selectOptionObj.votes++
		console.log(selectOptionObj);
		// display result
		displayResults()
	}

}

function displayResults() {
	const result = document.getElementById("result")
	result.innerHTML = "";



	options.forEach((option) => {
		
		
		// const percentage = Math.round((option.votes / totalVotes) * 100)
		// const barwidth = `${percentage}%` 

		const percentage = ((option.votes / getTotalVotes()) * 100).toFixed(2) || 0;
		const barwidth = percentage > 0 ? percentage + "%" : "0%";


		const optionResult = document.createElement("div");
		optionResult.className = "option-result";
		optionResult.innerHtml = `<span class="option-text"></span>
		<div class="bar-container">
			<div class="bar" style="width: ${barwidth}"></div>
		</div>
		<span class="percentage">${percentage}%</span>`


		result.appendChild(optionResult)

	})
}

function getTotalVotes () {
	return options.reduce((total, option) => total + option.votes, 0)
}

displayResults()