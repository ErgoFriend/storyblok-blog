<template>
    <div class="dark_mode_button" @click="isDark">
        <!-- <button @click="isDark">ダークモード</button> -->
<svg v-if="!is_dark"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g>
        <path stroke="black" fill="none" stroke-width="2" d="M9 7.5a7.5 7.5 0 0 0 12.981 5.12C21.661 17.853 17.315 22 12 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981A7.48 7.48 0 0 0 9 7.5z"/>
    </g>
</svg>
<svg v-if="is_dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g>
        <path stroke="white" fill="white" stroke-width="2" d="M9 7.5a7.5 7.5 0 0 0 12.981 5.12C21.661 17.853 17.315 22 12 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981A7.48 7.48 0 0 0 9 7.5z"/>
    </g>
</svg>
    </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex'

import Logo from '~/components/Logo.vue'

export default {
    components: {
        Logo
    },
    data() {
        return {
            svg_color: null,
            svg_fill: null,
        }
    },
    computed: {
        ...mapState('theme',['is_dark'])
    },
    methods: {
        ...mapMutations('theme',['isDark']),
    }
}
</script>
<style lang="scss">
.dark_mode_button{
    height: 20px;
    width: 20px;
}
</style>