export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  icon?: string;
  description?: string;
}

export const certificationsData: Certification[] = [
  {
    title: 'MongoDB Official Certification',
    issuer: 'MongoDB University',
    date: '2025',
    icon: 'FaDatabase',
    description: 'Mastered MongoDB fundamentals, data modeling, and CRUD operations',
  },
  {
    title: 'Postman Official Certification',
    issuer: 'Postman',
    date: '2025',
    icon: 'FaCheckCircle',
    description: 'Expert in API testing, automation, and documentation',
  },
  {
    title: 'Professional Full-Stack MERN Development',
    issuer: 'Bootcamp Certification',
    date: '2025',
    icon: 'FaCode',
    description: 'Comprehensive training in MongoDB, Express, React, and Node.js',
  },
  {
    title: 'Smart India Hackathon (SIH)',
    issuer: 'Government of India',
    date: '2024',
    icon: 'FaTrophy',
    description: 'Participated in national-level hackathon building innovative solutions',
  },
  {
    title: 'Data Analytics Internship',
    issuer: 'Industry Experience',
    date: '2024',
    icon: 'FaChartLine',
    description: 'Gained hands-on experience in data analysis and visualization',
  },
  {
    title: 'Web Development Internship',
    issuer: 'Industry Experience',
    date: '2024',
    icon: 'FaLaptopCode',
    description: 'Developed real-world web applications using modern technologies',
  },
];
