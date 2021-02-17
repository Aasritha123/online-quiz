var questionsDiv = document.getElementsByClassName("questions")
var question_count = 0
fetch("quiz.json")
.then((response) => response.json())
.then((data) => {
    data.forEach(object => {
        question_count++
        var textData = document.createTextNode(question_count + "." + object.question)
        var questionDiv = document.createElement('div')
        questionDiv.className = "question"
        questionDiv.appendChild(textData)
        appendOptions(questionDiv, question_count, object.option1, object.option2, object.option3)
        
        questionsDiv[0].appendChild(questionDiv)
        questionsDiv[0].appendChild(document.createElement('hr'))
    });
})

function appendOptions(questionDiv, question_count, option1, option2, option3) {
    let options = [option1, option2, option3]
    options.forEach(option => {
        const inputElement = document.createElement('input')
        
        inputElement.setAttribute("type", "radio")
        inputElement.setAttribute("name", "q" + question_count)
        inputElement.setAttribute("value", option)

        questionDiv.appendChild(document.createElement('br'))
        questionDiv.appendChild(inputElement)
        questionDiv.appendChild(document.createTextNode(option))
    });
}

var quiz_form = document.getElementById('quiz_form')
console.log(quiz_form)