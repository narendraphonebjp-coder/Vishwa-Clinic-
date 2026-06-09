import { Specialty, RecoveryCase, TimelineEvent, Testimonial, FAQItem } from './types';

export const SPECIALTIES: Specialty[] = [
  {
    id: 'specialty-chiro',
    title: 'Chiropractic & Spine Decompression',
    description: 'Manual adjustment of spinal vertebrae, pelvic alignment, and computer-aided targeted traction to relieve pressure on compressed discs and nerves.',
    benefits: [
      'Alleviates chronic lower back pain and neck compression',
      'Relieves sciatica, pinched nerves, and tingling sensations',
      'Restores perfect postural alignment and skeletal balance'
    ],
    iconName: 'Activity'
  },
  {
    id: 'specialty-ortho',
    title: 'Orthopedic Rehabilitation',
    description: 'Post-surgical rehabilitation, joint replacement recovery, treatment for severe osteoarthritis, and advanced tendon/ligament restoration protocols.',
    benefits: [
      'Accelerated recovery post-fracture or joint replacement surgery',
      'Restored range of motion and joint stability',
      'Strengthened muscle groups surrounding damaged joints'
    ],
    iconName: 'ShieldAlert'
  },
  {
    id: 'specialty-sports',
    title: 'Sports Medicine & Dry Needling',
    description: 'Elite biomechanical assessment, dry needling trigger-point therapy, sports massage, kinesiology taping, and targeted tissue repair.',
    benefits: [
      'Immediate release of deep muscle spasms and chronic tension',
      'Incredibly rapid return-to-sport intervals',
      'Correction of underlying athletic movement deficiencies'
    ],
    iconName: 'Zap'
  },
  {
    id: 'specialty-neuro',
    title: 'Neuro-Physiotherapy',
    description: 'Advanced neurological re-education for stroke rehabilitation, facial palsy, Parkinson’s disease management, and vestibular balance disorders.',
    benefits: [
      'Re-patterning of healthy motor movements and muscle control',
      'Enhanced static and dynamic balance to prevent falls',
      'Substantial recovery of independent daily functioning'
    ],
    iconName: 'BrainCircuit'
  }
];

