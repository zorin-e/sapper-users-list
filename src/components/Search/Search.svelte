<script>
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  const searchHandler = () => dispatch('search', search)
  export let search = ""
</script>

<input
  placeholder="Search by all fields"
  type="text"
  bind:value={search}
  class="border rounded w-1/4 h-10 mb-5 p-3"
  on:input={searchHandler}
>

