

/*     click on burger menu to show navigation list 
	let burgerMenu = document.getElementById('burger');
	let navigation = document.getElementById('burger-nav');
		
		burgerMenu.addEventListener('click', () => {
			if(navigation.style.display === 'none'){
				navigation.style.display ='block';
				

			}else{
				navigation.style.display = 'none';
			}
		}); */



/*click on new or current to show form 
	let newbutton = document.getElementById('new');
	let formnew = document.getElementById('newcustomer');
	let currentbutton = document.getElementById('current');
	let formcurrent= document.getElementById('currentcustomer');

		newbutton.addEventListener('click', ()=>{
			formnew.style.display = 'block';
			formcurrent.style.display = 'none';

		});
		currentbutton.addEventListener('click', ()=>{
			formcurrent.style.display = 'block';
			formnew.style.display = 'none';

		}); */
		 
		
		$('#burger').click(function(){
			$('#burger-nav').slideToggle();
		});





