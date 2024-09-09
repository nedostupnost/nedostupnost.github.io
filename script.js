function highlightText(id) {
	document.getElementById(id).classList.add('highlight')
}

function removeHighlight(id) {
	document.getElementById(id).classList.remove('highlight')
}

var modals = {
	link1: {
		modal: document.getElementById('fuck-modal'),
		audio: document.getElementById('fuck-sound'),
	},
	link2: {
		modal: document.getElementById('cat-modal'),
		audio: document.getElementById('cat-sound'),
	},
	link3: {
		modal: document.getElementById('suicide-modal'),
		audio: document.getElementById('suicide-sound'),
	},
	pic2: {
		modal: document.getElementById('table-modal'),
	},
}

for (var key in modals) {
	;(function (key) {
		var link = document.getElementById(key)
		var modal = modals[key].modal
		var audio = modals[key].audio

		if (link) {
			link.onclick = function (event) {
				event.preventDefault()
				modal.style.display = 'block'
				if (audio) {
					audio.play()
				}
			}
		}

		var closeButton = modal.getElementsByClassName('close-button')[0]
		closeButton.onclick = function () {
			modal.style.display = 'none'
			if (audio) {
				audio.pause()
				audio.currentTime = 0
			}
		}

		window.onclick = function (event) {
			if (event.target == modal) {
				modal.style.display = 'none'
				if (audio) {
					audio.pause()
					audio.currentTime = 0
				}
			}
		}
	})(key)
}

var pic2 = document.querySelector('.image-container img:nth-child(1)')
pic2.onclick = function (event) {
	event.preventDefault()
	modals.pic2.modal.style.display = 'block'
}

var closeButtonTable = document
	.getElementById('table-modal')
	.getElementsByClassName('close-button')[0]
closeButtonTable.onclick = function () {
	document.getElementById('table-modal').style.display = 'none'
}

window.onclick = function (event) {
	if (event.target == document.getElementById('table-modal')) {
		document.getElementById('table-modal').style.display = 'none'
	}
}
