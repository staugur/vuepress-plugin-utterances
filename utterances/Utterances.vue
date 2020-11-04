<template>
    <div class="utterances-wrapper">
        <div id="v-utterances-comment"></div>
    </div>
</template>

<script>
export default {
    name: 'Utterances',
    props: {
        options: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        let {
            issueTerm = 'pathname',
            theme = 'github-light',
            service = 'utterances',
            repo
        } = {
            ...this.options
        }
        return {
            issueTerm,
            theme,
            service,
            repo
        }
    },
    methods: {
        initUtterances() {
            let id = 'v-utterances-comment'
            let dom = window.document.getElementById(id)
            if (!this.repo) {
                dom.innerHTML = '<b>Not found a repo for issue</b>'
                return
            }
            let utterances = window.document.createElement('script')
            utterances.type = 'text/javascript'
            utterances.async = true
            utterances.setAttribute('issue-term', this.issueTerm)
            utterances.setAttribute('theme', this.theme)
            utterances.setAttribute('repo', this.repo)
            utterances.crossorigin = 'anonymous'
            utterances.src =
                this.service === 'beaudar'
                    ? 'https://beaudar.lipk.org/client.js'
                    : 'https://utteranc.es/client.js'
            if (dom.hasChildNodes()) {
                dom.innerHTML = ''
            }
            dom.appendChild(utterances)
        }
    },
    mounted() {
        this.initUtterances()
    },
    watch: {
        $route(to, from) {
            if (to.path !== from.path) {
                setTimeout(() => {
                    this.initUtterances()
                }, 300)
            }
        }
    }
}
</script>

<style>
.utterances {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    max-width: 760px;
    margin-left: 0;
    margin-right: auto;
}

.utterances-frame {
    position: absolute;
    left: 0;
    right: 0;
    width: 1px;
    min-width: 100%;
    max-width: 100%;
    height: 100%;
    border: 0;
}
</style>
