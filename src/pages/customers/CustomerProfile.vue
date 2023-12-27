<template>
    <!-- ============================ Booking Page ================================== -->
		<section class="pt-5 gray-simple position-relative">
			<div class="container">
				<div class="row align-items-start justify-content-between gx-xl-4">

                    <div class="col-xl-12 col-lg-12 col-md-12">
								<div class="card border rounded-3">
									<div class="card-header">
										<h4>Search Customer</h4>
									</div>
									<div class="card-body">
										<div class="form-group position-relative">
											<input type="text" class="form-control" placeholder="Enter the Name You Want to Search" value="">
											<a href="#" class="position-absolute top-50 end-0 fw-semibold translate-middle text-primary disable">Search</a>
										</div>
									</div>
								</div>
							</div>
					<div class="col-xl-4 col-lg-4 col-md-12">

						<!-- Personal Information -->
						<div class="card mb-4">
							<div class="card-header">
								<h4><i class="fa-solid fa-file-invoice me-2"></i>Customer Information</h4>
							</div>
							<div class="card-body">
								<div class="row align-items-center justify-content-start">

									<div class="col-xl-12 col-lg-12 col-md-12 mb-4">
										<div class="d-flex align-items-center">
											<label class="position-relative me-4" for="uploadfile-1" title="Replace this pic">
												<!-- Avatar place holder -->
												<span class="avatar avatar-xl">
													<img id="uploadfile-1-preview"
														class="avatar-img rounded-circle border border-white border-3 shadow" src="../../assets/img/team-1.jpg"
														alt="">
												</span>
											</label>
											<!-- Upload button -->
											<label class="btn btn-sm btn-light-primary px-4 fw-medium mb-0" for="uploadfile-1">Change</label>
											<input id="uploadfile-1" class="form-control d-none" type="file">
										</div>
									</div>

									<div class="col-xl-6 col-lg-6 col-md-6">
										<div class="form-group">
											<label class="form-label">First Name</label>
											<input type="text" class="form-control" value="Adam K">
										</div>
									</div>

									<div class="col-xl-6 col-lg-6 col-md-6">
										<div class="form-group">
											<label class="form-label">Last Name</label>
											<input type="text" class="form-control" value="Divliars">
										</div>
									</div>

									<div class="col-xl-6 col-lg-6 col-md-6">
										<div class="form-group">
											<label class="form-label">Email ID</label>
											<input type="text" class="form-control" value="adamkruck@gmail.com">
										</div>
									</div>

									<div class="col-xl-6 col-lg-6 col-md-6">
										<div class="form-group">
											<label class="form-label">Mobile</label>
											<input type="text" class="form-control" value="9856542563">
										</div>
									</div>

									<div class="col-xl-6 col-lg-6 col-md-6">
										<div class="form-group">
											<label class="form-label">Date of Birth</label>
											<input type="date" class="form-control" value="02/04/2000">
										</div>
									</div>

									<div class="col-xl-6 col-lg-6 col-md-6">
										<div class="form-group">
											<label class="form-label">Gender</label>
											<input type="text" class="form-control" value="Male">
										</div>
									</div>

									<div class="col-xl-12 col-lg-12 col-md-12">
										<div class="form-group">
											<label class="form-label">About Info</label>
											<textarea
												class="form-control ht-120">Lorem ipsum dolor sit amet, nec virtute nusquam ex. Ex sed diceret constituam inciderint, accusamus imperdiet has te. Id qui liber nemore semper, modus appareat philosophia ut eam. Assum tibique singulis at mel.</textarea>
										</div>
									</div>

								</div>
							</div>
						</div>

						<div class="card mb-4">
							<div class="card-header">
								<h4><i class="fa-solid fa-envelope-circle-check me-2"></i>Update Your Email</h4>
							</div>
							<div class="card-body">
								<div class="row align-items-center justify-content-start">

									<div class="col-xl-12 col-lg-12 col-md-12">
										<div class="form-group">
											<label class="form-label">Email Address</label>
											<input type="email" class="form-control" placeholder="update your new email">
										</div>
									</div>

									<div class="col-xl-12 col-lg-12 col-md-12">
										<div class="text-end">
											<a href="#" class="btn btn-md btn-primary mb-0">Update Email</a>
										</div>
									</div>

								</div>
							</div>
						</div>

						<div class="card">
							<div class="card-header">
								<h4><i class="fa-solid fa-lock me-2"></i>Update Password</h4>
							</div>
							<div class="card-body">
								<div class="row align-items-center justify-content-start">

									<div class="col-xl-12 col-lg-12 col-md-12">
										<div class="form-group">
											<label class="form-label">Old Password</label>
											<input type="password" class="form-control" placeholder="*********">
										</div>
									</div>

									<div class="col-xl-12 col-lg-12 col-md-12">
										<div class="form-group">
											<label class="form-label">New Password</label>
											<input type="password" class="form-control" placeholder="*********">
										</div>
									</div>

									<div class="col-xl-12 col-lg-12 col-md-12">
										<div class="form-group">
											<label class="form-label">Confirm Password</label>
											<input type="password" class="form-control" placeholder="*********">
										</div>
									</div>

									<div class="col-xl-12 col-lg-12 col-md-12">
										<div class="text-end">
											<a href="#" class="btn btn-md btn-primary mb-0">Change Password</a>
										</div>
									</div>

								</div>
							</div>
						</div>

					</div>
                    <div class="col-xl-8 col-lg-8 col-md-12">

                        <!-- Personal Information -->
                        <div class="card">
                            <div class="card-header">
                                <h4><i class="fa-solid fa-ticket me-2"></i>Customer Bookings</h4>
                            </div>
                            <div class="card-body">
                                <div class="row align-items-center justify-content-start">
                                    <div class="col-xl-12 col-lg-12 col-md-12 mb-4">
                                        <ul class="row align-items-center justify-content-between p-0 gx-3 gy-2">
                                            <li class="col-md-3 col-6">
                                                <input type="checkbox" class="btn-check" id="allbkk" checked>
                                                <label class="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width" for="allbkk">All
                                                    Booking (24)</label>
                                            </li>
                                            <li class="col-md-3 col-6">
                                                <input type="checkbox" class="btn-check" id="processing">
                                                <label class="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width"
                                                    for="processing">Processing (02)</label>
                                            </li>
                                            <li class="col-md-3 col-6">
                                                <input type="checkbox" class="btn-check" id="cancelled">
                                                <label class="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width"
                                                    for="cancelled">Cancelled (04)</label>
                                            </li>
                                            <li class="col-md-3 col-6">
                                                <input type="checkbox" class="btn-check" id="completed">
                                                <label class="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width"
                                                    for="completed">Completed (10)</label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="row align-items-center justify-content-start">
                                    <div class="col-xl-12 col-lg-12 col-md-12">

                                        <!-- Single Item -->
                                        <div class="card border br-dashed mb-4">
                                            <!-- Card header -->
                                            <div class="card-header nds-block border-bottom flex-column flex-md-row justify-content-between align-items-center">
                                                <!-- Icon and Title -->
                                                <div class="d-flex align-items-center">
                                                    <div class="square--50 circle bg-light-purple text-purple flex-shrink-0"><i
                                                            class="fa-solid fa-plane"></i></div>
                                                    <!-- Title -->
                                                    <div class="ms-2">
                                                        <h6 class="card-title text-dark fs-5 mb-1">Chicago To San Francisco</h6>
                                                        <ul class="nav nav-divider small">
                                                            <li class="nav-item text-muted">Booking ID: BKR24530</li>
                                                            <li class="nav-item ms-2"><span class="label bg-light-success text-success">Business
                                                                    class</span></li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <!-- Button -->
                                                <div class="mt-2 mt-md-0">
                                                    <a href="#" class="btn btn-md btn-light-seegreen fw-medium mb-0">Manage Booking</a>
                                                </div>
                                            </div>

                                            <!-- Card body -->
                                            <div class="card-body">
                                                <div class="row g-3">
                                                    <div class="col-sm-6 col-md-4">
                                                        <span>Departure time</span>
                                                        <h6 class="mb-0">Fri 12 Aug 14:00 PM</h6>
                                                    </div>

                                                    <div class="col-sm-6 col-md-4">
                                                        <span>Arrival time</span>
                                                        <h6 class="mb-0">Fri 12 Aug 18:00 PM</h6>
                                                    </div>

                                                    <div class="col-md-4">
                                                        <span>Booked by</span>
                                                        <h6 class="mb-0">Daniel Duekaza</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Single Item -->
                                        <div class="card border br-dashed mb-4">
                                            <!-- Card header -->
                                            <div class="card-header nds-block border-bottom flex-column flex-md-row justify-content-between align-items-center">
                                                <!-- Icon and Title -->
                                                <div class="d-flex align-items-center">
                                                    <div class="square--50 circle bg-light-danger text-danger flex-shrink-0"><i
                                                            class="fa-solid fa-hotel"></i></div>
                                                    <!-- Title -->
                                                    <div class="ms-2">
                                                        <h6 class="card-title text-dark fs-5 mb-1">Dorsett Singapore</h6>
                                                        <ul class="nav nav-divider small">
                                                            <li class="nav-item text-muted">Booking ID: BKR24532</li>
                                                            <li class="nav-item ms-2"><span class="text-dark fw-medium">3Day/4N</span></li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <!-- Button -->
                                                <div class="mt-2 mt-md-0">
                                                    <a href="#" class="btn btn-md btn-light-seegreen fw-medium mb-0">Manage Booking</a>
                                                </div>
                                            </div>

                                            <!-- Card body -->
                                            <div class="card-body">
                                                <div class="row g-3">
                                                    <div class="col-sm-6 col-md-4">
                                                        <span>Check-In</span>
                                                        <h6 class="mb-0">Tue 10 Sep 10:00 AM</h6>
                                                    </div>

                                                    <div class="col-sm-6 col-md-4">
                                                        <span>Check-Out</span>
                                                        <h6 class="mb-0">Tue 14 Sep 18:00 PM</h6>
                                                    </div>

                                                    <div class="col-md-4">
                                                        <span>Total Guest</span>
                                                        <h6 class="mb-0">3 Adult . 2 Child</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Single Item -->
                                        <div class="card border br-dashed mb-4">
                                            <!-- Card header -->
                                            <div class="card-header nds-block border-bottom flex-column flex-md-row justify-content-between align-items-center">
                                                <!-- Icon and Title -->
                                                <div class="d-flex align-items-center">
                                                    <div class="square--50 circle bg-light-success text-success flex-shrink-0"><i
                                                            class="fa-solid fa-car"></i></div>
                                                    <!-- Title -->
                                                    <div class="ms-2">
                                                        <h6 class="card-title text-dark fs-5 mb-1">Dallas To San Denver</h6>
                                                        <ul class="nav nav-divider small">
                                                            <li class="nav-item text-muted">Booking ID: BKR24534</li>
                                                            <li class="nav-item ms-2"><span class="text-dark fw-medium">Accord, BMW</span></li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <!-- Button -->
                                                <div class="mt-2 mt-md-0">
                                                    <a href="#" class="btn btn-md btn-light-seegreen fw-medium mb-0">Manage Booking</a>
                                                </div>
                                            </div>

                                            <!-- Card body -->
                                            <div class="card-body">
                                                <div class="row g-3">
                                                    <div class="col-sm-6 col-md-4">
                                                        <span>Pickup address</span>
                                                        <h6 class="mb-0">220K.V Jail Road</h6>
                                                    </div>

                                                    <div class="col-sm-6 col-md-4">
                                                        <span>Drop address</span>
                                                        <h6 class="mb-0">11185 Mary Ball Rd</h6>
                                                    </div>

                                                    <div class="col-md-4">
                                                        <span>Booked by</span>
                                                        <h6 class="mb-0">Daniel Duekaza</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Single Item -->
                                        <div class="card border br-dashed mb-4">
                                            <!-- Card header -->
                                            <div class="card-header nds-block border-bottom flex-column flex-md-row justify-content-between align-items-center">
                                                <!-- Icon and Title -->
                                                <div class="d-flex align-items-center">
                                                    <div class="square--50 circle bg-light-purple text-purple flex-shrink-0"><i
                                                            class="fa-solid fa-plane"></i></div>
                                                    <!-- Title -->
                                                    <div class="ms-2">
                                                        <h6 class="card-title text-dark fs-5 mb-1">Chicago To Houston<label
                                                                class="badge text-danger bg-light-danger fw-medium text-md ms-2">Cancelled</label></h6>
                                                        <ul class="nav nav-divider small">
                                                            <li class="nav-item text-muted">Booking ID: BKR24530</li>
                                                            <li class="nav-item ms-2"><span class="label bg-light-success text-success">Business
                                                                    class</span></li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <!-- Button -->
                                                <div class="mt-2 mt-md-0">
                                                    <a href="#" class="btn btn-md btn-light-seegreen fw-medium mb-0">ReBooking</a>
                                                </div>
                                            </div>

                                            <!-- Card body -->
                                            <div class="card-body">
                                                <div class="row g-3">
                                                    <div class="col-sm-6 col-md-4">
                                                        <span>Departure time</span>
                                                        <h6 class="mb-0">Fri 12 Aug 14:00 PM</h6>
                                                    </div>

                                                    <div class="col-sm-6 col-md-4">
                                                        <span>Arrival time</span>
                                                        <h6 class="mb-0">Fri 12 Aug 18:00 PM</h6>
                                                    </div>

                                                    <div class="col-md-4">
                                                        <span>Booked by</span>
                                                        <h6 class="mb-0">Daniel Duekaza</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Single Item -->
                                        <div class="card border br-dashed mb-4">
                                            <!-- Card header -->
                                            <div class="card-header nds-block border-bottom flex-column flex-md-row justify-content-between align-items-center">
                                                <!-- Icon and Title -->
                                                <div class="d-flex align-items-center">
                                                    <div class="square--50 circle bg-light-purple text-purple flex-shrink-0"><i
                                                            class="fa-solid fa-plane"></i></div>
                                                    <!-- Title -->
                                                    <div class="ms-2">
                                                        <h6 class="card-title text-dark fs-5 mb-1">Chicago To Houston<label
                                                                class="badge text-info bg-light-info fw-medium text-md ms-2">Processing</label></h6>
                                                        <ul class="nav nav-divider small">
                                                            <li class="nav-item text-muted">Booking ID: BKR24528</li>
                                                            <li class="nav-item ms-2"><span class="label bg-light-success text-success">Business
                                                                    class</span></li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <!-- Button -->
                                                <div class="mt-2 mt-md-0">
                                                    <a href="#" class="btn btn-md btn-light-seegreen fw-medium mb-0">Edit Booking</a>
                                                </div>
                                            </div>

                                            <!-- Card body -->
                                            <div class="card-body">
                                                <div class="row g-3">
                                                    <div class="col-sm-6 col-md-4">
                                                        <span>Departure time</span>
                                                        <h6 class="mb-0">Fri 12 Aug 14:00 PM</h6>
                                                    </div>

                                                    <div class="col-sm-6 col-md-4">
                                                        <span>Arrival time</span>
                                                        <h6 class="mb-0">Fri 12 Aug 18:00 PM</h6>
                                                    </div>

                                                    <div class="col-md-4">
                                                        <span>Booked by</span>
                                                        <h6 class="mb-0">Daniel Duekaza</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Single Item -->
                                        <div class="card border br-dashed">
                                            <!-- Card header -->
                                            <div class="card-header nds-block border-bottom flex-column flex-md-row justify-content-between align-items-center">
                                                <!-- Icon and Title -->
                                                <div class="d-flex align-items-center">
                                                    <div class="square--50 circle bg-light-purple text-purple flex-shrink-0"><i
                                                            class="fa-solid fa-plane"></i></div>
                                                    <!-- Title -->
                                                    <div class="ms-2">
                                                        <h6 class="card-title text-dark fs-5 mb-1">Chicago To Houston<label
                                                                class="badge text-success bg-light-success fw-medium text-md ms-2">Completed</label>
                                                        </h6>
                                                        <ul class="nav nav-divider small">
                                                            <li class="nav-item text-muted">Booking ID: BKR24530</li>
                                                            <li class="nav-item ms-2"><span class="label bg-light-success text-success">Business
                                                                    class</span></li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <!-- Button -->
                                                <div class="mt-2 mt-md-0">
                                                    <a href="#" class="btn btn-md btn-light-seegreen fw-medium mb-0">Give Feedback</a>
                                                </div>
                                            </div>

                                            <!-- Card body -->
                                            <div class="card-body">
                                                <div class="row g-3">
                                                    <div class="col-sm-6 col-md-4">
                                                        <span>Departure time</span>
                                                        <h6 class="mb-0">Fri 12 Aug 14:00 PM</h6>
                                                    </div>

                                                    <div class="col-sm-6 col-md-4">
                                                        <span>Arrival time</span>
                                                        <h6 class="mb-0">Fri 12 Aug 18:00 PM</h6>
                                                    </div>

                                                    <div class="col-md-4">
                                                        <span>Booked by</span>
                                                        <h6 class="mb-0">Daniel Duekaza</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
				</div>
			</div>
		</section>
		<!-- ============================ Booking Page End ================================== -->
</template>