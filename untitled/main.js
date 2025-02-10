let currentQuestionIndex = 0;
const questions = [
    "Du weißt schon, dass das die falsche Taste ist, oder? 😏",
    "Wenn du Nein sagst, muss ich mit meiner Zimmerpflanze reden...  🌱",
    "Na toll, jetzt bin ich offiziell beleidigt. 😤",
    "Letzte Warnung: Der Ja-Knopf macht glücklich! 😂"
];

window.onload = function () {
    const yesButton = document.getElementById("btn1");
    const noButton = document.getElementById("btn2");
    const questionPage = document.getElementById("question-page");
    const rosePage = document.getElementById("rose-page");

    // "Rose" Seite zu Beginn ausblenden
    rosePage.classList.add("hidden");

    // "Nein"-Button Event Listener
    noButton.addEventListener("click", function () {
        if (currentQuestionIndex < questions.length) {
            updateQuestion(questions[currentQuestionIndex]);
            currentQuestionIndex++;
        }

        const noWidth = parseFloat(getComputedStyle(noButton).width);
        const noHeight = parseFloat(getComputedStyle(noButton).height);
        const noFontsize = parseFloat(getComputedStyle(noButton).fontSize);
        const yesWidth = parseFloat(getComputedStyle(yesButton).width);
        const yesHeight = parseFloat(getComputedStyle(yesButton).height);

        if (yesWidth < window.innerWidth * 0.95 && yesHeight < window.innerHeight * 0.8) {
            yesButton.style.width = `${yesWidth * 1.5}px`;
            yesButton.style.height = `${yesHeight * 1.5}px`;
        }

        if (noWidth * 0.8 > 20) {
            noButton.style.width = `${noWidth * 0.5}px`;
            noButton.style.height = `${noHeight * 0.5}px`;
            noButton.style.fontSize = `${noFontsize * 0.5}px`;
        } else {
            noButton.style.display = "none";
        }
    });

    // "Ja"-Button Event Listener
    yesButton.addEventListener("click", function () {
        questionPage.classList.add("hidden"); // Hide the question page
        rosePage.classList.remove("hidden"); // Show the rose page
        rosePage.classList.add("show"); // Ensure rose-page is displayed correctly
    });

    function updateQuestion(newQuestion) {
        const questionElement = document.querySelector("h1");
        questionElement.textContent = newQuestion;
    }
}


