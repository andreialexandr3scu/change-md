<script setup>
const text = ref('')
const isLoading = ref(false);
import { toast } from 'vue3-toastify';

const sendForm = async () => {
  // console.log('--------------------------------------------------')
  isLoading.value = true
  // toast.error("Wow so easy !", {
  //       autoClose: 1000,
  //     }); // ToastOptions
  // console.log(text.value)
  
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
    // if (!response.ok) {
    //   throw new Error('Network response was not ok')
    // } else {
    //   // toast.success('Request trimis cu succes!')
    // }
    
    const data = await response.json()
    // console.log('Response:', data.error)
    
    console.log(data)
    if (data?.msg) {
      console.log('++++++++++++++++++++++++++++++++++++++++++++++++++')
      toast.success(data.msg)
    }
  } catch (error) {
    // console.error('Error sending text:', error)
    toast.error('A apărut o eroare la trimitere.')
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="hello">
    Hello@!
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
              class="relative text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              :disabled="isLoading"
      >
        <span v-if="isLoading" class="loader"></span>
        <span v-else>Submit</span>
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
.loader {
  border: 2px solid #f3f3f3;
  border-radius: 50%;
  border-top: 2px solid #3498db;
  width: 14px;
  height: 14px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
