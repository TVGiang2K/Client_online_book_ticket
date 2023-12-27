<template>
 <nav class="sidebar-nav scroll-sidebar" data-simplebar="">
          <ul id="sidebarnav">
            <li class="nav-small-cap">
              <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
              <span class="hide-menu">CATEGORIES</span>
            </li>
            <li class="sidebar-item">
              <router-link to="/admin/accounts" class="sidebar-link"  aria-expanded="false">
              <span>
                  <i class="ti ti-empathize"></i>
                </span>
               
                <span class="hide-menu">Accounts</span>
              </router-link>
            </li>
            <li class="sidebar-item">
              <router-link to="/admin/buses" class="sidebar-link"  aria-expanded="false">
                <span>
                  <i class="ti ti-bus"></i>
                </span>
                <span class="hide-menu">Buses</span>
              </router-link>
            </li>
            <li class="sidebar-item">
              <a class="sidebar-link" href="./ui-card.html" aria-expanded="false">
                <span>
                  <i class="ti ti-user"></i>
                </span>
                <span class="hide-menu">Customers</span>
              </a>
            </li>
            <li class="sidebar-item">
              <a class="sidebar-link" href="./ui-forms.html" aria-expanded="false">
                <span>
                  <i class="ti ti-discount"></i>
                </span>
                <span class="hide-menu">Financial</span>
              </a>
            </li>
            <li class="sidebar-item">
              <a class="sidebar-link" href="./ui-forms.html" aria-expanded="false">
                <span>
                  <i class="ti ti-ticket"></i>
                </span>
                <span class="hide-menu">Ticket</span>
              </a>
            </li>
            <li class="sidebar-item">
              <a class="sidebar-link" href="./ui-forms.html" aria-expanded="false">
                <span>
                  <i class="ti ti-armchair"></i>
                </span>
                <span class="hide-menu">Seat</span>
              </a>
            </li>
            <li class="sidebar-item">
              <a class="sidebar-link" href="./ui-forms.html" aria-expanded="false">
                <span>
                  <i class="ti ti-input-search"></i>
                </span>
                <span class="hide-menu">Reservation</span>
              </a>
            </li>
            <li class="sidebar-item">
              <a class="sidebar-link" href="./ui-forms.html" aria-expanded="false">
                <span>
                  <i class="ti ti-route"></i>
                </span>
                <span class="hide-menu">Trips</span>
              </a>
            </li>
          </ul>
        </nav>
</template>