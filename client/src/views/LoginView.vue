<template>
    <div class="row justify-content-center">
        <div class="col-md-4">
            <form method="post" class="mb-3">
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" autofocus="true" required />
                    <label for="floatingInput">Tên người dùng</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="floatingPassword" required />
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
export default {

}
</script>
<style>
button.btn {
    
}
</style>