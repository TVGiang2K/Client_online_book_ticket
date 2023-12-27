<template>
<header class="app-header">
          <nav class="navbar navbar-expand-lg navbar-light">
            <div class="navbar-collapse justify-content-end px-0" id="navbarNav">
              <ul class="navbar-nav flex-row ms-auto align-items-center justify-content-end">
                <li class="nav-item dropdown">
                  <router-link to="/admin/home"  class="d-flex btn btn-outline-link m-1 text-primary">Home</router-link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
  <div class="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
    data-sidebar-position="fixed" data-header-position="fixed">
    <div
      class="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
      <div class="d-flex align-items-center justify-content-center w-100">
        <div class="row justify-content-center w-100">
          <div class="col-md-8 col-lg-6 col-xxl-3">
            <div class="card mb-0">
             <div class="card-body">
                <a href="./index.html" class="text-nowrap logo-img text-center d-block py-3 w-100">
                  <img src="../assets/images/logos/dark-logo.svg" width="180" alt="">
                </a>
             <router-view />
            </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>