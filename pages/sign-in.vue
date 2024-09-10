<script setup lang="ts">
import { SignInSchema, type SignInSchemaType } from "~/schema";
import type { FormSubmitEvent } from "#ui/types";

const router = useRouter();
const color = useColorMode();
const state = ref({
  nic: undefined,
  password: undefined,
});

color.preference = "light";

async function onSubmit(event: FormSubmitEvent<SignInSchemaType>) {
  // Do something with data
  console.log(event.data);

  // Simulate login
  localStorage.setItem("token", "sample-token");
  router.push("/");
}
</script>

<template>
  <div
    class="w-full min-h-screen flex justify-center items-center bg-[url(/img/auth-background.png)] bg-cover bg-center p-5"
  >
    <div
      class="w-full max-w-[800px] grid grid-cols-1 lg:grid-cols-2 bg-white shadow-lg rounded-lg"
    >
      <div class="flex flex-col rounded-l-lg text-gray-800 p-8">
        <h1 class="text-2xl font-bold uppercase text-center">Welcome Back</h1>
        <UDivider class="my-5" />
        <UForm
          :schema="SignInSchema"
          :state="state"
          class="space-y-4"
          @submit="onSubmit"
        >
          <UFormGroup label="NIC Number" name="nic">
            <UInput v-model="state.nic" />
          </UFormGroup>

          <UFormGroup label="Password" name="password">
            <UInput v-model="state.password" type="password" />
          </UFormGroup>

          <UButton label="Sign Up" color="black" block type="submit" />
        </UForm>
        <div class="flex flex-col items-center mt-5">
          <span>Don't have an account?</span>
          <NuxtLink class="text-blue-500" to="/sign-up">
            Request Access
          </NuxtLink>
        </div>
      </div>
      <div
        class="relative hidden lg:block h-full bg-[url(/img/login.webp)] bg-cover bg-center rounded-r-lg"
      >
        <div class="absolute w-full h-full bg-black/50"></div>
      </div>
    </div>
  </div>
</template>
