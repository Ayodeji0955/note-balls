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
                    to="`/editNote/${ note.id }`" 
                    class="card-footer-item"
                >
                    Edit
                </RouterLink>
                <a  
                    @click.prevent="counter.deleteNote(note.id)"
                    href="#" 
                    class="card-footer-item"
                >
                    Delete
                </a>
            </footer>
        </div>
    </div>
</template>

<script setup lang="ts">

/*  
    Imports 
 */
    import { computed } from 'vue'
    import { useCounterStore } from '@/stores/counter'

/**
   Stores
 */
    const counter = useCounterStore()
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

</script>

<style>

</style>