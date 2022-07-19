import React from "react";

const VProfile = () => {
  return (
    <>
  
  <div class="sticky-header-next-sec  ec-breadcrumb section-space-mb">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="row ec_breadcrumb_inner">
                        <div class="col-md-6 col-sm-12">
                            <h2 class="ec-breadcrumb-title">Vendor Profile</h2>
                        </div>
                        <div class="col-md-6 col-sm-12">
                            {/* <!-- ec-breadcrumb-list start --> */}
                            <ul class="ec-breadcrumb-list">
                                <li class="ec-breadcrumb-item"><a href="/">Home</a></li>
                                <li class="ec-breadcrumb-item active">Profile</li>
                            </ul>
                            {/* <!-- ec-breadcrumb-list end --> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Ec breadcrumb end --> */}

    {/* <!-- Vendor profile section --> */}
    <section class="ec-page-content ec-vendor-uploads section-space-p">
        <div class="container">
            <div class="row">
                {/* <!-- Sidebar Area Start --> */}
                <div class="ec-shop-leftside ec-vendor-sidebar col-lg-3 col-md-12">
                    <div class="ec-sidebar-wrap">
                        {/* <!-- Sidebar Category Block --> */}
                        <div class="ec-sidebar-block">
                            <div class="ec-vendor-block">
                                <div class="ec-vendor-block-items">
                                    <ul>
                                        <li><a href="vendor-dashboard.html">Dashboard</a></li>
                                        <li><a href="vendor-profile.html">Public Profile</a></li>
                                        <li><a href="vendor-uploads.html">Uploads</a></li>
                                        <li><a href="track-order.html">Track Shipping</a></li>
                                        <li><a href="vendor-settings.html">Settings (Edit)</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ec-shop-rightside col-lg-9 col-md-12">
                    <div class="ec-vendor-dashboard-card ec-vendor-profile-card">
                        <div class="ec-vendor-card-body">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="ec-vendor-block-profile">
                                        <div class="ec-vendor-block-img space-bottom-30">
                                            <div class="ec-vendor-block-bg"></div>
                                            <div class="ec-vendor-block-detail">
                                                <img class="v-img" src="assets/images/vendor/5.jpg" alt="vendor image"/>
                                                <h5 class="name">Neon Fashion</h5>
                                                <p>( Retail Business )</p>
                                            </div>
                                        </div>
                                        <div class="ec-vendor-block-about space-bottom-30">
                                            <h5>About Our Firm</h5>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                since the 1500s, when an unknown printer took a galley.</p>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                since the 1500s, when an unknown printer took a galley of type and
                                                scrambled it to make a type specimen book. It has survived not only five
                                                centuries.</p>
                                        </div>
                                        <h5>Account Information</h5>

                                        <div class="row">
                                            <div class="col-md-6 col-sm-12">
                                                <div class="ec-vendor-detail-block ec-vendor-block-email space-bottom-30">
                                                    <h6>E-mail address</h6>
                                                    <ul>
                                                        <li><strong>Email 1 : </strong><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="15666065657a67612455706d74657879703b767a78">[email&#160;protected]</a></li>
                                                        <li><strong>Email 2 : </strong><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="80f3f5f0f0eff2f4b2c0e5f8e1f0edece5aee3efed">[email&#160;protected]</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-sm-12">
                                                <div class="ec-vendor-detail-block ec-vendor-block-contact space-bottom-30">
                                                    <h6>Contact nubmer</h6>
                                                    <ul>
                                                        <li><strong>Phone Nubmer 1 : </strong>(123) 123 456 7890</li>
                                                        <li><strong>Phone Nubmer 2 : </strong>(123) 123 456 7890</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-sm-12">
                                                <div class="ec-vendor-detail-block ec-vendor-block-address mar-b-30">
                                                    <h6>Address</h6>
                                                    <ul>
                                                        <li><strong>Home : </strong>123, 2150 Sycamore Street, dummy text of
                                                            the, San Jose, California - 95131.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-sm-12">
                                                <div class="ec-vendor-detail-block ec-vendor-block-address">
                                                    <h6>Shipping Address</h6>
                                                    <ul>
                                                        <li><strong>Office : </strong>123, 2150 Sycamore Street, dummy text of
                                                            the, San Jose, California - 95131.</li>
                                                    </ul>
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
    </>

  );
}
export default VProfile;