import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 mb-8">
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
                <a href="/about" className="hover:text-gray-200">
                  About
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-gray-200">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-200">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-gray-200">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/medical" className="hover:text-gray-200">
                  Medical
                </a>
              </li>
              <li>
                <a href="/education" className="hover:text-gray-200">
                  Education
                </a>
              </li>
              <li>
                <a href="/startup" className="hover:text-gray-200">
                  Startups
                </a>
              </li>
              <li>
                <a href="/environment" className="hover:text-gray-200">
                  Environment
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for updates and stories.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="input input-bordered w-full rounded-l-lg"
              />
              <button className="btn bg-white text-blue-600 rounded-r-lg hover:bg-gray-200">
                Subscribe
              </button>
            </div>
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
