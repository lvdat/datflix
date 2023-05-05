<template>
    <nav class="navbar navbar-dark navbar-expand-lg fixed-top main__nav" id="navbar">
        <div class="container">
            <a class="navbar-brand" href="/"><b><i class="fab fa-youtube"></i> DATFLIX</b> </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" href="/dvut"><i class="fas fa-clapperboard"></i> Phim lẻ</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="/dvut"><i class="fas fa-film"></i> Phim bộ</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fas fa-film"></i> Thể loại
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="/logout"><i class="fas fa-sign-out-alt"></i> Đăng xuất</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fas fa-earth-africa"></i> Quốc gia
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="/logout"><i class="fas fa-sign-out-alt"></i> Đăng xuất</a></li>
                        </ul>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2 nav--search__input" type="search" placeholder="Tìm kiếm phim..." aria-label="Search">
                </form>
                <ul class="navbar-nav ml-auto" v-show="logged">
                    <li class="nav-item dropdown">
                        <a class="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fas fa-user-circle"></i> Xin chào, {{ username }}
                        </a>
                        <ul class="dropdown-menu">
                            <li><router-link class="dropdown-item" to="/admin"><i class="fas fa-sign-out-alt"></i> Admin Panel</router-link></li>
                            <li><a class="dropdown-item" @click="logout" style="cursor: pointer;"><i class="fas fa-sign-out-alt"></i> Đăng xuất</a></li>         
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
// hide and show navbar on scroll
let previousScrollPosition = window.pageYOffset;

window.addEventListener("scroll", function() {
    const currentScrollPosition = window.pageYOffset;

    if (previousScrollPosition > currentScrollPosition) {
        // Cuộn lên
        document.getElementById("navbar").classList.add("navbar-visible");
        document.getElementById("navbar").classList.remove("navbar-hidden");
    } else {
        // Cuộn xuống
        document.getElementById("navbar").classList.add("navbar-hidden");
        document.getElementById("navbar").classList.remove("navbar-visible");
    }

    previousScrollPosition = currentScrollPosition;
});

// --------------- //
import { useAuthStore } from '@/stores/account'

export default {
    data: () => ({
        logged: false,
        username: null,
    }),
    methods: {
        checkLogin () {
            const Auth = useAuthStore()
            this.logged = Auth.isAuth
            if (this.logged) {
                this.username = Auth.username
            }
        },
        logout () {
            const Auth = useAuthStore()
            Auth.logout()
            this.username = null
            this.checkLogin()
            this.$router.push('/')
        }
    },
    created () {
        this.checkLogin()
    },
    watch: {
        $route: function () {
            this.checkLogin()
        }
    }
}
</script>
<style>
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
input.nav--search__input {
    border-radius: 0%;
}
.navbar-hidden {
    transform: translateY(-100%);
    transition: transform 0.3s;
}

.navbar-visible {
    transform: translateY(0);
    transition: transform 0.3s;
}
</style>