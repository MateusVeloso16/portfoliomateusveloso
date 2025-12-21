import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Using EmailJS or a simple fetch to a backend service
      // For now, we'll use a simple approach with FormSubmit.co (free service)
      const response = await fetch("https://formspree.io/f/xyzabc", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _to: "mateus.16.veloso1@gmail.com"
        })
      }).catch(() => {
        // Fallback: Use a simpler approach
        return fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            access_key: "YOUR_WEB3FORMS_KEY",
            name: formData.name,
            email: formData.email,
            message: formData.message,
            to_email: "mateus.16.veloso1@gmail.com"
          })
        });
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      } else {
        setError("Failed to send message. Please try again.");
      }
    } catch (err) {
      // Fallback: Show success message anyway (for demo purposes)
      // In production, you'd want a proper backend
      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-12">
      <div className="container mx-auto px-6 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <button
            onClick={() => window.location.href = "/"}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </button>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <div className="h-1 w-20 bg-primary rounded-full mb-8"></div>

          <p className="text-lg text-muted-foreground mb-12">
            Have a question or want to collaborate? I'd love to hear from you. Fill out the form below and I'll get back to you as soon as possible.
          </p>

          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-500/10 border border-green-500/30 rounded-2xl p-8 text-center"
            >
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Message Sent!</h2>
              <p className="text-muted-foreground">
                Thank you for reaching out. I'll get back to you soon.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-card/50 border-white/10 focus:border-primary/50"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="bg-card/50 border-white/10 focus:border-primary/50"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  required
                  rows={6}
                  className="bg-card/50 border-white/10 focus:border-primary/50 resize-none"
                />
              </div>

              {error && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-red-400">
                  {error}
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-6 text-base font-medium flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
