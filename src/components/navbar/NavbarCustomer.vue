<template>
    
				<nav id="navigation" class="navigation navigation-landscape">
					<div class="nav-header">
						<a class="nav-brand" href="#"><img src="../../assets/img/logo.png" class="logo" alt=""></a>
						<div class="nav-toggle"></div>
						<div class="mobile_nav">
							<ul>
								<li class="currencyDropdown me-2">
									<a href="#" class="nav-link" data-bs-toggle="modal" data-bs-target="#currencyModal"><span
											class="fw-medium">INR</span></a>
								</li>
								<li class="languageDropdown me-2">
                                    <a href="#" class="nav-link" data-bs-toggle="modal" data-bs-target="#countryModal"><img
											src="../../assets/img/flag/flag.png" class="img-fluid" width="17" alt="Country"></a>
								</li>
								<li>
									<a href="#" class="bg-light-primary text-primary rounded" data-bs-toggle="modal"
										data-bs-target="#login"><i class="fa-regular fa-circle-user fs-6"></i></a>
								</li>
							</ul>
						</div>
					</div>
					<div class="nav-menus-wrapper" style="transition-property: none;">
						<ul class="nav-menu">

							<li><a href="home-stay.html"><i class="fa-solid fa-umbrella-beach me-2"></i>Stays</a></li>
							<li class="active"><a href="home-flight.html"><i class="fa-solid fa-jet-fighter me-2"></i>Flights</a></li>
							<li><a href="home-hotel.html"><i class="fa-solid fa-spa me-2"></i>Hotels</a></li>
							<li><a href="home-rental.html"><i class="fa-solid fa-house-circle-check me-2"></i>Rental</a></li>
							<li><a href="home-car.html"><i class="fa-solid fa-car me-2"></i>Cars</a></li>

						</ul>

						<ul class="nav-menu nav-menu-social align-to-right">
							<li class="list-buttons">
								<a href="#" data-bs-toggle="modal" data-bs-target="#login" class="bg-primary"><i
										class="fa-regular fa-circle-user fs-6 me-2"></i>Sign In / Register</a>
							</li>
						</ul>
					</div>
				</nav>


</template>