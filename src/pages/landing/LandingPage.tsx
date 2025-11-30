"use client"

import React, { useState, useEffect } from 'react';
import { 
  Package, 
  BarChart3, 
  TrendingUp, 
  ShoppingCart, 
  Users, 
  Zap, 
  Shield, 
  ArrowRight, 
  Check, 
  Menu, 
  X, 
  Mail, 
  Phone, 
  MapPin, 
  Star 
} from 'lucide-react';
import { plans, stats } from '@/constant';
import Navigation from '@/components/home/Navigation';
import Image from 'next/image';
import { dashboardImage } from '@/assets';

export default function InventoryLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 6);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Package className="w-6 h-6" />,
      title: "Product Management",
      description: "Track products, quantities, expiring dates, and availability in real-time"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analytics & Reports",
      description: "Comprehensive insights on top-selling products, revenue, and inventory trends"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Low Stock Alerts",
      description: "Automatic notifications when inventory levels are running low"
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "Order Management",
      description: "Streamline order processing and track deliveries efficiently"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Supplier Management",
      description: "Manage supplier relationships and track purchase orders"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with data backup and recovery"
    }
  ];


  return (
    <div className="min-h-screen bg-white text-text-default overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <Navigation scrolled={scrolled} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 text-sm font-medium animate-pulse">
               Now Available - Start Your Free Trial
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-900 animate-slideInUp">
              Streamline Your
              <span className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
                Inventory Management
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed animate-slideInUp">
              Track products, manage suppliers, and gain insights with our comprehensive inventory management system.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slideInUp">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all transform hover:scale-105 flex items-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white border-2 border-gray-300 rounded-lg font-semibold text-lg hover:border-blue-600 hover:text-blue-600 hover:shadow-lg transition-all transform hover:scale-105">
                Watch Demo
              </button>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2 transform hover:scale-110 transition-transform">
                <Check className="w-5 h-5 text-green-600" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2 transform hover:scale-110 transition-transform">
                <Check className="w-5 h-5 text-green-600" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center space-x-2 transform hover:scale-110 transition-transform">
                <Check className="w-5 h-5 text-green-600" />
                <span>Cancel anytime</span>
              </div>
            </div>

            {/* Animated Dashboard Preview */}
            <div className="mt-16 relative h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl transform rotate-2 opacity-20"></div>
              <div className="h-full relative bg-white rounded-2xl shadow-2xl p-4 border-4 border-gray-100 transform hover:rotate-0 transition-transform duration-500">
                <div className="h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8 h-64 flex items-center justify-center">
                  <div className="text-center">
                    <div className='relative'>
                        {/* <div className='absolute'>
                            <Package className="w-20 h-20 text-blue-600 mx-auto mb-4 animate-float" />
                            <p className="text-gray-600 font-semibold">Dashboard Preview</p>
                        </div> */}
                        <Image src={dashboardImage} alt='dashboard image' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 via-cyan-50 to-blue-50 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer transform hover:scale-110 transition-all duration-300">
                <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:animate-pulse`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Everything You Need
            </h2>
            <p className="text-xl text-gray-600">
              Powerful features to manage your inventory efficiently
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-2xl bg-white border-2 transition-all duration-500 cursor-pointer transform hover:-translate-y-2 ${
                  activeFeature === index 
                    ? 'border-blue-500 shadow-2xl shadow-blue-500/30 scale-105' 
                    : 'border-gray-200 hover:border-blue-300 hover:shadow-xl'
                }`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                  activeFeature === index 
                    ? 'bg-gradient-to-br from-blue-600 to-cyan-600 text-white transform rotate-12 scale-110' 
                    : 'bg-blue-100 text-blue-600'
                }`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-white to-blue-50 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`rounded-2xl p-8 transition-all duration-300 transform hover:scale-105 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-blue-600 to-cyan-600 text-white border-4 border-blue-700 relative shadow-2xl shadow-blue-500/50 -translate-y-4' 
                    : 'bg-white border-2 border-gray-200 hover:border-blue-300 hover:shadow-xl'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-current" />
                      <span>Most Popular</span>
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6">
                  <span className={`text-5xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-lg ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                    {plan.period}
                  </span>
                </div>

                <button className={`w-full py-3 rounded-lg font-semibold mb-6 transition-all transform hover:scale-105 hover:shadow-lg ${
                  plan.popular 
                    ? 'bg-white text-blue-600 hover:bg-gray-100' 
                    : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-blue-500/50'
                }`}>
                  {plan.cta}
                </button>

                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3 transform hover:translate-x-2 transition-transform">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-blue-200' : 'text-green-600'}`} />
                      <span className={plan.popular ? 'text-blue-50' : 'text-gray-600'}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600">
              Have questions? We'd love to hear from you
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl border-2 border-gray-100 transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Send us a message</h3>
              <div className="space-y-4">
                <div className="transform hover:scale-105 transition-transform">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div className="transform hover:scale-105 transition-transform">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="transform hover:scale-105 transition-transform">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all h-32 resize-none"
                    placeholder="Tell us how we can help..."
                  ></textarea>
                </div>
                <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all transform hover:scale-105">
                  Send Message
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h3>
                <p className="text-gray-600 mb-8">
                  Feel free to reach out through any of these channels. Our team is ready to assist you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 rounded-xl bg-white border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all transform hover:scale-105 cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">support@kanban.com</p>
                    <p className="text-gray-600">sales@kanban.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-xl bg-white border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all transform hover:scale-105 cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-xl bg-white border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all transform hover:scale-105 cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Office</h4>
                    <p className="text-gray-600">123 Business Street</p>
                    <p className="text-gray-600">San Francisco, CA 94105</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slideInUp">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join hundreds of businesses managing their inventory more efficiently
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all hover:shadow-2xl transform hover:scale-110">
            Start Your Free Trial
          </button>
          <p className="mt-4 text-blue-100 text-sm">No credit card required • 14-day free trial</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4 group cursor-pointer">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-blue-600 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">KANBAN</span>
              </div>
              <p className="text-gray-400">Streamline your inventory management with ease.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-2 inline-block transform">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-2 inline-block transform">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-2 inline-block transform">Demo</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-2 inline-block transform">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-2 inline-block transform">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-2 inline-block transform">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-2 inline-block transform">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-2 inline-block transform">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-2 inline-block transform">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-2 inline-block transform">Privacy</a></li>
              </ul>
            </div>
          </div>
          
        </div>
        </footer>
        </div>
  )}
        