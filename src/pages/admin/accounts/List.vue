<template>
      <div class="container-fluid">
        <div class="row">
            <div class="card w-100">
              <div class="card-body p-4">
                <h5 class="d-flex card-title fw-semibold mb-4">List Accounts</h5>
                <div class="row">
                    <div class="col-sm-2 col-xl-2">
                        <router-link to="/admin/accountCreate"  class="d-flex btn btn-outline-link m-1 text-primary">Add a Account</router-link>
                    </div>
                    <div class="col-sm-6 col-xl-6 ">
                        <form class="d-flex">
                            <div class="form-group mb-0 me-2">
                                <input type="text"  class="form-control" placeholder="Input text" aria-describedby="helpId">
                            </div>
                            <div>
                                <button type="submit" class="btn btn-primary">Search</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="table-responsive">
                  <table class="table text-nowrap mb-0 align-middle">
                    <thead class="text-dark fs-4">
                      <tr>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Id</h6>
                        </th>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Assigned</h6>
                        </th>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Name</h6>
                        </th>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Priority</h6>
                        </th>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Budget</h6>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="border-bottom-0"><h6 class="fw-semibold mb-0">1</h6></td>
                        <td class="border-bottom-0">
                            <h6 class="fw-semibold mb-1">Sunil Joshi</h6>
                            <span class="fw-normal">Web Designer</span>                          
                        </td>
                        <td class="border-bottom-0">
                          <p class="mb-0 fw-normal">Elite Admin</p>
                        </td>
                        <td class="border-bottom-0">
                          <h6 class="fw-semibold mb-0 fs-4">$3.9</h6>
                        </td>
                        <td class="border-bottom-0">
                            <router-link to="/admin/accountEdit"  class="badge bg-primary rounded-3 fw-semibold">Edit</router-link> |
                            <router-link to="/admin/accountDetail"  class="badge bg-success rounded-3 fw-semibold">Detail</router-link> |
                            <a  class="badge bg-danger rounded-3 fw-semibold">Delete</a>
                        </td>
                      </tr> 
                                         
                    </tbody>
                  </table>
                </div>
              </div>
          </div>
        </div>
      </div>
</template>