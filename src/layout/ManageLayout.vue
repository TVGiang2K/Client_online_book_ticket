<template>

<div class="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
    data-sidebar-position="fixed" data-header-position="fixed">
      <aside class="left-sidebar">
            <div>
              <div class="brand-logo d-flex align-items-center justify-content-between">
                <a href="/admin/home" class="text-nowrap logo-img">
                  <img src="../assets/images/logos/dark-logo.svg" width="180" alt="" />
                </a>
                <div class="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
                  <i class="ti ti-x fs-8"></i>
                </div>
              </div>
            <navbar />
            </div>
          </aside>

    <div class="body-wrapper">
        <header class="app-header">
          <nav class="navbar navbar-expand-lg navbar-light">
            <ul class="navbar-nav">
              <li class="nav-item d-block d-xl-none">
                <a class="nav-link sidebartoggler nav-icon-hover" id="headerCollapse" href="javascript:void(0)">
                  <i class="ti ti-menu-2"></i>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link nav-icon-hover" href="javascript:void(0)">
                  <i class="ti ti-bell-ringing"></i>
                  <div class="notification bg-primary rounded-circle"></div>
                </a>
              </li>
            </ul>
            <div class="navbar-collapse justify-content-end px-0" id="navbarNav">
              <ul class="navbar-nav flex-row ms-auto align-items-center justify-content-end">
                <li class="nav-item dropdown">
                  <a class="nav-link nav-icon-hover" href="#" :id="dropdownId" @click="toggleDropdown" aria-expanded="false">
                    <img src="../assets/images/profile/user-1.jpg" alt="" width="35" height="35" class="rounded-circle">
                  </a>
                  <div class="dropdown-menu dropdown-menu-end dropdown-menu-animate-up" :aria-labelledby="dropdownId" ref="dropdownMenu" style="transform: translateX(-60%);">
                    <div class="message-body">
                      <div class="d-flex align-items-center gap-2 dropdown-item">
                        <i class="ti ti-user fs-6"></i>
                        <p class="mb-0 fs-3">User Name</p>
                      </div>
                      <a href="/login/sigin" class="btn btn-outline-primary mx-3 mt-2 d-block">Logout</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      <router-view />
    </div>
  </div>

</template>

<script setup>
import Navbar from '../components/navbar/NavbarManage'
import { ref } from 'vue';

const dropdownId = ref('drop2');
const dropdownMenu = ref(null);

const toggleDropdown = () => {
  if (dropdownMenu.value) {
    dropdownMenu.value.classList.toggle('show');
  }
};
</script>


<style scoped>
.show {
  display: block !important;
}
</style>
