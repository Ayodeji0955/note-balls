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
                <a href="#" class="card-footer-item">Edit</a>
                <a  
                    @click.prevent="handleDeleteClicked"
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
      Emits
 */
    const emits = defineEmits (['deleteClicked'])
/*
      Character length (Computed properties)
 */
    const characterLength = computed (() => {
        const length = props.note.content.length
        const description = length > 1 ? 
        'character' : 'character'
        return `${ length} ${ description }`
    })

/*
      Handle Delete Clicked
 */
    const handleDeleteClicked = () =>   {
        emits('deleteClicked', props.note.id)
    }
</script>

<style>

</style>