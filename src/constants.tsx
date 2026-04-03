import React from 'react';
import { 
  Phone, 
  ArrowRight, 
  ArrowLeft,
  Menu, 
  X, 
  Github, 
  Twitter, 
  Linkedin,
  Shield,
  Zap,
  Clock,
  CheckCircle2,
  Facebook,
  Instagram,
  Stethoscope,
  HeartPulse,
  Activity,
  Target,
  ClipboardCheck,
  Users,
  Brain,
  Video,
  Accessibility,
  Smile,
  Microscope,
  Droplets,
  Baby,
  Home,
  Package,
  UserPlus,
  ShieldCheck,
  BarChart3,
  ChevronRight,
  ChevronLeft,
  Loader2,
  Sparkles,
  DollarSign,
  Banknote,
  Check,
  FileText,
  TrendingUp,
  Search,
  AlertCircle,
  Mail,
  ChevronDown,
  Lock,
  LucideIcon
} from 'lucide-react';

/**
 * CONFIGURATION GUIDE:
 * To use an image instead of a Lucide icon, you can replace the icon reference
 * with a function that returns an <img> tag.
 * 
 * Example:
 * logo: () => <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />,
 */

export const ASSETS = {
  // Brand Assets
  brand: {
    name: "Credifide.",
    logo: HeartPulse, // Lucide icon or custom component
    logoImage: "https://credifide.com/wp-content/uploads/2025/03/Final-Logo2-3-26.png", // Set to a URL string to use an image instead of the icon
  },

  // Navigation Icons
  nav: {
    menu: Menu,
    close: X,
    phone: Phone,
    arrowRight: ArrowRight,
    arrowLeft: ArrowLeft,
    chevronLeft: ChevronLeft,
    chevronRight: ChevronRight,
    mail: Mail,
  },

  // Social Icons
  social: {
    twitter: Twitter,
    github: Github,
    linkedin: Linkedin,
    facebook: Facebook,
    instagram: Instagram,
  },

  // Feature Icons
  features: {
    shield: Shield,
    zap: Zap,
    clock: Clock,
    check: CheckCircle2,
  },

  // Specialty Icons
  specialties: {
    general: Stethoscope,
    cardiology: HeartPulse,
    orthopedics: Activity,
    mentalHealth: Brain,
    telehealth: Video,
    pediatrics: Baby,
    dermatology: Microscope,
    urology: Droplets,
    physicalTherapy: Accessibility,
    dentistry: Smile,
    homeHealth: Home,
    pharmacy: Package,
  },

  // UI Icons
  ui: {
    userPlus: UserPlus,
    shieldCheck: ShieldCheck,
    barChart: BarChart3,
    chevronRight: ChevronRight,
    loader: Loader2,
    sparkles: Sparkles,
    dollar: DollarSign,
    banknote: Banknote,
    check: Check,
    fileText: FileText,
    trendingUp: TrendingUp,
    search: Search,
    alert: AlertCircle,
    users: Users,
    target: Target,
    clipboard: ClipboardCheck,
    activity: Activity,
    chevronDown: ChevronDown,
    lock: Lock,
  }
};

// Helper component to render icons or images
interface IconRendererProps {
  icon?: LucideIcon | React.ComponentType<any>;
  image?: string | null;
  size?: number;
  className?: string;
}

export const IconRenderer: React.FC<IconRendererProps> = React.memo(({ 
  icon: Icon, 
  image, 
  size = 24, 
  className = "" 
}) => {
  if (image) {
    return (
      <img 
        src={image} 
        alt="icon" 
        style={{ width: size, height: size }} 
        className={`object-contain ${className}`}
        referrerPolicy="no-referrer"
        loading="lazy"
      />
    );
  }
  
  if (Icon) {
    return <Icon size={size} className={className} />;
  }
  
  return null;
});
