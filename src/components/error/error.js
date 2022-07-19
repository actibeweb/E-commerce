

import React from "react";

const Error = () => {
  return (
    <>
	<section class="ec-under-maintenance">

    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="under-maintenance">
                    <h1>Error 404</h1>
                    <h4>The page was not found.</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry's standard dummy.</p>
                    <a href="/" class="btn btn-lg btn-primary" tabindex="0">Back to Home</a>
                </div>
            </div>
            <div class="col-md-6 disp-768">
                <div class="under-maintenance">
                    <img class="maintenance-img" src="assets/images/common/404.png" alt="maintenance"/>
                </div>
            </div>
        </div>
    </div>
</section>

</>
);}
export default Error