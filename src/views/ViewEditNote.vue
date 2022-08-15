<template>
    <div class="edit-note">
        <AddEditNote
            v-model="noteContent"
            bgColor="link"
            ref="addEditNoteRef"
        >
            <template #buttons>
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

/**
 *  notes
 */
    const noteContent = ref('')
</script>

<style>

</style>