import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Activity, 
  Award, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  HeartPulse, 
  ChevronDown, 
  ChevronUp, 
  Menu, 
  X, 
  ExternalLink
} from 'lucide-react';

import { SPECIALTIES, RECOVERY_CASES, TIMELINE_EVENTS, TESTIMONIALS, FAQ_ITEMS } from './data';
import PosturalSlider from './components/PosturalSlider';
import ConsultationForm from './components/ConsultationForm';

export default function App() {
  const [activeCase, setActiveCase] = useState(RECOVERY_CASES[0]);
  const [faqExpanded, setFaqExpanded] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleFaq = (id: string) => {
    if (faqExpanded === id) {
      setFaqExpanded(null);
    } else {
      setFaqExpanded(id);
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1C1917] selection:bg-[#8C7A6B] selection:text-[#FAF9F6] font-sans antialiased overflow-x-hidden">
      
      {/* HEADER & NAVIGATION */}
      <header className="sticky top-0 bg-[#FDFBF7]/90 backdrop-blur-md z-40 border-b border-[#E7E2D9]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          
          {/* Logo / Brand */}
          <div className="cursor-pointer" onClick={() => scrollToSection('hero')}>
            <span className="font-serif text-2xl tracking-normal font-light text-[#1C1917]">
              Vishwa<span className="text-[#8C7A6B] italic font-medium">.</span>
            </span>
            <span className="block font-mono text-[8px] text-[#8C7A6B] uppercase tracking-widest mt-0.5">
              Healthcare — Spine & Joint Rehab
            </span>
          </div>

          {/* Desktop Navigation Anchors */}
          <nav className="hidden md:flex gap-10 items-center">
            <button 
              onClick={() => scrollToSection('philosophy')} 
              className="font-mono text-xs text-[#57534E] uppercase tracking-wider hover:text-[#1C1917] transition-colors"
            >
              Philosophy
            </button>
            <button 
              onClick={() => scrollToSection('cases')} 
              className="font-mono text-xs text-[#57534E] uppercase tracking-wider hover:text-[#1C1917] transition-colors"
            >
              Recovery Cases
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="font-mono text-xs text-[#57534E] uppercase tracking-wider hover:text-[#1C1917] transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('doctors')} 
              className="font-mono text-xs text-[#57534E] uppercase tracking-wider hover:text-[#1C1917] transition-colors"
            >
              The Chief
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="font-mono text-xs text-[#57534E] uppercase tracking-wider hover:text-[#1C1917] transition-colors"
            >
              FAQ
            </button>
          </nav>

          {/* CTA Link - Desktop */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('consultation')}
              className="font-mono text-xs text-[#1C1917] hover:text-[#8C7A6B] uppercase tracking-widest border-b border-[#1C1917] pb-1 hover:border-[#8C7A6B] transition-all"
            >
              Request Consultation
            </button>
          </div>

          {/* Mobile Hamburguer Trigger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#1C1917] p-2 hover:bg-[#FAF8F5] rounded transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-[#FAF9F6] border-b border-[#E7E2D9] overflow-hidden"
            >
              <div className="px-6 py-8 flex flex-col gap-6">
                <button 
                  onClick={() => scrollToSection('philosophy')} 
                  className="font-mono text-left text-sm text-[#1C1917] uppercase tracking-wider"
                >
                  Philosophy
                </button>
                <button 
                  onClick={() => scrollToSection('cases')} 
                  className="font-mono text-left text-sm text-[#1C1917] uppercase tracking-wider"
                >
                  Recovery Cases
                </button>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="font-mono text-left text-sm text-[#1C1917] uppercase tracking-wider"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('doctors')} 
                  className="font-mono text-left text-sm text-[#1C1917] uppercase tracking-wider"
                >
                  The Chief
                </button>
                <button 
                  onClick={() => scrollToSection('faq')} 
                  className="font-mono text-left text-sm text-[#1C1917] uppercase tracking-wider"
                >
                  FAQ
                </button>
                <div className="border-t border-[#E7E2D9] pt-6 mt-2">
                  <button
                    onClick={() => scrollToSection('consultation')}
                    className="w-full bg-[#1C1917] text-white py-3.5 px-4 font-mono text-xs uppercase tracking-widest text-center"
                  >
                    Request Consultation
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION */}
      <section id="hero" className="relative py-16 lg:py-28 overflow-hidden border-b border-[#E7E2D9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Title & Description Intro */}
            <div className="lg:col-span-7 flex flex-col items-start gap-6 lg:gap-8">
              <span className="font-mono text-[10px] text-[#8C7A6B] uppercase tracking-widest block font-semibold">
                Physiotherapy, Chiropractic & Osteopathy — Est. 2015
              </span>
              
              <h1 className="font-serif text-5xl md:text-7xl font-light text-[#1C1917] leading-[1.1] tracking-tight">
                The quiet <br className="hidden md:inline" />
                <span className="font-serif italic font-light text-[#8C7A6B]">restoration</span> <br />
                of human motion.
              </h1>

              <p className="font-sans text-[#57534E] text-[15px] md:text-lg font-light leading-relaxed max-w-xl">
                Vishwa Health Care — a decade of clinical mastery in spinal decompression, corrective biomechanics, dry needling, and sports rehabilitation. Science-backed, manual physical therapies designed to make you move as nature originally intended.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
                <button
                  onClick={() => scrollToSection('consultation')}
                  className="bg-[#1C1917] text-[#FAF9F6] border border-[#1C1917] px-8 py-4 font-mono text-xs tracking-widest uppercase transition-all duration-300 hover:bg-transparent hover:text-[#1C1917]"
                >
                  Request Consultation →
                </button>
                <button
                  onClick={() => scrollToSection('cases')}
                  className="bg-transparent text-[#1C1917] border border-[#E7E2D9] px-8 py-4 font-mono text-xs tracking-widest uppercase transition-all duration-300 hover:bg-[#FAF8F5] hover:border-[#1C1917]"
                >
                  See Recovery Cases
                </button>
              </div>
            </div>

            {/* Dynamic Vector Poster representing posture alignment and restoration */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[400px] aspect-[4/5] bg-[#FAF8F5] border border-[#E7E2D9] rounded p-8 shadow-sm flex flex-col justify-between overflow-hidden">
                
                {/* Visual Graphic Representation of body core mechanics */}
                <div className="absolute inset-0 opacity-[0.03] select-none pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
                    <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.5" />
                    <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.5" />
                  </svg>
                </div>

                <div className="flex justify-between items-start z-10">
                  <span className="font-mono text-[9px] text-[#8C7A6B] uppercase tracking-wider">Clinical Blueprint</span>
                  <HeartPulse className="text-[#8C7A6B]" size={20} />
                </div>

                {/* Simulated Wireframe Posture Analysis */}
                <div className="my-8 flex justify-center items-center h-48 relative">
                  {/* Spine core aligned vector */}
                  <svg viewBox="0 0 200 200" className="w-full h-full text-[#1C1917]">
                    {/* Concentric rings of balance */}
                    <circle cx="100" cy="100" r="80" fill="none" stroke="#E7E2D9" strokeWidth="1" />
                    <circle cx="100" cy="100" r="50" fill="none" stroke="#E7E2D9" strokeWidth="0.5" strokeDasharray="3,3" />

                    {/* Skull outline */}
                    <circle cx="100" cy="40" r="16" fill="none" stroke="#8C7A6B" strokeWidth="1.5" />
                    
                    {/* Spine column aligned */}
                    <path d="M 100 56 L 100 150" fill="none" stroke="#1C1917" strokeWidth="3" strokeLinecap="round" />
                    
                    {/* Shoulders level */}
                    <path d="M 70 70 L 130 70" fill="none" stroke="#8C7A6B" strokeWidth="2" strokeLinecap="round" />
                    {/* Pelvis level */}
                    <path d="M 75 140 L 125 140" fill="none" stroke="#8C7A6B" strokeWidth="2.5" strokeLinecap="round" />

                    {/* Activation nodes */}
                    <circle cx="100" cy="70" r="4" fill="#10B981" />
                    <circle cx="100" cy="105" r="4" fill="#10B981" />
                    <circle cx="100" cy="140" r="4" fill="#10B981" />
                  </svg>
                </div>

                <div className="flex flex-col gap-1 z-10">
                  <span className="font-mono text-[10px] text-[#57534E] uppercase tracking-widest">Active Restoration Method</span>
                  <p className="font-serif text-lg italic text-[#8C7A6B]">Skeletal Balance, Muscular Sympatry.</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STATISTICS BANNER */}
      <section className="bg-[#FAF8F5] border-b border-[#E7E2D9] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-[#E7E2D9]">
            
            <div className="flex flex-col gap-1.5 pt-6 lg:pt-0">
              <span className="font-serif text-4xl lg:text-5xl font-light text-[#1C1917]">11+</span>
              <span className="font-mono text-[9px] text-[#8C7A6B] uppercase tracking-widest font-semibold">
                Years in Clinical Practice
              </span>
            </div>

            <div className="flex flex-col gap-1.5 pt-6 lg:pt-0 lg:pl-8">
              <span className="font-serif text-4xl lg:text-5xl font-light text-[#1C1917]">8,500+</span>
              <span className="font-mono text-[9px] text-[#8C7A6B] uppercase tracking-widest font-semibold">
                Patients Fully Recovered
              </span>
            </div>

            <div className="flex flex-col gap-1.5 pt-6 lg:pt-0 lg:pl-8">
              <span className="font-serif text-4xl lg:text-5xl font-light text-[#1C1917]">16+</span>
              <span className="font-mono text-[9px] text-[#8C7A6B] uppercase tracking-widest font-semibold">
                Advanced Chiropractic Protocols
              </span>
            </div>

            <div className="flex flex-col gap-1.5 pt-6 lg:pt-0 lg:pl-8">
              <span className="font-serif text-3xl lg:text-4xl font-light text-[#1C1917] leading-none">Ashoka Garden</span>
              <span className="font-mono text-[9px] text-[#8C7A6B] uppercase tracking-widest font-semibold">
                Elite Clinic Location — Bhopal, India
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 1 — CLINICAL PHILOSOPHY */}
      <section id="philosophy" className="py-20 bg-[#FDFBF7] border-b border-[#E7E2D9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl flex flex-col gap-6">
            <span className="font-mono text-[10px] text-[#8C7A6B] uppercase tracking-widest font-semibold">
              01 — Clinical Philosophy
            </span>
            
            <h2 className="font-serif text-3xl md:text-5xl font-light text-[#1C1917] leading-normal italic">
              "Therapy, when done well, is liberating. Our work is not simply to treating mechanical pain, but to return patients coordinates to their core anatomical draft — to its symmetry, to its alignment, and to the fluid range of movement it already remembers."
            </h2>

            <div className="h-[1px] w-20 bg-[#8C7A6B] my-2"></div>

            <div className="flex flex-col">
              <span className="font-sans font-medium text-base text-[#1C1917]">
                Dr. Anurag Sahu, PT
              </span>
              <span className="font-mono text-[10px] text-[#78716C] uppercase tracking-wider">
                Founder & Chief Orthopedic Manual Therapist
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — PORTFOLIO OF RECOVERY (INTERACTIVE SLIDERS CASE STUDY) */}
      <section id="cases" className="py-20 bg-[#FAF9F6] border-b border-[#E7E2D9]">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section titles */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12">
            <div>
              <span className="font-mono text-[10px] text-[#8C7A6B] uppercase tracking-widest block mb-1 font-semibold">
                02 — Pathological Recovery Case Studies
              </span>
              <h2 className="font-serif text-4xl lg:text-6xl font-light text-[#1C1917]">
                Drag to reveal<span className="text-[#8C7A6B] italic font-light">.</span>
              </h2>
              <p className="font-mono text-[11px] text-[#78716C] uppercase tracking-wider mt-1.5">
                The clinical outcome is the only metric of evaluation.
              </p>
            </div>

            {/* CASE NAV SWITCH TABS */}
            <div className="flex flex-wrap gap-2.5 bg-white border border-[#E7E2D9] p-1.5 rounded-sm">
              {RECOVERY_CASES.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveCase(item)}
                  className={`px-4 py-2 font-mono text-[10px] uppercase tracking-wider transition-all rounded-sm cursor-pointer ${
                    activeCase.id === item.id 
                      ? 'bg-[#1C1917] text-white' 
                      : 'bg-transparent text-[#78716C] hover:text-[#1C1917]'
                  }`}
                  id={`case-tab-${item.id}`}
                >
                  {item.type === 'spine' ? 'Postural Spinal alignment' : item.type === 'shoulder' ? 'Frozen Shoulder rot' : 'Knee flex stabilization'}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Slider Platform */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Interactive Slider box component */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCase.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  <PosturalSlider caseData={activeCase} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Case evaluation summary details card */}
            <div className="lg:col-span-5 flex flex-col gap-6 lg:pl-6">
              <span className="font-mono text-[10px] text-[#8C7A6B] uppercase tracking-widest">
                Active clinical assessment
              </span>

              <h3 className="font-serif text-3xl md:text-4xl font-light text-[#1C1917] leading-tight">
                {activeCase.title}
              </h3>

              <div className="h-[1px] bg-[#E7E2D9] w-full"></div>

              <div className="flex flex-col gap-1 text-sm text-[#57534E] font-light leading-relaxed">
                <span className="font-semibold text-[#1C1917] font-mono text-[10px] uppercase tracking-wider mb-1 block text-neutral-400">Diagnosis Overview</span>
                {activeCase.description}
              </div>

              <div className="bg-[#FDFBF7] border border-[#E7E2D9] rounded p-5 flex flex-col gap-3">
                <span className="font-mono text-[10px] text-[#8C7A6B] uppercase tracking-widest font-semibold block">Restorative Technique</span>
                <p className="font-sans text-xs text-[#57534E] leading-relaxed">
                  Combining precision manual articulation, computer-controlled traction mechanics, and targeted isometric training load vectors. Focuses on decompresing root neural networks.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 3 — CLINICAL SERVICES / SPECIALTIES */}
      <section id="services" className="py-20 bg-[#FDFBF7] border-b border-[#E7E2D9]">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-2xl mb-16">
            <span className="font-mono text-[10px] text-[#8C7A6B] uppercase tracking-widest block mb-1 font-semibold">
              03 — Specialized Clinical Frameworks
            </span>
            <h2 className="font-serif text-4xl lg:text-6xl font-light text-[#1C1917]">
              Treating underlying <br />
              <span className="font-serif italic font-light text-[#8C7A6B]">mechanical dysfunction</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SPECIALTIES.map((spec) => (
              <div 
                key={spec.id}
                className="group border border-[#E7E2D9] bg-white p-8 rounded shadow-xs relative overflow-hidden transition-all duration-300 hover:shadow-md hover:border-[#8C7A6B] flex flex-col gap-6"
                id={`specialty-box-${spec.id}`}
              >
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 bg-[#FAF8F5] border border-[#E7E2D9] rounded-full flex items-center justify-center text-[#8C7A6B] group-hover:bg-[#8C7A6B] group-hover:text-white group-hover:border-[#8C7A6B] transition-all">
                    {spec.iconName === 'Activity' ? <Activity size={18} /> : 
                     spec.iconName === 'Zap' ? <Award size={18} /> : 
                     spec.iconName === 'BrainCircuit' ? <HeartPulse size={18} /> : <HeartPulse size={18} />}
                  </div>
                  <span className="font-mono text-[10px] text-[#FAF9F6] bg-[#8C7A6B] px-2 py-0.5 rounded-xs opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider">
                    Core service
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-serif text-2xl font-light text-[#1C1917] group-hover:text-[#8C7A6B] transition-colors">
                    {spec.title}
                  </h3>
                  <p className="font-sans text-xs text-[#78716C] leading-relaxed font-light">
                    {spec.description}
                  </p>
                </div>

                <div className="border-t border-[#FAF8F5] pt-4 mt-1">
                  <span className="font-mono text-[9px] text-[#8C7A6B] uppercase tracking-wider block font-semibold mb-2">Restorative outcomes</span>
                  <ul className="flex flex-col gap-1.5">
                    {spec.benefits.map((ben, idx) => (
                      <li key={idx} className="flex items-center gap-2 font-sans font-light text-xs text-[#57534E]">
                        <span className="w-1 h-1 rounded-full bg-[#8C7A6B] shrink-0" />
                        {ben}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 4 — CHIEF CLINICIANS & CREDENTIALS BIOGRAPHY */}
      <section id="doctors" className="py-20 bg-[#FAF9F6] border-b border-[#E7E2D9]">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Bio Column */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              <div>
                <span className="font-mono text-[10px] text-[#8C7A6B] uppercase tracking-widest block mb-1 font-semibold">
                  04 — Chief Clinicians Profile
                </span>
                <h2 className="font-serif text-4xl lg:text-6xl font-light text-[#1C1917] leading-tight">
                  A healer's first <br />
                  <span className="font-serif italic font-light text-[#8C7A6B]">language</span> is anatomy.
                </h2>
              </div>

              <div className="font-sans text-sm text-[#57534E] font-light leading-relaxed flex flex-col gap-5 max-w-xl">
                <p>
                  Vishwa Healthcare was conceptualized by <span className="font-medium text-[#1C1917]">Dr. Anurag Sahu, PT</span>, to replace traditional, passive clinical physiotherapy with advanced, active orthopedic manual decompression and neuro-muscular realignment.
                </p>
                <p>
                  Having certified in global osteopathic and chiropractic disciplines, Dr. Sahu believes in systemic diagnosis — analyzing a patient’s overall skeletal symmetry rather than solely focusing on local pain zones. Inside our Bhopal facility, we utilize state-of-the-art range of movement analysis systems combined with elite manually controlled spine decompressors.
                </p>
                <p>
                  Additionally, <span className="font-medium text-[#1C1917]">Dr. Vaishnavi Sahu, PT</span> (Consultant Neurological Physiotherapist), manages complex neuro-rehabilitation matrices, cerebral blood patterns, sciatic release routines, and postural re-education grids.
                </p>
              </div>

              {/* Central India Physio Journal Publications Lists */}
              <div className="border-t border-[#E7E2D9] pt-8 mt-4 flex flex-col gap-5">
                <span className="font-mono text-[10px] text-[#8C7A6B] uppercase tracking-widest font-semibold block">Selected Press & Publications</span>
                
                <div className="flex flex-col gap-4 font-mono text-[11px] text-[#57534E]">
                  <div className="flex justify-between border-b border-dashed border-[#E7E2D9] pb-2">
                    <span className="truncate pr-4 text-[#1C1917]">Central India Physio Journal: Decompress and Dry Needling for Lumbago Postures</span>
                    <span className="shrink-0 text-[#8C7A6B]">2024</span>
                  </div>
                  <div className="flex justify-between border-b border-dashed border-[#E7E2D9] pb-2">
                    <span className="truncate pr-4 text-[#1C1917]">All India Manual Therapy Congress: Scoliotic curvature mechanical rectification</span>
                    <span className="shrink-0 text-[#8C7A6B]">2023</span>
                  </div>
                  <div className="flex justify-between border-b border-dashed border-[#E7E2D9] pb-2">
                    <span className="truncate pr-4 text-[#1C1917]">Medical News India: Progressive mechanical loading protocols for knee joint cartilage</span>
                    <span className="shrink-0 text-[#8C7A6B]">2022</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Column */}
            <div className="lg:col-span-5 bg-[#FDFBF7] border border-[#E7E2D9] rounded p-8 flex flex-col gap-6">
              <span className="font-mono text-[11px] text-[#8C7A6B] uppercase tracking-widest font-bold">Clinical Career & Education Timeline</span>
              
              <div className="flex flex-col gap-8 relative border-l border-[#8C7A6B]/20 ml-2.5 pl-6">
                {TIMELINE_EVENTS.map((evt, idx) => (
                  <div key={idx} className="relative flex flex-col gap-1.5" id={`timeline-evt-${evt.year}`}>
                    {/* Ring Node on Left Border */}
                    <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 bg-[#FAF9F6] border-2 border-[#8C7A6B] rounded-full" />
                    
                    <span className="font-mono text-xs font-bold text-[#8C7A6B] leading-none">
                      {evt.year}
                    </span>
                    <h4 className="font-sans font-medium text-sm text-[#1C1917]">
                      {evt.title}
                    </h4>
                    <span className="font-mono text-[9px] text-[#A19E95] tracking-wide block uppercase leading-none">
                      {evt.institution}
                    </span>
                    <p className="font-sans text-xs text-[#78716C] font-light leading-relaxed mt-1">
                      {evt.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 5 — TESTIMONIALS */}
      <section className="py-20 bg-[#FDFBF7] border-b border-[#E7E2D9]">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-[10px] text-[#8C7A6B] uppercase tracking-widest block mb-1 font-semibold">
              Patient Testimonials & Reviews
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-light text-[#1C1917]">
              Stories of <span className="font-serif italic font-light text-[#8C7A6B]">movement completed</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((test) => (
              <div 
                key={test.id}
                className="bg-[#FAF8F5] border border-[#E7E2D9] rounded p-8 flex flex-col justify-between gap-6 relative shadow-xs"
                id={`testimonial-${test.id}`}
              >
                <div className="flex flex-col gap-3">
                  <span className="font-mono text-[11px] text-[#8C7A6B] font-semibold">{test.condition}</span>
                  <p className="font-serif text-base italic text-[#57534E] leading-relaxed">
                    "{test.quote}"
                  </p>
                </div>

                <div className="border-t border-[#E7E2D9] pt-4 mt-2 flex justify-between items-end">
                  <div className="flex flex-col">
                    <span className="font-sans font-medium text-xs text-[#1C1917]">{test.patientName}</span>
                    <span className="font-sans text-[10px] text-[#A19E95]">{test.location}</span>
                  </div>
                  <span className="font-mono text-[9px] bg-white border border-[#E7E2D9] text-[#8C7A6B] px-2 py-0.5 rounded uppercase tracking-wider shadow-2xs">
                    {test.recoveryPeriod}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 6 — PATIENT FAQS */}
      <section id="faq" className="py-20 bg-[#FAF9F6] border-b border-[#E7E2D9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Header left sticky detail */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <span className="font-mono text-[11px] text-[#8C7A6B] uppercase tracking-widest block mb-1 font-bold">
                Clinical Inquiries
              </span>
              <h2 className="font-serif text-4xl lg:text-5xl font-light text-[#1C1917] leading-tight">
                Frequently <br />
                asked questions<span className="text-[#8C7A6B] italic font-light">.</span>
              </h2>
              <p className="font-sans text-xs text-[#78716C] leading-relaxed font-light mt-4 max-w-sm">
                If you have other doubts regarding medical reports, pelvic tilt measurements, chiropractic click tools, or specialized dry needling triggers, feel free to submit a query below or contact the front desk.
              </p>
              
              <div className="h-[1px] bg-[#E7E2D9] w-20 my-6"></div>

              <div className="bg-white border border-[#E7E2D9] rounded p-5 flex items-center gap-4 max-w-sm">
                <Award className="text-[#8C7A6B] shrink-0" size={24} />
                <span className="font-sans text-xs text-[#57534E] font-light leading-tight">
                  All clinical routines align with clinical physical therapy guidelines.
                </span>
              </div>
            </div>

            {/* Accordion list details */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              {FAQ_ITEMS.map((faq) => {
                const isOpen = faqExpanded === faq.id;
                return (
                  <div 
                    key={faq.id}
                    className="bg-white border border-[#E7E2D9] rounded overflow-hidden shadow-2xs transition-colors"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 hover:bg-[#FAF8F5] transition-colors cursor-pointer"
                      id={`faq-btn-${faq.id}`}
                    >
                      <h3 className="font-sans font-medium text-sm text-[#1C1917]">
                        {faq.question}
                      </h3>
                      {isOpen ? (
                        <ChevronUp size={16} className="text-[#8C7A6B] shrink-0" />
                      ) : (
                        <ChevronDown size={16} className="text-[#8C7A6B] shrink-0" />
                      )}
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden bg-[#FAF9F6] border-t border-[#FAF8F5]"
                        >
                          <div className="px-6 py-5 font-sans text-xs text-[#78716C] leading-relaxed font-light">
                            {faq.answer}
                            <div className="mt-3 flex gap-2">
                              <span className="font-mono text-[9px] bg-white border border-[#E7E2D9] text-[#8C7A6B] px-1.5 py-0.5 rounded uppercase tracking-wider">
                                {faq.category}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 7 — CONSULTATION REQUEST FORM */}
      <section id="consultation" className="py-20 bg-[#FDFBF7] border-b border-[#E7E2D9]">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-[10px] text-[#8C7A6B] uppercase tracking-widest block mb-1 font-semibold">
              05 — Request Consultation slot
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-light text-[#1C1917]">
              Request a private <br />
              <span className="font-serif italic font-light text-[#8C7A6B]">consultation</span>.
            </h2>
            <p className="font-mono text-[10px] text-[#78716C] uppercase tracking-widest mt-1.5">
              Begin your path back to fluid, anatomical excellence.
            </p>
          </div>

          {/* Form and submitted listings */}
          <ConsultationForm />

        </div>
      </section>

      {/* FOOTER CO-ORDINATES */}
      <footer className="bg-[#1C1917] text-[#A19E95] py-16 font-sans">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-[#3C3633] pb-12 mb-12">
            
            {/* Branding detail */}
            <div className="md:col-span-4 flex flex-col gap-4">
              <h2 className="font-serif text-3xl font-light text-white tracking-normal">
                Vishwa<span className="text-[#8C7A6B] italic font-medium">.</span>
              </h2>
              <p className="font-sans text-xs font-light leading-relaxed max-w-sm text-[#78716C]">
                Dedicated premium orthopedic rehabilitation, chiropractics, manual decompression, and dry needling therapies in Central India. Combining clinical diagnostics with targeted kinetic re-education.
              </p>
            </div>

            {/* Address 1: Bhopal Headquarters */}
            <div className="md:col-span-4 flex flex-col gap-4">
              <span className="font-mono text-[10px] text-[#8C7A6B] uppercase tracking-widest font-bold block">
                Bhopal Headquarters Clinic
              </span>
              <div className="flex flex-col gap-2 text-xs font-light text-neutral-300">
                <div className="flex items-start gap-2">
                  <MapPin size={14} className="text-[#8C7A6B] shrink-0 mt-0.5" />
                  <span>
                    80 Feet Rd, Ashoka Vihar, <br />
                    Ashoka Garden, Bhopal, <br />
                    Madhya Pradesh 462023
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={13} className="text-[#8C7A6B] shrink-0" />
                  <a href="tel:+917554270077" className="hover:text-white transition-colors">+91 755 427 0077</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={13} className="text-[#8C7A6B] shrink-0" />
                  <a href="mailto:consult@vishwahealth.com" className="hover:text-white transition-colors">consult@vishwahealth.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={13} className="text-[#8C7A6B] shrink-0" />
                  <span>Tuesday — Sunday, 09:00 AM — 08:30 PM (Mon Closed)</span>
                </div>
              </div>
            </div>

            {/* Address 2: Digital Wellness Platform */}
            <div className="md:col-span-4 flex flex-col gap-4">
              <span className="font-mono text-[10px] text-[#8C7A6B] uppercase tracking-widest font-bold block">
                Digital Rehab & Posture Consults
              </span>
              <div className="flex flex-col gap-2 text-xs font-light text-neutral-300">
                <p className="text-[#78716C] leading-relaxed">
                  We schedule localized assessment video consults for spinal alignment, posture check, and core re-education routines for patients across other cities in Central India.
                </p>
                <div className="flex items-center gap-2">
                  <ExternalLink size={13} className="text-[#8C7A6B] shrink-0" />
                  <button onClick={() => scrollToSection('consultation')} className="hover:text-white text-[#8C7A6B] transition-colors font-mono uppercase tracking-wider text-[10px] text-left">
                    Apply for Digital Review →
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Legal copyrights division */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-[9px] text-[#78716C] uppercase tracking-widest">
            <div>
              © {new Date().getFullYear()} Vishwa Healthcare Studio. All rights reserved.
            </div>
            <div className="flex gap-6 items-center">
              <span>All consultations are conducted by Board Certified Manual Physiotherapists</span>
              <span className="text-[#8C7A6B]">|</span>
              <button onClick={() => scrollToSection('hero')} className="hover:text-white transition-colors cursor-pointer">
                Top ↑
              </button>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
