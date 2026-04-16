import unitedhealthLogo from '../assets/unitedhealth.png';
import medicareLogo from '../assets/medicare.png';
import carelonLogo from '../assets/carelon.png';
import tricareLogo from '../assets/tricare.png';
import aetnaLogo from '../assets/aetna.png';
import medicaidLogo from '../assets/medicaid.png';
import wellcareLogo from '../assets/wellcare.png';
import molinaLogo from '../assets/molina.png';
import triwestLogo from '../assets/triwest.png';
import cignaLogo from '../assets/cigna.png';
import humanaLogo from '../assets/humana.png';
import optumLogo from '../assets/optum.png';

export interface Payer {
  name: string;
  logo: string;
  color: string;
}

export const PAYERS: Payer[] = [
  { name: 'United Health', logo: unitedhealthLogo, color: '#002677' },
  { name: 'Medicare', logo: medicareLogo, color: '#004A99' },
  { name: 'Carelon', logo: carelonLogo, color: '#007DA3' },
  { name: 'Tricare', logo: tricareLogo, color: '#003366' },
  { name: 'Aetna', logo: aetnaLogo, color: '#9D2235' },
  { name: 'Medicaid', logo: medicaidLogo, color: '#00833E' },
  { name: 'Wellcare', logo: wellcareLogo, color: '#0079C1' },
  { name: 'Molina Healthcare', logo: molinaLogo, color: '#F15D22' },
  { name: 'TriWest', logo: triwestLogo, color: '#D21034' },
  { name: 'Cigna', logo: cignaLogo, color: '#007DA3' },
  { name: 'Humana', logo: humanaLogo, color: '#77BC1F' },
  { name: 'Optum', logo: optumLogo, color: '#E87722' }
];
