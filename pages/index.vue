<script setup>
const router = useRouter();

onMounted(() => {
  if (!localStorage.getItem("token")) {
    router.push("/sign-in");
  } else {
    router.push("/app/dashboard");
  }
});
</script>

<template>
  <div></div>
</template>
