<template>
    <div 
        class="card  p-4 mb-5"
        :class="`has-background-${ bgColor }-dark`"
    >
        <label 
            v-if="label"
            class="label has-text-white"
        > 
            {{ label }}
        </label>
        <div class="field">
            <div class="control">  
                <textarea 
                    :modelValue="modelValue"
                    @input="$emit('update:modelValue', $event.target.value)"
                    class="textarea" 
                    :placeholder="`${ placeholder }`" 
                    ref="textareaRef"
                    maxLength="100"
                    v-autofocus
                />
                </div>
            </div>

        <div class="field is-grouped is-grouped-right">
            <div class="control">
                <slot name="buttons" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
/**
 *  Imports 
 */

    import { ref } from 'vue'
    import { vAutofocus } from '@/directives/vAutofocus'
/*
 *  Props
 */

    const props = defineProps({
        modelValue: {
            type: String,
            required: true
        },
        bgColor: {
            type: String,
            default: "success"
        },
        placeholder: {
            type: String,
            default: "Type something..."
        },
        label: {
            type: String,
        }
    })
   
    props.modelValue
/*'
 *  emits 
 */
    const emit = defineEmits(['update:modelValue'])
    
/**
 *  Focus textarea
 */ 

    const textareaRef = ref(null)

    const focusTextarea = ref<null | {focus: () => null}> (null) 
        if (textareaRef.value){
        textareaRef.value.focus()
        // console.log('focusTextarea');
    }

    defineExpose({
        focusTextarea
    })


   
</script>

<style>

</style>