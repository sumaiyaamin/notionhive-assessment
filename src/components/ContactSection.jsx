"use client";

import { useState } from "react";
import toast from "react-hot-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      toast.success("Your message has been sent successfully. We'll get back to you soon!");
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto py-20 bg-[#EBF1FF] rounded-3xl">
      <div className="container  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Text Block */}
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6 leading-tight">
                Get started on your success with a free expert consultation
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Ready to see how a web solution service agency can help you level up?
                Book a free consultation today!
              </p>
            </div>

            {/* Contact Form Card */}
            <div className="bg-white rounded-3xl p-8 shadow-card">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Contact With Us and Schedule a Free Consultation Meeting
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="bg-muted/30 border border-border rounded-md p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary w-full"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="bg-muted/30 border border-border rounded-md p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary w-full"
                  />
                </div>

                {/* Email */}
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-muted/30 border border-border rounded-md p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary w-full"
                />

                {/* Message */}
                <textarea
                  name="message"
                  placeholder="Write your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-muted/30 border border-border rounded-md p-3 text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary w-full"
                />

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3 text-lg font-medium rounded-md
                    bg-[#375DFB] text-white
                    hover:bg-[#2f4eda] transition
                    ${loading ? "opacity-70 cursor-not-allowed" : ""}
                  `}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
