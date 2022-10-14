const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];


// get allthe elements whichever is needed
//quiz container
//queztionHeading
//alloptionlist : radio Button
//Eachoptionlist
//submitButton

let quiz=document.getElementById('quiz')
let questionHeading=document.getElementById('questionHeading')
let optionList=document.querySelectorAll('.optionlist')
let aoption=document.getElementById('aoption')
let boption=document.getElementById('boption')
let coption=document.getElementById('coption')
let doption=document.getElementById('doption')
let submitButton=document.getElementById('submit')

//-------------------------------------------//
let score =0;
let currentQuizCount=0;
loadQuiz()
function loadQuiz(){
    deSelectOption()
    let currentQuizData=quizData[currentQuizCount];
    questionHeading.innerText=currentQuizData.question
    aoption.innerText=currentQuizData.a
    boption.innerText=currentQuizData.b
    coption.innerText=currentQuizData.c
    doption.innerText=currentQuizData.d


}
//deSelectOption
function deSelectOption(){
    optionList.forEach((element)=>(element.checked=false))

}

//selection of option:
function getSelected(){
    let selectedanswer
    optionList.forEach((element)=>{
        if(element.checked){
            selectedanswer=element.id;
        
        }
})
    return selectedanswer; 
}



 submitButton.addEventListener('click',()=>{
    let answer=getSelected()
    console.log(answer)
    if(answer===quizData[currentQuizCount].correct){
        score++;
    }
    currentQuizCount++;
    if(currentQuizCount<quizData.length){
        loadQuiz()
    }

    else {
        quiz.innerHTML=(
            
        `<h2>You scored ${score}/${quizData.length}</h2>
            <button class="submit" onclick=location.reload()>Reload></button>`
        )
        document.body.style.backgroundImage="url('https://i.ibb.co/frqqx3S/glitterimg.jpg')"
        quiz.style.backgroundColor="transparent"
        quiz.style.border="none"
               
        }
    })


