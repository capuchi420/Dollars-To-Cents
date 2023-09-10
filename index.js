document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    let input = +document.querySelector('input').value;
    if(input === input){
        document.querySelector('p').innerText = `${input}$ = ${input * 100} cents`;
        document.querySelector('input').value = '';
    }else{
        alert('Please, enter a number');
        document.querySelector('input').value = '';
    }
})