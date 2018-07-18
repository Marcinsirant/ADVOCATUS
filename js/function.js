
const answer = document.getElementById("answer");
document.getElementById("quest-one").addEventListener("mousemove", function(){answerFunction(1);}, false);
document.getElementById("quest-two").addEventListener("mousemove", function(){answerFunction(2);}, false);
document.getElementById("quest-three").addEventListener("mousemove", function(){answerFunction(3);}, false);
document.getElementById("quest-four").addEventListener("mousemove", function(){answerFunction(4);}, false);
document.getElementById("quest-five").addEventListener("mousemove", function(){answerFunction(5);}, false);
document.getElementById("quest-six").addEventListener("mousemove", function(){answerFunction(6);}, false);

function answerFunction(num){
	switch (num) {
    case 1:
        answer.innerHTML = "Long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. many web sites still in their infancy. Various versions have";
		document.getElementById("quest-one").classList.add('quest-active');
		document.getElementById("quest-two").classList.remove('quest-active');
		document.getElementById("quest-three").classList.remove('quest-active');
		document.getElementById("quest-four").classList.remove('quest-active');
		document.getElementById("quest-five").classList.remove('quest-active');
		document.getElementById("quest-six").classList.remove('quest-active');
        break;
    case 2:
        answer.innerHTML = "Long established fact that a reader will be distracted by the readable content";
		document.getElementById("quest-two").classList.add('quest-active');
		document.getElementById("quest-one").classList.remove('quest-active');
		document.getElementById("quest-three").classList.remove('quest-active');
		document.getElementById("quest-four").classList.remove('quest-active');
		document.getElementById("quest-five").classList.remove('quest-active');
		document.getElementById("quest-six").classList.remove('quest-active');
        break;
    case 3:
        answer.innerHTML = "change 3";
		document.getElementById("quest-three").classList.add('quest-active');
		document.getElementById("quest-two").classList.remove('quest-active');
		document.getElementById("quest-one").classList.remove('quest-active');
		document.getElementById("quest-four").classList.remove('quest-active');
		document.getElementById("quest-five").classList.remove('quest-active');
		document.getElementById("quest-six").classList.remove('quest-active');
        break;
    case 4:
        answer.innerHTML = "ok";
		document.getElementById("quest-four").classList.add('quest-active');
		document.getElementById("quest-two").classList.remove('quest-active');
		document.getElementById("quest-three").classList.remove('quest-active');
		document.getElementById("quest-one").classList.remove('quest-active');
		document.getElementById("quest-five").classList.remove('quest-active');
		document.getElementById("quest-six").classList.remove('quest-active');
        break;
    case 5:
        answer.innerHTML = "no";
		document.getElementById("quest-five").classList.add('quest-active');
		document.getElementById("quest-two").classList.remove('quest-active');
		document.getElementById("quest-three").classList.remove('quest-active');
		document.getElementById("quest-four").classList.remove('quest-active');
		document.getElementById("quest-one").classList.remove('quest-active');
		document.getElementById("quest-six").classList.remove('quest-active');
        break;
    case 6:
        answer.innerHTML = "hello world";
		document.getElementById("quest-six").classList.add('quest-active');
		document.getElementById("quest-two").classList.remove('quest-active');
		document.getElementById("quest-three").classList.remove('quest-active');
		document.getElementById("quest-four").classList.remove('quest-active');
		document.getElementById("quest-five").classList.remove('quest-active');
		document.getElementById("quest-one").classList.remove('quest-active');
        break;
	}

}
