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
    </div>
</template>

<script setup lang="ts">
/**
 * Imports
 */
import { useCounterStore } from '@/stores/counter'


/**
 *  Stores
 */
const counter = useCounterStore()
</script>
