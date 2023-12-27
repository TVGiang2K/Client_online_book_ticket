import { createRouter, createWebHistory} from 'vue-router'


import CustomersLayout from '../layout/CustomerLayout.vue'
import AdminLayout from '../layout/ManageLayout.vue'
import LoginLayout from '../layout/LoginLayout.vue'

const routes = [
  {
    name: 'customer',
    path: '/',
    component: CustomersLayout,
    children:[
      {
        name: 'customer.home',
        path: 'home',
        component: () => import('../pages/customers/WebIndex.vue'),
      },
      {
        name: 'customer.profile',
        path: 'customerProfile',
        component: () => import('../pages/customers/CustomerProfile'),
      },
      {
        name: 'employees.reservation',
        path: 'reservation',
        component: () => import('../pages/employees/reservation/ReservationIndex.vue'),
      },
      {
        name: 'employees.reservationDone',
        path: 'reservationDone',
        component: () => import('../pages/employees/reservation/ReservationDone.vue'),
      },
    ]
  },

  {
    name: 'login',
    path: '/login',
    component: LoginLayout,
    children: [
      {
        name: 'sigin',
        path: 'sigin',
        component: () => import('../pages/login/Login.vue'),
      },
      {
        name: 'forgotPassword',
        path: 'forgotPassword',
        component: () => import('../pages/login/ForgotPassword.vue'),
      },
      {
        name: 'changePassword',
        path: 'changePassword',
        component: () => import('../pages/login/ChangePassword.vue'),
      }
    ]
  },

  {
    name: 'admin',
    path: '/admin',
    component: AdminLayout,
    children:[
      {
        name: 'admin.home',
        path: 'home',
        component: () => import('../pages/admin/AdminIndex.vue'),
      },
      {
        name: 'admin.buses',
        path: 'buses',
        component: () => import('../pages/admin/buses/List.vue'),
      },
      {
        name: 'admin.buses.create',
        path: 'busCreate',
        component: () => import('../pages/admin/buses/Form.vue'),
      },{
        name: 'admin.buses.edit',
        path: 'busEdit/:id',
        component: () => import('../pages/admin/buses/Form.vue'),
      },{
        name: 'admin.buses.detail',
        path: 'busDetail',
        component: () => import('../pages/admin/buses/Detail.vue'),
      },
      {
        name: 'accounts',
        path: 'accounts',
        component: () => import('../pages/admin/accounts/List.vue'),
      },
      {
        name: 'accounts.create',
        path: 'accountCreate',
        component: () => import('../pages/admin/accounts/Create.vue'),
      },
      {
        name: 'accounts.edit',
        path: 'accountEdit',
        component: () => import('../pages/admin/accounts/Edit.vue'),
      },
      {
        name: 'accounts.detail',
        path: 'accountDetail',
        component: () => import('../pages/admin/accounts/Detail.vue'),
      },
    ]
  },

  // {
  //   name: 'employees',
  //   path: '/employees',
  //   component: EmployeesLayout,
  //   children:[
  //     {
  //       name: 'cus',
  //       path: 'cus',
  //       component: () => import('../pages/employees/customers/CusIndex.vue'),
  //     },
  //     {
  //       name: 'reservation',
  //       path: 'reservation',
  //       component: () => import('../pages/employees/reservation/ReservationIndex.vue'),
  //     }
  //   ]
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
