// TODO: reoder the sections
// TODO: clean up skills list
// TODO: completely rework achievements as continuing education, pointing to udemy/coursera/youtube
// TODO: add a section for projects/accomplishments

import { type FC } from 'react';
import SocialLinks from './components/SocialLinks';
import ProgressBar from './components/ProgressBar';
import SkillChart from './components/SkillChart';
import { Code2, Briefcase, Award } from 'lucide-react';

const skills = [
  { name: 'Python', level: 80 },
  { name: 'T-SQL', level: 90 },
  { name: 'PostgreSQL', level: 70 },
  // { name: 'Node.js', level: 80 },
  { name: 'AWS', level: 50 },
  { name: 'ML-Ops', level: 65 }
];

const achievements = [
  { title: 'Projects Completed', value: 85 },
  { title: 'Client Satisfaction', value: 98 },
  { title: 'Code Quality', value: 92 }
];

const App: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-custom-sage to-custom-gray">
      <header className="container mx-auto px-4 py-16 text-center">
        <div className="relative inline-block">
          <img
            src='./assets/IMG_2067.jpg'
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg ring-4 ring-custom-sand"
          />
          <div className="absolute inset-0 rounded-full bg-custom-taupe opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Joshua Utter</h1>
        <p className="text-xl text-gray-600 mb-8">Database Developer | Data Engineer | ML-Ops Engineer | Business Intelligence Engineer</p>
        <SocialLinks />
      </header>

      <main className="container mx-auto px-4 py-12">

        <section className="mb-20">
          <div className="flex items-center mb-8">
            <Code2 className="w-6 h-6 text-custom-taupe mr-2" />
            <h2 className="text-2xl font-bold text-custom-taupe">Technical Skills</h2>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 shadow-md">
            <div className="flex justify-center">
              <SkillChart skills={skills} />
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center mb-8">
            <Briefcase className="w-6 h-6 text-custom-taupe mr-2" />
            <h2 className="text-2xl font-bold text-custom-taupe">Experience</h2>
          </div>
          <div className="space-y-8">
            {[
              {
                title: 'Project Specialist',
                company: 'PRGX Global',
                period: '2008 - Present',
                description: ''
              },
              {
                title: 'Full Stack Developer',
                company: 'Innovation Labs',
                period: '2018 - 2020',
                description: 'Developed scalable web applications using React and Node.js. Implemented CI/CD pipelines and reduced deployment time by 60%.'
              }
            ].map((job, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-custom-taupe mb-1">
                  {job.title} @ {job.company}
                </h3>
                <p className="text-custom-khaki mb-4">{job.period}</p>
                <p className="text-custom-taupe">{job.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center mb-8">
            <Award className="w-6 h-6 text-custom-taupe mr-2" />
            <h2 className="text-2xl font-bold text-custom-taupe">Achievements</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {achievements.map(achievement => (
              <div key={achievement.title} className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
                <ProgressBar
                  label={achievement.title}
                  percentage={achievement.value}
                />
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
};

export default App;