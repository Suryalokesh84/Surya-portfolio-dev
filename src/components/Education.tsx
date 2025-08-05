const Education = () => {
  const education = [
    {
      degree: "B.Tech in CSE (AIML)",
      institution: "KIET, Andhra Pradesh",
      period: "2022–2026",
      grade: "CGPA: 8.1",
      icon: "🎓"
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Sri Chaitanya Jr. College",
      period: "2020–2022",
      grade: "Percentage: 93%",
      icon: "📚"
    }
  ];

  return (
    <section id="education" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-16 text-center text-gradient animate-slide-up">
            Educational Journey
          </h2>
          
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-purple-500 to-primary rounded-full"></div>
            
            <div className="space-y-12">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } animate-slide-up`}
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-primary rounded-full border-4 border-background shadow-glow z-10 flex items-center justify-center">
                    <div className="w-3 h-3 bg-background rounded-full animate-pulse"></div>
                  </div>
                  
                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 pl-16 md:pl-0' : 'md:pl-8 pl-16 md:pr-0'}`}>
                    <div className="group card-gradient rounded-3xl p-8 shadow-card transition-all duration-500 hover:scale-105 hover:shadow-glow border border-primary/10 hover:border-primary/30">
                      {/* Icon and Header */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className="text-5xl animate-bounce-subtle group-hover:scale-110 transition-transform duration-300">
                          {edu.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl lg:text-2xl font-bold text-primary mb-2 group-hover:text-gradient transition-all duration-300">
                            {edu.degree}
                          </h3>
                          <p className="text-lg text-muted-foreground font-medium">
                            {edu.institution}
                          </p>
                        </div>
                      </div>
                      
                      {/* Details */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1">
                          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary rounded-full border border-primary/20 transition-all duration-300 hover:scale-105">
                            <span className="mr-2">📅</span>
                            <span className="font-semibold">{edu.period}</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-400 rounded-full border border-green-500/20 transition-all duration-300 hover:scale-105">
                            <span className="mr-2">🏆</span>
                            <span className="font-semibold">{edu.grade}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>
                  
                  {/* Empty Space for Timeline Balance */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Achievement Summary */}
          <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="inline-flex items-center gap-8 px-8 py-4 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-full border border-primary/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">8.1</div>
                <div className="text-sm text-muted-foreground">Current CGPA</div>
              </div>
              <div className="w-px h-8 bg-primary/20"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">93%</div>
                <div className="text-sm text-muted-foreground">Intermediate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;