// src/lib/course-content.ts
interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Array<{
    id: string;
    title: string;
    content: string;
  }>;
  quiz: {
    id: string;
    questions: Question[];
  };
}

interface CourseContent {
  id: string;
  title: string;
  description: string;
  modules: Module[];
}

export const courseContent: CourseContent = {
  // ... your existing content
};
export const courseContent = {
  id: 'crypto-fundamentals',
  title: 'Fundamentals of Cryptocurrency',
  description: 'Introduction to Cryptocurrency and Blockchains',
  modules: [
    {
      id: 'module-1',
      title: 'Fundamentals of Cryptocurrency',
      description: 'This module provides a general introduction to cryptocurrencies.',
      lessons: [
        {
          id: 'lesson-1',
          title: 'Introduction to Digital Currencies',
          content: `
            <h2>What are Digital Currencies?</h2>
            <p>Digital currencies represent a fundamental shift in how we conceive and use money. Unlike traditional fiat currencies issued by central banks, digital currencies are decentralized, using cryptography for security.</p>
            
            <h3>Key Concepts</h3>
            <ul>
              <li>Decentralization: No central authority controls the system</li>
              <li>Cryptography: Ensures security and integrity</li>
              <li>Digital Scarcity: Limited supply through programming</li>
            </ul>
          `
        },
        {
          id: 'lesson-2',
          title: 'The Evolution of Money',
          content: `
            <h2>From Barter to Digital</h2>
            <p>Trace the evolution of money from ancient barter systems to modern digital currencies.</p>
            
            <h3>Key Milestones</h3>
            <ul>
              <li>Barter System: Direct exchange of goods</li>
              <li>Commodity Money: Using valuable items as currency</li>
              <li>Metal Coins: Standardized units of exchange</li>
              <li>Paper Money: Representing stored value</li>
              <li>Digital Currencies: The future of money</li>
            </ul>
          `
        }
      ],
      quiz: {
        id: 'quiz-1',
        questions: [
          {
            id: 'q1',
            text: 'What is the main characteristic of decentralized digital currencies?',
            options: [
              'Central bank control',
              'No central authority control',
              'Physical form',
              'Limited use cases'
            ],
            correctAnswer: 1,
            explanation: 'Decentralized digital currencies operate without any central authority control, which is their defining characteristic.'
          },
          {
            id: 'q2',
            text: 'Which technology ensures the security of cryptocurrency transactions?',
            options: [
              'Social media',
              'Cloud computing',
              'Cryptography',
              'Web browsers'
            ],
            correctAnswer: 2,
            explanation: 'Cryptography is the fundamental technology that ensures the security and integrity of cryptocurrency transactions.'
          }
        ]
      }
    }
  ]
}
