<template>
    <div class="notes">

      <div class="card has-background-success-dark p-4 mb-5">
        <div class="field">
          <div class="control">
            <textarea 
                v-model="newNote"
                class="textarea" 
                placeholder="Add a new note" 
                ref="newNoteRef"
            />
          </div>
        </div>

        <div class="field is-grouped is-grouped-right">
          <div class="control">
            <button 
              @click="addNotes"
              :disabled="!newNote"
              class="button is-link has-background-success"
            >
              Add New Notes
            </button>
          </div>
          <div class="control">
            <button class="button is-link is-light">Cancel</button>
          </div>
        </div>
      </div>

      <FileNotes 
        v-for="note in notes"
        :key="note.id"
        :note="note"
      />
    </div>
</template>

<script setup lang="ts">
/**
 *  imports 
 */

  import { ref } from 'vue'
  import FileNotes from '@/components/Notes/FileNotes.vue'

/**
 * notes
 */

  const newNote = ref('')
  const newNoteRef = ref<null>(null)
  const notes = ref ([
      {
        id: "id1",
        content: "lorem ipsum dolor sit amet, consectetur adipiscing"
      },
      {
        id: "id2",
        content: "This is a shorter note! woo!",
      },
  ])

  const addNotes = () => {
      const currentDate = new Date().getTime(),
          id = currentDate.toString()

    const note = {
      id,
      content: newNote.value 
    }

    notes.value.unshift(note)
    newNote.value = ''
    newNoteRef.value.focus() 
  }
 
  
</script>


<style>
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
