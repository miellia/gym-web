"use client";

import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { motion } from "framer-motion";

type FormData = {
  fullName: string;
  phone: string;
  message: string;
};

export function LeadFormSection() {
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    console.log("Form Submitted:", data);
    await new Promise(resolve => setTimeout(resolve, 800));
    toast.success("Request sent successfully! We will contact you soon.");
    reset();
  };

  return (
    <section id="lead-form" className="py-14 lg:py-16 bg-surface relative">
      <div className="max-w-screen-2xl mx-auto px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-[#00FF88]/20 via-[#006532]/10 to-transparent rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-10 items-center shadow-[0_0_100px_rgba(0,255,136,0.05)] border border-white/5"
        >
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-black font-space-grotesk text-white leading-[1] uppercase tracking-tighter mb-6">
              Start Your <br className="hidden md:block" /> Fitness <br className="hidden md:block" /> Journey Today
            </h2>
            <p className="text-white/80 text-base font-bold max-w-sm">
              Join the elite few who push past their limits. First session is on us.
            </p>
          </div>
          
          <div className="flex-1 w-full bg-black/60 p-6 md:p-8 rounded-2xl backdrop-blur-xl border border-white/10 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-white/60 font-black uppercase text-[10px] tracking-widest px-1 block">
                  Full Name
                </label>
                <input 
                  {...register("fullName", { required: true })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm text-white placeholder:text-white/20 focus:ring-2 focus:ring-accent focus:bg-white/10 transition-all outline-none" 
                  placeholder="John Doe" 
                  type="text" 
                  required
                />
              </div>
              
              <div className="space-y-1.5">
                <label className="text-white/60 font-black uppercase text-[10px] tracking-widest px-1 block">
                  Phone Number
                </label>
                <input 
                  {...register("phone", { required: true })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm text-white placeholder:text-white/20 focus:ring-2 focus:ring-accent focus:bg-white/10 transition-all outline-none" 
                  placeholder="+1 (555) 000-0000" 
                  type="tel"
                  required
                />
              </div>
              
              <div className="space-y-1.5">
                <label className="text-white/60 font-black uppercase text-[10px] tracking-widest px-1 block">
                  Message
                </label>
                <textarea 
                  {...register("message")}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm text-white placeholder:text-white/20 focus:ring-2 focus:ring-accent focus:bg-white/10 transition-all outline-none resize-none" 
                  placeholder="I'm interested in the Elite Performance plan..." 
                  rows={3} 
                />
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent text-black py-4 rounded-2xl font-black uppercase text-base btn-glow-hover transition-all shadow-xl shadow-accent/10 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Request"}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
