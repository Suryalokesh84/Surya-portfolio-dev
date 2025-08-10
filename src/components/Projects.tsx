import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const projects = [
    {
      title: "Smart Face Attendance System",
      description: "A comprehensive attendance management system using Python and Flask with OpenCV for face recognition. Features include JSON storage, geolocation verification, Excel export functionality, admin panel, and automated attendance email alerts.",
      tech: ["Python", "Flask", "OpenCV", "JSON", "JavaScript", "HTML/CSS"],
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=300&fit=crop&crop=center",
      github: "#",
      demo: "#"
    },
    {
      title: "AI-Powered Text Summarization Tool",
      description: "Advanced text processing application featuring OCR using Tesseract, text summarization via Sumy and Transformers (T5, BART), and image generation via DALL·E API. Deployed on Render and Netlify for optimal performance.",
      tech: ["Python", "Tesseract", "Transformers", "T5", "BART", "DALL·E API", "Render", "Netlify"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center",
      github: "#",
      demo: "#"
    },
    {
      title: "Phone Book Console App",
      description: "A console-based application for managing contacts with CRUD operations, search functionality, and data persistence.",
      tech: ["Python", "File I/O", "Data Structures"],
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop&crop=center",
      github: "#",
      demo: "#"
    },
    {
      title: "CRUD Web App",
      description: "A complete web application demonstrating Create, Read, Update, and Delete operations with a modern web interface and backend database integration.",
      tech: ["HTML", "CSS", "JavaScript", "Database"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center",
      github: "#",
      demo: "#"
    },
    {
      title: "Temple Website",
      description: "A responsive website for a temple featuring event management, donation systems, and visitor information with a beautiful, culturally appropriate design.",
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=400&h=300&fit=crop&crop=center",
      github: "#",
      demo: "#"
    },
    {
      title: "Personal Portfolio Website",
      description: "A modern, responsive portfolio website built with React and TypeScript, featuring dynamic animations, project showcases, and contact forms.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Responsive Design"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop&crop=center",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section ref={elementRef} id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold mb-12 text-center text-gradient transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`bg-card rounded-2xl overflow-hidden shadow-card transition-all duration-500 hover:scale-105 hover:shadow-glow border border-border ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a 
                      href={project.github}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                    <a 
                      href={project.demo}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;