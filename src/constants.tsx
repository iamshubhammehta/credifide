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
  Rocket,
  Building2,
  Award,
  RefreshCw,
  FileChartLine,
  Handshake,
  ClipboardList,
  Smartphone,
  Bone,
  Plus,
  FlaskConical,
  User,
  Heart,
  LucideIcon
} from 'lucide-react';
import logoMain from './assets/logo_main.png';

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
    logoImage: logoMain, // Set to a URL string to use an image instead of the icon
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
    general: Plus,
    cardiology: HeartPulse,
    orthopedics: Bone,
    mentalHealth: Brain,
    telehealth: Video,
    pediatrics: Baby,
    dermatology: Microscope,
    urology: Stethoscope,
    physicalTherapy: Accessibility,
    dentistry: Smile,
    homeHealth: Home,
    pharmacy: Stethoscope,
    rocket: Rocket,
    hospital: Building2,
    laboratory: FlaskConical,
    obgyn: User,
    urgentCare: Heart,
    gastroenterology: ClipboardList,
    painManagement: Activity,
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
    award: Award,
    refresh: RefreshCw,
    chart: FileChartLine,
    handshake: Handshake,
    list: ClipboardList,
    smartphone: Smartphone,
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

