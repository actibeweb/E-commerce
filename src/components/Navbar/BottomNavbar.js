import React from "react";
import {BsFacebook} from 'react-icons/bs';
import {BiPaperPlane} from 'react-icons/bi';
import {AiFillTwitterCircle,AiOutlineWhatsApp,AiFillStar,AiFillLinkedin,AiFillCloseCircle,AiOutlineInstagram} from 'react-icons/ai';
const BottomNavbar = () => {
  return (
    <div>
    <footer class="ec-footer section-space-mt">
        <div class="footer-container">
            <div class="footer-offer">
                <div class="container">
                    <div class="row">
                        <div class="text-center footer-off-msg">
                            <span>Win a contest! Get this limited-editon</span><a href="#" target="_blank">View
                                Detail</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-top section-space-footer-p">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-lg-3 ec-footer-contact">
                            <div class="ec-footer-widget">
                                <div class="ec-footer-logo"><a href="/"><h1>ActibeEcommerce</h1>
								</a></div>
                                <h4 class="ec-footer-heading">Contact us</h4>
                                <div class="ec-footer-links">
                                    <ul class="align-items-center">
                                        <li class="ec-footer-link">India.</li>
                                        <li class="ec-footer-link"><span>Call Us:</span><a href="tel:+918299558302">+918299558302</a></li>
                                        <li class="ec-footer-link"><span>Email:</span><a href="mailto:nikhil.12001995@lpu.in"><span class="nikhil.12001995@lpu.in" data-cfemail="82a9e7fae3eff2eee7c2e7e1afe7efe3ebeeace1edef">nikhil.12001995@lpu.in</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-lg-2 ec-footer-info">
                            <div class="ec-footer-widget">
                                <h4 class="ec-footer-heading">Information</h4>
                                <div class="ec-footer-links">
                                    <ul class="align-items-center">
                                        <li class="ec-footer-link"><a href="about-us.html">About us</a></li>
                                        <li class="ec-footer-link"><a href="faq.html">FAQ</a></li>
                                        <li class="ec-footer-link"><a href="track-order.html">Delivery Information</a></li>
                                        <li class="ec-footer-link"><a href="contact-us.html">Contact us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-lg-2 ec-footer-account">
                            <div class="ec-footer-widget">
                                <h4 class="ec-footer-heading">Account</h4>
                                <div class="ec-footer-links">
                                    <ul class="align-items-center">
                                        <li class="ec-footer-link"><a href="user-profile.html">My Account</a></li>
                                        <li class="ec-footer-link"><a href="track-order.html">Order History</a></li>
                                        <li class="ec-footer-link"><a href="wishlist.html">Wish List</a></li>
                                        <li class="ec-footer-link"><a href="offer.html">Specials</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-lg-2 ec-footer-service">
                            <div class="ec-footer-widget">
                                <h4 class="ec-footer-heading">Services</h4>
                                <div class="ec-footer-links">
                                    <ul class="align-items-center">
                                        <li class="ec-footer-link"><a href="track-order.html">Discount Returns</a></li>
                                        <li class="ec-footer-link"><a href="privacy-policy.html">Policy & policy </a></li>
                                        <li class="ec-footer-link"><a href="terms-condition.html">Customer Service</a></li>
                                        <li class="ec-footer-link"><a href="terms-condition.html">Term & condition</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-lg-3 ec-footer-news">
                            <div class="ec-footer-widget">
                                <h4 class="ec-footer-heading">Newsletter</h4>
                                <div class="ec-footer-links">
                                    <ul class="align-items-center">
                                        <li class="ec-footer-link">Get instant updates about our new products and
                                            special promos!</li>
                                    </ul>
                                    <div class="ec-subscribe-form">
                                        <form id="ec-newsletter-form" name="ec-newsletter-form" method="post"
                                            action="#">
                                            <div id="ec_news_signup" class="ec-form">
                                                <input class="ec-email" type="email" required=""
                                                    placeholder="Enter your email here..." name="ec-email" value="" />
                                                <button id="ec-news-btn" class="button btn-primary" type="submit"
                                                    name="subscribe" value=""><i 
                                                        aria-hidden="true"><BiPaperPlane/></i></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="container">
                    <div class="row align-items-center">
                        {/* <!-- Footer social Start --> */}
                        <div class="col text-left footer-bottom-left">
                            <div class="footer-bottom-social">
                                <span class="social-text text-upper">Follow us on:</span>
                                <ul class="mb-0">
                                    <li class="list-inline-item"><a class="hdr-facebook" href="#"><i><BsFacebook/></i></a></li>
                                    <li class="list-inline-item"><a class="hdr-twitter" href="#"><i><AiFillTwitterCircle/></i></a></li>
                                    <li class="list-inline-item"><a class="hdr-instagram" href="#"><i ><AiOutlineInstagram/></i></a></li>
                                    <li class="list-inline-item"><a class="hdr-linkedin" href="#"><i><AiFillLinkedin/></i></a></li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- Footer social End --> */}
                        {/* <!-- Footer Copyright Start --> */}
                        <div class="col text-center footer-copy">
                            <div class="footer-bottom-copy ">
                                <div class="ec-copy">Copyright ©2022 <a class="site-name text-upper"
                                        href="#">ActibeEcommerce<span>.</span></a>. All Rights Reserved</div>
                            </div>
                        </div>
                        {/* <!-- Footer Copyright End --> */}
                        {/* <!-- Footer payment --> */}
                        <div class="col footer-bottom-right">
                            <div class="footer-bottom-payment d-flex justify-content-end">
                                <div class="payment-link">
                                    <img src="assets/images/icons/payment.png" alt=""/>
                                </div>

                            </div>
                        </div>
                        {/* <!-- Footer payment --> */}
                    </div>
                </div>
            </div>
        </div>
    </footer>
    {/* <!-- Footer Area End --> */}
    

    
    <div class="modal fade" id="ec_quickview_modal" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <button type="button" class="btn-close qty_close" data-bs-dismiss="modal" aria-label="Close"></button>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-5 col-sm-12 col-xs-12">
                            {/* <!-- Swiper --> */}
                            <div class="qty-product-cover">
                                <div class="qty-slide">
                                    <img class="img-responsive" src="assets/images/product-image/3_1.jpg" alt=""/>
                                </div>
                                <div class="qty-slide">
                                    <img class="img-responsive" src="assets/images/product-image/3_2.jpg" alt=""/>
                                </div>
                                <div class="qty-slide">
                                    <img class="img-responsive" src="assets/images/product-image/3_3.jpg" alt=""/>
                                </div>
                                <div class="qty-slide">
                                    <img class="img-responsive" src="assets/images/product-image/3_4.jpg" alt=""/>
                                </div>
                                <div class="qty-slide">
                                    <img class="img-responsive" src="assets/images/product-image/3_5.jpg" alt=""/>
                                </div>
                            </div>
                            <div class="qty-nav-thumb">
                                <div class="qty-slide">
                                    <img class="img-responsive" src="assets/images/product-image/3_1.jpg" alt=""/>
                                </div>
                                <div class="qty-slide">
                                    <img class="img-responsive" src="assets/images/product-image/3_2.jpg" alt=""/>
                                </div>
                                <div class="qty-slide">
                                    <img class="img-responsive" src="assets/images/product-image/3_3.jpg" alt=""/>
                                </div>
                                <div class="qty-slide">
                                    <img class="img-responsive" src="assets/images/product-image/3_4.jpg" alt=""/>
                                </div>
                                <div class="qty-slide">
                                    <img class="img-responsive" src="assets/images/product-image/3_5.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-7 col-sm-12 col-xs-12">
                            <div class="quickview-pro-content">
                                <h5 class="ec-quick-title"><a href="product-left-sidebar.html">Handbag leather purse for women</a>
                                </h5>
                                <div class="ec-quickview-rating">
                                    <i ><AiFillStar/></i>
                                    <i ><AiFillStar/></i>
                                    <i ><AiFillStar/></i>
                                    <i ><AiFillStar/></i>
                                    <i ><AiFillStar/></i>
                                </div>

                                <div class="ec-quickview-desc">Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                    since the 1500s,</div>
                                <div class="ec-quickview-price">
                                    <span class="old-price">₹100.00</span>
                                    <span class="new-price">₹80.00</span>
                                </div>

                                <div class="ec-pro-variation">
                                    <div class="ec-pro-variation-inner ec-pro-variation-color">
                                        <span>Color</span>
                                        <div class="ec-pro-color">
                                            <ul class="ec-opt-swatch">
                                                <li><span style={{"backgroundColor": "green"}} ></span></li>
                                                <li><span
                                              style={{"backgroundColor": "green"}}></span></li>
                                                <li><span
                                              style={{"backgroundColor": "green"}}></span></li>
                                                <li><span
                                              style={{"backgroundColor": "green"}}></span></li>
                                                <li><span
                                              style={{"backgroundColor": "green"}}></span></li>
                                                <li><span
                                              style={{"backgroundColor": "green"}}></span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="ec-pro-variation-inner ec-pro-variation-size ec-pro-size">
                                        <span>Size</span>
                                        <div class="ec-pro-variation-content">
                                            <ul class="ec-opt-size">
                                                <li class="active"><a href="#" class="ec-opt-sz"
                                                        data-tooltip="Small">S</a></li>
                                                <li><a href="#" class="ec-opt-sz" data-tooltip="Medium">M</a></li>
                                                <li><a href="#" class="ec-opt-sz" data-tooltip="Large">X</a></li>
                                                <li><a href="#" class="ec-opt-sz" data-tooltip="Extra Large">XL</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="ec-quickview-qty">
                                    <div class="qty-plus-minus">
                                        <input class="qty-input" type="text" name="ec_qtybtn" value="1" />
                                    </div>
                                    <div class="ec-quickview-cart ">
                                        <button class="btn btn-primary"><img src="assets/images/icons/cart.svg"
                                                class="svg_img pro_svg" alt="" /> Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Modal end --> */}

    {/* <!-- Newsletter Modal Start --> */}
    <div id="ec-popnews-bg"></div>
    <div id="ec-popnews-box">
        <div id="ec-popnews-close"><i><AiFillCloseCircle/></i></div>
        <div class="row">
            <div class="col-md-6 disp-no-767">
                <img src="assets/images/banner/newsletter.png" alt="newsletter"/>
            </div>
            <div class="col-md-6">
                <div id="ec-popnews-box-content">
                    <h2>Subscribe Newsletter</h2>
                    <p>Subscribe the ActibeEcommerce ecommerce to get in touch and get the future update. </p>
                    <form id="ec-popnews-form" action="#" method="post">
                        <input type="email" name="newsemail" placeholder="Email Address" required />
                        <button type="button" class="btn btn-primary" name="subscribe">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Newsletter Modal end --> */}

    {/* <!-- Footer navigation panel for responsive display --> */}
    <div class="ec-nav-toolbar">
        <div class="container">
            <div class="ec-nav-panel">
                <div class="ec-nav-panel-icons">
                    <a href="#ec-mobile-menu" class="navbar-toggler-btn ec-header-btn ec-side-toggle"><img
                            src="assets/images/icons/menu.svg" class="svg_img header_svg" alt="icon" /></a>
                </div>
                <div class="ec-nav-panel-icons">
                    <a href="#ec-side-cart" class="toggle-cart ec-header-btn ec-side-toggle"><img
                            src="assets/images/icons/cart.svg" class="svg_img header_svg" alt="icon" /><span
                            class="ec-cart-noti ec-header-count cart-count-lable">3</span></a>
                </div>
                <div class="ec-nav-panel-icons">
                    <a href="/" class="ec-header-btn"><img src="assets/images/icons/home.svg"
                            class="svg_img header_svg" alt="icon" /></a>
                </div>
                <div class="ec-nav-panel-icons">
                    <a href="wishlist.html" class="ec-header-btn"><img src="assets/images/icons/wishlist.svg"
                            class="svg_img header_svg" alt="icon" /><span class="ec-cart-noti">4</span></a>
                </div>
                <div class="ec-nav-panel-icons">
                    <a href="login.html" class="ec-header-btn"><img src="assets/images/icons/user.svg"
                            class="svg_img header_svg" alt="icon" /></a>
                </div>

            </div>
        </div>
    </div>
    {/* <!-- Footer navigation panel for responsive display end --> */}

    {/* <!-- Recent Purchase Popup  --> */}
    <div class="recent-purchase">
        <img src="assets/images/product-image/1.jpg" alt="payment image"/>
        <div class="detail">
            <p>Someone in new just bought</p>
            <h6>stylish baby shoes</h6>
            <p>10 Minutes ago</p>
        </div>
        <a href="javascript:void(0)" class="icon-btn recent-close">×</a>
    </div>
    {/* <!-- Recent Purchase Popup end --> */}
{/*  */}
    {/* <!-- Cart Floating Button --> */}
    <div class="ec-cart-float">
        <a href="#ec-side-cart" class="ec-header-btn ec-side-toggle">
            <div class="header-icon"><img src="assets/images/icons/cart.svg" class="svg_img header_svg" alt="cart" />
            </div>
            <span class="ec-cart-count cart-count-lable">3</span>
        </a>
    </div>
    {/* <!-- Cart Floating Button end --> */}

    {/* <!-- Whatsapp --> */}
    <div class="ec-style ec-right-bottom">
        {/* <!-- Start Floating Panel Container --> */}
        <div class="ec-panel">
            {/* <!-- Panel Header --> */}
            <div class="ec-header">
                <strong>Need Help?</strong>
                <p>Chat with us on WhatsApp</p>
            </div>
            {/* <!-- Panel Content --> */}
            <div class="ec-body">
                <ul>
                    {/* <!-- Start Single Contact List --> */}
                    <li>
                        <a class="ec-list" data-number="918866774266"
                            data-message="Please help me! I have got wrong product - ORDER ID is : #654321485">
                            <div class="d-flex bd-highlight">
                                {/* <!-- Profile Picture --> */}
                                <div class="ec-img-cont">
                                    <img src="assets/images/whatsapp/profile_01.jpg" class="ec-user-img"
                                        alt="Profile image"/>
                                    <span class="ec-status-icon"></span>
                                </div>
                                {/* <!-- Display Name & Last Seen --> */}
                                <div class="ec-user-info">
                                    <span>Sahar Darya</span>
                                    <p>Sahar left 7 mins ago</p>
                                </div>
                                {/* <!-- Chat iCon --> */}
                                <div class="ec-chat-icon">
                                    <i><AiOutlineWhatsApp/></i>
                                </div>
                            </div>
                        </a>
                    </li>
                    {/* <!--/ End Single Contact List --> */}
                    {/* <!-- Start Single Contact List --> */}
                    <li>
                        <a class="ec-list" data-number="918866774266"
                            data-message="Please help me! I have got wrong product - ORDER ID is : #654321485">
                            <div class="d-flex bd-highlight">
                                {/* <!-- Profile Picture --> */}
                                <div class="ec-img-cont">
                                    <img src="assets/images/whatsapp/profile_02.jpg" class="ec-user-img"
                                        alt="Profile image"/>
                                    <span class="ec-status-icon ec-online"></span>
                                </div>
                                {/* <!-- Display Name & Last Seen --> */}
                                <div class="ec-user-info">
                                    <span>Yolduz Rafi</span>
                                    <p>Yolduz is online</p>
                                </div>
                                {/* <!-- Chat iCon --> */}
                                <div class="ec-chat-icon">
                                    <i><AiOutlineWhatsApp/></i>
                                </div>
                            </div>
                        </a>
                    </li>
                    {/* <!--/ End Single Contact List --> */}
                    {/* <!-- Start Single Contact List --> */}
                    <li>
                        <a class="ec-list" data-number="918866774266"
                            data-message="Please help me! I have got wrong product - ORDER ID is : #654321485">
                            <div class="d-flex bd-highlight">
                                {/* <!-- Profile Picture --> */}
                                <div class="ec-img-cont">
                                    <img src="assets/images/whatsapp/profile_03.jpg" class="ec-user-img"
                                        alt="Profile image"/>
                                    <span class="ec-status-icon ec-offline"></span>
                                </div>
                                {/* <!-- Display Name & Last Seen --> */}
                                <div class="ec-user-info">
                                    <span>Nargis Hawa</span>
                                    <p>Nargis left 30 mins ago</p>
                                </div>
                                {/* <!-- Chat iCon --> */}
                                <div class="ec-chat-icon">
                                    <i><AiOutlineWhatsApp/></i>
                                </div>
                            </div>
                        </a>
                    </li>
                    {/* <!--/ End Single Contact List --> */}
                    {/* <!-- Start Single Contact List --> */}
                    <li>
                        <a class="ec-list" data-number="918866774266"
                            data-message="Please help me! I have got wrong product - ORDER ID is : #654321485">
                            <div class="d-flex bd-highlight">
                                {/* <!-- Profile Picture --> */}
                                <div class="ec-img-cont">
                                    <img src="assets/images/whatsapp/profile_04.jpg" class="ec-user-img"
                                        alt="Profile image"/>
                                    <span class="ec-status-icon ec-offline"></span>
                                </div>
                                {/* <!-- Display Name & Last Seen --> */}
                                <div class="ec-user-info">
                                    <span>Khadija Mehr</span>
                                    <p>Khadija left 50 mins ago</p>
                                </div>
                                {/* <!-- Chat iCon --> */}
                                <div class="ec-chat-icon">
                                    <i><AiOutlineWhatsApp/></i>
                                </div>
                            </div>
                        </a>
                    </li>
                    {/* <!--/ End Single Contact List --> */}
                </ul>
            </div>
        </div>
        {/* <!--/ End Floating Panel Container --> */}
        {/* <!-- Start Right Floating Button--> */}
        <div class="ec-right-bottom">
            <div class="ec-box">
                <div class="ec-button rotateBackward">
                    <img class="whatsapp" src="assets/images/common/whatsapp.png" alt="whatsapp icon"/>
                </div>
            </div>
        </div>
        {/* <!--/ End Right Floating Button--> */}
    </div>
    {/* <!-- Whatsapp end --> */}

    {/* <!-- Feature tools --> */}
    
    </div>
  );
};

export default BottomNavbar;
