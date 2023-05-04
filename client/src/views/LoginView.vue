<template>
    <div class="row justify-content-center">
        <div class="col-md-4">
            <form @submit.prevent="handleLogin" class="mb-3">
                <div class="alert alert-warning mb-3" v-show="error" role="alert">
                    {{ error }}
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" v-model="username" autofocus="true" required />
                    <label for="floatingInput">Tên người dùng</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="floatingPassword" v-model="password" required />
                    <label for="floatingPassword">Mật khẩu</label>
                </div>
                <div class="d-grid gap-2">
                    <button class="btn btn-lg btn-success" type="submit"><b>Đăng nhập</b></button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import AuthService from '@/services/auth.service'

export default {
    data: () => ({
        username: null,
        password: null,
        error: null,
    }),
    methods: {
        async handleLogin () {
            try {
                let login = await AuthService.login({
                    username: this.username,
                    password: this.password,
                })
                if (login.status === 200) {
                    console.log('OK')
                    this.$router.push('/')
                } else {
                    this.error = login.data.message
                }
            } catch (err) {
                this.error = err
            }
        }
    }
}
</script>
<style>
button.btn {
    
}
</style>