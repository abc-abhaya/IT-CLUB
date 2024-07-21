import itClubImg from '../assets/it_club.png';
import setFavicon from './favicon';
import openTab from './openTab';

const { log } = console;
log('Namaste Nepal');
const tabBtns = document.querySelectorAll('button.tab-button');
tabBtns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		openTab(btn.getAttribute('data-tab'));
		
	});
});
console.log(tabBtns);

openTab();

setFavicon(itClubImg, 'png');
