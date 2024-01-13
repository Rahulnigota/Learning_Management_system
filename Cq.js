var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "What does CSS stand for?",
    "options": [
    {
    "a": "Computer Style Sheets",
    "b": "Creative Style Sheets",
    "c": "Cascading Style Sheets",
    "d": "Colorful Style Sheets"
    }
    ],
    "answer": "Cascading Style Sheets",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "How can you apply styles to only the first child of an element?",
    "options": [
    {
    "a": ":first-child",
    "b": ".first-child",
    "c": "first-child",
    "d": "#first-child"
    }
    ],
    "answer": ":first-child",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "What does the clearfix class in CSS typically help with?",
    "options": [
    {
    "a": "Adding shadows to elements",
    "b": "Clearing floats and preventing layout issues",
    "c": "Setting text alignment"
    }
    ],
    "answer": "Clearing floats and preventing layout issues",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "How do you include comments in CSS?",
    "options": [
    {
    "a": "// This is a comment",
    "b": "/* This is a comment */",
    "c": "// This is a comment //"
    }
    ],
    "answer": "/* This is a comment */",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "Which property is used to change the text color of an element?",
    "options": [
    {
    "a": "text-color",
    "b": "color",
    "c": "font-color",
    "d": "textColor",
    }
    ],
    "answer": "color",
    "score": 0,
    "status": ""
    },
    {
    "id": 6,
    "question": "How can you center an element horizontally in CSS?",
    "options": [
    {
    "a": "margin: auto;",
    "b": "position: center;",
    "c": "text-align: center;",
    }
    ],
    "answer": "margin: auto;",
    "score": 0,
    "status": ""
    },
    {
    "id": 7,
    "question": "How do you make a text italic in CSS?",
    "options": [
    {
    "a": "style: italic;",
    "b": "italic: true;",
    "c": "font-style: italic;",
    }
    ],
    "answer": "font-style: italic;",
    "score": 0,
    "status": ""
    },
    {
    "id": 8,
    "question": "How can you add a background color to an element?",
    "options": [
    {
    "a": "bg-color",
    "b": "background-color",
    "c": "color-background",
    "d": "element-background",
    }
    ],
    "answer": "background-color>",
    "score": 0,
    "status": ""
    },
    {
    "id": 9,
    "question": "What is the purpose of the flexbox layout in CSS?",
    "options": [
    {
    "a": "It controls the spacing between elements.",
    "b": "It allows for more complex and responsive layouts.",
    "c": "It sets the font size of elements.",
    "d": "It defines the color scheme of a webpage."
    }
    ],
    "answer": "It allows for more complex and responsive layouts.",
    "score": 0,
    "status": ""
    },
    {
    "id": 10,
    "question": "What is the default value of the position property in CSS?",
    "options": [
    {
    "a": "relative",
    "b": "absolute",
    "c": "fixed",
    "d": "static",
    }
    ],
    "answer": "static",
    "score": 0,
    "status": ""
    }
    ]
    }
    var quizApp = function () {
    this.score = 0;
    this.qno = 1;
    this.currentque = 0;
    var totalque = quiz.JS.length;
    this.displayQuiz = function (cque) {
    this.currentque = cque;
    if (this.currentque < totalque) {
    $("#tque").html(totalque);
    $("#previous").attr("disabled", false);
    $("#next").attr("disabled", false);
    $("#qid").html(quiz.JS[this.currentque].id + '.');
    $("#question").html(quiz.JS[this.currentque].question);
    $("#question-options").html("");
    for (var key in quiz.JS[this.currentque].options[0]) {
    if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
    $("#question-options").append(
    "<div class='form-check option-block'>" +
    "<label class='form-check-label'>" +
    "<input type='radio' class='form-check-input' name='option' id='q" + key + "' value='" + quiz.JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
    quiz.JS[this.currentque].options[0][key] +
    "</span></label>"
    );
    }
    }
    }
    if (this.currentque <= 0) {
    $("#previous").attr("disabled", true);
    }
    if (this.currentque >= totalque) {
    $('#next').attr('disabled', true);
    for (var i = 0; i < totalque; i++) {
    this.score = this.score + quiz.JS[i].score;
    }
    return this.showResult(this.score);
    }
    }
    this.showResult = function (scr) {
    $("#result").addClass('result');
    $("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr + '/' + totalque + "</h1>");
    for (var j = 0; j < totalque; j++) {
    var res;
    if (quiz.JS[j].score == 0) {
    res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
    } else {
    res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
    }
    $("#result").append(
    '<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + quiz.JS[j].question + '</div>' +
    '<div><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
    '<div class="last-row"><b>Score:</b> &nbsp;' + res +
    '</div>'
    );
    }
    }
    this.checkAnswer = function (option) {
    var answer = quiz.JS[this.currentque].answer;
    option = option.replace(/</g, "&lt;") //for <
    option = option.replace(/>/g, "&gt;") //for >
    option = option.replace(/"/g, "&quot;")
    if (option == quiz.JS[this.currentque].answer) {
    if (quiz.JS[this.currentque].score == "") {
    quiz.JS[this.currentque].score = 1;
    quiz.JS[this.currentque].status = "correct";
    }
    } else {
    quiz.JS[this.currentque].status = "wrong";
    }
    }
    this.changeQuestion = function (cque) {
    this.currentque = this.currentque + cque;
    this.displayQuiz(this.currentque);
    }
    }
    var jsq = new quizApp();
    var selectedopt;
    $(document).ready(function () {
    jsq.displayQuiz(0);
    $('#question-options').on('change', 'input[type=radio][name=option]', function (e) {
    //var radio = $(this).find('input:radio');
    $(this).prop("checked", true);
    selectedopt = $(this).val();
    });
    });
    $('#next').click(function (e) {
    e.preventDefault();
    if (selectedopt) {
    jsq.checkAnswer(selectedopt);
    }
    jsq.changeQuestion(1);
    });
    $('#previous').click(function (e) {
    e.preventDefault();
    if (selectedopt) {
    jsq.checkAnswer(selectedopt);
    }
    jsq.changeQuestion(-1);
    });