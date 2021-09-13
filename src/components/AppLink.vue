<template>
   <a v-if="isExternalLink" v-bind="$attrs" :href="to" target="_blank">
      <slot />
   </a>
   <router-link
      v-else
      v-bind="$props"
      custom
      v-slot="{ isActive, href, navigate }"
   >
      <a
         v-bind="$attrs"
         :href="href"
         @click="navigate"
         :class="isActive ? activeClass : inactiveClass"
      >
         <slot />
      </a>
   </router-link>
</template>

<script>
import { computed } from '@vue/reactivity';
import { RouterLink, useLink } from 'vue-router'

export default {
   props: {
      ...RouterLink.props,
      inactiveClass: String,
   },
   setup(props) {
      const { href, isActive, navigate } = useLink(props)

      const isExternalLink = computed(() => {
			return typeof props.to === "string" && props.to.indexOf("http") === 0
		})

      return { isExternalLink, href, navigate, isActive };
   },
}
</script>
