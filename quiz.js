function checkAnswer(userAnswer, correctAnswer) {
    // Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        // If the answer is correct, return a success message or perform an action
        return "Correct! Well done!";
    } else {
        // If the answer is incorrect, return a failure message or perform another action
        return "Oops! That's incorrect. Try again!";
    }
}
<script>
    //define the correct answer
    const correct answer ="4";


     function submmit answer(){
        const userAnswer=document.getElementById("answer").value;

        //checkAnswer function and get results
        const result =checkAnswer(useranswer,correctanswer);

        //Display results to the user
        alert(result);

     }


     function checkAnswer(userAnswer,correctAnswer){
        if(uswerAnswer===correctAnswer)
            return"correct! Well done";
     }else{
        return "oops! Thats incorect.Try again!";
     }

     }
</script>

// Declare a function named checkAnswer
function checkAnswer() {
    // Declare a variable named correctAnswer and assign it the string value "4"
    const correctAnswer = "4";

    // Retrieve the user's answer using document.querySelector
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Check if a radio button was selected
    if (selectedOption) {
        const userAnswer = selectedOption.value; // Access the value property of the selected radio button

        // Compare the user's answer with the correct answer
        if (userAnswer === correctAnswer) {
            // If the answer is correct, change the textContent of the feedback element
            document.getElementById('feedback').textContent = "Correct! Well done.";
        } else {
            // If the answer is incorrect, update the feedback element
            document.getElementById('feedback').textContent = "That's incorrect. Try again!";
        }
    } else {
        // If no radio button is selected, display an error message
        document.getElementById('feedback').textContent = "Please select an answer.";
    }
}

// Add an event listener to the "Submit Answer" button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
