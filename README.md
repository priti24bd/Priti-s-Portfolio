import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Award, Leaf, Cpu, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 p-6 md:p-10">
      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center"
      >
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Priti Das Dipa
          </h1>
          <p className="mt-3 text-xl text-slate-300">
            Aspiring Robotics Engineer · Social Impact Innovator · Climate Advocate
          </p>
          <p className="mt-5 text-slate-400 leading-relaxed">
            I build technology for people who are usually left out of it. From
            flood-resilient systems to youth-led education initiatives, my work
            sits at the intersection of robotics, sustainability, and community
            empowerment.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button variant="secondary" className="gap-2"><Github size={18}/> GitHub</Button>
            <Button variant="secondary" className="gap-2"><Linkedin size={18}/> LinkedIn</Button>
            <Button variant="secondary" className="gap-2"><Mail size={18}/> Contact</Button>
          </div>
        </div>
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="rounded-2xl bg-slate-900/60 shadow-xl p-6"
        >
          <h3 className="text-lg font-semibold mb-4">Quick Profile</h3>
          <ul className="space-y-2 text-slate-300">
            <li>🌍 From Kachuria village, Mollahat, Bagerhat, Bangladesh</li>
            <li>🎓 HSC GPA: 4.92 / 5.00</li>
            <li>🏆 Hanging Nutrition Bag project- funded from GAIN</li>
            <li>🏆 Climate Peonals - Top 10 Division Team</li>
            <li>❤️ RCY, Bangladesh Red Crescent Society (BDRCS)</li>
            <li>❤️ Project Officer, Volunteer For Bangladesh</li>
            <li>❤️ District Trainer, JAAGO Foundation</li>
            <li>❤️ Youth Mentor, National Children Task Force(NCTF)</li>
            <li>❤️ Volunteer, VBD, BDRCS, NCTF, and BD Clean</li>
          </ul>
        </motion.div>
      </motion.section>

      {/* PROJECTS */}
      <section className="max-w-6xl mx-auto mt-16">
        <h2 className="text-3xl font-bold mb-8">Flagship Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-slate-900/70">
            <CardContent className="p-6 space-y-3">
              <Cpu className="text-emerald-400" />
              <h3 className="text-xl font-semibold">Smart Flood Management System</h3>
              <p className="text-slate-400 text-sm">
                Drone + IoT based early warning and response system designed for
                flood-prone rural villages of Bagerhat.
              </p>
              <p className="text-xs text-slate-500">Tech: Arduino, Water sensor, Raspberry Pi, Python</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/70">
            <CardContent className="p-6 space-y-3">
              <Leaf className="text-green-400" />
              <h3 className="text-xl font-semibold">Mangrove Innovators</h3>
              <p className="text-slate-400 text-sm">
                Climate resilience project focusing on mangrove restoration and
                community-led conservation.
              </p>
              <p className="text-xs text-slate-500">Focus: SDGs 13, 14, 15</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/70">
            <CardContent className="p-6 space-y-3">
              <Cpu className="text-emerald-400" />
              <h3 className="text-xl font-semibold">LightWake</h3>
              <p className="text-slate-400 text-sm">
                LightWake is a smart, light-activated morning alarm system that I used 
                a light sensor to detect natural daylight. When sufficient light is detected,
                the system automatically triggers a buzzer to wake the user.
              </p>
              <p className="text-xs text-slate-500">Tech: Light Sensor, Buzzer, Resistor</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/70">
            <CardContent className="p-6 space-y-3">
              <Cpu className="text-emerald-400" />
              <h3 className="text-xl font-semibold">RoboDrive</h3>
              <p className="text-slate-400 text-sm">
                RoboDrive is a remote-controlled robotic car that moves in all directions 
                using simple commands, making navigation easy and fun.
              </p>
              <p className="text-xs text-slate-500">Tech: DC Motors with Wheels, Motor Driver Module (L298N), Remote Control, Microcontroller (Arduino), Power Supply (Battery)</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/70">
            <CardContent className="p-6 space-y-3">
              <Cpu className="text-emerald-400" />
              <h3 className="text-xl font-semibold">EcoGlow</h3>
              <p className="text-slate-400 text-sm">
                EcoGlow is an automatic night light system that I used 
                a light sensor to detect darkness, the light turns on automatically,
                saving energy and ensuring visibility at night.
              </p>
              <p className="text-xs text-slate-500">Tech: Light Sensor (LDR), LED light, Resistor</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/70">
            <CardContent className="p-6 space-y-3">
              <Cpu className="text-emerald-400" />
              <h3 className="text-xl font-semibold">LumiCode</h3>
              <p className="text-slate-400 text-sm">
                It's an Arduino-based automatic night light that turns on when darkness is detected,
                providing energy-efficient illumination without manual control.
              </p>
              <p className="text-xs text-slate-500">Tech: Arduino (Uno), LDR (Light Dependent Resistor), LED Light, Jumper Wires, Resistor, Power Supply (Battery)</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/70">
            <CardContent className="p-6 space-y-3">
              <Cpu className="text-emerald-400" />
              <h3 className="text-xl font-semibold">ThiefGuard</h3>
              <p className="text-slate-400 text-sm">
                It's an automatic thief detection system that uses sensors to identify
                unauthorized movement. When intrusion is detected, the system 
                instantly triggers an alert to enhance security.
              </p>
              <p className="text-xs text-slate-500">Tech: PIR Motion Sensor, Microcontroller (Arduino), Buzzer</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/70">
            <CardContent className="p-6 space-y-3">
              <Cpu className="text-emerald-400" />
              <h3 className="text-xl font-semibold">Spin Energy</h3>
              <p className="text-slate-400 text-sm">
                Spin Energy is a wind-powered system that generates electricity using small
                yellow DC motors, converting natural wind energy into free, sustainable power.
              </p>
              <p className="text-xs text-slate-500">Tech: Small DC Motors (yellow), Wheel for Wind Capture, LED Light, Buzzer</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/70">
            <CardContent className="p-6 space-y-3">
              <Cpu className="text-emerald-400" />
              <h3 className="text-xl font-semibold">FireGuard</h3>
              <p className="text-slate-400 text-sm">
                It detects fire automatically using sensors 
                and activates an alarm instantly for safety.
              </p>
              <p className="text-xs text-slate-500">Tech: Heat Sensor, Microcontroller (Arduino), Buzzer</p>
            </CardContent>
          </Card>

           <Card className="bg-slate-900/70">
            <CardContent className="p-6 space-y-3">
              <Cpu className="text-emerald-400" />
              <h3 className="text-xl font-semibold">EcoFill System</h3>
              <p className="text-slate-400 text-sm">
                EcoFill System is an automatic water-filling system that detects water levels 
                and fills containers without manual effort, saving time and preventing overflow.
              </p>
              <p className="text-xs text-slate-500">Tech: Water Level Sensor, Microcontroller (Arduino), Water Pump, Power Supply, Buzzer</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/70">
            <CardContent className="p-6 space-y-3">
              <Cpu className="text-emerald-400" />
              <h3 className="text-xl font-semibold">Motion Guard</h3>
              <p className="text-slate-400 text-sm">
                It's a smart motion detection system that instantly senses movement and triggers
                an alert, providing real-time security without manual monitoring.
              </p>
              <p className="text-xs text-slate-500">Tech: PIR Motion Sensor, Microcontroller (Arduino), LED Indicator, Buzzer</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/70">
            <CardContent className="p-6 space-y-3">
              <Globe className="text-sky-400" />
              <h3 className="text-xl font-semibold">EdVision Alliance</h3>
              <p className="text-slate-400 text-sm">
                Youth-driven project providing quality education materials to
                underprivileged children of Bagerhat sadar upazila.
              </p>
              <p className="text-xs text-slate-500">Role:Project Leader</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* UNIQUENESS */}
      <section className="max-w-6xl mx-auto mt-16">
        <h2 className="text-3xl font-bold mb-6">What Makes Me Different</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-slate-900/70">
            <CardContent className="p-6">
              <p className="text-slate-300 leading-relaxed">
                I am not just learning to code - I am learning to listen. Every
                project I build starts with community voices and ends with
                measurable impact. My goal is to study robotics not just for labs
                alone, but for villages, clinics, and classrooms.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-slate-900/70">
            <CardContent className="p-6">
              <p className="text-slate-300 leading-relaxed"
                My portfolio reflects that philosophy: technology guided by
                ethics, empathy, and global responsibility.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="max-w-6xl mx-auto mt-16">
        <h2 className="text-3xl font-bold mb-6">Courses, Awards, & Certifications</h2>
        <ul className="space-y-3 text-slate-300">
          <li className="flex items-center gap-2"><Award size={18}/> HarvardX CS50 Course</li>
          <li className="flex items-center gap-2"><Award size={18}/> Hanging Nutrition Bag Certiciate</li>
          <li className="flex items-center gap-2"><Award size={18}/> My Voice My Choice Certiciate</li>
          <li className="flex items-center gap-2"><Award size={18}/> MUN Certiciate</li>
          <li className="flex items-center gap-2"><Award size={18}/> SDG Certiciate</li>
          <li className="flex items-center gap-2"><Award size={18}/> Photography Competition Winner</li>
        </ul>
      </section>

      {/* FOOTER */}
      <footer className="max-w-6xl mx-auto mt-20 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Priti Das Dipa · Built with purpose, not just code.</p>
      </footer>
    </div>
  );
}
