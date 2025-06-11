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
  Loader2,
  Youtube,
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
  const [submitError, setSubmitError] = useState("");

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
    setSubmitError("");

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setTimeout(() => {
          setFormData({ name: "", email: "", subject: "", message: "" });
          setIsSubmitted(false);
        }, 5000);
      } else {
        setSubmitError("Failed to send message. Please try again.");
      }
    } catch (error) {
      setSubmitError(
        "Network error. Please check your connection and try again."
      );
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

    // Clear submit error when user makes changes
    if (submitError) {
      setSubmitError("");
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kennonirom@gmail.com",
      href: "mailto:kennonirom@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+63 915 4564 720", // Replace with your actual number
      href: "tel:+63915 4564 720",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Cavite, Philippines",
      href: "https://www.google.com/maps/place/Cavite/@13.865414,120.4799785,8z/data=!4m6!3m5!1s0x3397d4eae8163c71:0xf0c4d0843bdde727!8m2!3d14.2456329!4d120.8785658!16zL20vMDFmNnF3?entry=ttu&g_ep=EgoyMDI1MDYwOC4wIKXMDSoASAFQAw%3D%3D",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/andreikennethmoreno/", // Replace with your GitHub
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/kenn-onirom-350a72300/", // Replace with your LinkedIn
    },
    {
      icon: Youtube,
      label: "Youtube",
      href: "https://www.youtube.com/@KennOnirom", // Replace with your Twitter
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
              Message Sent Successfully!
            </h2>
            <p
              className={`text-lg ${
                isDarkMode ? "text-zinc-300" : "text-zinc-800"
              }`}
            >
              Thank you for reaching out! I'll get back to you as soon as
              possible.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const iconStyle = isDarkMode
    ? "bg-zinc-800 text-zinc-300 hover:text-white"
    : "bg-zinc-200 text-zinc-800 hover:text-black";

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
            Let's Connect 👇
          </h2>
          <p
            className={`mt-6 max-w-2xl mx-auto ${
              isDarkMode ? "text-zinc-400" : "text-zinc-800"
            }`}
          >
            Have a project in mind or just want to chat about development? I'd
            love to hear from you. Let's create something amazing together.
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
                          : "bg-zinc-100 ,hover:bg-zinc-100"
                      }`}
                    >
                      <div className="p-3 rounded-xl mr-4">
                        <Icon size={24} className="text-[#2BA6FF]" />
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
                      className={`p-4 ${iconStyle} rounded-2xl transition-all duration-300 transform hover:scale-110`}
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

            {submitError && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-xl">
                {submitError}
              </div>
            )}

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
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 border rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#2BA6FF] disabled:opacity-50 disabled:cursor-not-allowed ${
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
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 border rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#2BA6FF] disabled:opacity-50 disabled:cursor-not-allowed ${
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
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3 border rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#2BA6FF] disabled:opacity-50 disabled:cursor-not-allowed ${
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
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3 border rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#2BA6FF] resize-none disabled:opacity-50 disabled:cursor-not-allowed ${
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
                className="w-full py-4 px-6 bg-[#2BA6FF] text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center hover:bg-[#2BA6FF]/90 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="mr-2 animate-spin" />
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
