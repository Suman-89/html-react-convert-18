import React from 'react'

const HomePage = () => {
  return (
    <>
    <div class="sub-header">
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-xs-12">
          <ul class="left-info">
            <li><a href="#"><i class="fa fa-clock-o"></i>Mon-Fri 09:00-17:00</a></li>
            <li><a href="#"><i class="fa fa-phone"></i>090-080-0760</a></li>
          </ul>
        </div>
        <div class="col-md-4 ne_csss">
          <ul class="right-icons">
            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
            <li><a href="#"><i class="fa fa-behance"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

<header class="">
<nav class="navbar navbar-expand-lg">
<div class="container">
  <a class="navbar-brand" href="index.html"><h2>Finance Business</h2></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarResponsive">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#top">Home
          <span class="sr-only">(current)</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="about.html">About Us</a>
      </li>  
      <li class="nav-item">
        <a class="nav-link" href="services.html">Our Services</a>
      </li>                          
      <li class="nav-item">
        <a class="nav-link" href="contact.html">Contact Us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="one-page.html">One Page</a>
      </li>
    </ul>
  </div>
</div>
</nav>
</header>

<div class="main-banner header-text" id="top">
        <div class="Modern-Slider">
         
          <div class="item item-1">
            <div class="img-fill">
                <div class="text-content">
                  <h6>we are ready to help you</h6>
                  <h4>Financial Analysis<br />&amp; Consulting</h4>
                  <p>This finance HTML template is 100% free of charge provided by TemplateMo for everyone. This is a multiple-page version with different HTML pages. <a href="one-page.html">One-page version</a> is available as of 2021 February.</p>
                  <a href="contact.html" class="filled-button">contact us</a>
                </div>
            </div>
          </div>
         
          <div class="item item-2">
            <div class="img-fill">
                <div class="text-content">
                  <h6>we are here to support you</h6>
                  <h4>Accounting<br />&amp; Management</h4>
                  <p>You are allowed to use this template for your company websites. You are NOT allowed to re-distribute this template ZIP file on any template download website. Please contact TemplateMo for more detail.</p>
                  <a href="services.html" class="filled-button">our services</a>
                </div>
            </div>
          </div>
         
          <div class="item item-3">
            <div class="img-fill">
                <div class="text-content">
                  <h6>we have a solid background</h6>
                  <h4>Market Analysis<br />&amp; Statistics</h4>
                  <p>You can download, edit and use this layout for your business website. Phasellus lacinia ac sapien vitae dapibus. Mauris ut dapibus velit cras interdum nisl ac urna tempor mollis.</p>
                  <a href="about.html" class="filled-button">learn more</a>
                </div>
            </div>
          </div>
          
        </div>
    </div>
</>
    
  )
}

export default HomePage