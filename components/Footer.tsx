import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-white/10">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 py-20 px-8 font-inter text-sm tracking-wide">
        <div className="md:col-span-1">
          <div className="text-2xl font-black text-white mb-8 uppercase tracking-tighter">
            BODY EVOLUTION
          </div>
          <p className="text-neutral-500 leading-relaxed max-w-xs">
            Forging elite performance through kinetic movement and intense discipline since 2026.
          </p>
        </div>
        <div>
          <h4 className="text-white font-black uppercase mb-8 tracking-widest text-xs">Resources</h4>
          <ul className="space-y-5">
            <li><Link className="text-neutral-500 hover:text-accent hover:translate-x-1 transition-all inline-block" href="#">Privacy Policy</Link></li>
            <li><Link className="text-neutral-500 hover:text-accent hover:translate-x-1 transition-all inline-block" href="#">Terms of Service</Link></li>
            <li><Link className="text-neutral-500 hover:text-accent hover:translate-x-1 transition-all inline-block" href="#">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-black uppercase mb-8 tracking-widest text-xs">Follow Us</h4>
          <ul className="space-y-5">
            <li><a className="text-neutral-500 hover:text-accent hover:translate-x-1 transition-all inline-block" href="#">Instagram</a></li>
            <li><a className="text-neutral-500 hover:text-accent hover:translate-x-1 transition-all inline-block" href="#">YouTube</a></li>
            <li><a className="text-neutral-500 hover:text-accent hover:translate-x-1 transition-all inline-block" href="#">X (Twitter)</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-black uppercase mb-8 tracking-widest text-xs">Newsletter</h4>
          <div className="relative group">
            <input
              className="w-full bg-surface-container-highest border border-outline-variant/20 rounded-2xl py-4 px-5 text-white focus:ring-2 focus:ring-accent transition-all placeholder:text-neutral-600 outline-none"
              placeholder="Enter Email"
              type="email"
            />
            <button className="absolute right-3 top-2.5 bg-accent text-black w-10 h-10 rounded-xl flex items-center justify-center hover:scale-105 transition-all">
              <ArrowRight className="w-5 h-5 font-black text-black" />
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto px-8 py-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-neutral-500 text-xs">© 2026 BODY EVOLUTION. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8">
          <span className="text-neutral-600 text-xs uppercase font-bold tracking-widest">Built For Strength</span>
          <span className="text-neutral-600 text-xs uppercase font-bold tracking-widest">Designed For Speed</span>
        </div>
      </div>
    </footer>
  );
}