export const RECOVERY_CASES: RecoveryCase[] = [
  {
    id: 'case-spine',
    title: 'Open structural spinal alignment, postural correction',
    category: 'Postural Spine Rehabilitation',
    description: 'A 12-week comprehensive clinical protocol correcting chronic lower back compression, structural slouching, and lateral pelvic tilt in a working professional.',
    beforeLabel: 'Severe Slouching & Lateral Tilt',
    afterLabel: 'Aligned Upright Spine Curve',
    duration: '3.5 hrs (Cumulative Assessment)',
    sessions: '12 sessions total',
    recoveryDetail: '96% reduction in pain, 3.2cm improvement in vertical standing alignment.',
    type: 'spine'
  },
  {
    id: 'case-shoulder',
    title: 'Fluid rotational mechanics, glenohumeral restoration',
    category: 'Adhesive Capsulitis (Frozen Shoulder)',
    description: 'A 6-week targeted mobilization and dry needling program for a patient suffering from intense pain and highly restricted shoulder movement.',
    beforeLabel: '45° Abduction Limit',
    afterLabel: '175° Fluid Rotation',
    duration: '2.5 hrs (Cumulative Assessment)',
    sessions: '8 sessions total',
    recoveryDetail: 'Full restoration of joint capsule flexibility. Patient returned to throwing sports.',
    type: 'shoulder'
  },
  {
    id: 'case-knee',
    title: 'Knee extension & ligament stabilization alignment',
    category: 'Post-Op ACL Reconstruction',
    description: 'A 16-week progressive loading, muscle firing pattern correction, and proprioceptive training protocol for a collegiate badminton player.',
    beforeLabel: '85° Limited Flexion & Instability',
    afterLabel: '142° Structural Loading Stability',
    duration: '6 hrs (Cumulative Assessment)',
    sessions: '24 sessions total',
    recoveryDetail: 'Complete quad strength symmetry, recovered full pivoting confidence.',
    type: 'knee'
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: '2012',
    title: 'Bachelor of Physiotherapy (BPT)',
    institution: 'Government Medical College / RGUHS — Bengaluru, India',
    description: 'Graduated Summa Cum Laude with primary research focus on manual therapies for spinal pathologies.'
  },
  {
    year: '2014',
    title: 'Master of Physiotherapy (MPT) in Orthopedics',
    institution: 'National Institute of Medical Sciences — India',
    description: 'Specialized in clinical biomechanics, spinal manipulation techniques, and sports injuries.'
  },
  {
    year: '2016',
    title: 'Advanced Fellowship in Chiropractic & Osteopathy',
    institution: 'International Academy of Osteopathic Medicine (IAOM)',
    description: 'Completed comprehensive credentials in manual osteopathic adjustments, pelvic alignment, and modern chiropractic adjustment.'
  },
  {
    year: '2018',
    title: 'Founded Vishwa Healthcare',
    institution: 'Ashoka Garden, Bhopal, MP',
    description: 'Inaugurated a dedicated premium treatment facility to bridge the gap between high-end manual techniques and active kinetic rehabilitation.'
  },
  {
    year: '2021',
    title: 'Advanced Trigger-Point Dry Needling Integration',
    institution: 'Dry Needling Institute of India (DNI)',
    description: 'Clinical certification for invasive muscular release, introducing microscopic target-puncture to chronic neuro-spinal issues.'
  },
  {
    year: '2025',
    title: 'Central India Physiotherapy Excellence Award',
    institution: 'Indian Medical Association & Allied Health Boards',
    description: 'Recognized for reaching over 8,500 successfully documented spinal and orthopedic client recoveries.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    patientName: 'Anshul Sharma',
    condition: 'Chronic L4-L5 herniated disc & severe sciatica',
    quote: "I was bedridden for weeks, unable to stand for more than 30 seconds due to sciatic shooting pain. Two orthopedic surgeons insisted on surgery. Dr. Sahu’s manual spinal decompression and core re-education resolved it. Today, I do deadlifts with no pain whatsoever. Absolute magic.",
    recoveryPeriod: '8 Weeks (10 Sessions)',
    location: 'Arera Colony, Bhopal'
  },
  {
    id: 'test-2',
    patientName: 'Kirti Agrawal',
    condition: 'Grade-III Frozen Shoulder (Adhesive Capsulitis)',
    quote: "Could not raise my right arm past pocket height or sleep on my right side. Other clinics only gave me standard TENS machine therapy which did nothing. At Vishwa, their active manual therapy and dry needling released my shoulder from the very first session. Highly professional.",
    recoveryPeriod: '5 Weeks (8 Sessions)',
    location: 'Indrapuri, Bhopal'
  },
  {
    id: 'test-3',
    patientName: 'Col. Ranjit Singh (Retd.)',
    condition: 'Severe Knee Osteoarthritis & Menisal Degeneration',
    quote: "I was limping and facing total knee replacement. They worked systematically on knee space expansion, quad alignment, and load balancing. I went from barely walking to completing my daily 5km morning walk. My quality of life has traveled back 15 years.",
    recoveryPeriod: '12 Weeks (16 Sessions)',
    location: 'Saket Nagar, Bhopal'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How does your diagnostic assessment differ from other generic clinics?',
    answer: 'We don\'t just put you on a heat pad or TENS machine and leave you. We spend the entire first 45 minutes assessing your posture, visual alignment, joint mobilization ranges, load-bearing capacities, and movement habits. Diagnosis is 90% of recovery; treatment is customized to target the underlying movement deficiency.',
    category: 'Assessment'
  },
  {
    id: 'faq-2',
    question: 'Do I need an orthopedic surgeon’s prescription or referral before booking?',
    answer: 'No referral is needed to start physical therapy or chiropractic care at Vishwa Healthcare. We operate as primary contact clinicians. However, if you already have MRI reports, X-Rays, or surgeon prescriptions, we highly encourage you to bring them so we can integrate them into your clinical planning chart.',
    category: 'Administrative'
  },
  {
    id: 'faq-3',
    question: 'How many sessions will my condition need before I feel relief?',
    answer: 'Most patients feel an immediate, profound release of tension and pain after their very first session of chiropractic alignment or dry needling. For full clinical recovery, simple orthopedic issues usually take 4-6 sessions, while complex spinal compression or severe nerve root issues require 8-12 sessions structured over a few weeks.',
    category: 'Treatment'
  },
  {
    id: 'faq-4',
    question: 'What is dry needling and how is it different from traditional acupuncture?',
    answer: 'Traditional acupuncture is based on energy meridians from Ancient Chinese Medicine. Dry needling is a modern, evidence-based orthopedic technique targeting tight muscular trigger points, motor points, and deep fascial tissues. It resets hyperactive muscle spasms, activates underactive muscles, and increases localized restorative circulation.',
    category: 'Methods'
  }
];
