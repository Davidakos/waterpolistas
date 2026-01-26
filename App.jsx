import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function WaterpolistasWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020617] via-[#020b2d] to-[#062a4d] text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-10 py-5 bg-black/40 backdrop-blur-2xl sticky top-0 z-50 border-b border-white/10">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="Waterpolistas Logo" className="h-10 w-auto" />
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
          <img src="/logo.png" alt="Waterpolistas Logo" className="mx-auto mb-10 h-28" />
          <h1 className="text-7xl font-extrabold mb-8 tracking-tight">Rule the Pool</h1>
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-16"
        >
          Game Information
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-10">
          {["Gameplay", "Multiplayer", "Modes"].map((title, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 200 }}
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
      <section id="howtoplay" className="py-32 px-6 bg-gradient-to-r from-black/40 to-black/10">
        <h2 className="text-5xl font-bold text-center mb-16">How to Play</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 text-xl">
          <div className="space-y-4">
            <h3 className="text-3xl font-semibold">Objective</h3>
            <p>Outscore your opponents before the clock runs out.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-3xl font-semibold">Controls</h3>
            <p>Swim, sprint, pass, shoot, block, and fake with responsive controls.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-3xl font-semibold">Team Play</h3>
            <p>Positioning, timing, and communication decide victory.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-3xl font-semibold">Progression</h3>
            <p>Win games, level up, unlock cosmetics, and dominate tournaments.</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 px-6 max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-12"
        >
          Who Are We
        </motion.h2>
        <p className="text-2xl leading-relaxed opacity-90">
          We are a small, ambitious team of developers and water polo players building the ultimate digital version of the sport.
          Waterpolistas is made with passion, competition, and community at its core.
        </p>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-sm opacity-70 bg-black/50 border-t border-white/10">
        © 2026 Waterpolistas. All rights reserved.
      </footer>
    </div>
  );
}
