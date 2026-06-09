import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { MoveHorizontal } from 'lucide-react';
import { RecoveryCase } from '../types';

interface PosturalSliderProps {
  caseData: RecoveryCase;
}

export default function PosturalSlider({ caseData }: PosturalSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 to 100
  const isDragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging.current) return;
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => handleMouseMove(e);
    const handleGlobalMouseUp = () => handleMouseUp();
    const handleGlobalTouchMove = (e: TouchEvent) => handleTouchMove(e);
    const handleGlobalTouchStart = () => { isDragging.current = true; };

    window.addEventListener('mousemove', handleGlobalMouseMove);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    window.addEventListener('touchmove', handleGlobalTouchMove, { passive: false });
    window.addEventListener('touchend', handleGlobalMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('touchmove', handleGlobalTouchMove);
      window.removeEventListener('touchend', handleGlobalMouseUp);
    };
  }, []);

  // Custom SVG Wireframes for Each Case Type
  const renderVisuals = () => {
    const width = 600;
    const height = 450;

    // Helper: Clapped posture or restricted range
    if (caseData.type === 'spine') {
      return (
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full bg-[#1C1A17]" id="spine-svg">
          {/* Grid lines for clinical analysis look */}
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2D2825" strokeWidth="0.5" />
            </pattern>
            <clipPath id={`clip-before-${caseData.id}`}>
              <rect x="0" y="0" width={`${sliderPosition}%`} height="100%" />
            </clipPath>
            <clipPath id={`clip-after-${caseData.id}`}>
              <rect x={`${sliderPosition}%`} y="0" width={`${100 - sliderPosition}%`} height="100%" />
            </clipPath>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* Reference Centerline */}
          <line x1={width / 2} y1="20" x2={width / 2} y2={height - 20} stroke="#443E38" strokeDasharray="5,5" strokeWidth="1" />

          {/* BEFORE SIDE (Scoliosis / Kyphosis / Pain indicators) */}
          <g clipPath={`url(#clip-before-${caseData.id})`}>
            {/* Kyphosis (Slouching spinal column) */}
            <path
              d="M 300 60 Q 240 180 320 280 T 270 410"
              fill="none"
              stroke="#EF4444"
              strokeWidth="6"
              strokeLinecap="round"
              className="opacity-90"
            />
            {/* Skull / Cervical compression */}
            <circle cx="290" cy="50" r="22" stroke="#EF4444" strokeWidth="3" fill="#1C1A17" />
            {/* Pelvis tilted outline */}
            <path d="M 230 415 L 310 400" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" />
            
            {/* Pain / Tension hotspots */}
            <circle cx="255" cy="180" r="15" className="fill-red-500/20 stroke-red-500 animate-pulse" strokeWidth="1" />
            <circle cx="310" cy="270" r="20" className="fill-red-500/10 stroke-red-500 animate-pulse" strokeWidth="1" />
            <text x="60" y="80" fill="#EF4444" className="font-mono text-xs tracking-widest uppercase">POSTURE ASSESSMENT: DEVIATED</text>
            <text x="60" y="105" fill="#EF4444" className="font-sans text-lg font-light italic">Spinal Kyphosis + Pelmic Tilt</text>
            <text x="60" y="130" fill="#78716C" className="font-mono text-xs">L4-L5 Compression Hotspot</text>
          </g>

          {/* AFTER SIDE (Healthy, aligned alignment) */}
          <g clipPath={`url(#clip-after-${caseData.id})`}>
            {/* Aligned Spinal column */}
            <path
              d="M 300 60 Q 303 180 297 280 T 300 410"
              fill="none"
              stroke="#10B981"
              strokeWidth="6"
              strokeLinecap="round"
              className="opacity-95"
            />
            {/* Skull balanced */}
            <circle cx="300" cy="50" r="22" stroke="#10B981" strokeWidth="3" fill="#1C1A17" />
            {/* Pelvis level */}
            <path d="M 260 410 L 340 410" stroke="#10B981" strokeWidth="4" strokeLinecap="round" />

            {/* Health / Release flow indicators */}
            <circle cx="300" cy="180" r="10" className="fill-emerald-500/20 stroke-emerald-400" strokeDasharray="3,3" strokeWidth="1" />
            <circle cx="297" cy="280" r="12" className="fill-emerald-500/20 stroke-emerald-400" strokeDasharray="3,3" strokeWidth="1" />
            <text x="320" y="80" fill="#10B981" className="font-mono text-xs tracking-widest uppercase text-right">CLINICAL STABILIZATION: ALIGNED</text>
            <text x="320" y="105" fill="#10B981" className="font-sans text-lg font-light italic text-right">Optimal Decompress</text>
            <text x="320" y="130" fill="#A3A3A3" className="font-mono text-xs">Decompressed Nerve Passage</text>
          </g>
        </svg>
      );
    }

    if (caseData.type === 'shoulder') {
      return (
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full bg-[#1C1A17]" id="shoulder-svg">
          <defs>
            <pattern id="grid-2" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2D2825" strokeWidth="0.5" />
            </pattern>
            <clipPath id={`clip-before-${caseData.id}`}>
              <rect x="0" y="0" width={`${sliderPosition}%`} height="100%" />
            </clipPath>
            <clipPath id={`clip-after-${caseData.id}`}>
              <rect x={`${sliderPosition}%`} y="0" width={`${100 - sliderPosition}%`} height="100%" />
            </clipPath>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-2)" />

          {/* Reference Centerline */}
          <line x1={width / 2} y1="20" x2={width / 2} y2={height - 20} stroke="#443E38" strokeDasharray="5,5" strokeWidth="1" />

          {/* BEFORE SIDE (Frozen Shoulder / Restricted 45 Degrees) */}
          <g clipPath={`url(#clip-before-${caseData.id})`}>
            {/* Body wireframe */}
            <path d="M 300 220 L 300 420" stroke="#443E38" strokeWidth="4" />
            <path d="M 230 220 L 370 220" stroke="#443E38" strokeWidth="6" strokeLinecap="round" />
            {/* Restricted Left arm at 45 degree angle */}
            <line x1="230" y1="220" x2="160" y2="280" stroke="#EF4444" strokeWidth="6" strokeLinecap="round" />
            {/* Capsule redness & trigger points */}
            <circle cx="230" cy="220" r="18" className="fill-red-500/20 stroke-red-500 animate-pulse" strokeWidth="1" />
            <path d="M 160 280 M 150 250 A 40 40 0 0 0 190 310" fill="none" stroke="#EF4444" strokeWidth="2" strokeDasharray="3,3" />

            <text x="60" y="80" fill="#EF4444" className="font-mono text-xs tracking-widest uppercase">SHOULDER ROM: RESTRICTED</text>
            <text x="60" y="105" fill="#EF4444" className="font-sans text-lg font-light italic">Adhesive Capsulitis (Frozen)</text>
            <text x="60" y="130" fill="#78716C" className="font-mono text-xs">Maximum Elevation: 45°</text>
          </g>

          {/* AFTER SIDE (Restored Joint Mechanics / 175 Degrees) */}
          <g clipPath={`url(#clip-after-${caseData.id})`}>
            {/* Body wireframe */}
            <path d="M 300 220 L 300 420" stroke="#443E38" strokeWidth="4" />
            <path d="M 230 220 L 370 220" stroke="#443E38" strokeWidth="6" strokeLinecap="round" />
            {/* Fully restored Right Arm at 175 degrees elevation */}
            <line x1="370" y1="220" x2="385" y2="70" stroke="#10B981" strokeWidth="6" strokeLinecap="round" />
            {/* Healthy joint release marker */}
            <circle cx="370" cy="220" r="14" className="fill-emerald-500/10 stroke-emerald-400" strokeWidth="1" />
            <path d="M 370 220 M 370 120 A 100 100 0 0 1 470 220" fill="none" stroke="#10B981" strokeWidth="2" strokeDasharray="4,4" />

            <text x="320" y="80" fill="#10B981" className="font-mono text-xs tracking-widest uppercase text-right">GLENOHUMERAL: RESTORED</text>
            <text x="320" y="105" fill="#10B981" className="font-sans text-lg font-light italic text-right">Fluid Rotation Range</text>
            <text x="320" y="130" fill="#A3A3A3" className="font-mono text-xs">Full Abduction ROM: 175°</text>
          </g>
        </svg>
      );
    }

    if (caseData.type === 'knee') {
      return (
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full bg-[#1C1A17]" id="knee-svg">
          <defs>
            <pattern id="grid-3" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2D2825" strokeWidth="0.5" />
            </pattern>
            <clipPath id={`clip-before-${caseData.id}`}>
              <rect x="0" y="0" width={`${sliderPosition}%`} height="100%" />
            </clipPath>
            <clipPath id={`clip-after-${caseData.id}`}>
              <rect x={`${sliderPosition}%`} y="0" width={`${100 - sliderPosition}%`} height="100%" />
            </clipPath>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-3)" />

          {/* Reference Centerline */}
          <line x1={width / 2} y1="20" x2={width / 2} y2={height - 20} stroke="#443E38" strokeDasharray="5,5" strokeWidth="1" />

          {/* BEFORE SIDE (Knee Injury Post-Op stiffness) */}
          <g clipPath={`url(#clip-before-${caseData.id})`}>
            {/* Femur bone outline */}
            <line x1="280" y1="120" x2="280" y2="230" stroke="#443E38" strokeWidth="14" strokeLinecap="round" />
            {/* Tibia bone restricted bending only 85 degrees (stiff) */}
            <line x1="280" y1="230" x2="200" y2="280" stroke="#EF4444" strokeWidth="10" strokeLinecap="round" />
            {/* Ligament Inflamed Zone (Red Tear mark) */}
            <circle cx="270" cy="235" r="14" className="fill-red-500/30 stroke-red-500 animate-pulse" strokeWidth="2" />
            <path d="M 260 220 L 280 250" stroke="#EF4444" strokeWidth="3" />

            <text x="60" y="80" fill="#EF4444" className="font-mono text-xs tracking-widest uppercase">ACL LIGAMENT: INFLAMED</text>
            <text x="60" y="105" fill="#EF4444" className="font-sans text-lg font-light italic">Adhesion & Flexion Defect</text>
            <text x="60" y="130" fill="#78716C" className="font-mono text-xs">Unstable Load Deficit: 85°</text>
          </g>

          {/* AFTER SIDE (Knee alignment and stability) */}
          <g clipPath={`url(#clip-after-${caseData.id})`}>
            {/* Femur bone outline */}
            <line x1="320" y1="120" x2="320" y2="230" stroke="#443E38" strokeWidth="14" strokeLinecap="round" />
            {/* Tibia fully flexing at healthy 142 degrees */}
            <line x1="320" y1="230" x2="400" y2="310" stroke="#10B981" strokeWidth="10" strokeLinecap="round" />
            {/* Healed Integrated Ligament Line */}
            <path d="M 310 220 Q 320 235 330 250" fill="none" stroke="#10B981" strokeWidth="5" />
            {/* Stability flow circle */}
            <circle cx="320" cy="230" r="15" className="fill-emerald-500/10 stroke-emerald-400" strokeWidth="1" strokeDasharray="3,3" />

            <text x="320" y="80" fill="#10B981" className="font-mono text-xs tracking-widest uppercase text-right">RECONSTRUCTION: FUNCTIONAL</text>
            <text x="320" y="105" fill="#10B981" className="font-sans text-lg font-light italic text-right">Healed Graft Integration</text>
            <text x="320" y="130" fill="#A3A3A3" className="font-mono text-xs">Load Bearing Flexion: 142°</text>
          </g>
        </svg>
      );
    }

    return null;
  };

  return (
    <div className="flex flex-col gap-5 w-full">
      {/* Interactive Stage Slider Box */}
      <div 
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        className="relative w-full aspect-video md:aspect-[4/3] max-w-4xl mx-auto overflow-hidden rounded shadow-xl cursor-ew-resize border border-[#2D2825] bg-[#111]"
        id={`slider-stage-${caseData.id}`}
      >
        {/* Render Vector Visual graphics side-by-side with clip paths */}
        <div className="absolute inset-0 w-full h-full select-none">
          {renderVisuals()}
        </div>

        {/* Sliding handle bar */}
        <div 
          className="absolute top-0 bottom-0 w-[2px] bg-white pointer-events-none group z-10"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Draggable Circle slider button */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-[#1C1A17] p-2 rounded-full shadow-lg border border-[#3C3633] transition-transform duration-100 scale-100 hover:scale-115">
            <MoveHorizontal size={16} />
          </div>
        </div>

        {/* Labels overlay bottom static */}
        <div className="absolute bottom-4 left-4 z-20 pointer-events-none select-none bg-[#1C1A17]/80 backdrop-blur-xs px-2.5 py-1.5 rounded border border-[#2D2825] font-mono text-[10px] text-[#EF4444] uppercase tracking-wider">
          {caseData.beforeLabel}
        </div>
        <div className="absolute bottom-4 right-4 z-20 pointer-events-none select-none bg-[#1C1A17]/80 backdrop-blur-xs px-2.5 py-1.5 rounded border border-[#2D2825] font-mono text-[10px] text-[#10B981] uppercase tracking-wider text-right">
          {caseData.afterLabel}
        </div>

        {/* Quick Instructions overlay top right corner */}
        <div className="absolute top-4 right-4 z-20 pointer-events-none select-none bg-black/60 backdrop-blur-xs px-2 py-1 rounded font-mono text-[9px] text-[#8C7A6B] uppercase tracking-wider">
          Drag to inspect alignment
        </div>
      </div>

      {/* Case Details Board */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 border-t border-[#E7E2D9] pt-4 mt-2">
        <div>
          <span className="font-mono text-[10px] text-[#78716C] uppercase tracking-wider block">Duration</span>
          <span className="font-sans text-sm font-medium text-[#1C1917]">{caseData.duration}</span>
        </div>
        <div>
          <span className="font-mono text-[10px] text-[#78716C] uppercase tracking-wider block">Total Treatment</span>
          <span className="font-sans text-sm font-medium text-[#1C1917]">{caseData.sessions}</span>
        </div>
        <div className="col-span-2">
          <span className="font-mono text-[10px] text-[#78716C] uppercase tracking-wider block">Clinical Restorative Result</span>
          <span className="font-sans text-sm font-medium text-[#1C1917]">{caseData.recoveryDetail}</span>
        </div>
      </div>
    </div>
  );
}
