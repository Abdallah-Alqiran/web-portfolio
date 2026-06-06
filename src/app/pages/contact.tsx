import contactimg from '../images/see-CUiBe9gY.png';
import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";
import { Button } from "@/shared/components/ui/button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "@/shared/components/firebase";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async () => {
    if (!email || !message) {
      alert("Please fill in all fields");
      return;
    }
    setSending(true);

    try {
      const newMessage = {
        email,
        message,
        date: new Date().toISOString(),
      };

      const userDocRef = doc(db, "users", import.meta.env.VITE_USER_ID);
      await updateDoc(userDocRef, {
        contactMessage: arrayUnion(newMessage),
      });

      const templateParams = {
        name: "Portfolio Contact",
        email: email,
        message: message,
        time: new Date().toLocaleString(),
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      alert("Message sent successfully! ✅");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Something went wrong! ❌");
    } finally {
      setSending(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-2xl font-semibold text-primary animate-pulse">Loading...</p>
      </div>
    );
  }

  return (
    <section id="contact" className="px-6 md:px-12 bg-background pt-16 pb-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Get in Touch
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block relative"
          >
            <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl"></div>
            <img
              src={contactimg}
              loading="lazy"
              alt="Contact"
              className="relative w-full max-w-lg mx-auto rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bg-card text-card-foreground shadow-2xl rounded-3xl p-8 md:p-12 border border-border/50 backdrop-blur-sm space-y-8">
              <div className="space-y-4">
                <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
                <Input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full bg-secondary/50 border-border/50 focus:border-primary focus:ring-primary/20 rounded-xl px-6 py-7 text-lg font-medium transition-all"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>

              <div className="space-y-4">
                <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Message</label>
                <Textarea
                  placeholder="How can I help you?"
                  className="w-full bg-secondary/50 border-border/50 focus:border-primary focus:ring-primary/20 rounded-xl px-6 py-5 h-48 resize-none text-lg font-medium transition-all"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                />
              </div>

              <Button
                className="w-full py-8 text-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-2xl shadow-xl transition-all duration-300 active:scale-[0.98]"
                onClick={handleSubmit}
                disabled={sending}
              >
                {sending ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
