import React from "react";
import {Link} from "react-router-dom";


function BottomButtons(){
    return(
        <div className="bottomButtonsMain">
            <a className="bottomButton1" href="tel:555555555">
                <div>
                    <svg width="50" height="30" viewBox="0 0 50 30" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path d="M21.886 7.46c-.265-.483-.827-.599-1.271-.247l-1.74 1.38c-2.164 1.718-2.44 4.79-.618 6.86l5.96 6.772c1.822 2.07 5.011 2.316 7.13.542l1.313-1.1c.428-.357.444-.946.028-1.322l-2.904-2.63c-.412-.373-1.105-.404-1.54-.076l-1.714 1.296-4.843-5.353 1.743-1.259c.446-.321.595-.97.327-1.457l-1.87-3.406z" fillRule="evenodd"></path>
                        </g>
                    </svg>
                </div>
            </a>
            <Link className="bottomButton2" to="/ContactUs">
                <div className="bottomButton2">
                    <svg width="50" height="30" viewBox="0 0 50 30" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path d="M25.16 6C20.98 6.008 18 9.407 18 13.066c0 6.175 6.38 10.686 6.38 10.686.431.338 1.13.334 1.552-.023 0 0 6.068-4.488 6.068-10.663C32 9.407 29.328 6.009 25.16 6zM25 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" fillRule="evenodd"></path>
                        </g>
                    </svg>
                </div>
            </Link>
        </div>

    )
}

export default BottomButtons