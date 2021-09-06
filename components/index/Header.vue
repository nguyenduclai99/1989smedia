<template>
    <div>
        <!--header section start-->
        <header class="header custom-header">
            <!--start navbar-->
            <nav class="navbar navbar-expand-lg fixed-top custom-nav white-bg affix">
                <div class="container">
                    <NuxtLink class="title display-3 font-weight-bolder" style="font-size: 2.5rem; color: #6730e3" to="/">1989s Media</NuxtLink>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="ti-menu"></span>
                    </button>

                    <div class="collapse navbar-collapse main-menu" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <NuxtLink class="nav-link page-scroll" to="/">Trang chủ</NuxtLink>
                            </li>
                            <li class="nav-item">
                                <NuxtLink class="nav-link page-scroll" to="/gioi-thieu">Giới thiệu</NuxtLink>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link page-scroll" href="">Bảng giá</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link page-scroll" href="">Liên hệ</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link page-scroll" href="">Hỗ trợ</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            <!--end navbar-->
        </header>
        <!--header section end-->
    </div>
</template>
<script>
export default {

}
</script>