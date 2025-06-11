import contactimg from '../images/see-CUiBe9gY.jpg'; // استخدمي WebP
import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";
import { Button } from "@/shared/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "@/shared/components/firebase";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async () => {
    if (!email || !message) {
      setFeedback("Please fill in all fields.");
      return;
    }

    setSending(true);
    setFeedback("");

    try {
      const newMessage = {
        email,
        message,
        date: new Date().toISOString(),
      };

      const userDocRef = doc(db, "users", "Abdallah_Alqiran");
      await updateDoc(userDocRef, {
        contactMessage: arrayUnion(newMessage),
      });

      setFeedback("✅ Message sent successfully!");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
      setFeedback("❌ Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="pt-22 bg-secondary">
      <h1 className="text-3xl font-semibold text-[#25c1dd] w-fit mx-auto pt-20 pb-1 tracking-wide drop-shadow-md">
        Contact Me
      </h1>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="justify-center hidden md:flex"
          >
            <div className="aspect-[1/1] w-full max-w-[400px]">
              <img
                src={contactimg}
                alt="Contact Illustration"
                loading="lazy"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.99 }}
            className="w-full h-full max-w-xl mx-auto px-8 py-10 border border-[#006a6a] rounded-2xl shadow-lg bg-white dark:bg-[#1e1e1e] space-y-8 flex flex-col justify-center"
          >
            <h2 className="text-3xl font-semibold text-[#25c1dd] text-center">Get in Touch</h2>

            <Input
              type="email"
              placeholder="Your Email"
              className="text-lg border border-[#006a6a] focus:ring-2 focus:ring-[#25c1dd] rounded-lg px-6 py-5 font-semibold"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <Textarea
              placeholder="Type your message here."
              className="text-lg border border-[#006a6a] focus:ring-2 focus:ring-[#25c1dd] rounded-lg px-6 py-5 h-48 resize-none font-semibold"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />

            <Button
              className="w-full py-4 text-lg bg-[#25c1dd] text-white font-semibold rounded-full hover:bg-white hover:text-[#006a6a] border-2 hover:border-[#006a6a] transition-all duration-300"
              onClick={handleSubmit}
              disabled={sending}
            >
              {sending ? "Sending..." : "Send Message"}
            </Button>

            {feedback && (
              <p className={`text-center text-sm font-medium ${feedback.includes("✅") ? "text-green-500" : "text-red-500"}`}>
                {feedback}
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
