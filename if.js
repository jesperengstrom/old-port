var namn = prompt("Skriv in ditt namn: ");

var score = 0;

var q1 = prompt("Vad heter Indonesiens huvudstad?")
	if (q1 === "Jakarta" || q1 === "jakarta") {
		score++
	}

var q2 = prompt("Vilket år började första världskriget?")
	if (q2 === "1939" || q2 === "nittonhundratrettionio" || q2 === "Nittonhundratrettionio") {
		score++
	}

var q3 = prompt("Hur många lärjungar hade Jesus?")
	if (q3 === "tolv" || q3 === "12" || q3 === "Tolv") {
		score++
	}

var q4 = prompt("Vad heter Sveriges utrikesminister i efternamn?")
	if (q4 === "Wallström" || q4 === "wallström") {
		score++
	}

var q5 = prompt("Hur många dagar är det på ett skottår?")
	if (q5 === "366" || q5 === "trehundrasextiosex" || q5 === "Trehundrasextiosex") {
		score++
	}

switch (true){
	case (score === 0):
	document.write("Nä " + namn + ", du fick " + score + " poäng. Inget vidare!" );
	break;

	case (score === 1 || score === 2):
	document.write("Inget vidare " + namn + ", du fick " + score + " poäng och vann en dammtuss." );
	break;

	case (score === 3 || score === 4):
	document.write("Bra jobbat " + namn + ", du fick " + score + " poäng och vann en halvhjärtad applåd..." );
	break;

	case (score === 5):
	document.write("Suveränt " + namn + ", du fick alla rätt och vann ett glas vatten!" );
	break;
