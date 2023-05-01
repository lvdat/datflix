<template>
    <nav class="navbar navbar-dark navbar-expand-lg fixed-top main__nav">
        <div class="container">
        <a class="navbar-brand" href="/"><b><i class="fab fa-youtube"></i> DATFLIX</b> </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" href="/dvut"><i class="fas fa-gamepad"></i> Danh sách Game</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="/dvut"><i class="fas fa-info"></i> Giới thiệu</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="/dvut"><i class="fas fa-rss"></i> Tin tức</a>
                </li>
            </ul>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link active" href="/login"> Đăng nhập</a>
                </li>
                <button class="btn btn-success btn__signup" type="submit">Tạo tài khoản </button>
                <li class="nav-item dropdown">
                    <a class="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fas fa-user-circle"></i> Xin chào,
                    </a>
                    <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="/logout"><i class="fas fa-sign-out-alt"></i> Đăng xuất</a></li>
                </ul>
                </li>
            </ul>
        </div>
        </div>
    </nav>
</template>
<script>
export default {
    
}
</script>
<style>
.btn__signup {
    padding: 0px 20px 0px 20px;
}

.nav-item {
    margin-right: 15px;
}

a.nav-link.active:hover {
    color: rgb(0, 255, 133);
}

.main__nav {
    box-shadow: 0px 3px 6px black;
    color: rgb(232, 231, 228);
    background-color: rgb(23, 24, 27);
}
.navbar-brand {
    color: rgb(0, 255, 133)!important;
}
</style>