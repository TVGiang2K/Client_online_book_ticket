<template>
      <div class="container-fluid">
        <div class="row">
            <div class="card w-100">
              <div class="card-body p-4">
                <h5 class="d-flex card-title fw-semibold mb-4">List Buses</h5>
                <div class="row">
                    <div class="col-sm-2 col-xl-2">
                        <router-link to="/admin/busCreate"  class="d-flex btn btn-outline-link m-1 text-primary">Add a Bus</router-link>
                    </div>
                    <div class="col-sm-6 col-xl-6 ">
                        <form class="d-flex" @submit.prevent="searchBuses">
                          <div class="form-group mb-0 me-2">
                            <input type="text" class="form-control" v-model="searchQuery" placeholder="Input text Search">
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
                          <h6 class="fw-semibold mb-0">Bus Number</h6>
                        </th>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Bus Type</h6>
                        </th>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">License Plate</h6>
                        </th>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Seat Capacity</h6>
                        </th>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Status</h6>
                        </th>
                        <th class="border-bottom-0">
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr :key="index" v-for="(bus, index) in buses">
                        <td class="border-bottom-0">
                          {{bus.busesId}}
                        </td>
                        <td class="border-bottom-0">
                                  {{bus.busNumber}}              
                        </td>
                        <td class="border-bottom-0">
                          {{bus.busTypes}}
                        </td>
                        <td class="border-bottom-0">
                          {{bus.licensePlate}}
                        </td>
                        <td class="border-bottom-0">
                          {{bus.seatCapacity}}
                        </td>
                        <td class="border-bottom-0">
                          {{bus.status == 1 ? "Active" : "InActive"}}
                        </td>
                        <td class="border-bottom-0">
                            <router-link :to="{ name : 'admin.buses.edit', params: {id: bus.busesId}}"  class="badge bg-primary rounded-3 fw-semibold">Edit</router-link>|
                            <router-link to="/admin/busDetail"  class="badge bg-success rounded-3 fw-semibold">Detail</router-link>|
                            <button class="badge bg-danger rounded-3 fw-semibold" @click="onDelete(bus.busesId)" >Delete</button>
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
npm uninstall vuex

<script>
import apiConfig from '../../../store/apiConfig.js';

 export default{
  name: 'BusForm',
  data(){
    return{
      buses: [],
      searchQuery: '',
    }
  },
  created(){
    this.getBuses()
  },

  methods: {
    getBuses(){
      this.$request.get(apiConfig.busesApi).then(res => {
        this.buses = res.data
      });
    },
    async searchBuses() {
      try {
        const res = await this.$request.get(`${apiConfig.busesApi}/search`, { params: { name: this.searchQuery } });
        this.buses = res.data;
      } catch (error) {
        await this.getBuses();
        this.$swal.fire("No Names searched", "", "info");
      }
    },
    async onDelete(id){
      this.$swal.fire({
        title: "Do you want to delete?",
        showDenyButton: false,
        showCancelButton: true,
        confirmButtonText: "ok",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            await this.$request.delete(`${apiConfig.busesApi}/${id}`);
            await this.getBuses();
            this.$swal.fire("Delete!", "", "success");
          } catch (error) {
             this.$swal.fire("Delete!", "", "info");
          }
        } 
      });
    }
  }
 }
</script>