<template>
    <div class="notes">
          <AddEditNote
            v-model="newNote"
          >
              <template #buttons>
                <button 
                  @click="addNotes"
                  :disabled="!newNote"
                  class="button is-link has-background-success"
                >
                  Add New Notes
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

  import { ref } from 'vue'
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

  const newNote = ref('')
  const newNoteRef = ref<null | string>(null)
 

  const addNotes = () => {

    counter.addNotes(newNote.value)

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
