import contactimg from '../images/see-CUiBe9gY.png';
import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";
import { Button } from "@/shared/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import {  arrayUnion, doc,updateDoc } from "firebase/firestore";
import { db } from "@/shared/components/firebase";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
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

    const userDocRef = doc(db, "users", "Abdallah_Alqiran"); 
    await updateDoc(userDocRef, {
      contactMessage: arrayUnion(newMessage),
    });

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


  return (
    <div id="projects" className="pt-22 bg-secondary">
      <h1 className="text-3xl font-semibold text-[#25c1dd] w-fit mx-auto pt-20 pb-1 tracking-wide drop-shadow-md">
        Contact Me
      </h1>
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <img
              src={contactimg}
              alt="Contact Illustration"
              className="w-screen md:block hidden object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.9,
              ease: "easeOut",
            }}
            className="w-full max-w-lg mx-auto p-8 border-2 border-[#006a6a] rounded-xl shadow-md space-y-6"
          >
            <h2 className="text-xl font-semibold text-[#25c1dd] text-center">
              Get in Touch
            </h2>

            <Input
              type="email"
              placeholder="Your Email"
              className="w-full border-2 border-[#006a6a] focus:outline-none"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <Textarea
              placeholder="Type your message here."
              className="w-full border-2 border-[#006a6a] h-40 resize-none focus:outline-none"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />

            <Button
              className="w-full py-3 bg-[#25c1dd] text-white rounded-full hover:bg-white hover:text-[#006a6a] border-2 border-transparent hover:border-[#006a6a] transition duration-300"
              onClick={handleSubmit}
              disabled={sending}
            >
              {sending ? "Sending..." : "Send Message"}
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
