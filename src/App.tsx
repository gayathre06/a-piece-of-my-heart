/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { Heart, Stars, Cloud, Music, MapPin, Sparkles, Send, Coffee, Moon, Sun, BookOpen, Gift, Infinity } from 'lucide-react';
import { useState, useEffect } from 'react';

const REASONS = [
  "The way your voice makes my mornings feel closer, even through calls.",
  "How you somehow comfort me from miles away when I need you most.",
  "Your patience during days when distance feels harder than usual.",
  "The sound of your laugh that reaches me even across the distance.",
  "How you make me feel loved and safe, no matter how far you are.",
  "Your kindness that I feel even through simple messages.",
  "The way you look at me during video calls like distance doesn't exist.",
  "How you remember small details I share, even from miles away.",
  "Your constant belief in me, even when we can't stand side by side.",
  "The way you say my name that makes my heart feel closer to you.",
  "How one text from you can turn my whole day around.",
  "Your humor that makes distance feel lighter and easier.",
  "The way you help me grow while loving me just as I am.",
  "Your strength that keeps us going despite the distance.",
  "How you've become my comfort, even without physical hugs.",
  "The happiness I feel knowing we share the same sky and sun.",
  "Your passion for life that inspires me every single day.",
  "How you've become a part of my everyday life, even from afar.",
  "The hope I feel when I imagine the day we finally meet.",
  "Simply because you are you, and distance could never change my love for you."
];
const LOVELY_NOTES = [
  { 
    icon: <Coffee className="w-5 h-5" />, 
    text: "Every morning feels warmer knowing you exist somewhere thinking of me too." 
  },

  { 
    icon: <Moon className="w-5 h-5" />, 
    text: "No matter how far we are, we still share the same moon and the same dreams." 
  },

  { 
    icon: <Send className="w-5 h-5" />, 
    text: "Every message from you feels like a hug traveling across the distance." 
  },

  { 
    icon: <Sun className="w-5 h-5" />, 
    text: "Even from miles away, your love reaches me and brightens my darkest days." 
  }
];

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<{ id: number; left: string; delay: string; size: number }[]>([]);

  useEffect(() => {
    const newHearts = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 10}s`,
      size: Math.random() * 20 + 10,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <>
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="floating-heart"
          style={{
            left: heart.left,
            animationDelay: heart.delay,
            fontSize: `${heart.size}px`,
            bottom: '-50px',
          }}
        >
          <Heart fill="currentColor" />
        </div>
      ))}
    </>
  );
};

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<'welcome' | 'notes' | 'reasons' | 'letter' | 'future'>('welcome');
  const [showSurprise, setShowSurprise] = useState(false);

  const renderContent = () => {
    switch (activeSection) {
      case 'welcome':
        return (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="space-y-6"
          >
          <p>Welcome home to this little corner of my heart, my dearest Niyaz.</p>

<p>
This space is something I created with so much love, just for you. 
A place where the miles between us slowly fade away, 
and where every thought I have of you is carefully written and saved. 
Even though distance keeps us apart, my heart has always found its way to you.
</p>

<p>
Every word here carries a piece of my love for you, 
every page holds the feelings I wish I could whisper to you in person. 
Sometimes I wish I could hold your hand, sit beside you, 
and tell you all of this while looking into your eyes. 
But until that day comes, this little world is my way of keeping you close to me.
</p>

<p>
You are not just someone far away on the other side of a screen. 
You are my comfort, my happiness, and the person who makes my days feel brighter. 
Even when the distance feels heavy, your love makes me feel safe and strong.
</p>

<p>
So take your time here, read every word slowly, 
and feel how deeply you are loved. 
Because no matter how far you are, 
you will always have a home in my heart — today, tomorrow, and always. 💜
</p>
          </motion.div>
        );
      case 'notes':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {LOVELY_NOTES.map((note, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-4 rounded-xl border border-rose-300/5 bg-white/5 flex items-start gap-4 text-left"
              >
                <div className="text-rose-400 mt-1">{note.icon}</div>
                <p className="text-xs text-rose-100/80 italic">{note.text}</p>
              </motion.div>
            ))}
          </div>
        );
      case 'reasons':
        return (
          <div className="h-[350px] overflow-y-auto pr-4 custom-scrollbar space-y-4 text-left">
            {REASONS.map((reason, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-4 items-start"
              >
                <span className="text-rose-400 font-serif italic text-base shrink-0">{i + 1}.</span>
                <p className="text-rose-100/90 text-[13px] leading-relaxed">{reason}</p>
              </motion.div>
            ))}
          </div>
        );
      case 'letter':
        return (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="text-left font-serif space-y-6 text-rose-100/95 leading-relaxed text-sm"
          >
            <p className="italic text-purple-300">My dearest Niyaz,</p>

<p className="text-purple-100">
They say distance makes the heart grow fonder, but for me, distance has only made my love for you stronger and more certain with each passing day. 
Every mile between us reminds me how meaningful our connection truly is. 
Even though we cannot sit side by side or share the same place, I still feel your presence in my life every single day.
</p>

<p className="text-purple-100">
You are not just someone I talk to—you are the first person I think of when something happens, whether it’s good or bad. 
When I feel happy, I want to share it with you first. 
When I feel tired or overwhelmed, your words become my comfort. 
Even a simple message from you has the power to change my entire mood and make my day brighter.
</p>

<p className="text-purple-100">
Sometimes, I miss you more than words can explain. 
I miss the moments we haven't even lived yet—the conversations face to face, the laughter we will share, and the memories we will create together someday. 
But even in the middle of missing you, I feel grateful because loving you is one of the most beautiful things that has ever happened to me.
</p>

<p className="text-purple-100">
Thank you for being patient with me, for understanding me, and for staying beside me even when distance makes things difficult. 
Thank you for your kindness, your care, and your constant support. 
You make me feel safe, valued, and deeply loved, even when you are miles away from me.
</p>

<p className="text-purple-100">
This long-distance journey is not always easy, but having you in my life makes every challenge worth it. 
You are my strength when I feel weak, my calm when I feel lost, and my happiness in moments of silence. 
Knowing that you exist somewhere in this world, thinking of me and caring for me, fills my heart with warmth and peace.
</p>

<p className="text-purple-100">
One day, distance will no longer stand between us. 
One day, we will finally meet, sit together, laugh freely, and create the memories we have only imagined until now. 
Until that day comes, I will keep holding onto you with love, patience, and hope, believing in our future together.
</p>

<p className="text-purple-100">
I love you more than words can express, more than distance can measure, and more than time can ever change. 
No matter where life takes us, you will always be my comfort, my happiness, and my home. 
You are not just someone special to me—you are my safe place, my heart, and my forever.
</p>

<p className="italic text-right text-xs text-purple-300 opacity-80">
— Forever yours 💜
</p>
          </motion.div>
        );
      case 'future':
        return (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="space-y-6 text-center italic"
          >
            <Infinity className="w-8 h-8 text-rose-400 mx-auto animate-pulse" />
            <p className="text-lg text-rose-100/90 font-serif leading-relaxed px-4">
  "I dream of the day when 'goodnight' isn't said through a phone screen, 
  but whispered against your skin."
</p>

<p className="text-xs text-rose-100/60 leading-relaxed max-w-sm mx-auto font-sans uppercase tracking-widest">
  A quiet kitchen, a shared morning, no more airports. Just us.
</p>

<p className="text-center text-purple-300 text-xl font-serif mt-8 italic">
  At the end of every page, every thought, and every dream… 
  there is only one truth — I love you, mama. 💜
</p>
            
          </motion.div>
        );
    }
  };

  return (
    <div className="atmosphere relative min-h-screen flex flex-col items-center justify-center p-6 md:p-12 overflow-hidden">
      {/* Immersive Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="ambient-glow-1" />
        <div className="ambient-glow-2" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(159,18,57,0.15),transparent_70%)]" />
      </div>

      <FloatingHearts />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="z-10 w-full max-w-2xl flex flex-col items-center gap-8"
      >
        {/* Decorative Header */}
        <div className="flex flex-col items-center gap-6">
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-rose-300/30 to-transparent" />
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[0.4em] text-[10px] text-rose-300/60 font-semibold"
          >
            Made Exclusively For You
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-serif italic text-4xl md:text-5xl text-white drop-shadow-2xl"
          >
            Hello, Niyaz
          </motion.h1>
        </div>

        {!isOpen ? (
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.08)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="glass-card px-10 py-5 rounded-full font-serif italic text-lg text-rose-100 shadow-2xl border border-rose-300/10 transition-all cursor-pointer"
          >
            Open my heart to you
          </motion.button>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full"
          >
            <div className="absolute -inset-4 border border-rose-200/5 rounded-[2.5rem] pointer-events-none" />
            
            <div className="glass-card p-8 md:p-14 rounded-3xl shadow-2xl relative overflow-hidden flex flex-col items-center min-h-[500px]">
              {/* Floating Heart Icon Accent (Hidden Surprise Toggle) */}
              <button 
                onClick={() => setShowSurprise(!showSurprise)}
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1a0b0b] px-4 py-2 border border-rose-200/5 rounded-full z-20 hover:scale-110 transition-transform cursor-pointer"
              >
                <Heart className={`w-5 h-5 ${showSurprise ? 'text-rose-400 fill-rose-600' : 'text-rose-400/60 fill-transparent'}`} />
              </button>

              <AnimatePresence mode="wait">
                {showSurprise ? (
                  <motion.div
                    key="surprise"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    className="flex flex-col items-center justify-center h-[350px] text-center space-y-6"
                  >
                    <Sparkles className="text-rose-300 w-12 h-12 animate-pulse" />
                    <p className="font-serif italic text-3xl text-rose-100">Surprise!</p>
                    <p className="text-rose-100/90 text-sm italic font-serif leading-relaxed max-w-xs">
                      "I'm thinking of you at this very second. Infinite hugs, sent wirelessly through the ether, just for you."
                    </p>
                    <button 
                      onClick={() => setShowSurprise(false)}
                      className="text-[9px] uppercase tracking-widest text-rose-400 hover:text-rose-200 transition-colors"
                    >
                      Return to the sections
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key={activeSection}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="w-full text-center space-y-8 flex-grow flex flex-col justify-center"
                  >
                    <div className="font-serif text-lg md:text-xl leading-relaxed text-rose-100/90 drop-shadow-md">
                      {renderContent()}
                    </div>

                    <div className="pt-8 flex flex-col items-center gap-6">
                      <div className="text-[10px] uppercase tracking-[0.3em] text-rose-400/50 font-medium font-sans">
                        {activeSection === 'welcome' ? 'Your space. Your thoughts.' : activeSection.toUpperCase()}
                      </div>
                      
                      <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-2">
                        {[
                          { id: 'welcome', icon: <Heart className="w-3.5 h-3.5" />, label: 'Home' },
                          { id: 'notes', icon: <BookOpen className="w-3.5 h-3.5" />, label: 'Notes' },
                          { id: 'reasons', icon: <Stars className="w-3.5 h-3.5" />, label: 'Reasons' },
                          { id: 'letter', icon: <Send className="w-3.5 h-3.5" />, label: 'Letter' },
                          { id: 'future', icon: <Cloud className="w-3.5 h-3.5" />, label: 'Future' }
                        ].map((btn) => (
                          <button
                            key={btn.id}
                            title={btn.label}
                            onClick={() => setActiveSection(btn.id as any)}
                            className={`p-3 rounded-full border transition-all cursor-pointer ${
                              activeSection === btn.id 
                                ? 'bg-rose-500/20 border-rose-400/40 text-rose-300 shadow-[0_0_10px_rgba(244,63,94,0.2)]' 
                                : 'bg-transparent border-rose-300/5 text-rose-100/20 hover:text-rose-100/50 hover:border-rose-300/10'
                            }`}
                          >
                            {btn.icon}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </motion.div>

      <div className="absolute bottom-12 left-12 hidden md:flex items-center gap-4 opacity-40">
        <div className="w-1.5 h-1.5 rounded-full bg-rose-400 shadow-[0_0_8px_rgba(251,113,133,0.6)]" />
        <span className="text-[10px] tracking-[0.2em] uppercase font-sans font-semibold text-rose-100">Connected Across Timezones</span>
      </div>
      
      <div className="absolute top-12 right-12 hidden md:block opacity-30">
        <span className="text-[10px] tracking-[0.2em] uppercase font-sans font-semibold text-rose-100">Distance: 0 Miles Inside This Screen</span>
      </div>

      <footer className="absolute bottom-8 md:hidden text-[9px] uppercase tracking-[0.2em] opacity-30 text-rose-100">
        Bridging the distance
      </footer>
    </div>
  );
}
