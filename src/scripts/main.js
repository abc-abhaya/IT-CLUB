import itClubImg from '../assets/it_club.png';
import setFavicon from './favicon';
import openTab from './openTab';
import typeWriter from './welcomeEffect';

const { log } = console;
log('Namaste Nepal');

const tabBtns = document.querySelectorAll('button.tab-button');
tabBtns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		openTab(btn.getAttribute('data-tab'));
	});
});

window.onload = () => {
	openTab('home');
};

typeWriter();

setFavicon(itClubImg, 'png');
