<template>
    <div class="dark_mode_button">
    <div class="moon_icon">
        <svg v-if="!is_dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g>
                <path stroke="black" fill="none" stroke-width="2" d="M9 7.5a7.5 7.5 0 0 0 12.981 5.12C21.661 17.853 17.315 22 12 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981A7.48 7.48 0 0 0 9 7.5z"/>
            </g>
        </svg>
        <svg v-if="is_dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g>
                <path stroke="white" fill="white" stroke-width="2" d="M9 7.5a7.5 7.5 0 0 0 12.981 5.12C21.661 17.853 17.315 22 12 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981A7.48 7.48 0 0 0 9 7.5z"/>
            </g>
        </svg>
    </div>
    <label class="switch">
        <input  @click="isDark" :class="classes" type="checkbox" :checked="is_dark" :name="name" :disabled="disabled" v-model="value">
        <span><slot></slot></span>
    </label>
    </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex'

import Logo from '~/components/Logo.vue'

export default {
    components: {
        Logo
    },

        props: {
            disabled: Boolean,
            classes: String,
            checked: Boolean,
            name: String
        },
        data() {
            return {
                value: null
            }
        },
        beforeMount() {
            this.value = this.is_dark
        },
        mounted() {
            this.$emit('input', this.value)
        },
        watch: {
            value(val) {
                this.$emit('input', val)
            },
            checked (val) {
                this.value = val
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
    display: flex;
    .moon_icon {
        margin-top: 10px;
        margin-right: 5px;
        width: 20px;
    }
}
</style>
<style lang="scss">
    label.switch {
        input[type="checkbox"] {
            display: none;
            &:checked {
                + span {
                    &:before {
                        background-color: rgba(#007FEB, 0.5);
                    }
                    &:after {
                        background-color: #007FEB;
                        transform: translate(80%, -50%);
                    }
                }
            }
            + span {
                position: relative;
                display: inline-block;
                cursor: pointer;
                font-weight: 500;
                text-align: left;
                margin: 0px;
                padding: 0px 44px;
                &:before,
                &:after {
                    content: '';
                    cursor: pointer;
                    position: absolute;
                    margin: 0;
                    outline: 0;
                    top: 50%;
                    transform: translate(0, -50%);
                    transition: all 200ms ease-out;
                }
                &:before {
                    left: 1px;
                    width: 34px;
                    height: 14px;
                    background-color: rgba(0, 0, 0, 0.2);
                    border-radius: 8px;
                }
                &:after {
                    left: 0;
                    width: 20px;
                    height: 20px;
                    background-color: rgba(0, 0, 0, 0.5);
                    border-radius: 50%;
                    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .14), 0 2px 2px 0 rgba(0, 0, 0, .098), 0 1px 5px 0 rgba(0, 0, 0, .084);
                }
            }
            &:checked + span &:after {
                transform: translate(80%, -50%);
            }
        }
    }
</style>