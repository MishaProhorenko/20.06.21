'use strict';


try {
	console.log('Something happened');
	somthing = null;
	console.log('anything happened');

} catch (error) {
	console.log(error);
	const popupContainer = document.createElement('div');
	const errorTextContainer = document.createElement('div');
	popupContainer.classList.add('error-popup');
	errorTextContainer.innerText = `You code broken beacuse of ${error.name}.`;
	popupContainer.append(errorTextContainer);
	document.body.append(popupContainer);

	const nextActionCont = document.createElement('div');
	nextActionCont.innerText = 'What will you do?';
	popupContainer.append(nextActionCont);


	const chooseCont = document.createElement('div');
	popupContainer.append(chooseCont);
	const concedeButton = document.createElement('button');
	concedeButton.innerText = 'I concede...';
	concedeButton.addEventListener('click', () => {
		popupContainer.style.display = 'none';
		popupContainer.hidden = true;
	});
	concedeButton.style.marginRight = '10px'
	const sofButton = document.createElement('button');
	sofButton.innerText = 'Visit stackoverflow'
	sofButton.addEventListener('click', () => {
		window.open('https://stackoverflow.com/')
	});
	chooseCont.append(concedeButton, sofButton)
}