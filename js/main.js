(() => {
	// JS file structure
	/*
		- variables always first
		- functions in middle
		- event handling at bottom
	 */
	
	// set up the puzzle pieces and boards
	const pieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	// Variables here (let = more modern version of var)
	let piecesBoard = document.querySelector(".puzzle-pieces"),
		puzzleBoard = document.querySelector(".puzzle-board"),
		puzzleSelectors = document.querySelectorAll("#buttonHolder img");

	//node list is like an array we can iterate over

	let dropZones = document.querySelectorAll('.drop-zone');

	// functions in the middle
	function createPuzzlePieces(pictureIndex) {
		//generate puzzle pieces for the left hand side randomly
		pieces.forEach((piece, index) => {
			let newPuzzlePiece = `<img id="piece${index}" class="puzzle-image" src="images/${piece + pictureIndex}.jpg" alt ="thumbnail">`;
			
			piecesBoard.innerHTML += newPuzzlePiece;
		});

	// ` = back tick = template string? Can pass variables into a string (can log things to console)
	// $ reference a variable 
		puzzleBoard.style.backgroundImage = `url(./images/backGround${pictureIndex}.jpg)`;
	
		initDrag();

	}

	// drag and drop functionality goes here
	
	function initDrag() {
		piecesBoard.querySelectorAll('img').forEach(img => {
			img.addEventListener('dragstart', function(e) {
				console.log('Go ahead and drag')

				e.dataTransfer.setData('text/plain', this.id);
			})
		})
	}

	// handle dragover and drop
	
	// (e) is short for event = function passed to event handlers

	dropZones.forEach(zone => {
		zone.addEventListener('dragover', function(e) {
			e.preventDefault();
			console.log('THAT TICKLES!');
		});

		zone.addEventListener('drop', function(e) {
			let piece = e.dataTransfer.getData('text/plain');

			// if zone has a child, reinstate the default
			// while (true) {
			// 	if (zone.firstChild) {
			// 		return false;
			// 	}
			// 	else {
			// 		e.target.appendChild(document.querySelector(`#${piece}`));
			// 		console.log('Whew. Thanks for the piece =^_^=');
			// 	}
			// }

			// if zone is empty, enable drop. otherwise, keep default options
			if (zone.firstChild == null) {
				e.preventDefault();
				e.target.appendChild(document.querySelector(`#${piece}`));
				console.log('Whew. Thanks for the piece =^_^=');
			}
			else {
				return false;
			}
		});
	});


	function resetPuzzlePieces() {
		// swap out all of the images when clicking on a bottom button
		// 1. empty the container


		// dropZones.innerHTML = " "; // nothing in the html, this doesn't work
		// document.puzzleBoard.removeChild(".puzzle-image"); // doesn't work... not targeting child?
		// document.dropZones.removeChild(".puzzle-image") // need to iterate through drop-zones?

		// dropZones.forEach(puzzleZone => { 
		// 	puzzleZone.removeChild(".puzzle-image"); 
		// });

		// 	removes DOM elements by replacing them with an empty string
		// dropZones.forEach(puzzleZone => { 
		// 	puzzleZone.innerHTML = " "; 
		// });

		// 	removes DOM elements by replacing them with null value. ! the drop handling listens for a null value! puzzleZone.innerHTML must be replaced with null.
		dropZones.forEach(puzzleZone => { 
			puzzleZone.innerHTML = null; 
		});

		piecesBoard.innerHTML = " ";
		createPuzzlePieces(this.dataset.puzzleref);
	}

	//event handling down here
	puzzleSelectors.forEach(puzzle => puzzle.addEventListener('click', resetPuzzlePieces));

	createPuzzlePieces(0);

})();
