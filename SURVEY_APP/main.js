const questions = [
    {
        questions:"what is your best phone brand?",
        options: ["Apple", "Samsung", "Google", "Others"],
    },
    {
        questions: "What is your best cloth brand?",
        options: ["Nike", "Adidas", "Puma", "Others"],
    },
    {
        questions: "How many siblings do you have?",
        options: ["0", "1", "2", "3", "4+"],
    },
    {
        questions: "What is your best color?",
        options: ["Red", "Blue", "Green", "Yellow", "Others"],
    },
    {
        questions: "Who do you live with?",
        options: ["Parents", "Friends", "Alone", "Family"],
    },
    {
        questions: "what is you favorite food?",
        options: ["Pizza", "Burger", "Pasta", "Salad", "Others"],
    },
    {
        questions: "What is your favorite sport?",
        options: ["Football", "Basketball", "Tennis", "Cricket", "Others"],
    },
    {
        questions: "What is your favorite movie genre?",
        options: ["Action", "Comedy", "Drama", "Horror", "Others"],
    },
    {
        questions: "What is your favorite music genre?",
        options: ["Pop", "Rock", "Hip-Hop", "Classical", "Others"],
    },
    {
        questions: "What is your favorite book genre?",
        options: ["Fiction", "Non-Fiction", "Mystery", "Fantasy", "Others"],
    },
    {
        questions: "What is your favorite vacation destination?",
        options: ["Beach", "Mountains", "City", "Countryside", "Others"],
    },
    {        questions: "What is your favorite hobby?",
        options: ["Reading", "Traveling", "Cooking", "Sports", "Others"],
    },
    {
        questions: "What is your favorite season?",
        options: ["Spring", "Summer", "Autumn", "Winter"],
    },
    {
            questions: "What is your favorite pet?",
        options: ["Dog", "Cat", "Bird", "Fish", "Others"],
    },
    {
        questions: "What is your favorite type of cuisine?",
        options: ["Italian", "Chinese", "Mexican", "Indian", "Others"],
    },
    {
        questions: "What is your favorite type of exercise?",
        options: ["Running", "Yoga", "Gym", "Swimming", "Others"],
    },
    {
        questions: "What is your favorite type of music?",
        options: ["Pop", "Rock", "Hip-Hop", "Classical", "Others"],
    },
    {
        questions: "What is your favorite type of art?",
        options: ["Painting", "Sculpture", "Photography", "Digital Art", "Others"],
    },
    {
        questions: "What is your favorite type of dance?",
        options: ["Ballet", "Hip-Hop", "Salsa", "Contemporary", "Others"],
    },
    {
        questions: "What is your favorite type of game?",
        options: ["Video Games", "Board Games", "Card Games", "Outdoor Games", "Others"],
    }
];


let currentQuestionIndex = 0;
const answers = [];

const surveyContainer = document.getElementById("Survey");
const nextBtn = document.getElementById("nextBtn");

function showQuestion(index) {
    const questionData = questions[index];
    let html  = `<h2>Question ${index +  1}  of ${questions.length}</h2>`;
    html += `<p>${questionData.questions}</p>`;
    html += `<form id="optionsForm">`;
    questionData.options.forEach((option, i) => {
        html += `<label>
            <input type="radio" name="option" value="${option}" required>
            ${option}
        </label><br>`;
    });
    html += `</form>`;
    surveyContainer.innerHTML = html;
    nextBtn.style.display = inline-block;
    nextBtn.textContent = index === questions.length - 1 ? "Submit" : "Next";
}
nextBtn.addEventListener("click", () => {
    const optionsForm = document.getElementById("optionsForm");
    const selectedOption = optionsForm.querySelector('input[name="option"]:checked');
    
    if (selectedOption) {
        answers[currentQuestionIndex] = selectedOption.value;
        currentQuestionIndex++;
        
        if (currentQuestionIndex < questions.length) {
            showQuestion(currentQuestionIndex);
        } else {
            surveyContainer.innerHTML = `<h2>Thank you for completing the survey!</h2>`;
            nextBtn.style.display = "none";
            console.log("Survey Answers:", answers);
        }
    } else {
        alert("Please select an option before proceeding.");
    }
});

function initSurvey() {
    let html = `<h1>Congratulation!<h1>`;
    questions.forEach((question, index) => {
        html += `<h2>Question ${index + 1} of ${questions.length}</h2>`;
        html += `<p>${question.questions}</p>`;
        question.options.forEach(option => {
            html += `<label>
                <input type="radio" name="option${index}" value="${option}" required>
                ${option}
            </label><br>`;
        });
    });
    html += '</ul>';
    surveyDiv.innerHTML = html;
    nextBtn.style.display = "inline-block";
}

document.addEventListener("DOMContentLoaded", () => {
    showQuestion(currentQuestionIndex);
});
