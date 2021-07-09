<template>
    <div>
        <h1>Dashboard</h1>
    </div>
</template>

<script>
    import { mapState } from "vuex";
    export default {
        name: "Dashboard",
        computed: {
            ...mapState(['loading'])
        },
    }
</script>

<style lang="scss" scoped>

</style>