import { motion } from 'framer-motion';
import { Target, BookOpen } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "Briston Baraza",
      role: "CEO & Founder",
      image: "/team b.jpeg",
    },
    {
      name: "Samson Juma",
      role: "Technical Director",
      image: "/team j.jpeg",
    }
  ];

  const blogs = [
    {
      title: "The Future of AI in Business",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      excerpt: "Exploring how artificial intelligence is transforming modern business operations."
    },
    {
      title: "Cybersecurity Best Practices",
      date: "March 10, 2024",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
      excerpt: "Essential security measures every business should implement."
    },
    {
      title: "Digital Transformation Guide",
      date: "March 5, 2024",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      excerpt: "A comprehensive guide to digital transformation for businesses."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60">
          <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white"
            >
              <h1 className="text-5xl font-bold mb-4">About Us</h1>
              <p className="text-xl max-w-2xl">Leading the way in technological innovation and digital transformation since 2010.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              CrescentTech has grown from a small IT consultancy to a comprehensive technology solutions provider. 
              Our journey has been marked by continuous innovation, unwavering commitment to quality, and a deep understanding 
              of our clients' needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <Target className="text-[#2c2cff] w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses through innovative technology solutions, enabling their digital transformation 
                journey while maintaining the highest standards of quality and customer satisfaction.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <BookOpen className="text-[#2c2cff] w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading technology solutions provider, recognized globally for our innovation, 
                expertise, and commitment to delivering exceptional value to our clients.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Tech Team</h2>
            <p className="text-lg text-gray-600">Meet the experts behind our success</p>
          </motion.div>

          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden w-80"
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Blog</h2>
            <p className="text-lg text-gray-600">Latest insights and updates from our team</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
                  <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                  <p className="text-gray-600">{blog.excerpt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
