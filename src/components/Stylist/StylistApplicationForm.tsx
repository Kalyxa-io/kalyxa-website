import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../../lib/supabase';

type Role = 'none' | 'stylist' | 'influencer';

interface StylistFormData {
  fullName: string;
  email: string;
  phone: string;
  experience: string;
  portfolio: string;
  instagram: string;
  specialization: string[];
  servicesOffered: string[];
  ratePerHour: string;
  availability: string;
  certifications: string;
  about: string;
}

interface InfluencerFormData {
  fullName: string;
  email: string;
  phone: string;
  instagram: string;
  otherSocials: {
    tiktok?: string;
    youtube?: string;
    pinterest?: string;
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    blog?: string;
  };
  followers: string;
  styleNiche: string[];
  previousCollaborations: string;
  engagementRate: string;
  targetAudience: string;
  about: string;
}

const StylistApplicationForm = ({ onClose }: { onClose: () => void }) => {
  const servicesOptions = [
    'One-on-One Styling Sessions',
    'Virtual Style Consultation',
    'Personal Shopping',
    'Wardrobe Audit & Organization',
    'Event/Photoshoot Styling',
    'Style Guide Creation',
    'Seasonal Wardrobe Planning',
    'Brand Partnership Consulting',
    'Style Workshop/Masterclass',
    'Look Book Creation'
  ];

  const styleNicheOptions = [
    'High Fashion',
    'Street Style',
    'Minimalist',
    'Vintage/Retro',
    'Sustainable Fashion',
    'Avant-Garde',
    'Contemporary',
    'Classic/Timeless',
    'Experimental',
    'Luxury Fashion',
    'Urban Fashion',
    'Alternative Fashion'
  ];

  const influencerNicheOptions = {
    fashionStyle: {
      title: 'Fashion Style',
      options: [
        'High Fashion & Luxury',
        'Street Style',
        'Minimalist Fashion',
        'Vintage & Retro',
        'Sustainable Fashion',
        'Plus Size Fashion',
        'Modest Fashion',
        'Alternative Fashion',
        'Athleisure',
        'Business & Professional',
        'Budget Fashion',
        'Designer Mix & Match'
      ]
    },
    contentType: {
      title: 'Content Expertise',
      options: [
        'Fashion Hauls',
        'Outfit of the Day',
        'Style Tips & Tutorials',
        'Fashion Reviews',
        'Trend Analysis',
        'Wardrobe Organization',
        'Shopping Guides',
        'Fashion Week Coverage',
        'Brand Collaborations',
        'Sustainable Fashion Education',
        'Body Positivity',
        'Fashion Tech & Innovation'
      ]
    }
  };

  const socialMediaPlatforms = [
    { id: 'tiktok', name: 'TikTok', icon: '📱' },
    { id: 'youtube', name: 'YouTube', icon: '🎥' },
    { id: 'pinterest', name: 'Pinterest', icon: '📌' },
    { id: 'facebook', name: 'Facebook', icon: '👥' },
    { id: 'twitter', name: 'Twitter/X', icon: '🐦' },
    { id: 'linkedin', name: 'LinkedIn', icon: '💼' },
    { id: 'blog', name: 'Fashion Blog', icon: '✍️' }
  ];

  const [selectedRole, setSelectedRole] = useState<Role>('none');
  const [step, setStep] = useState(1);
  const [stylistData, setStylistData] = useState<StylistFormData>({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    portfolio: '',
    instagram: '',
    specialization: [],
    servicesOffered: [],
    ratePerHour: '',
    availability: '',
    certifications: '',
    about: ''
  });

  const [influencerData, setInfluencerData] = useState<InfluencerFormData>({
    fullName: '',
    email: '',
    phone: '',
    instagram: '',
    otherSocials: {},
    followers: '',
    styleNiche: [],
    previousCollaborations: '',
    engagementRate: '',
    targetAudience: '',
    about: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Role selection screen
  const renderRoleSelection = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-center text-gray-900 mb-8">
        Choose your role
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setSelectedRole('stylist')}
          className="p-6 border-2 border-purple-200 rounded-xl hover:border-purple-500 transition-all duration-300"
        >
          <div className="text-4xl mb-4">👔</div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Fashion Stylist</h4>
          <p className="text-sm text-gray-600">
            Offer your professional styling services and build your client base
          </p>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setSelectedRole('influencer')}
          className="p-6 border-2 border-purple-200 rounded-xl hover:border-purple-500 transition-all duration-300"
        >
          <div className="text-4xl mb-4">✨</div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Fashion Influencer</h4>
          <p className="text-sm text-gray-600">
            Share your style expertise and grow your influence
          </p>
        </motion.button>
      </div>
    </div>
  );

  // Stylist form steps...
  const renderStylistStep1 = () => (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="fullName"
          required
          value={stylistData.fullName}
          onChange={handleStylistInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
          placeholder="Enter your full name"
        />
      </div>
      {/* Add more fields */}
    </div>
  );

  // Influencer form steps...
  const renderInfluencerStep1 = () => (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="fullName"
          required
          value={influencerData.fullName}
          onChange={handleInfluencerInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
          placeholder="Enter your full name"
        />
      </div>
      {/* Add more fields */}
    </div>
  );

  // Input handlers
  const handleStylistInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setStylistData(prev => ({ ...prev, [name]: value }));
  };

  const handleInfluencerInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInfluencerData(prev => ({ ...prev, [name]: value }));
  };

  const handleStylistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('stylist_applications')
        .insert([{
          full_name: stylistData.fullName,
          email: stylistData.email,
          phone: stylistData.phone,
          experience: stylistData.experience,
          portfolio: stylistData.portfolio,
          instagram: stylistData.instagram,
          specialization: stylistData.specialization,
          services_offered: stylistData.servicesOffered,
          rate_per_hour: stylistData.ratePerHour,
          availability: stylistData.availability,
          certifications: stylistData.certifications,
          about: stylistData.about
        }]);

      if (error) throw error;

      alert('Application submitted successfully!');
      onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInfluencerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('influencer_applications')
        .insert([{
          full_name: influencerData.fullName,
          email: influencerData.email,
          phone: influencerData.phone,
          instagram: influencerData.instagram,
          other_socials: influencerData.otherSocials,
          followers: influencerData.followers,
          style_niche: influencerData.styleNiche,
          previous_collaborations: influencerData.previousCollaborations,
          engagement_rate: influencerData.engagementRate,
          target_audience: influencerData.targetAudience,
          about: influencerData.about
        }]);

      if (error) throw error;

      alert('Application submitted successfully!');
      onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMultiSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, options } = e.target;
    const selectedValues = Array.from(options)
      .filter(option => option.selected)
      .map(option => option.value);
    
    setStylistData(prev => ({
      ...prev,
      [name]: selectedValues
    }));
  };

  // Update the specializationOptions array with more options and categories
  const specializationOptions = {
    personalStyling: {
      title: 'Personal Styling',
      options: [
        'Wardrobe Organization & Styling',
        'Personal Shopping',
        'Color Analysis',
        'Body Type Consultation',
        'Capsule Wardrobe Creation',
        'Sustainable Fashion Styling',
        'Plus Size Styling',
        'Minimalist Styling'
      ]
    },
    eventStyling: {
      title: 'Event Styling',
      options: [
        'Wedding Styling',
        'Red Carpet Events',
        'Corporate Events',
        'Fashion Shows',
        'Photo Shoots',
        'Music Videos',
        'Television & Film',
        'Magazine Editorials'
      ]
    },
    commercialStyling: {
      title: 'Commercial Styling',
      options: [
        'None',
        'E-commerce Styling',
        'Brand Collaborations',
        'Advertising Campaigns',
        'Lookbook Creation',
        'Social Media Content',
        'Product Styling',
        'Fashion Marketing',
        'Visual Merchandising'
      ]
    },
    consultingServices: {
      title: 'Consulting Services',
      options: [
        'None',
        'Brand Image Consulting',
        'Wardrobe Audit',
        'Personal Brand Development',
        'Fashion Education',
        'Virtual Styling',
        'Seasonal Style Planning'
      ]
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-xl shadow-xl w-full max-w-md my-8 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
        >
          ✕
        </button>

        <div className="max-h-[80vh] overflow-y-auto p-6">
          <AnimatePresence mode='wait'>
            {selectedRole === 'none' ? (
              <motion.div
                key="selection"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                {renderRoleSelection()}
              </motion.div>
            ) : selectedRole === 'stylist' ? (
              <motion.div
                key="stylist-form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    Fashion Stylist Application
                  </h3>
                  
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={stylistData.fullName}
                        onChange={handleStylistInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={stylistData.email}
                        onChange={handleStylistInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone <span className="text-gray-500 text-sm font-normal">(optional)</span>
                      </label>
                      <input
                        type="text"
                        name="phone"
                        value={stylistData.phone}
                        onChange={handleStylistInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Instagram Handle <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="instagram"
                        required
                        value={stylistData.instagram}
                        onChange={handleStylistInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                        placeholder="@yourstylehandle"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Portfolio URL <span className="text-gray-500 text-sm font-normal">(optional)</span>
                      </label>
                      <input
                        type="url"
                        name="portfolio"
                        value={stylistData.portfolio}
                        onChange={handleStylistInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                        placeholder="https://your-portfolio.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Years of Experience <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="experience"
                        required
                        value={stylistData.experience}
                        onChange={handleStylistInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                      >
                        <option value="">Select experience</option>
                        <option value="0-2">0-2 years</option>
                        <option value="2-5">2-5 years</option>
                        <option value="5-10">5-10 years</option>
                        <option value="10+">10+ years</option>
                      </select>
                    </div>

                    <div className="space-y-6">
                      <label className="block text-lg font-medium text-gray-900 mb-4">
                        Specialization <span className="text-red-500">*</span>
                      </label>
                      {Object.entries(specializationOptions).map(([key, category]) => (
                        <div key={key} className="space-y-3">
                          <h4 className="text-md font-medium text-purple-600">
                            {category.title} <span className="text-red-500">*</span>
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {category.options.map((option) => (
                              <div key={option} className="flex items-center">
                                <input
                                  type="checkbox"
                                  id={option}
                                  name="specialization"
                                  value={option}
                                  checked={stylistData.specialization.includes(option)}
                                  onChange={(e) => {
                                    const value = e.target.value;
                                    setStylistData(prev => ({
                                      ...prev,
                                      specialization: e.target.checked
                                        ? [...prev.specialization, value]
                                        : prev.specialization.filter(item => item !== value)
                                    }));
                                  }}
                                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                                />
                                <label htmlFor={option} className="ml-2 text-sm text-gray-700">
                                  {option}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                      <p className="text-xs text-gray-500 mt-2">
                        Select all that apply. You must choose at least one specialization.
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        About You <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="about"
                        required
                        value={stylistData.about}
                        onChange={handleStylistInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                        rows={4}
                        placeholder="Tell us about your styling philosophy and experience..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg"
                    onClick={handleStylistSubmit}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </motion.button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="influencer-form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    Fashion Influencer Application
                  </h3>
                  
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={influencerData.fullName}
                        onChange={handleInfluencerInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={influencerData.email}
                        onChange={handleInfluencerInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Instagram Handle <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="instagram"
                        required
                        value={influencerData.instagram}
                        onChange={handleInfluencerInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                        placeholder="@yourstylehandle"
                      />
                    </div>

                    <div className="space-y-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Other Social Media Platforms <span className="text-gray-500 text-sm font-normal">(optional)</span>
                      </label>
                      <div className="grid grid-cols-1 gap-3">
                        {socialMediaPlatforms.map((platform) => (
                          <div key={platform.id} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
                            <span className="text-xl">{platform.icon}</span>
                            <div className="flex-grow">
                              <label htmlFor={platform.id} className="block text-sm font-medium text-gray-700">
                                {platform.name}
                              </label>
                              <input
                                type="text"
                                id={platform.id}
                                name={`otherSocials.${platform.id}`}
                                onChange={(e) => {
                                  setInfluencerData(prev => ({
                                    ...prev,
                                    otherSocials: {
                                      ...prev.otherSocials,
                                      [platform.id]: e.target.value
                                    }
                                  }));
                                }}
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                                placeholder={`Enter your ${platform.name} handle`}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Instagram Followers <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="followers"
                        required
                        value={influencerData.followers}
                        onChange={handleInfluencerInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                      >
                        <option value="">Select follower range</option>
                        <option value="1k-5k">1,000 - 5,000</option>
                        <option value="5k-10k">5,000 - 10,000</option>
                        <option value="10k-50k">10,000 - 50,000</option>
                        <option value="50k-100k">50,000 - 100,000</option>
                        <option value="100k+">100,000+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Average Engagement Rate</label>
                      <select
                        name="engagementRate"
                        value={influencerData.engagementRate}
                        onChange={handleInfluencerInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                      >
                        <option value="">Select engagement rate</option>
                        <option value="1-3">1% - 3%</option>
                        <option value="3-5">3% - 5%</option>
                        <option value="5-10">5% - 10%</option>
                        <option value="10+">10%+</option>
                      </select>
                    </div>

                    {/* Fashion Niche Selection */}
                    <div className="space-y-6">
                      <label className="block text-lg font-medium text-gray-900 mb-4">
                        Fashion Expertise <span className="text-red-500">*</span>
                      </label>
                      {Object.entries(influencerNicheOptions).map(([key, category]) => (
                        <div key={key} className="space-y-3">
                          <h4 className="text-md font-medium text-purple-600">
                            {category.title} <span className="text-red-500">*</span>
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {category.options.map((option) => (
                              <div key={option} className="flex items-center">
                                <input
                                  type="checkbox"
                                  id={option}
                                  name="styleNiche"
                                  value={option}
                                  checked={influencerData.styleNiche.includes(option)}
                                  onChange={(e) => {
                                    const value = e.target.value;
                                    setInfluencerData(prev => ({
                                      ...prev,
                                      styleNiche: e.target.checked
                                        ? [...prev.styleNiche, value]
                                        : prev.styleNiche.filter(item => item !== value)
                                    }));
                                  }}
                                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                                />
                                <label htmlFor={option} className="ml-2 text-sm text-gray-700">
                                  {option}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        About Your Content & Style <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="about"
                        required
                        value={influencerData.about}
                        onChange={handleInfluencerInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                        rows={4}
                        placeholder="Tell us about your content style, fashion philosophy, and what makes your content unique..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Previous Brand Collaborations <span className="text-gray-500 text-sm font-normal">(optional)</span>
                      </label>
                      <textarea
                        name="previousCollaborations"
                        value={influencerData.previousCollaborations}
                        onChange={handleInfluencerInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                        rows={3}
                        placeholder="List your notable fashion brand collaborations..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg"
                    onClick={handleInfluencerSubmit}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default StylistApplicationForm;