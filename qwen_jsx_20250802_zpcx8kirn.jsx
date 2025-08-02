import React, { useState, useEffect } from 'react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Downtown",
      text: "Miller's Tree Service removed a massive oak tree from our property after a storm. Their team was professional, efficient, and cleaned up completely. Highly recommend!",
      rating: 5
    },
    {
      name: "Michael Thompson",
      location: "West Hills",
      text: "We've used Miller's for pruning and tree health assessments for years. Their arborists are knowledgeable and always prioritize safety. Excellent service every time.",
      rating: 5
    },
    {
      name: "Jennifer Reed",
      location: "North Ridge",
      text: "After a severe storm damaged several trees on our property, Miller's responded immediately. Their emergency service saved our home from further damage. Truly lifesavers.",
      rating: 5
    }
  ];

  const services = [
    {
      title: "Tree Removal",
      description: "Safe and efficient removal of hazardous, damaged, or unwanted trees using industry-best practices and proper equipment.",
      icon: "🌳",
      image: "https://placehold.co/400x300/228B22/FFFFFF?text=Tree+Removal"
    },
    {
      title: "Trimming & Pruning",
      description: "Expert crown thinning, shaping, and structural pruning to enhance tree health, appearance, and safety.",
      icon: "✂️",
      image: "https://placehold.co/400x300/8B4513/FFFFFF?text=Pruning"
    },
    {
      title: "Stump Grinding",
      description: "Complete removal of unsightly stumps using professional equipment, allowing for replanting or landscaping.",
      icon: "🪚",
      image: "https://placehold.co/400x300/654321/FFFFFF?text=Stump+Grinding"
    },
    {
      title: "Land Clearing",
      description: "Professional site preparation for construction or development, including vegetation management and debris removal.",
      icon: "🚜",
      image: "https://placehold.co/400x300/556B2F/FFFFFF?text=Land+Clearing"
    },
    {
      title: "Storm Damage Response",
      description: "24/7 emergency service for storm-damaged trees, ensuring property safety and minimizing further damage.",
      icon: "⚡",
      image: "https://placehold.co/400x300/4682B4/FFFFFF?text=Storm+Response"
    },
    {
      title: "Tree Health Assessment",
      description: "Comprehensive evaluation of tree condition, including disease diagnosis, structural integrity, and treatment recommendations.",
      icon: "🏥",
      image: "https://placehold.co/400x300/2E8B57/FFFFFF?text=Tree+Health"
    }
  ];

  const teamMembers = [
    {
      name: "Robert Miller",
      role: "Founder & Certified Arborist",
      experience: "25+ years",
      certifications: "ISA Certified Arborist, OSHA Safety Certified",
      bio: "Robert established Miller's Tree Service in 1998 with a commitment to excellence in arboriculture. His expertise in tree biology and safety protocols ensures every job meets the highest industry standards."
    },
    {
      name: "David Chen",
      role: "Operations Manager",
      experience: "15 years",
      certifications: "Commercial Equipment Specialist, First Aid/CPR Certified",
      bio: "David oversees daily operations and crew management. His focus on efficiency and safety has helped streamline our processes while maintaining exceptional service quality."
    },
    {
      name: "Lisa Martinez",
      role: "Customer Relations Director",
      experience: "12 years",
      certifications: "Customer Service Excellence, Conflict Resolution",
      bio: "Lisa ensures every client receives personalized attention and support. Her dedication to customer satisfaction has earned us countless repeat clients and referrals."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const Navigation = () => (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-green-800">Miller's Tree Service</div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['home', 'about', 'services', 'testimonials', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 capitalize ${
                    activeSection === item
                      ? 'text-green-700 border-b-2 border-green-700'
                      : 'text-gray-700 hover:text-green-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {['home', 'about', 'services', 'testimonials', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 w-full text-left capitalize"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );

  const Hero = () => (
    <section id="home" className="bg-gradient-to-r from-green-900 via-green-800 to-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Professional Tree Care You Can Trust
            </h1>
            <p className="text-xl mb-8 text-green-100">
              Locally owned and operated tree service with 25+ years of experience serving homeowners, businesses, and municipalities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
              >
                Get a Free Quote
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition-colors duration-200"
              >
                Our Services
              </button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
              <img
                src="https://placehold.co/600x400/228B22/FFFFFF?text=Professional+Tree+Care"
                alt="Professional tree care service"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const About = () => (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Miller's Tree Service</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Family-owned and operated with a commitment to excellence in every aspect of our work
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://placehold.co/500x400/8B4513/FFFFFF?text=Our+Team"
              alt="Miller's Tree Service team"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Story & Commitment</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Founded in 1998 by Robert Miller, our company has grown from a one-man operation to a trusted provider of comprehensive tree care services throughout the region. We take pride in our reputation for safety, reliability, and exceptional workmanship.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              As a fully insured and licensed tree service, we adhere to the highest industry standards and safety protocols. Our certified arborists stay current with the latest techniques and equipment to ensure your trees receive the best possible care.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <div className="text-2xl font-bold text-green-700">25+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <div className="text-2xl font-bold text-green-700">5000+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-10 text-center">Our Leadership Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h4>
                <p className="text-green-700 font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-gray-600 mb-3">{member.experience} experience</p>
                <p className="text-sm text-gray-500 mb-4 italic">"{member.certifications}"</p>
                <p className="text-gray-700 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  const Services = () => (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Tree Care Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive tree care solutions performed with safety, precision, and professionalism
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-green-800 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Fully Insured & Safety Certified</h3>
          <p className="text-lg mb-6">
            All our team members are trained in OSHA safety standards and our equipment is maintained to the highest specifications.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div className="bg-green-700 px-6 py-3 rounded-lg">
              <strong>ISA Certified Arborists</strong>
            </div>
            <div className="bg-green-700 px-6 py-3 rounded-lg">
              <strong>Workers' Compensation</strong>
            </div>
            <div className="bg-green-700 px-6 py-3 rounded-lg">
              <strong>Liability Insurance</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const Testimonials = () => (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it—here's what our clients have to say about our service
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 relative">
            <div className="text-6xl text-green-200 absolute top-4 left-6 opacity-30">"</div>
            <div className="text-6xl text-green-200 absolute bottom-4 right-6 opacity-30">"</div>
            
            <div className="relative z-10">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed italic">
                {testimonials[currentTestimonial].text}
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {testimonials[currentTestimonial].name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-gray-800">{testimonials[currentTestimonial].name}</div>
                  <div className="text-gray-600">{testimonials[currentTestimonial].location}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentTestimonial ? 'bg-green-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  const Contact = () => {
    const [formState, setFormState] = useState({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      // In a real application, this would send the form data to a server
      alert('Thank you for your inquiry! We will contact you shortly.');
      setFormState({ name: '', email: '', phone: '', service: '', message: '' });
    };

    const handleChange = (e) => {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    return (
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Get a Free Quote</h2>
            <p className="text-xl text-gray-600">
              Contact us today for a no-obligation estimate on your tree care needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <p className="text-gray-600">(555) 123-4567</p>
                    <p className="text-sm text-gray-500">24/7 Emergency Service Available</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">info@millerstreeservice.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Service Area</h4>
                    <p className="text-gray-600">Serving the entire metropolitan area and surrounding communities</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Business Hours</h4>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                  <p>Saturday: 8:00 AM - 4:00 PM</p>
                  <p>Sunday: Emergency Service Only</p>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
                  <select
                    name="service"
                    value={formState.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service.title}>{service.title}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Please describe your tree care needs..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-800 transition-colors duration-200"
                >
                  Request Free Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const Footer = () => (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Miller's Tree Service</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Family-owned and operated tree care company serving the community with professionalism, safety, and expertise for over 25 years.
            </p>
            <div className="flex space-x-4">
              <div className="bg-green-700 p-2 rounded-full">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <div className="bg-green-700 p-2 rounded-full">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.slice(0, 4).map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@millerstreeservice.com</p>
              <p>License #: TREC123456</p>
              <p>Insured & Bonded</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Miller's Tree Service. All rights reserved.</p>
          <p className="text-sm mt-2">Fully Insured • Licensed Arborists • Safety Certified</p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;