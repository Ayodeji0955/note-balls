<template>
    <div class="stats">
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>Stat</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Number of Notes</td>
                    <td>{{ counter.totalNotesCount }}</td> 
                </tr>
                <tr>
                    <td>Number of Characters (of all notes)</td>
                    <td>{{ counter.totalCharactersCount }}</td> 
                </tr>
            </tbody>
        </table>
        <input  
            v-model="loveNoteballs"
            class="input"
            type="text"
            placeholder="Do you love noteballs"
            v-autofocus
        />
    </div>
</template>

<script setup lang="ts">
/*
 * Imports
 */
import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter'
import { vAutofocus } from '@/directives/vAutofocus'
import { useWatchCharacters } from '@/use/useWatchCharacters'

/*
 *  Stores
 */
    const counter = useCounterStore()

/*
 *  Love noteballs
 */
    const loveNoteballs = ref('') as never
/*
 *  Watch Characters
 */
    useWatchCharacters(loveNoteballs, 50)
</script>
