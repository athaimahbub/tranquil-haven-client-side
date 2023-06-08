import logo from '../../assets/tranquileHaven.jpg'
const Footer = () => {
    return (
        <div>

            <footer className="footer p-10 bg-cyan-50 text-base-content">
                <div>
                    <img src={logo} alt="" />
                    <p className="text-cyan-700 font-semibold">Tranquil Haven Yoga and Meditation Academy.<br />Teaching Yoga and Meditation since 1992</p>
                </div>
                <div>
                    <span className="text-2xl text-cyan-700 font-bold">Work Hours</span>
                    <span className="text-cyan-700 leading-3">--------------------------
                    </span>
                    <p className="text-cyan-600 font-semibold">Monday - Thursday</p>
                    <p className="text-cyan-600 font-bold">9:00 AM - 5:00 PM</p>
                    <span className="text-cyan-700 leading-3">--------------------------</span>

                    <p className="text-cyan-600 font-semibold">Friday & Saturday</p>
                    <p className="text-cyan-600 font-bold">9:00 AM - 9:00 PM</p>
                    <span className="text-cyan-700 leading-3">--------------------------</span>

                    <p className="text-cyan-600 font-semibold">Sunday</p>
                    <p className="text-cyan-600 font-bold">Will be Holiday</p>
                    <span className="text-cyan-700 leading-3">--------------------------</span>

                </div>

                <div>
                    <span className="text-2xl text-cyan-700 font-bold">Contact Us</span>
                    <span className="text-cyan-700 leading-4">--------------------------------------------------------------</span>

                    <div className="grid grid-flow-col gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 384 512" className='fill-cyan-500'><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>

                        <p className="text-cyan-600 font-semibold">625 @ David Blake Road,
                            Mirpur, Bangladesh</p>
                    </div>

                    <span className="text-cyan-700 leading-4">--------------------------------------------------------------</span>

                    <div className="grid grid-flow-col gap-4">
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-blue-500"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>

                        <p className="text-cyan-600 font-semibold">Tranquil Haven Yoga and Meditation Academy</p>

                    </div>

                    <span className="text-cyan-700 leading-4">--------------------------------------------------------------</span>

                    <div className="grid grid-flow-col gap-4">
                        <a><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 512 512" className='fill-cyan-500'><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg></a>

                        <p className="text-cyan-600 font-semibold">tranquilHaven@gmail.com</p>
                    </div>

                    <span className="text-cyan-700 leading-4">--------------------------------------------------------------</span>

                    <div className="grid grid-flow-col gap-4">
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-blue-700"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>

                        <p className="text-cyan-600 font-semibold">Tranquil Haven Yoga and Meditation Academy</p>
                    </div>

                    <span className="text-cyan-700 leading-4">--------------------------------------------------------------</span>
                </div>

            </footer>
            <footer className="footer footer-center p-4 bg-cyan-100 text-base-content">
                <div>
                    <p className="font-bold text-cyan-700">Copyright © 2023 - All right reserved by Tranquil Haven Yoga and Meditation Academy</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;