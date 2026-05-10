// NEWSLETTER

const formNewsletter = document.getElementById('form-newsletter');

if(formNewsletter){

  formNewsletter.addEventListener('submit', function(event){

    event.preventDefault();

    alert("Cadastro realizado com sucesso!");

  });

}

// FAQ

function toggleFaq(button){

  const answer = button.nextElementSibling;

  answer.classList.toggle('open');

  button.classList.toggle('open');

}