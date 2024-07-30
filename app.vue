<script setup >
const text = ref('')

const sendForm = async () => {
  console.log('--------------------------------------------------')
  console.log(text.value)
  
  try {
    const BASE_URL = 'https://test-crm.justconsult.md/server/api/v3'
    // const BASE_URL = 'http://localhost/server/api/v3'
    const response = await fetch(BASE_URL + '/users/chm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: text.value })
    })
    
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    
    const data = await response.json()
    console.log('Response:', data)
  } catch (error) {
    console.error('Error sending text:', error)
  }
}
</script>

<template>
  <div class="hello">
    Hello!
  </div>
  <div>
    <form class="max-w-sm mx-auto" autocomplete="off">
      <div class="mb-5">
        <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Introdu
          ceva:</label>
        <input type="text" id="large-input" v-model="text"
               class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      </div>
      <button type="button"
              @click="sendForm"
              @keyup.enter="sendForm()"
              class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300
              font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600
              dark:hover:bg-blue-700 dark:focus:ring-blue-800
      ">
      Submit
      </button>
    </form>
  </div>
</template>

<style scoped>
.hello {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3rem;
  padding: 2rem;
}
</style>
