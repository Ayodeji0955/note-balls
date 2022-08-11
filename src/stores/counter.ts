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
      // console.log(idToDelete)
      this.notes = this.notes.filter(note => { return note.id !== idToDelete })
      // console.log("deleteNote", idToDelete);
    }
  },
  
})
