<script setup lang="ts">

import * as RouterAlias from "src/router/alias";
</script>
<template>
  <div class="w-full h-full flex justify-center items-center">
    <a-result status="404" title="404" sub-title="Sorry, the page you visited does not exist.">
      <template #extra>
        <RouterLink :to="{ name: RouterAlias.Home.name }">
          <a-button type="primary">
            <span class="font-600">Back Home</span>
          </a-button>
        </RouterLink>
      </template>
    </a-result>
  </div>
</template>
