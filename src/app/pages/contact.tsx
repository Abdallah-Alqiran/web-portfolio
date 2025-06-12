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
    <section id="contact" className="pt-22 bg-secondary">
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
               loading="lazy"
              alt="Contact Illustration"
              width={500}
              height={500}
              className="w-150 md:block hidden object-cover p-0 "
            />
          </motion.div>
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    delay: 0.3,
    duration: 0.99,
    ease: "easeOut",
  }}
  className="w-full h-full max-w-xl mx-auto px-8 py-10 border border-[#006a6a] 
  rounded-2xl shadow-lg bg-white dark:bg-[#1e1e1e] space-y-8 flex flex-col justify-center"
>
  <h2 className="text-3xl font-semibold text-[#25c1dd] text-center">
    Get in Touch
  </h2>

  <Input
    type="email"
    placeholder="Your Email"
    className="w-full text-lg border border-[#006a6a]
     focus:outline-none focus:ring-2 focus:ring-[#25c1dd] rounded-lg px-6 py-5 font-semibold"
    onChange={(e) => setEmail(e.target.value)}
    value={email}
  />

  <Textarea
    placeholder="Type your message here."  
    className="w-full text-lg  border border-[#006a6a] focus:outline-none focus:ring-2 focus:ring-[#25c1dd] rounded-lg px-6 py-5 h-48 resize-none font-semibold"
    onChange={(e) => setMessage(e.target.value)}
    value={message}
  />

  <Button
    className="w-full py-4 text-lg bg-[#25c1dd] text-white font-semibold rounded-full hover:bg-white hover:text-[#006a6a] border-2 border-transparent hover:border-[#006a6a] transition-all duration-300"
    onClick={handleSubmit}
    disabled={sending}
  >
    {sending ? "Sending..." : "Send Message"}
  </Button>
</motion.div>


        </div>
      </div>
    </section>
  );
};

export default Contact