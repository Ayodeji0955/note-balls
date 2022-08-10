<template>
    <div class="notes">

      <div class="card has-background-success-dark p-4 mb-5">
        <div class="field">
          <div class="control">
            <textarea 
                v-model="newNote"
                class="textarea" 
                placeholder="Add a new note" 
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

      <div 
        v-for="note in notes"
        :key="note.id"
        class="card mb-4"
      >
          <div class="card-content">
              <div class="content">
                {{ note.content }}
              </div>
          </div>
          <footer class="card-footer">
            <a href="#" class="card-footer-item">Edit</a>
            <a href="#" class="card-footer-item">Delete</a>
          </footer>
      </div>
    </div>
</template>

<script setup lang="ts">
/**
 *  imports 
 */

  import { ref } from 'vue'

/**
 * notes
 */

  const newNote = ref('')

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
