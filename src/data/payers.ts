export interface Payer {
  name: string;
  logo: string;
  color: string;
}

export const PAYERS: Payer[] = [
  { name: 'United Health', logo: 'https://seeklogo.com/images/U/united-health-group-logo-0036CC7C0B-seeklogo.com.png', color: '#002677' },
  { name: 'Medicare', logo: 'https://logos-world.net/wp-content/uploads/2021/11/Medicare-Logo.png', color: '#004A99' },
  { name: 'Carelon', logo: 'https://www.carelon.com/content/dam/carelon/dotcom/logos/carelon-logo-primary.svg', color: '#007DA3' },
  { name: 'Tricare', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Tricare_logo.svg/2560px-Tricare_logo.svg.png', color: '#003366' },
  { name: 'Aetna', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Aetna_logo.svg/2560px-Aetna_logo.svg.png', color: '#9D2235' },
  { name: 'Medicaid', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Medicaid_logo.svg/2560px-Medicaid_logo.svg.png', color: '#00833E' },
  { name: 'Wellcare', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/WellCare_logo.svg/1200px-WellCare_logo.svg.png', color: '#0079C1' },
  { name: 'Molina Healthcare', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Molina_Healthcare_logo.svg/2560px-Molina_Healthcare_logo.svg.png', color: '#F15D22' },
  { name: 'TriWest', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/91/TriWest_Healthcare_Alliance_Logo.svg/1200px-TriWest_Healthcare_Alliance_Logo.svg.png', color: '#D21034' },
  { name: 'Cigna', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cigna_logo.svg/2560px-Cigna_logo.svg.png', color: '#007DA3' },
  { name: 'Humana', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Humana_logo.svg/2560px-Humana_logo.svg.png', color: '#77BC1F' },
  { name: 'Optum', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Optum_logo.svg/2560px-Optum_logo.svg.png', color: '#E87722' }
];
