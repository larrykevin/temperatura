let count = 20;

const value = document.querySelector('.value');
const buttons = document.querySelectorAll('.btn');

buttons.forEach( btn => {
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList;
        const figure = document.querySelector('.figure').style;
        const smile = document.querySelector('.smile');

        if (styles.contains('less')) {
            count--;
        } else if (styles.contains('plus')) {
            count++;
        } else {
            count = 20;
        }

        if (count < 18) {
            smile.classList.add('rotate-center');
            smile.style.top = '70px';
            figure.backgroundColor = '#509CE8';
            figure.setProperty('--color', '#0057AD');
            value.style.color = '#50A7FF';

        } else if (count >= 18 && count < 29) {
            smile.classList.remove('rotate-center');
            smile.style.top = '10px';
            figure.backgroundColor = '#42F09C';
            figure.setProperty('--color', '#048870');
            value.style.color = '#42F09C';

        } else if (count >= 29) {
            smile.classList.add('rotate-center');
            smile.style.top = '70px';
            figure.backgroundColor = '#CD5AA5';
            figure.setProperty('--color', '#9708CA');
            value.style.color = '#CD5AA5';
        }

        value.textContent = count;
    });
});