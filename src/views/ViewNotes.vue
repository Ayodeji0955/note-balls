<template>
    <div class="notes">
          <AddEditNote
            v-model="newNote"
            placeholder="Edit Note"
            ref="addEditNoteRef"
          >
              <template #buttons>
                <button 
                  @click="addNotes"
                  :disabled="!newNote"
                  class="button is-link has-background-success"
                >
                  Add New Note
                </button>
              </template> 
          </AddEditNote>

          <FileNotes 
            v-for="note in counter.notes"
            :key="note.id"
            :note="note"
          />
    </div>
</template>

<script setup lang="ts">

/**
 *  imports 
 */

  import { ref, watch } from 'vue'
  import FileNotes from '@/components/Notes/FileNotes.vue'
  import AddEditNote from '@/components/Notes/AddEditNote.vue'
  import { useCounterStore } from '@/stores/counter'

/**
 *    Stores
 */

  const counter = useCounterStore()

/**
 * notes 
 */

    const newNote = ref<string>('')
    const addEditNoteRef = ref(null)

    const addNotes = () => {
    counter.addNotes(newNote.value)
    newNote.value = ''
    addEditNoteRef.value.focusTextarea()
  }
 /**
  *  Watch Characters
  */

    watch(newNote, (newValue) => {
      if ( newValue.length === 100 ) {
        alert('only 100 characters allowed')
      }
    })

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