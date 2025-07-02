import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  CheckCircle,
  Loader2,
  Youtube,
} from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const Contact: React.FC = () => {
  const { isDarkMode } = useTheme();
  
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

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }

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
      value: "+63 915 4564 720",
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
      href: "https://github.com/andreikennethmoreno/",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/kenn-onirom-350a72300/",
    },
    {
      icon: Youtube,
      label: "Youtube",
      href: "https://www.youtube.com/@KennOnirom",
    },
  ];

  if (isSubmitted) {
    return (
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 border-t"
        style={{ borderColor: 'var(--color-border)' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="rounded-3xl p-12"
            style={{ backgroundColor: 'var(--color-card)' }}
          >
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                 style={{ backgroundColor: 'var(--color-success)' }}>
              <CheckCircle size={40} className="text-white" />
            </div>
            <h2
              className="text-3xl font-bold mb-4"
              style={{ color: 'var(--color-foreground)' }}
            >
              Message Sent Successfully!
            </h2>
            <p
              className="text-lg"
              style={{ color: 'var(--color-muted-foreground)' }}
            >
              Thank you for reaching out! I'll get back to you as soon as
              possible.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 border-t"
      style={{ borderColor: 'var(--color-border)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-bold mb-6"
            style={{ color: 'var(--color-foreground)' }}
          >
            Let's Connect 👇
          </h2>
          <p
            className="mt-6 max-w-2xl mx-auto"
            style={{ color: 'var(--color-muted-foreground)' }}
          >
            Have a project in mind or just want to chat about development? I'd
            love to hear from you. Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-[0.5fr_2fr] gap-12">
          <div className="space-y-8">
            <div>
              <h3
                className="text-2xl font-semibold mb-6"
                style={{ color: 'var(--color-foreground)' }}
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
                      className="flex items-center p-4 rounded-2xl transition-all duration-300 transform hover:scale-105 group"
                      style={{ backgroundColor: 'var(--color-card)' }}
                    >
                      <div className="p-3 rounded-xl mr-4">
                        <Icon size={24} style={{ color: 'var(--color-accent)' }} />
                      </div>
                      <div>
                        <p
                          className="text-sm"
                          style={{ color: 'var(--color-muted-foreground)' }}
                        >
                          {info.label}
                        </p>
                        <p
                          className="font-medium"
                          style={{ color: 'var(--color-foreground)' }}
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
                className="text-2xl font-semibold mb-6"
                style={{ color: 'var(--color-foreground)' }}
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
                      className="p-4 rounded-2xl transition-all duration-300 transform hover:scale-110"
                      style={{ 
                        backgroundColor: 'var(--color-card)',
                        color: 'var(--color-muted-foreground)'
                      }}
                      title={social.label}
                    >
                      <Icon size={24} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div
            className="rounded-3xl p-8"
            style={{ backgroundColor: 'var(--color-card)' }}
          >
            <h3
              className="text-2xl font-semibold mb-6"
              style={{ color: 'var(--color-foreground)' }}
            >
              Send a Message
            </h3>

            {submitError && (
              <div className="mb-6 p-4 border rounded-xl"
                   style={{ 
                     backgroundColor: 'var(--color-destructive)',
                     borderColor: 'var(--color-destructive)',
                     color: 'white'
                   }}>
                {submitError}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-medium mb-2"
                    style={{ color: 'var(--color-foreground)' }}
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
                    className="w-full px-4 py-3 border rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      backgroundColor: 'var(--color-background)',
                      borderColor: errors.name ? 'var(--color-destructive)' : 'var(--color-border)',
                      color: 'var(--color-foreground)',
                      '--tw-ring-color': 'var(--color-accent)'
                    } as React.CSSProperties}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="text-sm mt-1" style={{ color: 'var(--color-destructive)' }}>
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-medium mb-2"
                    style={{ color: 'var(--color-foreground)' }}
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
                    className="w-full px-4 py-3 border rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      backgroundColor: 'var(--color-background)',
                      borderColor: errors.email ? 'var(--color-destructive)' : 'var(--color-border)',
                      color: 'var(--color-foreground)',
                      '--tw-ring-color': 'var(--color-accent)'
                    } as React.CSSProperties}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-sm mt-1" style={{ color: 'var(--color-destructive)' }}>
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block font-medium mb-2"
                  style={{ color: 'var(--color-foreground)' }}
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
                  className="w-full px-4 py-3 border rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    backgroundColor: 'var(--color-background)',
                    borderColor: errors.subject ? 'var(--color-destructive)' : 'var(--color-border)',
                    color: 'var(--color-foreground)',
                    '--tw-ring-color': 'var(--color-accent)'
                  } as React.CSSProperties}
                  placeholder="What's this about?"
                />
                {errors.subject && (
                  <p className="text-sm mt-1" style={{ color: 'var(--color-destructive)' }}>
                    {errors.subject}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-medium mb-2"
                  style={{ color: 'var(--color-foreground)' }}
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
                  className="w-full px-4 py-3 border rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    backgroundColor: 'var(--color-background)',
                    borderColor: errors.message ? 'var(--color-destructive)' : 'var(--color-border)',
                    color: 'var(--color-foreground)',
                    '--tw-ring-color': 'var(--color-accent)'
                  } as React.CSSProperties}
                  placeholder="Tell me about your project or just say hello..."
                ></textarea>
                {errors.message && (
                  <p className="text-sm mt-1" style={{ color: 'var(--color-destructive)' }}>
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                style={{ backgroundColor: 'var(--color-accent)' }}
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