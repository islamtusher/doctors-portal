import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className=" py-20 text-accent bg-center bg-cover bg-[url('/public/assets/images/footer.png')]">
            <div className="footer justify-items-center  ">
                <div>
                    <span className="footer-title">Services</span> 
                    <Link className="link link-hover" to="/">Branding</Link>
                    <Link className="link link-hover" to="/">Branding</Link>
                    <Link className="link link-hover" to="/">Branding</Link>
                    <Link className="link link-hover" to="/">Branding</Link>
                </div> 
                <div className=''>
                    <span className="footer-title">ORAL HEALTH</span> 
                    <Link className="link link-hover" to="/">Branding</Link>
                    <Link className="link link-hover" to="/">Branding</Link>
                    <Link className="link link-hover" to="/">Branding</Link>
                </div> 
                <div>
                    <span className="footer-title">OUR ADDRESS</span> 
                    <Link className="link link-hover" to="/">Branding</Link>
                </div>
            </div>
            <div className='pt-16 pb-6 text-center'>
                <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;