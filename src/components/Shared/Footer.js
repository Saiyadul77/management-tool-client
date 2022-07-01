import React from 'react';
import logo from '../../images/task.png';

const Footer = () => {
    return (
        <div className=''>
            <div className=''>
                <footer class="footer bg-primary text-white p-10 ">
                    <div class="items-center grid-flow-col">
                        <img src={logo} alt="" />
                        <div>
                        <h2 className='text-2xl mb-5'>Task Management Tool Web App</h2>
                        <h4 className='text-lg'> Makes life easy, smooth and comfortable. </h4>
                        </div>
                    </div>
                    <div>
                        <span class="footer-title">Help</span>
                        <a class="link link-hover">About Us</a>
                        <a class="link link-hover">Privacy Policy</a>
                        <a class="link link-hover">Terms and Conditions</a>
                    </div>
                    <div>
                        <span class="footer-title">Explore</span>
                        <a class="link link-hover">Completed Task</a>
                        <a class="link link-hover">To-Do</a>
                        <a class="link link-hover">Calendar</a>
                    </div>
                    <div>
                        <span class="footer-title">Get In Touch</span>
                        <p>Address: 490, Satter Market, South Khailqur, <br /> Board-Bazar, Gazipur.</p>
                        <p>Hotline: 01911-870358</p>
                        <p>Email: saiyadul77@gmail.com </p>
                    </div>
                </footer>
                <footer class="footer px-10 py-4 border-t bg-primary text-white border-base-300 ">
                    <div class="md:place-self-center text-center">
                        <p>Copyright © 2022 Task Management Tool Web App.</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;