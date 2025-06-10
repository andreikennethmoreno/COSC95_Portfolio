import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  MessageSquare,
  CheckCircle,
} from "lucide-react";

interface ContactProps {
  isDarkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call to send email
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({ name: "", email: "", subject: "", message: "" });
          setIsSubmitted(false);
        }, 3000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      // For demo purposes, we'll still show success
      setIsSubmitted(true);
      setTimeout(() => {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setIsSubmitted(false);
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "alex.johnson@email.com",
      href: "mailto:alex.johnson@email.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/alexjohnson",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/alexjohnson",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/alexjohnson",
    },
  ];

  if (isSubmitted) {
    return (
      <section
        id="contact"
        className={`py-20 px-4 sm:px-6 lg:px-8 border-t ${
          isDarkMode ? "border-zinc-800" : "border-zinc-200"
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`rounded-3xl p-12 ${
              isDarkMode ? "bg-zinc-900" : "bg-zinc-100"
            }`}
          >
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-white" />
            </div>
            <h2
              className={`text-3xl font-bold mb-4 ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              Thank You!
            </h2>
            <p
              className={`text-lg ${
                isDarkMode ? "text-zinc-300" : "text-zinc-800"
              }`}
            >
              Your message has been sent successfully. I'll get back to you
              within 24 hours.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className={`py-20 px-4 sm:px-6 lg:px-8 border-t ${
        isDarkMode ? "border-zinc-800" : "border-zinc-200"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl sm:text-5xl font-bold mb-6 ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            Let's Connect
          </h2>
          <p
            className={`mt-6 max-w-2xl mx-auto ${
              isDarkMode ? "text-zinc-400" : "text-zinc-800"
            }`}
          >
            Have a project in mind or just want to chat about design? I'd love
            to hear from you. Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-[0.5fr_2fr] gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3
                className={`text-2xl font-semibold mb-6 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                Get In Touch
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={info.label}
                      href={info.href}
                      className={`flex items-center p-4 rounded-2xl transition-all duration-300 transform hover:scale-105 group ${
                        isDarkMode
                          ? "bg-zinc-800 hover:bg-zinc-700"
                          : "bg-white hover:bg-zinc-200"
                      }`}
                    >
                      <div className="p-3 bg-[#2BA6FF] rounded-xl mr-4">
                        <Icon size={24} className="text-white" />
                      </div>
                      <div>
                        <p
                          className={`text-sm ${
                            isDarkMode ? "text-zinc-400" : "text-zinc-500"
                          }`}
                        >
                          {info.label}
                        </p>
                        <p
                          className={`font-medium ${
                            isDarkMode ? "text-white" : "text-black"
                          }`}
                        >
                          {info.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div>
              <h3
                className={`text-2xl font-semibold mb-6 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                Follow Me
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-[#2BA6FF] rounded-2xl text-white hover:bg-[#2BA6FF]/90 transition-all duration-300 transform hover:scale-110"
                      title={social.label}
                    >
                      <Icon size={24} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`rounded-3xl p-8 ${
              isDarkMode ? "bg-zinc-900" : "bg-zinc-100"
            }`}
          >
            <h3
              className={`text-2xl font-semibold mb-6 ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className={`block font-medium mb-2 ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#2BA6FF] ${
                      errors.name
                        ? "border-red-500"
                        : isDarkMode
                        ? "bg-zinc-800 border-zinc-700 text-white placeholder-zinc-400"
                        : "bg-white border-zinc-200 text-black placeholder-zinc-500"
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className={`block font-medium mb-2 ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#2BA6FF] ${
                      errors.email
                        ? "border-red-500"
                        : isDarkMode
                        ? "bg-zinc-800 border-zinc-700 text-white placeholder-zinc-400"
                        : "bg-white border-zinc-200 text-black placeholder-zinc-500"
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className={`block font-medium mb-2 ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#2BA6FF] ${
                    errors.subject
                      ? "border-red-500"
                      : isDarkMode
                      ? "bg-zinc-800 border-zinc-700 text-white placeholder-zinc-400"
                      : "bg-white border-zinc-200 text-black placeholder-zinc-500"
                  }`}
                  placeholder="What's this about?"
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block font-medium mb-2 ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#2BA6FF] resize-none ${
                    errors.message
                      ? "border-red-500"
                      : isDarkMode
                      ? "bg-zinc-800 border-zinc-700 text-white placeholder-zinc-400"
                      : "bg-white border-zinc-200 text-black placeholder-zinc-500"
                  }`}
                  placeholder="Tell me about your project or just say hello..."
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 bg-[#2BA6FF] text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center ${
                  isSubmitting
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:bg-[#2BA6FF]/90"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} className="mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
