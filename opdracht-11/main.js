let budget = 100;

    let product = 60;
 
    document.getElementById('checkButton').addEventListener('click', function () {

      const resultEl = document.getElementById('result');
 
      if (budget >= product) {

        resultEl.textContent = 'U heeft genoeg geld!';

        resultEl.style.color = 'green'; 

      } else {

        resultEl.textContent = 'Helaas, te weinig geld';

        resultEl.style.color = 'red'; 

      }

    });
 