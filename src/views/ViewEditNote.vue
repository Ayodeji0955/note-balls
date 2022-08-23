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
                    class="button is-link is-light mr-3"
                >
                    Cancel
                </button>
                <button 
                    @click="handleSavedClicked"
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
      import { useRoute, useRouter } from 'vue-router'
      import AddEditNote from '@/components/Notes/AddEditNote.vue'
      import { useCounterStore } from '@/stores/counter'

/**
 *  Router
 */

    const route = useRoute()
    const router = useRouter()
/**
 *  store
 */
    const counter = useCounterStore()


/**
 *  notes
 */
    const noteContent = ref('')
    
    noteContent.value = counter.getNoteContent(route.params.id)

/**
 *  Saved Clicked
 */

    const handleSavedClicked = () => {
        // console.log('handleSavedClicked');
        counter.updateNote(route.params.id, noteContent.value)
        router.push('/')
    }
</script>

<style>

</style>