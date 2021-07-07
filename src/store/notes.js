export default {
	state: {
		notes:[
			{
				title: "First Note",
				descr: "Description for first note",
				date: new Date(Date.now).toLocaleString(),
				titleEdit: false,
				descrEdit: false,
			},
			{
				title: "Second Note",
				descr: "Description for first note",
				date: new Date(Date.now).toLocaleString(),
				titleEdit: false,
				descrEdit: false,
			},
			{
				title: "Thrid Note",
				descr: "Description for first note",
				date: new Date(Date.now).toLocaleString(),
				titleEdit: false,
				descrEdit: false,
			},
		]
	},
	mutations: {
		addNote(state, note){
			state.notes.push(note)
		},
		changedNote(state, note) {
			let index = note.index,
			noteEdit = state.notes[index]

			if(note.valTitle) noteEdit.title = note.value
			if(note.valDescr) noteEdit.descr = note.value
		},
		changedNote(state, note) {
			state.notes.splice(note, 1)
		},
	},

	actions: {
		addNote({commit}, note){
			commit('addNote', note)
		},
		changeNote({commit}, note){
			commit('changeNote', note)
		},
		cancelNote({commit}, note){
			commit('cancelNote', note)
		},
	}
}