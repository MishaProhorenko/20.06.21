'use strict';


// try {
// 	console.log('Something happened');
// 	somthing = null;
// 	console.log('anything happened');

// } catch (error) {
// 	console.log(error);
// 	const popupContainer = document.createElement('div');
// 	const errorTextContainer = document.createElement('div');
// 	popupContainer.classList.add('error-popup');
// 	errorTextContainer.innerText = `You code broken beacuse of ${error.name}.`;
// 	popupContainer.append(errorTextContainer);
// 	document.body.append(popupContainer);

// 	const nextActionCont = document.createElement('div');
// 	nextActionCont.innerText = 'What will you do?';
// 	popupContainer.append(nextActionCont);


// 	const chooseCont = document.createElement('div');
// 	popupContainer.append(chooseCont);
// 	const concedeButton = document.createElement('button');
// 	concedeButton.innerText = 'I concede...';
// 	concedeButton.addEventListener('click', () => {
// 		popupContainer.style.display = 'none';
// 		popupContainer.hidden = true;
// 	});
// 	concedeButton.style.marginRight = '10px'
// 	const sofButton = document.createElement('button');
// 	sofButton.innerText = 'Visit stackoverflow'
// 	sofButton.addEventListener('click', () => {
// 		window.open('https://stackoverflow.com/');
// 	});
// 	chooseCont.append(concedeButton, sofButton);


// 	const backPopup = document.createElement('button');
// 	backPopup.innerText = 'Вернуть popup';
// 	document.body.append(backPopup)
// 	backPopup.addEventListener('click', () => {
// 		popupContainer.style.display = 'block';
// 	})
// }

const creatures = [
	'seal',
	'rhinoceros',
	'esherirnra coli',
	'thurderbird',
	'aspergilus niger',
	'clostridium botulinum',
	'cleetah',
	'elephant',
	'sparrow',
	'hawk'

];

const animals = [];
const birds = [];
const micros = [];

let chosenElement = null;


creatures.forEach(item => {
	const creatureElem = document.createElement('div');
	creatureElem.innerText = item;
	creatureElem.classList.add('creature');
	creaturesContainer.append(creatureElem);
	creatureElem.addEventListener('click', (e) => {
		e.target.classList.add('creature_chosen');
		chosenElement = e.target.innerHT;
	});
});

flexCont.addEventListener('click', (e) => {
	if(!chosenElement) return;

	if(e.target.id === 'animals'){
		animals.push(chosenElement)
	}

})