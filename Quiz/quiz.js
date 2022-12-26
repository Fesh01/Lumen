
let questions = [
  {
  numb: 01,
  question: "Who invented JavaScript?",
  answer: "Brendan Eich",
  options: [
     "Douglas Crockford",
    "Sheryl Sandberg",
    "Brendan Eich",
  ]
},

  {
  numb: 02,
  question: "Which one of these is a JavaScript package manager?",
  answer: "npm",
  options: [
    "TypeScript",
    "Node.js",
    "npm",
  ]
},

  {
  numb: 03,
  question: "Which tool can you use to ensure code quality?",
  answer: "ESLint",
  options: [
    "Angular",
    "jQuery",
    "RequireJS",
    "ESLint"
  ]
},

  {
  numb: 04,
  question: "The follow are JavaScript Data except",
  answer: "ESlint",
  options: [
    "Number",
    "ESlint",
    "Boolean",
    "Object"
  ]
},

  {
  numb: 05,
  question: "What is negative Infinity?",
  answer:  "Negative Infinity is a number in JavaScript which can be derived by dividing negative number by zero.",
  options: [
    "Negative Infinity is a number in JavaScript which can be derived by dividing negative number by zero.",
    "Negative Infinity is a number in JavaScript which can be derived by dividing negative number by a whole number.",
    "Negative Infinity is a number in my JavaScript.",
    "Negative Infinity is a number in JavaScript which can be derived by adding negative number by zero."
  ]
},

  {
  numb: 06,
  question: "What was the important event which took place in 1665?",
  answer:  "The Discovery of Newton’s law of universal gravitation",
  options: [
    "The Discovery of understanding what a Woman want",
    "The Discovery of Earth circular proof.",
    "The Discovery of Newton’s law of universal gravitation",
    "The Discovery of Elon Musk's love for CRYPTO"
  ]
},

{
  numb: 07,
  question: "What is the science of colors?",
  answer:  " Chromatics.",
  options: [
    " Chrom.",
    " Chrometics.",
    " Chromatical.",
    " Chromatics."
  ]
},

{
  numb: 08,
  question: "The band width of fringes is independent of what?",
  answer: "Order of the fringes.",
  options: [
    "Order of the fringes.",
    "  Order of vikings.",
    " Order of the fring.",
    " Order of the seeker."
  ]
},

{
  numb: 09,
question: " What is the function of ‘Tendril’ in plants?",
  answer: "Climbing.",
  options: [
    "Climbing.",
    "Trekking",
    "Eating",
    "Mating"
  ]
},

{
  numb: 10,
  question: "What is the phenomenon that makes light to propagate through optical fibre?",
  answer:  "Total Internal Reflection (TIR).",
  options: [
    "Climbing.",
    "Trekking",
    "Total Internal Reflection (TIR).",
    "Total Internal Reaction (TIR)."
  ]
}
];


const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");


start_btn.onclick = ()=>{
  info_box.classList.add("activeInfo");
}

exit_btn.onclick = ()=>{
  info_box.classList.remove("activeInfo");
}


continue_btn.onclick = ()=>{
  info_box.classList.remove("activeInfo");
  quiz_box.classList.add("activeQuiz");
  showQuetions(0);
  queCounter(1); 
  startTimer(20);
  startTimerLine(0); 
}

let timeValue =  20;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;
let totalScore = questions.length * 10

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

restart_quiz.onclick = ()=>{
  quiz_box.classList.add("activeQuiz"); 
  result_box.classList.remove("activeResult"); 
  timeValue = 20; 
  que_count = 0;
  que_numb = 1;
  userScore = 0;
  widthValue = 0;
  showQuetions(que_count); 
  queCounter(que_numb); 
  clearInterval(counter); 
  clearInterval(counterLine); 
  startTimer(timeValue); 
  startTimerLine(widthValue); 
  timeText.textContent = "Time Left";
  next_btn.classList.remove("show"); 
}

quit_quiz.onclick = ()=>{
  window.location.reload();
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");


next_btn.onclick = ()=>{
  if(que_count < questions.length - 1){ 
      que_count++; 
      que_numb++; 
      showQuetions(que_count); 
      queCounter(que_numb); 
      clearInterval(counter); 
      clearInterval(counterLine); 
      startTimer(timeValue); 
      startTimerLine(widthValue); 
      timeText.textContent = "Time Left"; 
      next_btn.classList.remove("show"); 
  }else{
      clearInterval(counter); 
      clearInterval(counterLine); 
      showResult(); 
  }
}


function showQuetions(index){
    const que_text = document.querySelector(".que_text");

   
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag; 
    
    const option = option_list.querySelectorAll(".option");

   
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';


function optionSelected(answer){
    clearInterval(counter); 
    clearInterval(counterLine); 
    let userAns = answer.textContent; 
    let correcAns = questions[que_count].answer;
    const allOptions = option_list.children.length; 
    
    if(userAns == correcAns){ 
        userScore += 10; 
        answer.classList.add("correct"); 
        answer.insertAdjacentHTML("beforeend", tickIconTag);
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); 
        answer.insertAdjacentHTML("beforeend", crossIconTag); 
        console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ 
                option_list.children[i].setAttribute("class", "option correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); 
    }
    next_btn.classList.add("show"); 
}

function showResult(){
    info_box.classList.remove("activeInfo"); 
    quiz_box.classList.remove("activeQuiz"); 
    result_box.classList.add("activeResult"); 
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 50){ 
      let scoreTag = '<span>and congrats! 🎉, You got <p>'+ userScore +'</p> out of <p>'+ totalScore +'</p></span>';
        scoreText.innerHTML = scoreTag; 
    }
    else if(userScore > 40){ 
      let scoreTag = '<span>and nice 😎, You got <p>'+ userScore +'</p> out of <p>'+ totalScore +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ 
      let scoreTag = '<span>and sorry 😐, You got only <p>'+ userScore +'</p> out of <p>'+ totalScore +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; 
        time--; 
        if(time < 9){
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; 
        }
        if(time < 0){
            clearInterval(counter);
            timeText.textContent = "Time Off"; 
            const allOptions = option_list.children.length; 
            let correcAns = questions[que_count].answer;
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ 
                    option_list.children[i].setAttribute("class", "option correct"); 
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); 
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); 
            }
            next_btn.classList.add("show");
        }
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1; 
        time_line.style.width = time + "px";
        if(time > 549){ 
            clearInterval(counterLine);
        }
    }
}

function queCounter(index){
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;
}