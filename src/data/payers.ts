export interface Payer {
  name: string;
  logo: string;
  color: string;
}

export const PAYERS: Payer[] = [
  { name: 'United Health', logo: 'https://credifide.com/wp-content/uploads/2026/03/7-1-150x150.png', color: '#002677' },
  { name: 'Medicare', logo: 'https://credifide.com/wp-content/uploads/2026/03/8-1-150x150.png', color: '#004A99' },
  { name: 'Carelon', logo: 'https://credifide.com/wp-content/uploads/2026/03/9-1-150x150.png', color: '#007DA3' },
  { name: 'Tricare', logo: 'https://credifide.com/wp-content/uploads/2026/03/10-1-150x150.png', color: '#003366' },
  { name: 'Aetna', logo: 'https://credifide.com/wp-content/uploads/2026/03/6-1-150x150.png', color: '#9D2235' },
  { name: 'Medicaid', logo: 'https://credifide.com/wp-content/uploads/2026/03/13-150x150.png', color: '#00833E' },
  { name: 'Wellcare', logo: 'https://credifide.com/wp-content/uploads/2026/03/12-1-150x150.png', color: '#0079C1' },
  { name: 'Molina', logo: 'https://credifide.com/wp-content/uploads/2026/03/2-1-150x150.png', color: '#F15D22' },
  { name: 'TriWest', logo: 'https://credifide.com/wp-content/uploads/2026/03/3-1-150x150.png', color: '#D21034' },
  { name: 'Cigna', logo: 'https://credifide.com/wp-content/uploads/2026/03/4-1-150x150.png', color: '#007DA3' },
  { name: 'Humana', logo: 'https://credifide.com/wp-content/uploads/2026/03/5-1-150x150.png', color: '#77BC1F' },
  { name: 'Optum', logo: 'https://credifide.com/wp-content/uploads/2026/03/11-1-150x150.png', color: '#E87722' }
];
