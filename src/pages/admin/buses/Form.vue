<template>
        <div class="container-fluid">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title fw-semibold mb-4">Forms add Bus</h5>
                <router-link to="/admin/buses"  class="d-flex btn btn-outline-link m-1 text-primary">Back</router-link>
              <div class="card">
                <div class="card-body">
                  <form @submit.prevent="submitForm">
                  <div class="row">
                    <div class="col-sm-6 col-xl-6 ">
                         <div class="mb-3">
                          <label class="d-flex form-label">Bus Number</label>
                          <input type="text" class="form-control" v-model="bus.busNumber" v-bind:class="{'is-invalid': error.busNumber}">
                          <span class="invalid-feedback" v-if="error.busNumber">{{error.busNumber}}</span>
                        </div>
                    </div>
                    <div class="col-sm-6 col-xl-6 ">
                      <div class="mb-3">
                        <label class=" d-flex form-label">Bus Type</label>
                        <input type="text" class="form-control" v-model="bus.busTypes" v-bind:class="{'is-invalid': error.busTypes}" >
                        <span class="invalid-feedback" v-if="error.busTypes">{{error.busTypes}}</span>
                      </div>
                    </div>
                     <div class="col-sm-6 col-xl-6 ">
                      <div class="mb-3">
                        <label  class=" d-flex form-label">License Plate</label>
                        <input type="text" class="form-control" v-model="bus.licensePlate" v-bind:class="{'is-invalid': error.licensePlate}">
                        <span class="invalid-feedback" v-if="error.licensePlate">{{error.licensePlate}}</span>
                      </div>
                    </div>
                     <div class="col-sm-6 col-xl-6 ">
                      <div class="mb-3">
                        <label  class=" d-flex form-label">Seat Capacity</label>
                        <input type="text" min="0" class="form-control" v-model="bus.seatCapacity" v-bind:class="{'is-invalid': error.seatCapacity}">
                        <span class="invalid-feedback" v-if="error.seatCapacity">{{error.seatCapacity}}</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-xl-6 ">
                    <button type="submit" class="btn btn-primary mx-2">Save</button> 
                    <button type="reset" class="btn btn-danger mx-2" @click="cancel()">Cancel</button>
                   </div>
                </form>
                </div>
              </div>
            </div>
          </div>
        </div>
</template>

<script>

import apiConfig from '../../../store/apiConfig.js';

 export default{
  name: 'BusForm',
  data(){
    return{
      error:{
        busNumber: '',
        busTypes: '',
        licensePlate: '',
        seatCapacity: '',
      },
      bus:{
        busesId: '',
        busNumber: '',
        busTypes: '',
        licensePlate: '',
        seatCapacity: '',
      },
      isValidForm: true,
    }
  },
  created(){
    let busesId = this.$route.params.id
    if(busesId){
      this.getBus(busesId)
    }
  },
  methods: {
    validate(){
      let isValid = true
      this.error = {
        busNumber: '',
        busTypes: '',
        licensePlate: '',
        seatCapacity: '',
      }

      if(!this.bus.busNumber){
        this.error.busNumber = 'Bus Number is required'
        isValid = false
      }

      if(!this.bus.busTypes){
        this.error.busTypes = 'Bus Types is required'
        isValid = false
      }

      if(!this.bus.licensePlate){
        this.error.licensePlate = 'License Plate is required'
        isValid = false
      }

      if(!this.bus.seatCapacity){
        this.error.seatCapacity = 'Seat Capacity is required'
        isValid = false
      }else if(!this.isNumber(this.bus.seatCapacity)){
        this.error.seatCapacity = 'Seat Capacity must be Number'
        isValid = false
      }

      return isValid
    },
    isNumber(value){
      return /^\d*$/.test(value)
    },
    async submitForm() {
        if (this.validate()) {
          if(this.bus.busesId){
            try {
              await this.$request.put(apiConfig.busesApi, this.bus);
              return this.$router.push({ name: 'admin.buses' });
            } catch (error) {
              console.error(error);
              alert("Error occurred while submitting the form update.");
            }
          } else {
            try {
              delete this.bus.busesId;
              await this.$request.post(apiConfig.busesApi, this.bus);
              return this.$router.push({ name: 'admin.buses' });
            } catch (error) {
              console.error(error);
              alert("Error occurred while submitting the form add.");
            }
          }

        }
      },

    getBus(busId){
      this.$request.get(`${apiConfig.busesApi}/${busId}`).then(res => {
        console.log(res.data)
        this.bus = res.data.value
      });
    },
    cancel(){
      this.bus.busNumber = '' 
      this.bus.busTypes = '' 
      this.bus.licensePlate = '' 
      this.bus.seatCapacity = '' 
    }
  }

 }
</script>