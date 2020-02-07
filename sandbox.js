const correctAnswers = ['B','B','B','B'];
const form = document.querySelector('.quiz-form');
 const scoreDisplay = document.querySelector("body > div.result.py-4.d-none.bg-light.text-center > div > p > span");
const resultDisplay = document.querySelector("body > div.result.py-4.d-none.bg-light.text-center");

form.addEventListener('submit', e =>  {
    e.preventDefault();
    
    let score = 0;
    const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value];
    
    //check answers
    userAnswers.forEach((answer, index ) => {
        if(answer === correctAnswers[index]){
            score += 25;
        }
    });
    //change score in html
    scrollTo(top);
    
    //show result on page
    
    resultDisplay.classList.remove('d-none');
    
    let output = 0;
    const timer = setInterval(()=> {
        resultDisplay.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
            
        }else {
            output++;
        }
    }, 10);
    
   
});

