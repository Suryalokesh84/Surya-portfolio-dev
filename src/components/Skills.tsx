const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "C", "Java", "JavaScript"],
      color: "from-blue-500/10 to-indigo-500/10 border-blue-500/30 text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-500/20",
      icon: "💻",
      description: "Programming Languages"
    },
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "React.js"],
      color: "from-green-500/10 to-emerald-500/10 border-green-500/30 text-green-700 dark:text-green-300 bg-green-50 dark:bg-green-500/20",
      icon: "🎨",
      description: "User Interface Technologies"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "Flask", "FastAPI"],
      color: "from-purple-500/10 to-violet-500/10 border-purple-500/30 text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-500/20",
      icon: "⚡",
      description: "Server-side Technologies"
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB"],
      color: "from-yellow-500/10 to-orange-500/10 border-yellow-500/30 text-yellow-700 dark:text-yellow-300 bg-yellow-50 dark:bg-yellow-500/20",
      icon: "🗄️",
      description: "Data Storage Solutions"
    },
    {
      title: "AI/ML Tools",
      skills: ["NumPy", "Pandas", "OpenCV", "Scikit-learn", "Tesseract", "Transformers"],
      color: "from-red-500/10 to-rose-500/10 border-red-500/30 text-red-700 dark:text-red-300 bg-red-50 dark:bg-red-500/20",
      icon: "🤖",
      description: "Machine Learning & AI"
    },
    {
      title: "Development Tools",
      skills: ["Git", "GitHub", "VS Code", "Jupyter"],
      color: "from-gray-500/10 to-slate-500/10 border-gray-500/30 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-500/20",
      icon: "🛠️",
      description: "Development Environment"
    },
    {
      title: "Deployment",
      skills: ["Render", "Netlify", "Heroku", "Vercel"],
      color: "from-cyan-500/10 to-teal-500/10 border-cyan-500/30 text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-500/20",
      icon: "☁️",
      description: "Cloud & Hosting Platforms"
    },
    {
      title: "Soft Skills",
      skills: ["Leadership", "Communication", "Teamwork", "Problem Solving"],
      color: "from-pink-500/10 to-fuchsia-500/10 border-pink-500/30 text-pink-700 dark:text-pink-300 bg-pink-50 dark:bg-pink-500/20",
      icon: "🚀",
      description: "Professional Skills"
    }
  ];

  return (
    <section id="skills" className="py-20 lg:py-32 bg-secondary/10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-primary/20 to-purple-500/20"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gradient animate-slide-up">
              Skills & Technologies
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              A comprehensive toolkit for building modern, scalable applications from concept to deployment
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className="group relative"
              >
                <div className={`card-gradient rounded-3xl p-6 lg:p-8 shadow-card transition-all duration-500 hover:scale-105 hover:shadow-glow border border-primary/10 hover:border-primary/30 animate-scale-in h-full`}
                  style={{ animationDelay: `${categoryIndex * 0.1}s` }}
                >
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className="text-4xl lg:text-5xl mb-3 group-hover:scale-110 transition-transform duration-1000 animate-bounce-subtle">
                      {category.icon}
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-primary mb-2 group-hover:text-gradient transition-all duration-300">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                  
                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-3 py-1.5 rounded-full text-xs lg:text-sm font-medium border transition-all duration-300 hover:scale-110 hover:shadow-md bg-gradient-to-r ${category.color} animate-slide-up`}
                        style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  {/* Skill Count Badge */}
                  <div className="mt-6 text-center">
                    <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20 text-xs font-semibold">
                      {category.skills.length} Skills
                    </div>
                  </div>
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Skills Summary */}
          <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <div className="inline-flex flex-wrap items-center justify-center gap-8 px-8 py-6 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-3xl border border-primary/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
              <div className="w-px h-12 bg-primary/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">8</div>
                <div className="text-sm text-muted-foreground">Categories</div>
              </div>
              <div className="w-px h-12 bg-primary/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">150+</div>
                <div className="text-sm text-muted-foreground">Hours of AIML Practice</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;