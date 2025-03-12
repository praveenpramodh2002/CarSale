import { useState, useEffect } from 'react';
import { FaPhoneAlt, FaCar, FaCarSide, FaDollarSign, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHandshake, FaTools, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
// Import images
import backgroundImage1 from './images/newcar.jpeg';
import backgroundImage2 from './images/new99.jpeg';
import backgroundImage3 from './images/c2.jpg';

import carImage1 from './images/M5 cs.jpeg';
import carImage2 from './images/Mercedes G63 Poster, G-class Poster, Mercedes Benz - Copy.jpeg';
import carImage3 from './images/Porsche 911 GT3 rs car poster.jpeg';
import carImage4 from './images/download (48).jpeg';
import carImage5 from './images/download (49).jpeg';
import carImage6 from './images/download (47).jpeg';
import carShowroom from "./images/CARZONE.png";

import backgroundVideo from './video/video.mp4';

// Array of imported images
const images = [backgroundImage1, backgroundImage2, backgroundImage3];

// Car data
const cars = [
  {
    id: 1,
    name: "BMW M5 Competition 2024",
    description: "Luxury performance sedan with 617hp V8 engine.",
    price: "$124,500",
    image: carImage1,
    details: {
      engine: "4.4L V8 Twin-Turbo",
      horsepower: "617 HP",
      topSpeed: "190 mph",
      features: ["Adaptive Suspension", "Carbon Fiber Roof", "M Sport Exhaust"],
    },
  },
  {
    id: 2,
    name: "BRABUS 900 Rocket 2023",
    description: "High-performance luxury with 900hp twin-turbo V12.",
    price: "$380,000",
    image: carImage2,
    details: {
      engine: "6.0L V12 Twin-Turbo",
      horsepower: "900 HP",
      topSpeed: "217 mph",
      features: ["Custom Interior", "Carbon Fiber Body Kit", "Rocket Exhaust System"],
    },
  },
  {
    id: 3,
    name: "PORSCHE 911 Turbo S 2024",
    description: "Iconic sports car with 640hp flat-six engine.",
    price: "$217,000",
    image: carImage3,
    details: {
      engine: "3.8L Flat-6 Twin-Turbo",
      horsepower: "640 HP",
      topSpeed: "205 mph",
      features: ["Active Aero", "Sport Chrono Package", "Carbon Ceramic Brakes"],
    },
  },
  {
    id: 4,
    name: "Mercedes-Benz S580 Maybach",
    description: "Ultra-luxury sedan with refined comfort.",
    price: "$215,000",
    image: carImage4,
    details: {
      engine: "4.0L V8 Twin-Turbo",
      horsepower: "496 HP",
      topSpeed: "155 mph",
      features: ["Maybach Interior", "Air Suspension", "Rear Executive Seats"],
    },
  },
  {
    id: 5,
    name: "Porsche Cayenne Turbo GT",
    description: "Performance SUV with track-ready capabilities.",
    price: "$197,000",
    image: carImage5,
    details: {
      engine: "4.0L V8 Twin-Turbo",
      horsepower: "631 HP",
      topSpeed: "186 mph",
      features: ["Adaptive Air Suspension", "Carbon Fiber Package", "Sport Exhaust"],
    },
  },
  {
    id: 6,
    name: "Audi RS7 Sportback",
    description: "Powerful four-door coupe with 591hp twin-turbo V8.",
    price: "$128,000",
    image: carImage6,
    details: {
      engine: "4.0L V8 Twin-Turbo",
      horsepower: "591 HP",
      topSpeed: "190 mph",
      features: ["Quattro AWD", "Dynamic Ride Control", "RS Sport Exhaust"],
    },
  },
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const openModal = (car) => {
    setSelectedCar(car);
  };

  const closeModal = () => {
    setSelectedCar(null);
  };

  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white text-black py-4 px-6 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <FaCar className="text-orange-500 text-3xl" />
            <h1 className="text-2xl font-bold text-orange-500">CarZone</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#home" className="hover:text-orange-500 font-medium">Home</a>
            <a href="#about" className="hover:text-orange-500 font-medium">About</a>
            <a href="#services" className="hover:text-orange-500 font-medium">Services</a>
            <a href="#contact" className="hover:text-orange-500 font-medium">Contact</a>
          </div>

          {/* Search Bar */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search for cars..."
              className="py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <FaSearch className="absolute right-3 top-3 text-gray-500" />
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white text-center py-4 space-y-4 shadow-lg">
            <a href="#home" className="block hover:text-orange-500 font-medium">Home</a>
            <a href="#about" className="block hover:text-orange-500 font-medium">About</a>
            <a href="#services" className="block hover:text-orange-500 font-medium">Services</a>
            <a href="#contact" className="block hover:text-orange-500 font-medium">Contact</a>

            {/* Mobile Search Bar */}
            <div className="relative px-4">
              <input
                type="text"
                placeholder="Search for cars..."
                className="w-full py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <FaSearch className="absolute right-6 top-3 text-gray-500" />
            </div>
          </div>
        )}
      </nav>

      {/* Header with Background Slider */}
      <header
        id="home"
        className="relative text-white text-center py-20"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "500px",
          transition: "background-image 1s ease-in-out",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="max-w-2xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">Find Your Dream Car</h1>
            <p className="text-xl mb-8">Explore our premium collection of new and used cars.</p>
            <a
              href="#car-collection"
              className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition"
            >
              Browse Cars
            </a>
          </div>
        </div>
      </header>
    
    
    {/* Left Side - Advanced Logo */}
    <section className="bg-gray-100 py-16 px-6">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
    
    {/* Left Side - Sprinting Logo */}
    <div className="md:w-1/3 flex justify-center">
      <div className="relative group">
        <img
          src={carShowroom} // Replace with your logo variable
          alt="Company Logo"
          className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-orange-500 transition-transform duration-300 group-hover:animate-spin-fast" 
        />

        {/* Glowing Effect */}
        <div className="absolute inset-0 w-full h-full rounded-full border-4 border-orange-400 opacity-50 animate-pulse"></div>
      </div>
    </div>

    {/* Right Side - Content */}
    <div className="md:w-2/3 text-center md:text-left">
      <h2 className="text-3xl font-bold text-orange-500 mb-4">
        Welcome to CarZone 🚗
      </h2>
      <p className="text-gray-700 mb-4 leading-relaxed">
        CarZone is your trusted partner in finding the perfect car for your needs. 
        With a vast selection of high-quality new and used vehicles, we ensure a 
        seamless car buying experience. Our expert team is dedicated to helping 
        you make the best choice.
      </p>
      <p className="text-gray-700 mb-4 leading-relaxed">
        Established in 2010, we have served thousands of satisfied customers, 
        providing exceptional service, financing options, and top-tier vehicle 
        maintenance support.
      </p>
      <button className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition">
        Learn More
      </button>
    </div>
  </div>

  {/* Custom CSS for Sprint Spin on Hover */}
  <style>
    {`
      @keyframes spin-fast {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      .group-hover\\:animate-spin-fast {
        animation: spin-fast 0.10s linear;
      }
    `}
  </style>
</section>




      {/* About Section */}
      <section id="about" className="text-black py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Welcome to <strong>CarZone</strong> – your trusted destination for premium car sales. 
            We provide a wide selection of new and used cars, ensuring quality and customer satisfaction.
          </p>
        </div>

        {/* Icons Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
          <div className="p-6 bg-white text-gray-900 rounded-lg shadow-lg">
            <FaCar className="text-orange-500 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-bold">Wide Car Selection</h3>
            <p className="text-gray-700">From luxury to budget-friendly cars, we have the perfect ride for you.</p>
          </div>

          <div className="p-6 bg-white text-gray-900 rounded-lg shadow-lg">
            <FaHandshake className="text-orange-500 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-bold">Trust & Transparency</h3>
            <p className="text-gray-700">Honest pricing, no hidden fees, and full transparency in every deal.</p>
          </div>

          <div className="p-6 bg-white text-gray-900 rounded-lg shadow-lg">
            <FaTools className="text-orange-500 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-bold">Quality Assurance</h3>
            <p className="text-gray-700">All vehicles undergo rigorous inspection to meet the highest standards.</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <a href="#contact" className="bg-white text-orange-500 font-bold py-3 px-6 rounded-lg shadow-lg text-lg hover:bg-gray-200 transition duration-300">
            Contact Us
          </a>
        </div>
      </section>

      {/* Car Collection Section */}
      <section id="car-collection" className="py-16 px-8 bg-gray-100 text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-8">Explore Our Car Collection</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 cursor-pointer"
              onClick={() => openModal(car)}
            >
              <img src={car.image} alt={car.name} className="w-full h-48 object-cover rounded-lg" />
              <h4 className="text-xl font-semibold mt-4">{car.name}</h4>
              <p className="text-gray-600 mt-2">{car.description}</p>
              <p className="text-orange-500 font-bold mt-2">{car.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modal for Car Details */}
      {selectedCar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img
              src={selectedCar.image}
              alt={selectedCar.name}
              className="w-full h-64 object-cover rounded-lg"
            />
            <h2 className="text-2xl font-bold mt-4">{selectedCar.name}</h2>
            <p className="text-gray-600 mt-2">{selectedCar.description}</p>
            <div className="mt-4">
              <h3 className="text-xl font-semibold">Details</h3>
              <ul className="mt-2 space-y-2">
                <li><strong>Engine:</strong> {selectedCar.details.engine}</li>
                <li><strong>Horsepower:</strong> {selectedCar.details.horsepower}</li>
                <li><strong>Top Speed:</strong> {selectedCar.details.topSpeed}</li>
                <li>
                  <strong>Features:</strong> {selectedCar.details.features.join(", ")}
                </li>
              </ul>
            </div>
            <p className="text-orange-500 font-bold mt-4">{selectedCar.price}</p>
          </div>
        </div>
      )}

      {/* Call-to-Action Section */}
      <section className="relative w-full h-[350px] flex items-center justify-center text-white text-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-blue-900 bg-opacity-50"></div>
        <div className="relative z-10 px-6">
          <h2 className="text-4xl font-bold mb-4">Ready to Drive Your Dream Car?</h2>
          <p className="text-xl mb-8">Contact us today to schedule a test drive.</p>
          <a
            href="#contact"
            className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-100 py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
          <p className="text-gray-600 mb-8">We'd love to hear from you! Reach out to us through any of the following methods.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <FaEnvelope className="text-blue-500 text-4xl mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Email Us</h3>
              <p className="text-gray-600 mt-2">info@yourcompany.com</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <FaPhone className="text-green-500 text-4xl mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Call Us</h3>
              <p className="text-gray-600 mt-2">+1 (123) 456-7890</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <FaMapMarkerAlt className="text-red-500 text-4xl mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Visit Us</h3>
              <p className="text-gray-600 mt-2">123 Main Street, City, Country</p>
            </div>
          </div>
          <div className="mt-12 bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg" />
              <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg" />
              <textarea placeholder="Your Message" rows="4" className="w-full p-3 border rounded-lg"></textarea>
              <button type="submit" className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: About Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
              CarZone is your trusted partner in finding the perfect car. We offer a wide selection of new and used vehicles, ensuring quality and customer satisfaction.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-orange-500 transition">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-orange-500 transition">About</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-orange-500 transition">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-orange-500 transition">Contact</a></li>
              <li><a href="#car-collection" className="text-gray-400 hover:text-orange-500 transition">Car Collection</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-orange-500" />
                <span>123 Main Street, City, Country</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone className="text-orange-500" />
                <span>+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-orange-500" />
                <span>info@carzone.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to get the latest updates and offers.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 border-t border-gray-800 pt-8 flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-orange-500 transition">
            <FaFacebook className="text-2xl" />
          </a>
          <a href="#" className="text-gray-400 hover:text-orange-500 transition">
            <FaTwitter className="text-2xl" />
          </a>
          <a href="#" className="text-gray-400 hover:text-orange-500 transition">
            <FaInstagram className="text-2xl" />
          </a>
          <a href="#" className="text-gray-400 hover:text-orange-500 transition">
            <FaLinkedin className="text-2xl" />
          </a>
        </div>

        {/* Legal Information */}
        <div className="mt-8 text-center text-gray-400">
          <p>
            © 2024 CarZone. All rights reserved. |{" "}
            <a href="#" className="hover:text-orange-500 transition">Privacy Policy</a> |{" "}
            <a href="#" className="hover:text-orange-500 transition">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
    </div>
  );
}