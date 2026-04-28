'use client';
import React, { useState } from 'react';

export const CTASection = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="bg-[#1875F0] rounded-[10px] p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between relative overflow-hidden shadow-lg gap-8">
          
          {/* Subtle background circles for that wave/gradient effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-[40px] border-white/5 rounded-full pointer-events-none"></div>
          <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[40px] border-white/5 rounded-full pointer-events-none"></div>
          
          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 relative z-10 w-full lg:w-auto">
            {/* Headset Icon */}
            <div className="w-[72px] h-[72px] bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm p-1">
              <div className="w-full h-full bg-blue-50 rounded-xl flex items-center justify-center border border-blue-100">
                <svg className="w-8 h-8 text-[#1875F0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
            </div>
            
            {/* Text */}
            <div className="mt-2">
              <h2 className="text-white text-2xl md:text-[28px] font-bold mb-2 tracking-tight">
                Want to Learn More About Our Training Solutions?
              </h2>
              <p className="text-blue-100 text-[16px]">
                Get Expert Guidance for Your Team's Success!
              </p>
            </div>
          </div>
          
          {/* Functional Lead Capture Form */}
          <div className="relative z-10 flex-shrink-0 w-full lg:w-auto">
            {status === 'success' ? (
              <div className="bg-white/10 border border-white/20 rounded-lg p-6 text-white text-center w-full lg:w-[400px]">
                <div className="text-3xl mb-2">✅</div>
                <p className="font-semibold text-lg">Request Received!</p>
                <p className="text-sm text-blue-100 mt-2">Our advisor will reach out to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full justify-center">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  required
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="px-4 py-3.5 rounded-[6px] outline-none text-gray-900 w-full sm:w-[160px] shadow-sm font-medium"
                />
                <input 
                  type="email" 
                  placeholder="Work Email" 
                  required
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="px-4 py-3.5 rounded-[6px] outline-none text-gray-900 w-full sm:w-[220px] shadow-sm font-medium"
                />
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="bg-white text-[#1875F0] hover:bg-gray-50 font-bold py-3.5 px-6 rounded-[6px] transition-colors shadow-sm disabled:opacity-70 disabled:cursor-not-allowed min-w-[120px]"
                >
                  {status === 'loading' ? 'Sending...' : 'Submit'}
                </button>
              </form>
            )}
            {status === 'error' && (
              <p className="text-red-200 text-sm mt-2 text-center text-medium">Something went wrong. Please try again.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
