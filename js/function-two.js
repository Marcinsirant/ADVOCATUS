console.log("podłoczone");     //podłączone xd
//na początku dodaj atrybut data-num (numeracja od 0) i klasę 'question' do każdego elementu


const answer = document.getElementById("answer");
// answerFunction(1) zamiast tego wpisz domyślny stan w HTMLu, a później będzie on zmieniany przez JSa
 
let questions = document.querySelectorAll('.question');
questions.forEach((x)=> x.addEventListener('mousemove', function(e){
    const attribute = e.target;
    switch (attribute.getAttribute('data-num')) {
    case '0':
        answer.innerHTML = "Long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. many web sites still in their infancy. Various versions have";
       
        document.getElementById("quest-one").classList.add('quest-active');
        questions.forEach(function(x){if(x.id != 'quest-one'){x.classList.remove('quest-active')}});
        break;
    case '1':
        answer.innerHTML = "Long established fact that a reader will be distracted by the readable content";
        document.getElementById("quest-two").classList.add('quest-active');
        questions.forEach(function(x){if(x.id != 'quest-two'){x.classList.remove('quest-active')}});
        break;
    case '2':
        attribute.innerHTML = "change 3";
        document.getElementById("quest-three").classList.add('quest-active');
        questions.forEach(function(x){if(x.id != 'quest-three'){x.classList.remove('quest-active')}});
        break;
    case '3':
        attribute.innerHTML = "ok";
        document.getElementById("quest-four").classList.add('quest-active');
        questions.forEach(function(x){if(x.id != 'quest-four'){x.classList.remove('quest-active')}});
        break;
    case '4':
        attribute.innerHTML = "no";
        document.getElementById("quest-five").classList.add('quest-active');
        questions.forEach(function(x){if(x.id != 'quest-five'){x.classList.remove('quest-active')}});
        break;
    case '5':
        attribute.innerHTML = "hello world";
        document.getElementById("quest-six").classList.add('quest-active');
        questions.forEach(function(x){if(x.id != 'quest-six'){x.classList.remove('quest-active')}});
        break;
    }
},false));