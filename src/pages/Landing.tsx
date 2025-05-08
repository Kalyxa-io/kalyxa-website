import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SHEETBEST_ENDPOINT = 'https://api.sheetbest.com/sheets/0f6e3ba6-7a66-4a43-b888-2386596e9972';

const Landing = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    instagram: '',
    tiktok: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const [clientsPerMonth, setClientsPerMonth] = useState(10);
  const [averagePrice, setAveragePrice] = useState(100);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const monthlyEarnings = clientsPerMonth * averagePrice;
  const yearlyEarnings = monthlyEarnings * 12;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleApplyClick = async () => {
    try {
      setIsSubmitting(true);
      setSubmitStatus('idle');

      const response = await fetch(SHEETBEST_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString()
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        instagram: '',
        tiktok: ''
      });

      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative">
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute -top-20 -right-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.2, 0.3],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <motion.div
              className="absolute -bottom-20 -left-20 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.2, 0.3],
                rotate: [0, -90, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                  <span className="block">Fashion Creator? </span>
                  <span className="block text-purple-600 mt-1">Start Earning by Styling Your Own Followers</span>
                </h1>
                <p className="mt-6 text-lg text-gray-600 max-w-3xl">
                Your audience already trusts your style. Kalyxa helps you turn that trust into income — offer 1:1 styling, set your own rates, and get paid doing what you love.
                </p>
                <motion.div 
                  className="mt-8 flex items-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <a 
                    href="https://www.producthunt.com/posts/kalyxa?embed=true&utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-kalyxa" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block hover:scale-105 transition-transform duration-300"
                  >
                    <img 
                      src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=958501&theme=light&period=daily&t=1746666734045" 
                      alt="Kalyxa - Shop smarter, dress better, with real stylists by your side | Product Hunt" 
                      style={{ width: '250px', height: '54px' }} 
                      width="250" 
                      height="54" 
                    />
                  </a>
                  <a 
                    href="https://www.producthunt.com/posts/kalyxa?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-kalyxa" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block hover:scale-105 transition-transform duration-300"
                  >
                    <img 
                      src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=958501&theme=light&t=1746666756388" 
                      alt="Kalyxa - Shop smarter, dress better, with real stylists by your side | Product Hunt" 
                      style={{ width: '250px', height: '54px' }} 
                      width="250" 
                      height="54" 
                    />
                  </a>
                </motion.div>
                <div className="mt-10">
                  <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-purple-100">
                    <h3 className="text-lg font-semibold text-purple-900 mb-4">Join Our Community</h3>
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Name"
                          className="w-full px-3 py-2 bg-white/80 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent text-sm"
                        />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Your Email"
                          className="w-full px-3 py-2 bg-white/80 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent text-sm"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="relative">
                          <span className="absolute left-3 top-2 text-gray-400">@</span>
                          <input
                            type="text"
                            name="instagram"
                            value={formData.instagram}
                            onChange={handleInputChange}
                            placeholder="Instagram Handle"
                            className="w-full pl-8 pr-3 py-2 bg-white/80 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent text-sm"
                          />
                        </div>
                        <div className="relative">
                          <span className="absolute left-3 top-2 text-gray-400">@</span>
                          <input
                            type="text"
                            name="tiktok"
                            value={formData.tiktok}
                            onChange={handleInputChange}
                            placeholder="TikTok Handle"
                            className="w-full pl-8 pr-3 py-2 bg-white/80 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent text-sm"
                          />
                          <span className="absolute right-3 top-2 text-xs text-gray-400">Optional</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={isSubmitting}
                        className={`w-full mt-4 px-6 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-sm font-medium ${
                          isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                        }`}
                        onClick={handleApplyClick}
                      >
                        {isSubmitting ? 'Submitting...' : 'Apply Now'}
                      </motion.button>
                      {submitStatus === 'success' && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-3 text-sm text-green-600 text-center"
                        >
                          Thank you for applying! We'll be in touch soon.
                        </motion.p>
                      )}
                      {submitStatus === 'error' && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-3 text-sm text-red-600 text-center"
                        >
                          Oops! Something went wrong. Please try again.
                        </motion.p>
                      )}
                      <p className="mt-3 text-xs text-gray-500 text-center">
                        We respect your privacy. Your information will never be shared with third parties.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right side - Dashboard Card */}
              <div className="relative">
                <div className="relative h-[600px] w-full">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full h-full bg-white rounded-2xl shadow-2xl"
                  >
                    <div className="h-14 bg-purple-600 flex items-center justify-between px-6">
                      <motion.div 
                        className="text-white font-semibold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        Stylist Dashboard
                      </motion.div>
                      <div className="flex space-x-2">
                        {['bg-red-500', 'bg-yellow-500', 'bg-green-500'].map((color, i) => (
                          <motion.div
                            key={i}
                            className={`w-3 h-3 rounded-full ${color}`}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.7 + i * 0.1 }}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="p-6 grid grid-cols-2 gap-4">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="col-span-2 bg-purple-50 rounded-xl p-4"
                      >
                        <h3 className="text-purple-800 font-semibold mb-3">New Styling Requests</h3>
                        <div className="space-y-2">
                          {[
                            { name: "Sarah M.", event: "Wedding Guest", time: "2h ago" },
                            { name: "James L.", event: "Business Casual", time: "5h ago" }
                          ].map((request, i) => (
                            <motion.div
                              key={i}
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: 1 + i * 0.2 }}
                              className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm"
                            >
                              <div>
                                <div className="font-medium text-gray-800">{request.name}</div>
                                <div className="text-sm text-gray-500">{request.event}</div>
                              </div>
                              <div className="text-xs text-purple-600">{request.time}</div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                      {[
                        { label: "Active Clients", value: "24", icon: "👥" },
                        { label: "Completed Looks", value: "127", icon: "✨" },
                        { label: "Earnings", value: "$15k", icon: "💰" },
                        { label: "Rating", value: "4.9", icon: "⭐" }
                      ].map((stat, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 1.2 + i * 0.1 }}
                          className="bg-white p-4 rounded-xl shadow-sm border border-purple-100"
                        >
                          <div className="text-2xl mb-2">{stat.icon}</div>
                          <div className="text-sm text-gray-600">{stat.label}</div>
                          <div className="text-xl font-bold text-purple-600">{stat.value}</div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-b from-white to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
                Turn Your Style Into Success
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join the platform that's helping fashion creators monetize their influence and build meaningful connections with their audience.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  title: "Monetize Your Influence — From Anywhere",
                  description: "Why chase brand deals or side gigs when your own followers would pay you to style them? With Kalyxa, you earn by doing what you're already great at — from the comfort of home.",
                  icon: "💫",
                  highlight: "Earn from Home"
                },
                {
                  title: "Build Real Connections With Your Community",
                  description: "Go beyond likes and comments. Offer personal styling that helps your followers feel confident, seen, and empowered in their everyday lives.",
                  icon: "🤝",
                  highlight: "Meaningful Impact"
                },
                {
                  title: "A Workspace That Works For You",
                  description: "No messy DMs or external tools. Kalyxa handles bookings, delivery, and payments — all in one clean platform that helps you stay creative and in control.",
                  icon: "✨",
                  highlight: "All-in-One Platform"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-purple-100"
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <div className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
                    {benefit.highlight}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Income Calculator Section */}
        <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
                Calculate Your Potential Earnings
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how much you could earn by styling your followers on Kalyxa
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Calculator Controls */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="space-y-12"
              >
                {/* Clients Per Month Slider */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-lg font-medium text-gray-900">
                      Clients per Month
                    </label>
                    <span className="text-2xl font-bold text-purple-600">
                      {clientsPerMonth}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={clientsPerMonth}
                    onChange={(e) => setClientsPerMonth(Number(e.target.value))}
                    className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>1 client</span>
                    <span>50 clients</span>
                  </div>
                </div>

                {/* Average Price Per Service Slider */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-lg font-medium text-gray-900">
                      Average Price Per Service
                    </label>
                    <span className="text-2xl font-bold text-purple-600">
                      ${averagePrice}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="500"
                    step="10"
                    value={averagePrice}
                    onChange={(e) => setAveragePrice(Number(e.target.value))}
                    className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>$50</span>
                    <span>$500</span>
                  </div>
                </div>
              </motion.div>

              {/* Earnings Display */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-white rounded-2xl shadow-xl p-8 space-y-8"
              >
                <div className="text-center p-6 bg-purple-50 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Monthly Potential
                  </h3>
                  <motion.div
                    key={monthlyEarnings}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    className="text-4xl font-bold text-purple-600"
                  >
                    ${monthlyEarnings.toLocaleString()}
                  </motion.div>
                </div>

                <div className="text-center p-6 bg-indigo-50 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Yearly Potential
                  </h3>
                  <motion.div
                    key={yearlyEarnings}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    className="text-4xl font-bold text-indigo-600"
                  >
                    ${yearlyEarnings.toLocaleString()}
                  </motion.div>
                </div>

                <div className="text-center text-sm text-gray-500 mt-4">
                  *Earnings may vary based on various factors including market conditions and service quality
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about starting your styling journey with Kalyxa
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: "How do I make money on Kalyxa?",
                  answer: "You earn by offering personalized styling services to your followers. Set your own pricing, accept requests, and get paid directly through the platform."
                },
                {
                  question: "Do I need to be a big influencer to join?",
                  answer: "Not at all. Whether you have 500 or 50,000 followers, if people love your style, Kalyxa helps you turn that into income and impact."
                },
                {
                  question: "What kind of services can I offer?",
                  answer: "Right now, Kalyxa supports two powerful styling services you can offer:\n\nOccasion-Specific Styling:\nHelp your clients dress with confidence for weddings, vacations, interviews, or any big moment in their life. They share the event details — you give them complete outfit guidance.\n\nPersonal Shopping Guide:\nRecommend 3–5 new pieces that match their current wardrobe, style goals, and budget. You'll help them shop smarter, not harder — no promoting your closet or affiliate links, just personalized advice."
                },
                {
                  question: "Can I do this from home?",
                  answer: "Yes! Everything is online — review requests, share styling advice, and manage your earnings right from your laptop."
                },
                {
                  question: "How do payments work?",
                  answer: "We've partnered with Stripe to handle all payments securely. Once you complete a styling request, your earnings are transferred directly to your account. Kalyxa never stores your banking details — everything goes through Stripe's trusted payment system. No chasing invoices, no hassle."
                },
                {
                  question: "What if I'm already working with brands or other clients?",
                  answer: "No problem. Kalyxa is designed to support your creative business. Use it to add an extra revenue stream and serve your own community, on your terms."
                },
                {
                  question: "Will Kalyxa help me get my first few clients?",
                  answer: "Yes, definitely! Our team is here to support you every step of the way. Whether it's providing marketing materials, answering questions, or guiding you on how to promote your services — we're in your corner. You can ask us anything, anytime. Our team responds within 24 hours, and we're committed to helping you make your styling business a success."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-sm border border-purple-100 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-inset"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {faq.question}
                      </h3>
                      <motion.div
                        animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-purple-600"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </motion.div>
                    </div>
                  </button>
                  <AnimatePresence>
                    {openFaqIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4 text-gray-600 space-y-3">
                          {faq.answer.split('\n\n').map((paragraph, pIndex) => (
                            <p key={pIndex} className="leading-relaxed">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-20 bg-gradient-to-b from-white to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
                Trusted by Fashion Creators
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join our community of early testers who are already turning their style expertise into a thriving business
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah M.",
                  role: "Fashion Blogger",
                  followers: "25K Instagram",
                  image: "/images/Sarah.jpeg",
                  review: "I was skeptical at first, but Kalyxa has completely transformed how I connect with my audience. The platform makes it so easy to manage styling requests and payments. I've already earned $3,500 in my first month!",
                  highlight: "Earned $3,500 in first month"
                },
                {
                  name: "Emma R.",
                  role: "Personal Stylist",
                  followers: "15K TikTok",
                  image: "/images/Emma.jpeg",
                  review: "What I love most about Kalyxa is how it helps me build real connections with my followers. Instead of just creating content, I'm now helping people feel confident in their style choices. The support team is incredible too!",
                  highlight: "50+ happy clients"
                },
                {
                  name: "Michael T.",
                  role: "Fashion Creator",
                  followers: "40K Instagram",
                  image: "/images/fashionStylist.jpg",
                  review: "As someone who was already working with brands, I was looking for a way to serve my community directly. Kalyxa gave me the perfect platform to do that. The income calculator helped me set the right prices, and I'm now making more than I did with brand deals.",
                  highlight: "Doubled previous income"
                }
              ].map((review, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-purple-100"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="relative w-16 h-16">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-full h-full object-cover rounded-full border-2 border-purple-200"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{review.name}</h3>
                      <p className="text-purple-600 text-sm">{review.role}</p>
                      <p className="text-gray-500 text-sm">{review.followers}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                      {review.highlight}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">"{review.review}"</p>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-sm font-medium"
                onClick={handleApplyClick}
              >
                Join Our Early Testers
              </motion.button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Landing; 