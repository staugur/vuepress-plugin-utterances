<template>
    <div class="comments-wrapper" v-if="isShowComment">
        <ClientOnly>
            <Utterances :options="options" />
        </ClientOnly>
    </div>
</template>

<script>
import Utterances from './Utterances.vue'
export default {
    components: { Utterances },
    computed: {
        // Utterances plugin options
        options() {
            return COMMENTS_OPTIONS || {}
        },
        isShowComment() {
            let dsc = this.options.defaultShowComment
            let fsc = this.$frontmatter.showComment
            if (this.$page.path === '/') return false
            if (dsc === false) {
                return fsc === true
            } else {
                return fsc !== false
            }
        }
    }
}
</script>
