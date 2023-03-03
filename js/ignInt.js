// JavaScript Document

$(document).ready(function () {
$('.navbar .dropdown').hover(function () {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(150);
    }, function () {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(105)
    });
});

		var count = 0;
		var endcount = 0;

		// anything under 45 seconds = A
		// B = between 45 and 80 seconds
		// 80 seconds to 2 minutes (120) = C
	
		
		// Stop timer probably shouldn't be a function. Instead, can start timer and prematurely reset game.
		function ResetClock()
		{
			location.reload();
		}  
	
		function countUP()
		{
			if (endcount > 0)
				{
					document.getElementById("timer_container").innerHTML = count + " seconds";
				}
			else{
			count = count+1;
			document.getElementById("timer_container").innerHTML = count + " seconds";
			}
		}
	
		function Score(count)
		{
			countUP();
			endcount = count;
			var c = count;
			var x = document.getElementById("name").value;
			
			if (c < 6)
			{
			document.getElementById('successMessage').getElementsByTagName('h2')[0].firstChild.nodeValue = x + "! You're a Rock Hound! You are ready for the next dig!";
			$('#successMessage').show();
			$('#successMessage').animate( {
			left: '300px',
      		top: '450px',
      		width: '400px',
      		height: '130px',
      		opacity: 1
			} ); 	
			}
			else if ( c < 16 ) 
			{
			document.getElementById('successMessage').getElementsByTagName('h2')[0].firstChild.nodeValue = x + "! You're a Pebble Puppy! Keep searching you're on your way to becoming a Rock Hound!";
			$('#successMessage').show();
			$('#successMessage').animate( {
			left: '300px',
      		top: '450px',
      		width: '400px',
      		height: '130px',
      		opacity: 1
			} ); 	
			}
			else if ( c < 21)
			{
			document.getElementById('successMessage').getElementsByTagName('h2')[0].firstChild.nodeValue = x + "! You're a Pebble Puppy! Keep searching you're on your way to becoming a Rock Hound!";
			$('#successMessage').show();
			$('#successMessage').animate( {
			left: '300px',
      		top: '450px',
      		width: '400px',
      		height: '130px',
      		opacity: 1
			} ); 	
			}
			else
			{
			document.getElementById('successMessage').getElementsByTagName('h2')[0].firstChild.nodeValue = x + "! You're a Quarryman! Keep digging!";
			$('#successMessage').show();
			$('#successMessage').animate( {
			left: '300px',
      		top: '450px',
      		width: '400px',
      		height: '130px',
      		opacity: 1
			} ); 	
			}
			
		}  
	
		// end of timer and scoring code
	
	
		var correctCards = 0;
		$( init );

		function init() {

		  // Hide the success message
		  $('#successMessage').hide();
		  $('#successMessage').css( {
			left: '540px',
			top: '250px',
			width: 0,
			height: 0
		  } );

		  // Reset the game
		  correctCards = 0;
		  $('#cardPile').html( '' );
		  $('#cardSlots').html( '' );

		  // Create the pile of shuffled cards
		  var numbers = [ 	['ScoriaT.jpg','Scoria'], 
							['BasaltT.jpg','Basalt'], 
							['DioriteT.jpg','Diorite'], 
							['DuniteT.jpg','Dunite'], 
							['GraniteT.jpg','Granite'],
							['SyeniteT.jpg','Syenite'], 
							['PumiceT.jpg','Pumice'], 
							['ObsidianT.jpg','Obsidian'], 
							['GabbroT.jpg','Gabbro'], 
							['RhyoliteT.jpg','Rhyolite'], 
							['AndesiteT.jpg','Andesite']
						];

		  numbers.sort( function() { return Math.random() - .5 } );

		  for ( var i=0; i<11; i++ ) {
			im = (numbers[i][0]);
			$('<div><img src = "../../../Images/rocks/' + im + '" width="96" height = "96"></div>').data( 'number', (numbers[i][1]) ).attr( 'id', 'card'+(numbers[i][0]) ).appendTo( '#cardPile' ).draggable( {
			  containment: '#content',
			  stack: '#cardPile div',
			  cursor: 'move',
			  revert: true
			} );
		  }

		  // Create the card slots
		  var words = [ 'Scoria', 'Basalt', 'Diorite', 'Dunite', 'Granite', 'Syenite', 'Pumice', 'Obsidian', 'Gabbro', 'Rhyolite', 'Andesite' ];
		  for ( var i=1; i<=11; i++ ) {
			$('<div>' + words[i-1] + '</div>').data( 'number', words[i-1] ).appendTo( '#cardSlots' ).droppable( {
			  accept: '#cardPile div',
			  hoverClass: 'hovered',
			  drop: handleCardDrop
			} );
		  }


		}

		function handleCardDrop( event, ui ) {
		  var slotNumber = $(this).data( 'number' );
		  var cardNumber = ui.draggable.data( 'number' );


		  //--------------- If the card was dropped to the correct slot, change the card colour, position it directly
		  //--------------- on top of the slot, and prevent it being dragged again

		  if ( slotNumber == cardNumber ) {
			ui.draggable.addClass( 'correct' );
			ui.draggable.draggable( 'disable' );												// originally disable
			$(this).droppable( 'disable' );														// originally disable
			ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );			// the snapper
			ui.draggable.draggable( 'option', 'revert', false );								// when disabled the droppable does not accept any answers
			var score = correctCards++;

		  }

		  //----------------------------- If all the cards have been placed correctly then display a message
		  //----------------------------- and reset the cards for another go

		  if ( correctCards == 11 ) {
			Score(count);}
 }
 
 