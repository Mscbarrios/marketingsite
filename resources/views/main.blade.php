<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>International Marketing</title>
    <!-- Favicon-->
    <link rel="icon" type="image/x-icon" href="assets/img/EEILogo.png" />
    <!-- Core theme CSS (includes Bootstrap)-->
    <!-- Core theme CSS (includes Bootstrap)-->
    <link href="css/styles.css" rel="stylesheet" />
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <script src="{{ asset('js/app.js') }}" defer></script>
    <script src="{{ asset('js/all.js') }}" defer></script>
    <script src="{{ asset('js/scripts.js') }}" defer></script>
</head>
<body class="bodyback" id="page-top">
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div class="container">
            <a class="navbar-brand" href="#page-top"><img src="assets/img/EEILogo.png" alt="..." /></a>
            <a id="navATitle">
                <h2><b>EEI International</b></h2>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
                aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="fas fa-bars ms-1"></i>
            </button>
            <div class="float-left collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0 ">
                    <li class="nav-item linav "><a class="nav-link active" href="#whoweare">Who We Are</a></li>
                    <li class="nav-item linav"><a class="nav-link" href="#wedo">What We Do</a></li>
                    <li class="nav-item linav"><a class="nav-link" href="#wework">Where We Work</a></li>
                    <li class="nav-item linav"><a class="nav-link" href="#workwithus">Work With Us</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <section class="page-section bg-light projshadow" id="whoweare"
        style="padding-bottom: 5em!important; padding-top: 9em!important;">
        <img src="assets/img/360-teaser_orig.gif" class="d-block w-100 rounded" height="500px" alt="...">
        <button type="button" style="filter: brightness(160%);" class="btnplay">Play Video <span
                class="fas fa-caret-square-right"></span></button>
        <div class="container" style="padding-top: 5em!important;">
            <div class="">
                <h2 class="section-heading">Who We Are</h2>
            </div>
            <div style="border-radius: 15px;background-color: #f4f3ef;padding: 1em;line-height: 5em!important;">
                <p class="section-subheading" style="font-size: 1.5em!important;">
                    A Global Construction Solution Provider, Philippine Leader, 24k+ qualified staff, 90 years of
                    History,
                    40 years Overseas with a Trusted Network of Partners.</p>
            </div>
        </div>
    </section>

    <section class="page-section bg-light projshadow" id="wedo"
        style="padding-bottom: 5em!important;padding-top: 5em!important">
        <div class="container divHeadrow" data-bs-spy="scroll">
            <div class="container">
                <h2 class="section-heading">What We Do</h2>
            </div>

        </div>
        <div class="container divHeadrow" data-bs-spy="scroll">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" data-bs-pause="hover"
                data-bs-interval="2000">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                        class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active col-4">
                        <img src="assets/disc/pic1.png" class="d-block w-100 rounded"
                            style="filter: opacity(5) drop-shadow(0 0 brown);" height="500px" alt="...">
                        <div class="carousel-caption d-none d-md-block ">
                            <div class="card" style="">
                                <div class="card-body">
                                    <h5 class="card-title text-muted">Construction</h5>
                                    <h6 class="card-subtitle mb-2 text-muted"> Details</h6>
                                    <p class="card-text text-muted">Some quick example text to build on the card title
                                        and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item col-4">
                        <img src="assets/disc/proj2.jpg" class="d-block w-100 rounded"
                            style="filter: opacity(5) drop-shadow(0 0 brown);" height="500px" alt="...">
                        <div class="carousel-caption d-none d-md-block ">
                            <div class="card" style="">
                                <div class="card-body">
                                    <h5 class="card-title text-muted">Manpower Services</h5>
                                    <h6 class="card-subtitle mb-2 text-muted"> Details</h6>
                                    <p class="card-text text-muted">Some quick example text to build on the card title
                                        and make up the bulk of the card's content.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="carousel-item col-4">

                        <img src="assets/disc/disc3.jpg" style="filter: opacity(5) drop-shadow(0 0 brown);"
                            class="d-block w-100 rounded" height="500px" alt="...">
                        <div class="carousel-caption d-none d-md-block ">
                            <div class="card" style="">
                                <div class="card-body">
                                    <h5 class="card-title text-muted">Modules Steel and Piping Fabrication</h5>
                                    <h6 class="card-subtitle mb-2 text-muted"> Details</h6>
                                    <p class="card-text text-muted">Some quick example text to build on the card title
                                        and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    </section>

    <section class="page-section bg-light projshadow" id="wework" style="padding-bottom: 5em!important">
        <div class="container divHeadrow" data-bs-spy="scroll">

            <div class="">
                <h2 class="section-heading">Where We Work</h2>
            </div>
        </div>
        <div class="container divHeadrow" data-bs-spy="scroll">
            <div class="text-center" style="padding-bottom: 2em!important;">
                <h2>Domestic Projects</h2>
            </div>
            <div id="carouselExampleIndicators2" class="carousel slide" data-bs-ride="carousel"
                data-bs-pause="hover" data-bs-interval="2000">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0"
                        class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="assets/disc/dom1.jpg" class="d-block w-100 rounded"
                            style="filter: opacity(5) drop-shadow(0 0 brown);height: 33em; object-fit: cover;"
                            alt="...">
                        <div class="carousel-caption d-none d-md-block ">
                            <div class="card" style="">
                                <div class="card-body">
                                    <h5 class="card-title text-muted">Serendra</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">11th Avenue Bonifacio Global City, Taguig
                                        1634</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="assets/disc/dom2.jpg" class="d-block w-100 rounded"
                            style="filter: opacity(5) drop-shadow(0 0 brown);height: 33em; object-fit: cover;"
                            alt="...">
                        <div class="carousel-caption d-none d-md-block ">
                            <div class="card" style="">
                                <div class="card-body">
                                    <h5 class="card-title text-muted">San Carlos Sun Project</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">Negros Occidental San Carlos City</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="assets/disc/dom3.jpg" class="d-block w-100 rounded"
                            style="filter: opacity(5) drop-shadow(0 0 brown);height: 33em; object-fit: cover;"
                            alt="...">
                        <div class="carousel-caption d-none d-md-block ">
                            <div class="card" style="">
                                <div class="card-body">
                                    <h5 class="card-title text-muted">Wind Residences</h5>
                                    <h6 class="card-subtitle mb-2 text-muted"> Aguinaldo Highway Tagaytay</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators2" role="button"
                    data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators2" role="button"
                    data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
        </div>
        <div class="container divHeadrow" data-bs-spy="scroll">
            <div class="text-center" style="padding-bottom: 1em!important;">
                <h2>Overseas Projects</h2>
            </div>
            <div id="carouselExampleIndicators3" class="carousel slide" data-bs-ride="carousel"
                data-bs-pause="hover" data-bs-interval="2000">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="0"
                        class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="assets/disc/ovr1.jpg" class="d-block w-100 rounded img-fluid"
                            style="filter: opacity(5) drop-shadow(0 0 brown);height: 33em; object-fit: cover;"
                            alt="...">
                        <div class="carousel-caption d-none d-md-block ">
                            <div class="card" style="">
                                <div class="card-body">
                                    <h5 class="card-title text-muted">Sadara Port</h5>
                                    <h6 class="card-subtitle mb-2 text-muted"> Kingdom of Saudi Arabia</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="assets/disc/ovr2.jpg" class="d-block w-100 rounded img-fluid"
                            style="filter: opacity(5) drop-shadow(0 0 brown);height: 33em; object-fit: cover;"
                            alt="...">
                        <div class="carousel-caption d-none d-md-block ">
                            <div class="card" style="">
                                <div class="card-body">
                                    <h5 class="card-title text-muted">Rabigh II Refining and Petrochemical</h5>
                                    <h6 class="card-subtitle mb-2 text-muted"> Kingdom of Saudi Arabia</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="assets/disc/ovr3.jpg" class="d-block w-100 rounded img-fluid"
                            style="filter: opacity(5) drop-shadow(0 0 brown);height: 33em; object-fit: cover;"
                            alt="...">
                        <div class="carousel-caption d-none d-md-block ">
                            <div class="card" style="">
                                <div class="card-body">
                                    <h5 class="card-title text-muted">Jazan Refinery</h5>
                                    <h6 class="card-subtitle mb-2 text-muted"> Kingdom of Saudi Arabia</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators3" role="button"
                    data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators3" role="button"
                    data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
        </div>
        </div>
    </section>
    <section class="page-section bg-light projshadow" id="workwithus" style="padding-bottom: 5em!important">
        <div class="container divHeadrow" data-bs-spy="scroll">
            <div class="">
                <h2 class="section-heading">Work With Us Overseas
                    <a href="http://localhost:8080/laravel/careers/public/main" target="_blank"
                        style="float:right!important;">
                        <button type="button" name="btnapply" id="btnapply" class="btn btn-success pull-right">
                            Apply&nbsp;<span class="fas fa-angle-double-right"></span>
                        </button>
                    </a>
                </h2>
            </div>
            <div style="border-radius: 15px;background-color: #f4f3ef;padding: 1em;line-height: 5em!important;">
                <p class="section-subheading" style="font-size: 1.5em!important;">
                    Opportunities worldwide.<br>
                    A great international work environment. We care of our people and support the communities we
                    serve.<br>
                    With our ethical value we build a sustainable future and we ban any form of abuse and modern
                    slavery.<br>
                </p>
            </div>
            <div class="" style="padding-top: 0.5em!important;">
                <img src="assets/img/360-teaser_orig.gif" class="d-block w-100 rounded" height="500px"
                    alt="...">
                <button type="button" style="filter: brightness(160%);" class="btnplay2">Play Video <span
                        class="fas fa-caret-square-right"></span></button>
            </div>
        </div>
    </section>

    <!-- Footer-->
    <footer class="footer py-4">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-sm-10 col-md-8 text-lg-start">Copyright &copy; {{ date('Y') }} EEI
                    International. All rights reserved unless otherwise stated.</div>
                <div class="col-lg-2 col-sm-1 col-md-2 my-3 my-lg-0">
                    <a class="btn btn-dark btn-social mx-2 " style="display:none" href="#!"
                        aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                    <a class="btn btn-dark btn-social mx-2 " style="display:none" href="#!"
                        aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-dark btn-social mx-2 " style="display:none" href="#!"
                        aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <div class="col-lg-4 col-sm-1 col-md-2  text-lg-end">
                    <a class="link-dark text-decoration-none me-3" href="policy">Privacy Policy</a>
                    <a class="link-dark text-decoration-none" href="terms">Terms of Use</a>
                </div>
            </div>
        </div>
    </footer>

</body>
</html>
