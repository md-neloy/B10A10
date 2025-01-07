import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const [emailText, setEmailText] = useState();
  const formRef = useRef(null);
  const handleChange = (e) => {
    setEmailText(e.target.value);
  };
  const sendMail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_email_service_id,
        import.meta.env.VITE_email_Tamplates_id,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_email_public_key,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };
  return (
    <footer className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              We empower individuals to raise funds for causes they care about,
              making dreams and impactful ideas a reality.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-gray-200">
                  Home
                </a>
              </li>
              <li>
                <a href="/Allcampaign" className="hover:text-gray-200">
                  All Campaign
                </a>
              </li>
              <li>
                <a href="/#runnigCampaign" className="hover:text-gray-200">
                  Running Campaign
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-200">
                  Contact
                </a>
              </li>
              {/* <li>
                <a href="/privacy" className="hover:text-gray-200">
                  Privacy Policy
                </a>
              </li> */}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for updates and stories.
            </p>
            <form ref={formRef} className="flex flex-col lg:flex-row">
              <input
                type="email"
                name="to_email"
                value={emailText}
                onChange={handleChange}
                placeholder="Your email"
                className="input input-bordered w-full rounded-l-lg text-black"
              />
              <button
                onClick={sendMail}
                className="btn bg-white text-blue-600 rounded-r-lg hover:bg-gray-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm">
          <p>
            &copy; {new Date().getFullYear()} Crowdfund Platform. All rights
            reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-white hover:text-gray-200 text-lg">
              <FaFacebookF />
            </a>
            <a href="#" className="text-white hover:text-gray-200 text-lg">
              <FaTwitter />
            </a>
            <a href="#" className="text-white hover:text-gray-200 text-lg">
              <FaInstagram />
            </a>
            <a href="#" className="text-white hover:text-gray-200 text-lg">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
