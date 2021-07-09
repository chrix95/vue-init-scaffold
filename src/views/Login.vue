<template>
    <div>
        <h1>Login</h1>
    </div>
</template>

<script>
    import { mapState } from "vuex";
    export default {
        name: "Login",
        computed: {
            ...mapState(['loading'])
        },
    }
</script>

<style scoped>

</style>