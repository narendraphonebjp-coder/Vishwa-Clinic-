export interface ConsultationRequest {
  id: string;
  fullName: string;
  email: string;
  telephone: string;
  areaOfConcern: string;
  message: string;
  preferredSlot: string;
  status: 'pending' | 'confirmed';
  createdAt: string;
}

export interface RecoveryCase {
  id: string;
  title: string;
  category: string;
  description: string;
  beforeLabel: string;
  afterLabel: string;
  duration: string;
  sessions: string;
  recoveryDetail: string;
  type: 'spine' | 'shoulder' | 'knee';
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  institution: string;
}

export interface Specialty {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  iconName: string;
}

export interface Testimonial {
  id: string;
  patientName: string;
  condition: string;
  quote: string;
  recoveryPeriod: string;
  location: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
