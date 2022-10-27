const showBtn = document.getElementById('get-questions-btn');
const clearBtn = document.getElementById('clear');
const questionList = document.getElementById('question-list');
const questionDetails = document.getElementById('question-details');
const questionDetail = document.getElementById('question');
const finishBtn = document.getElementById('detail-close-btn'); 

showBtn.addEventListener('click', showQuestions);
clearBtn.addEventListener('click', clearQuestions);
finishBtn.addEventListener('click', clearDetails);

function showQuestions () {
    questionList.innerHTML = "";

    for (let i = 0; i < 11; i++){
        const questionItem = document.createElement('button');
        questionItem.classList.add('question-item');

        questionList.appendChild(questionItem);
    }

    clearBtn.style.visibility = 'visible';
}

function clearQuestions() {
    questionList.innerHTML = "";
    clearBtn.style.visibility = 'hidden';
    questionDetails.style.visibility = 'hidden';
}

questionList.addEventListener('click', function(e){
    if (e.target.tagName === 'BUTTON'){
        let question = 'Do you collect things?';
        questionDetail.innerHTML = question;
        e.target.innerHTML = question;
        questionDetails.style.visibility = 'visible';
    }
})

function clearDetails() {
    questionDetails.style.visibility = 'hidden';
}

