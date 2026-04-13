<template>
  <tr>
    <td>{{ contact.name }}</td>
    <td>{{ contact.gender }}</td>
    <td>{{ contact.age }}</td>
    <td>{{ contact.email }}</td>
    <td>{{ contact.github }}</td>
    <td>
      <button
        @click.stop="$emit('delete-obj', this.contact.id)"
        class="btn btn-danger btn-sm"
      >
        삭제
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'ContactItem',
  props: { contact: { type: Object, required: true } },
};
</script>
