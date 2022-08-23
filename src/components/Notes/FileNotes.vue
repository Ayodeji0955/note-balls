<template>
    <div>
        <div 
            class="card mb-4"
            
        >
            <div class="card-content">
                <div class="content">
                {{ note.content }}
                </div>
                <div class="has-text-right has-text-grey-light mt-2">
                    <small> {{ characterLength }} xxx characters</small>
                </div>
            </div>
            <footer class="card-footer">
                <RouterLink
                    :to="`/editNote/${ note.id }`" 
                    class="card-footer-item"
                >
                    Edit
                </RouterLink>
                <a  
                    @click.prevent="modals.deleteNote = true"
                    href="#" 
                    class="card-footer-item"
                >
                    Delete
                </a>
            </footer>
            <ModalDeleteNote 
                v-if="modals.deleteNote"
                v-model="modals.deleteNote"    
                :noteId="note.id"
            />
        </div>
    </div>
</template>

<script setup lang="ts">

/*  
    Imports 
 */
    import { computed, reactive } from 'vue'
    import ModalDeleteNote from '@/components/Notes/ModalDeleteNote.vue'
    import { useCounterStore } from '@/stores/counter'

/**
   Stores
 */
    const counter = useCounterStore()
    console.log(counter);
    
/*
      Props
 */
    const props = defineProps ({
        note: {
                type: Object,
                required: true
            }
        })

/*
      Character length (Computed properties)
 */
    const characterLength = computed (() => {
        const length = props.note.content.length
        const description = length > 1 ? 
        'character' : 'character'
        return `${ length} ${ description }`
    })

/**
 *  Modals
 */

    const modals = reactive({
        deleteNote: false,
    })
</script>

<style>

</style>