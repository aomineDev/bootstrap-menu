const stickBox = document.querySelector('.stick-box'),
header = document.querySelector('header'),
nav = document.querySelector('nav');
var breakpoint = window.matchMedia('only screen and (max-width: 767.8px'),
navH,
hedaerH;

window.onload = ()=> {
	const mql = (e) => {
		if (e.matches) {
			navH = nav.scrollHeight + 'px'; 
			nav.style.height = '0px';
			stickBox.addEventListener('click', slideDown);
		}else{
			nav.style.height = 'auto';
			nav.classList.remove('drop');
			stickBox.classList.remove('open', 'close');
			stickBox.removeEventListener('click',slideDown);
		}
	}

	breakpoint.addListener(mql);
	mql(breakpoint);

	hedaerH = header.clientHeight+'px';
	document.body.style.paddingTop = hedaerH;
}

function slideDown(){
	nav.classList.toggle('drop');
	nav.classList.contains('drop') ? nav.style.height = navH : nav.style.height = '0px';

	if (stickBox.classList.contains('close')) {
		stickBox.classList.replace('close', 'open');
	}else if(stickBox.classList.contains('open')){
		stickBox.classList.replace('open', 'close');
	}else{
		stickBox.classList.add('open');
	}
}