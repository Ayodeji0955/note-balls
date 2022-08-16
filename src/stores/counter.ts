import { defineStore } from 'pinia'

export const useCounterStore = defineStore( 'counter',{
  state: () => ({
    notes: [
            {
        id: "id1",
        content: "lorem ipsum dolor sit amet, consectetur adipiscing"
      },
      {
        id: "id2",
        content: "This is a shorter note! woo!",
      },
    ]
  }),
  actions: {
    addNotes(newNoteContent: string) {
          const currentDate = new Date().getTime(),
              id = currentDate.toString()

          const note = {
              id,
              content: newNoteContent
          } 

          this.notes.unshift(note);
      
    },
    deleteNote(idToDelete: string) {
      this.notes = this.notes.filter(note => note.id !== idToDelete )
    },
    updateNote(id: string, content: string) {
      console.log('id', id);
      console.log('content', content);

      const index = this.notes.findIndex(note => note.id === id ) 
      this.notes[index].content = content
      
    }
  },
  getters:  {
    getNoteContent: (state) => { 
      return (id) => {
        return state.notes.filter(note => { return note.id == id })[0].content  
      }
    },
    totalNotesCount: (state) => { 
        return state.notes.length
    },
    totalCharactersCount: (state) => {
        let count = 0
        state.notes.forEach(note => {
          count += note.content.length
        })
        return count
    }
  }
  
})
