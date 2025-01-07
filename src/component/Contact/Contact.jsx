import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { toast } from "react-toastify";

const Contact = () => {
  const formRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_email_service_id,
        import.meta.env.VITE_email_Tamplates_id2,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_email_public_key,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Your Subscription Is Complete");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-6">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Details */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-semibold">Get in Touch</h3>
            <p className="text-gray-600">
              Feel free to reach out to us for any inquiries, feedback, or
              assistance.
            </p>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-[#57A9AE] text-2xl" />
              <p className="text-gray-700">
                123 Main Street, Dhaka, Bangladesh
              </p>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-[#57A9AE]  text-2xl" />
              <p className="text-gray-700">+880 123 456 7890</p>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-[#57A9AE]  text-2xl" />
              <p className="text-gray-700">info@example.com</p>
            </div>
            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="text-white bg-[#57A9AE]  p-3 rounded-full hover:bg-blue-700"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-white bg-[#57A9AE] p-3 rounded-full hover:bg-blue-700"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-white bg-[#57A9AE] p-3 rounded-full hover:bg-blue-700"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Enter your name"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  type="email"
                  name="to_name"
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Your Message</span>
                </label>
                <textarea
                  name="message"
                  placeholder="Enter your message"
                  className="textarea textarea-bordered w-full"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn bg-[#57A9AE] text-white w-full hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
