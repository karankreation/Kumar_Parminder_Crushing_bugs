(() => {

	const draggableItems = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
	let droppingChart = document.querySelector('.puzzle-pieces');
	let puzzleB = document.querySelector('.puzzle-board');
	let jumblesPieces = document.querySelectorAll('#buttonHolder img');
	let dropArea = document.querySelectorAll('.drop-zone');


dropArea.forEach(area => {
	area.addEventListener("dragover", function(e) {
				e.preventDefault();
});
area.addEventListener("drop",function(e) {
e.preventDefault();
let piece = e.dataTransfer.getData("text/plain");
	if(e.currentTarget.firstElementChild){
		let targetPart = e.currentTarget.firstElementChild;
		droppingChart.appendChild(targetPart);

				}
e.currentTarget.appendChild(document.querySelector(`#${piece}`));

			})
	})

	function makingpuzzle(photoview) {
	draggableItems.forEach((piece, index) => {
		let extrapieces = `<img id="piece${index}" class="puzzle-image"
		src="images/${piece + photoview}.jpg" alt="puzzle piece" draggable> `;
	droppingChart.innerHTML += extrapieces;
	});

	startdrag();
	}
	function startdrag() {
			droppingChart.querySelectorAll('img').forEach(img => {
				img.addEventListener("dragstart", function(e) {
					e.dataTransfer.setData("text/plain", this.id);});
	});
	}
	function initialState(){
		droppingChart.innerHTML = "";
		dropArea.forEach(area => {
			area.innerHTML = "" ;
		});
		makingpuzzle(this.dataset.puzzleref);
	}
	jumblesPieces.forEach(button => button.addEventListener("click", initialState));
	makingpuzzle(0);
})();
