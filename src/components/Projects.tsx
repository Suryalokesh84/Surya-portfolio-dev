import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const projects = [
    {
      title: "Smart Face Attendance System",
      shortDesc: "Python + Flask app with OpenCV for face recognition",
      fullDesc: "A comprehensive attendance management system using Python and Flask with OpenCV for face recognition. Features include JSON storage, geolocation verification, Excel export functionality, admin panel, and automated attendance email alerts.",
      tech: ["Python", "Flask", "OpenCV", "JSON", "JavaScript", "HTML/CSS"],
      highlights: ["Face Recognition", "Geolocation Verification", "Email Alerts", "Excel Export"]
    },
    {
      title: "AI-Powered Text Summarization Tool",
      shortDesc: "OCR and text summarization with modern AI models",
      fullDesc: "Advanced text processing application featuring OCR using Tesseract, text summarization via Sumy and Transformers (T5, BART), and image generation via DALL·E API. Deployed on Render and Netlify for optimal performance.",
      tech: ["Python", "Tesseract", "Transformers", "T5", "BART", "DALL·E API", "Render", "Netlify"],
      highlights: ["OCR Processing", "AI Summarization", "Image Generation", "Cloud Deployment"]
    },
    {
      title: "Phone Book Console App",
      shortDesc: "Simple contact management system",
      fullDesc: "A console-based application for managing contacts with CRUD operations, search functionality, and data persistence.",
      tech: ["Python", "File I/O", "Data Structures"],
      highlights: ["CRUD Operations", "Search Functionality", "Data Persistence"]
    },
    {
      title: "CRUD Web App",
      shortDesc: "Full-stack web application with database operations",
      fullDesc: "A complete web application demonstrating Create, Read, Update, and Delete operations with a modern web interface and backend database integration.",
      tech: ["HTML", "CSS", "JavaScript", "Database"],
      highlights: ["Full CRUD", "Web Interface", "Database Integration"]
    },
    {
      title: "Temple Website",
      shortDesc: "Religious institution website with modern design",
      fullDesc: "A responsive website for a temple featuring event management, donation systems, and visitor information with a beautiful, culturally appropriate design.",
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      highlights: ["Event Management", "Donation System", "Responsive Design"]
    },
    {
      title: "Personal Portfolio Website",
      shortDesc: "Professional portfolio showcasing projects and skills",
      fullDesc: "A modern, responsive portfolio website built with React and TypeScript, featuring dynamic animations, project showcases, and contact forms.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Responsive Design"],
      highlights: ["React Components", "TypeScript", "Modern Design", "Animations"]
    }
  ];

  return (
    <section ref={elementRef} id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold mb-12 text-center text-gradient transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`card-gradient rounded-2xl p-6 shadow-card transition-spring hover:scale-105 cursor-pointer transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setExpandedProject(expandedProject === index ? null : index)}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-primary pr-4">
                    {project.title}
                  </h3>
                  <button className="text-primary hover:scale-110 transition-smooth">
                    <svg 
                      className={`w-6 h-6 transition-transform ${expandedProject === index ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  {expandedProject === index ? project.fullDesc : project.shortDesc}
                </p>
                
                {expandedProject === index && (
                  <div className="space-y-4 animate-fade-in">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Key Highlights:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.highlights.map((highlight, idx) => (
                          <span key={idx} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-sm border border-secondary/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;