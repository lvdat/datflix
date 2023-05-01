<template>
    <nav class="navbar navbar-dark navbar-expand-lg fixed-top main__nav">
        <div class="container">
        <a class="navbar-brand" href="/"><b><i class="fas fa-dice-d20"></i> DATFLIX</b> </a>
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
                <button class="btn btn-success btn__signup" type="submit">Đăng ký tham gia</button>
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

</style>