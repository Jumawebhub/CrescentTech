import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Monitor, Cpu, Shield, Code, Palette, Printer, MessageCircle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';

const Home = () => {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      title: "Innovative Technology Solutions",
      description: "Empowering businesses with cutting-edge technology"
    },
    {
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      title: "Expert IT Services",
      description: "Professional services tailored to your needs"
    },
    {
      image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0",
      title: "Digital Transformation",
      description: "Leading the way in digital innovation"
    }
  ];

  const services = [
    {
      icon: <Palette />,
      title: "Graphic Design & Branding",
      description: "Professional branding and design solutions",
      price: "",
      features: [
        "Logo Design & Corporate Identity",
        "Brochure, Flyer & Poster Design",
        "Business Cards & Stationery Design",
        "Product Packaging & Label Design",
        "Social Media Graphics"
      ]
    },
    {
      icon: <Printer />,
      title: "Printing Services",
      description: "High-quality printing for all your needs",
      price: "",
      features: [
        "Large Format Printing (Banners, Billboards, Stickers)",
        "Offset & Digital Printing",
        "T-Shirts, Mugs & Corporate Merchandise Printing",
        "Business Cards, Brochures, and Flyers",
        "Customized Promotional Materials"
      ]
    },
    {
      icon: <Code />,
      title: "Web Development",
      description: "Custom websites and web applications",
      price: "",
      features: [
        "Business & Portfolio Websites",
        "E-Commerce Websites",
        "Website Redesign & Maintenance",
        "Domain Registration & Hosting",
        "SEO Optimization & Digital Marketing"
      ]
    },
    {
      icon: <Monitor />,
      title: "Networking & ICT Solutions",
      description: "Comprehensive IT infrastructure services",
      price: "",
      features: [
        "Office & Home Network Installation",
        "Server Configuration & Maintenance",
        "Wireless & Fiber Networking Solutions",
        "Data Backup & Cybersecurity Solutions",
        "Network Monitoring & Support"
      ]
    },
    {
      icon: <Shield />,
      title: "CCTV Installation & Security",
      description: "Advanced security systems and solutions",
      price: " ",
      features: [
        "CCTV System Installation & Configuration",
        "Smart Surveillance & Remote Monitoring",
        "Security Consultation & Maintenance",
        "Access Control Systems",
        "24/7 Security Monitoring"
      ]
    },
    {
      icon: <Cpu />,
      title: "General ICT Consultation",
      description: "Expert technology consulting services",
      price: "",
      features: [
        "IT Support & System Administration",
        "Cloud Computing & Software Solutions",
        "IT Strategy & Business Transformation",
        "Technology Assessment & Planning",
        "Digital Transformation Consulting"
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="h-[600px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div 
              className="relative h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold mb-4"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl md:text-2xl mb-8"
                  >
                    {slide.description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex justify-center space-x-4"
                  >
                    <Link
                      to="/contact"
                      className="bg-[#2c2cff] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#4444ff] transition-colors"
                    >
                      Get Started
                    </Link>
                    <a
                      href="https://wa.me/+254114411122"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#25D366] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#128C7E] transition-colors flex items-center space-x-2"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>WhatsApp</span>
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600">Comprehensive solutions for your business needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="text-[#2c2cff] mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="mb-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-[#2c2cff] flex-shrink-0 mt-1" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-[#2c2cff] font-semibold mb-4">{service.price}</p>
                <Link
                  to="/contact"
                  state={{ service: service.title }}
                  className="inline-block bg-[#2c2cff] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#4444ff] transition-colors w-full text-center"
                >
                  Book Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900">Who We Are</h2>
              <p className="text-lg text-gray-600">
                We are a leading technology solutions provider with years of experience in delivering innovative and reliable services to businesses worldwide. Our team of experts is dedicated to helping you achieve your digital transformation goals.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <span className="text-[#2c2cff]">✓</span>
                  <span>Expert Team of Professionals</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-[#2c2cff]">✓</span>
                  <span>Cutting-edge Technology Solutions</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-[#2c2cff]">✓</span>
                  <span>Customer-Centric Approach</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                alt="Team working together"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;