<template>
 
      <p class="text-center">Your Social Campaigns</p>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Username</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="mb-4">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="d-flex align-items-center justify-content-between mb-4">
          <div class="form-check">
            <input class="form-check-input primary" type="checkbox" value="" id="flexCheckChecked" checked>
            <label class="form-check-label text-dark" for="flexCheckChecked">
              Remeber this Device
            </label>
          </div>
          <router-link to="/login/forgotPassword" class="text-primary fw-bold" href="./index.html">Forgot Password ?</router-link>
        </div>
        <a href="./index.html" class="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2">Sign In</a>
      </form>
</template>