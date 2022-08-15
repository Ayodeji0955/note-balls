<template>
    <div class="edit-note">
        <AddEditNote
            v-model="noteContent"
            bgColor="link"
            label="Edit Note"
            ref="addEditNoteRef"
        >
            <template #buttons>
                <button 
                    @click="$router.back('/')"
                    class="button is-link is-light"
                >
                    Cancel
                </button>
                <button 
                    class="button is-link has-background-link"
                    :disabled="!noteContent"
                >
                    Save Note
                </button>
            </template> 
        </AddEditNote>
    </div>
</template>

<script setup lang="ts">
/**
 *     Imports 
 */
      import { ref } from 'vue'
      import AddEditNote from '@/components/Notes/AddEditNote.vue'
      import { useCounterStore } from '@/stores/counter'


/**
 *  store
 */
    const counter = useCounterStore()


/**
 *  notes
 */
    const noteContent = ref('')

    noteContent.value = counter.getNoteContent

</script>

<style>

</style>