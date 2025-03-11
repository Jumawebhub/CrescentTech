import React from 'react';
import { motion } from 'framer-motion';
import { 
  Palette, 
  Printer, 
  Code, 
  Network, 
  Shield, 
  Cpu,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Graphic Design & Branding",
      description: "Professional design solutions for your brand",
      features: [
        "Logo Design & Corporate Identity",
        "Brochure, Flyer & Poster Design",
        "Business Cards & Stationery Design",
        "Product Packaging & Label Design",
        "Social Media Graphics"
      ]
    },
    {
      icon: <Printer className="w-12 h-12" />,
      title: "Printing Services",
      description: "High-quality printing solutions",
      features: [
        "Large Format Printing",
        "Offset & Digital Printing",
        "Corporate Merchandise Printing",
        "Business Cards & Brochures",
        "Customized Promotional Materials"
      ]
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Web Development",
      description: "Custom web solutions for your business",
      features: [
        "Business & Portfolio Websites",
        "E-Commerce Websites",
        "Website Redesign & Maintenance",
        "Domain Registration & Hosting",
        "SEO Optimization & Digital Marketing"
      ]
    },
    {
      icon: <Network className="w-12 h-12" />,
      title: "Networking & ICT Solutions",
      description: "Comprehensive networking services",
      features: [
        "Office & Home Network Installation",
        "Server Configuration & Maintenance",
        "Wireless & Fiber Networking",
        "Data Backup Solutions",
        "Cybersecurity Implementation"
      ]
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "CCTV Installation & Security",
      description: "Advanced security solutions",
      features: [
        "CCTV System Installation",
        "Smart Surveillance Systems",
        "Remote Monitoring Setup",
        "Security Consultation",
        "Maintenance Services"
      ]
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      title: "General ICT Consultation",
      description: "Expert IT consulting services",
      features: [
        "IT Support & Administration",
        "Cloud Computing Solutions",
        "Software Implementation",
        "IT Strategy Planning",
        "Business Process Optimization"
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60">
          <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white"
            >
              <h1 className="text-5xl font-bold mb-4">Our Services</h1>
              <p className="text-xl max-w-2xl">Comprehensive technology solutions tailored to your business needs</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="text-[#2c2cff] mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-[#2c2cff] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#2c2cff]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8">Contact us today to discuss your technology needs</p>
            <a 
              href="/contact" 
              className="inline-block bg-white text-[#2c2cff] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;