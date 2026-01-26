import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function WaterpolistasWebsite() {
  // Mouse ripple effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const ripple = document.createElement("span");
      ripple.className = "ripple";
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 900);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#020617] via-[#020b2d] to-[#062a4d] text-white overflow-x-hidden">

      {/* Wave Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="wave wave1" />
        <div className="wave wave2" />
        <div className="wave wave3" />
      </div>

      {/* Navigation */}
      <nav className="flex justify-between items-center px-10 py-5 bg-black/40 backdrop-blur-2xl sticky top-0 z-50 border-b border-white/10">
        <div className="flex items-center gap-4">
          <img
            src="/logo.png"
            alt="Waterpolistas Logo"
            className="h-16 transition-transform duration-300 hover:scale-110"
          />
          <span className="text-2xl font-bold tracking-wide">Waterpolistas</span>
        </div>
        <div className="space-x-8 text-lg font-medium">
          <a href="#info" className="hover:text-cyan-400 transition">Information</a>
          <a href="#howtoplay" className="hover:text-cyan-400 transition">How to Play</a>
          <a href="#about" className="hover:text-cyan-400 transition">Who Are We</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative py-40 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.img
            src="/logo.png"
            alt="Waterpolistas Logo"
            className="mx-auto mb-10 h-44"
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <h1 className="text-7xl font-extrabold mb-8 tracking-tight">
            Rule the Pool
          </h1>
          <p className="max-w-3xl mx-auto text-2xl opacity-90 mb-12">
            A next-generation water polo game blending realism, arcade speed, and competitive multiplayer.
          </p>
          <Button className="text-xl px-10 py-5 rounded-2xl shadow-2xl hover:scale-105 transition-transform">
            Dive In
          </Button>
        </motion.div>
      </section>

      {/* Information */}
      <section id="info" className="py-28 px-6 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-16"
        >
          Game Information
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-10">
          {["Gameplay", "Multiplayer", "Modes"].map((title, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl">
                <CardContent className="p-10">
                  <h3 className="text-2xl font-semibold mb-4">{title}</h3>
                  <p className="opacity-85">
                    {title === "Gameplay" && "Fluid swimming, precision shooting, physical defense, and realistic water physics."}
                    {title === "Multiplayer" && "Ranked competitive matches, private lobbies, and global events."}
                    {title === "Modes" && "Quick Match, Career, Tournament, and Practice Pool."}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How To Play */}
      <section id="howtoplay" className="py-32 px-6 bg-black/30">
        <h2 className="text-5xl font-bold text-center mb-16">How to Play</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 text-xl">
          {["Objective", "Controls", "Team Play", "Progression"].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <h3 className="text-3xl font-semibold mb-3">{item}</h3>
              <p className="opacity-85">
                {item === "Objective" && "Outscore your opponent before the timer runs out."}
                {item === "Controls" && "Swim, sprint, pass, shoot, block, and fake with responsive controls."}
                {item === "Team Play" && "Positioning and coordination decide victory."}
                {item === "Progression" && "Win games, rank up, unlock cosmetics, and dominate tournaments."}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 px-6 max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-12"
        >
          Who Are We
        </motion.h2>
        <p className="text-2xl leading-relaxed opacity-90">
          We are a passionate team of developers and water polo players building the ultimate digital version of the sport.
        </p>
      </section>

      <footer className="py-12 text-center text-sm opacity-70 bg-black/50 border-t border-white/10">
        © 2026 Waterpolistas. All rights reserved.
      </footer>

      {/* Styles for waves & ripple */}
      <style jsx global>{`
        .wave {
          position: absolute;
          bottom: 0;
          width: 200%;
          height: 240px;
          background: radial-gradient(circle at 50% 50%, rgba(56,189,248,0.25), transparent 70%);
          animation: waveMove 18s linear infinite;
        }
        .wave1 { animation-duration: 20s; opacity: 0.35; }
        .wave2 { animation-duration: 26s; opacity: 0.25; bottom: 20px; }
        .wave3 { animation-duration: 32s; opacity: 0.18; bottom: 40px; }
        @keyframes waveMove {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .ripple {
          position: fixed;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          pointer-events: none;
          background: rgba(56,189,248,0.5);
          transform: translate(-50%, -50%);
          animation: ripple 0.9s ease-out forwards;
          z-index: 9999;
        }
        @keyframes ripple {
          to {
            width: 120px;
            height: 120px;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
