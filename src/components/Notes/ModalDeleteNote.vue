<template>
    <div class="modal is-active p-2">
        <div class="modal-background">
        </div>
        <div 
            class="modal-card"
            ref="modalCardRef"
        >
            <header class="modal-card-head">
            <p class="modal-card-title">Delete Note?</p>
            <button 
                @click="closeModal" 
                class="delete" 
                aria-label="close"
            >
            </button>
            </header>
            <section class="modal-card-body">
                Are you sure you want to delete this note?
            </section>
            <footer 
                class="modal-card-foot
                is-justify-content-flex-end"
            >
            <button 
                @click="closeModal"
                class="button"
            >
                Cancel
            </button>
            <button class="button is-danger">Delete</button>
            </footer>
        </div>
    </div>
</template>

<script setup lang="ts">
/**
 *  Imports
 */
    import { ref, onMounted, onUnmounted } from 'vue'
    import { onClickOutside } from '@vueuse/core'
/**

/**
 *  Props
 */

    const props = defineProps({
        modelValue: {
            type: Boolean,
            default: false
        }
    })


/**
 *  Emits
 */

    const emit = defineEmits(['update:modelValue'])
/**
 *  Close Modal
 */

    const closeModal = () => {
        emit('update:modelValue', false)  
    }


/*
 *  Click outside to close  
 */  

    const modalCardRef = ref(null)

    onClickOutside(modalCardRef, closeModal)
/**
 *  Keyboard Control
 */
    const handleKeyboard = e => {
          if(e.key === 'Escape') closeModal()
    }

    onMounted(() => {
        document.addEventListener('keyup', handleKeyboard)   
    })

    onUnmounted(() => {
        document.removeEventListener('keyup', handleKeyboard)   
    })
</script>
