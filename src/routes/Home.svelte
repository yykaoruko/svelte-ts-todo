<script lang="ts">
  import { todos } from '../store';
  import { push, link } from 'svelte-spa-router';

  const handleOnClickDelete = (index) => {
    $todos.splice(index, 1);
    $todos = [...$todos];
  }

  const handleOnClickEdit = (index) => {
    push(`/todos/${index}`);
  }
</script>


<h1>Todo</h1>
<a use:link href="/todos/new">new</a>

<table>
  {#each $todos as todo, index}
  <tr>
    <td>{todo.text}</td>
    <td>
      <button on:click={() => handleOnClickEdit(index)}>edit</button>
      <button on:click={() => handleOnClickDelete(index)}>delete</button>
    </td>
  </tr>
  {/each}
</table>
