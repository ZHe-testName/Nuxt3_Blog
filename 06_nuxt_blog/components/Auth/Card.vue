<script setup lang="ts">
const { user, signUp, signIn } = useAuth();
const router = useRouter();

const authState = ref<'login' | 'signup'>('login');
const authError = ref('');
const showConfirmMessage = ref(false);

const input = reactive({
  email: '',
  password: '',
});

function toggleAuthState() {
  if (authState.value === 'login') authState.value = 'signup';
  else authState.value = 'login';

  authError.value = '';
};

async function handleSubmit() {
  try {
      if (authState.value === 'login') {
      //SIGN-IN
      await signIn({
        email: input.email,
        password: input.password,
      });

      router.push('/profile');
    } else {
      //SIGN-UP
      await signUp({
        email: input.email,
        password: input.password,
      });

      showConfirmMessage.value = true;
    };

    input.email = '';
    input.password = '';
    authError.value = '';
  } catch (err: any) {
    authError.value = err.message;
  }
};
</script>

<template>
  <div>
    <NCard
      class="card"
    >
      <div
        v-if="!showConfirmMessage"
      >
        <h3>{{ authState }}</h3>

        <div class="input-container">
          <input 
            type="text"
            placeholder="Email"
            v-model="input.email"
            />

            <input 
              type="password"
              placeholder="Password"
              v-model="input.password"
            />
        </div>

        <NButton
          @click="handleSubmit"
        >
          Submit
        </NButton>
        <p
          v-if="authError"
          class="error"
        >
          {{ authError }}
        </p>

        <p
          @click="toggleAuthState"
          >{{ 
            authState === 'login'
                ? 'Don\'t have an account? Create one now.'
                : 'Sign up'
          }}</p>
      </div>

      <div
        v-else
      >
        Check Your confirm mail
      </div>
    </NCard>
  </div>
</template>

<style scoped>
  .card {
    padding: 1rem;
    width: 25rem;
  }

  .card h3 {
    font-size: 1.5rem;
    text-transform: capitalize;
  }

  .input-container {
    display: flex;
    flex-direction: column;
  }

  .input-container input {
    margin-bottom: 1rem;
    padding: 0.3rem;
    outline: none;
    border: 1px solid rgb(177, 150, 150);
    border-radius: 0.3rem;
  }

  .card > p {
    color: blue;
    font-size: 0.75rem;
    cursor: pointer;
  }

  .card .error {
    color: tomato;
  }
</style>
