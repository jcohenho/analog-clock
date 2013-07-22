 //$(document).ready(function() {

     	 

	
	
		setInterval("startClock()",1000);
		
			
		function startClock(){
			
				var date = new Date();
				var hours = date.getHours();
				var minutes = date.getMinutes();
				var seconds = date.getSeconds();
				
			
             $("#secondhand").css({
		'-webkit-transform' : 'rotate('+6*seconds+'deg)', 
	    '-moz-transform' : 'rotate('+6*seconds+'deg)',
	    '-o-transform': 'rotate('+6*seconds+'deg)'
			});
			
			
			 $('#hourhand').css({
			
		'-webkit-transform' : 'rotate('+(270+(30*hours+(minutes/2)))+'deg)',
		'-moz-transform' : 'rotate('+(270+(30*hours+(minutes/2)))+'deg)', 
		'-o-transform': 'rotate('+(270+(30*hours+(minutes/2)))+'deg)'		
			});
			
			$('#minutehand').css({
			
		'-webkit-transform' : 'rotate('+(270+(6*minutes))+'deg)',
		'-moz-transform' : 'rotate('+(270+(6*minutes))+'deg)',
		'-o-transform': 'rotate('+(270+(6*minutes))+'deg)'	 		
			});
			
		
			
		}

			
  //  });