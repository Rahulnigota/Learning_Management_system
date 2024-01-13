var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "What does HTML stand for?",
    "options": [
    {
    "a": "Home Tool Markup Language",
    "b": "Hyper Text Markup Language",
    "c": "Hyperlink and Text Markup Language",
    "d": "High-level Text Markup Language"
    }
    ],
    "answer": "Hyper Text Markup Language",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "What is the purpose of the <head> tag in HTML?",
    "options": [
    {
    "a": "It contains metadata about the HTML document.",
    "b": "It defines a paragraph.",
    "c": "It defines the main content of the document."
    }
    ],
    "answer": "It contains metadata about the HTML document.",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "Which attribute is used to specify the alternative text for an image in HTML?",
    "options": [
    {
    "a": "image",
    "b": "alt",
    "c": "src",
    }
    ],
    "answer": "alt",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "What does the acronym CSS stand for in the context of web development?",
    "options": [
    {
    "a": "Cascading Style Sheets",
    "b": "Colorful Style Sheets",
    "c": "Computer Style Sheets",
    }
    ],
    "answer": "Cascading Style Sheets",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "What is the purpose of the <div> element in HTML?",
    "options": [
    {
    "a": "It represents a hyperlink.",
    "b": "It defines a division or a section in an HTML document.",
    "c": "It creates a new paragraph.",
    "d": "It defines a variable."
    }
    ],
    "answer": "It defines a division or a section in an HTML document.",
    "score": 0,
    "status": ""
    },
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