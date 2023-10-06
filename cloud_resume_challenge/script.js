const counter = document.getElementById("counter-number");
async function updateCounter() {
	let response = await fetch("https://3k5hrt4uts4s7b24qxcughfwwa0rscay.lambda-url.eu-west-3.on.aws/");
	let data = await response.json();
	counter.innerHTML = `Views: ${data}`;
}

updateCounter();