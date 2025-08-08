import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const About = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  
  return (
    <section ref={elementRef} id="about" className="py-20 lg:py-32 bg-secondary/10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 to-purple-500/20"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-16 text-center text-gradient transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
            About Me
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'animate-slide-in-left' : 'opacity-0 -translate-x-10'}`}>
              <div className="card-gradient rounded-3xl p-8 lg:p-12 shadow-card transition-all duration-500 hover:scale-105 hover:shadow-glow border border-primary/10">
                <p className="text-lg lg:text-xl leading-relaxed text-muted-foreground mb-8">
                  Passionate and self-taught <span className="text-primary font-semibold bg-primary/10 px-2 py-1 rounded">Full Stack Developer</span> and{' '}
                  <span className="text-primary font-semibold bg-primary/10 px-2 py-1 rounded">AIML enthusiast</span> with hands-on experience in real-time 
                  web and AI projects. Skilled in Python, MERN stack, and modern web technologies. Quick learner focused 
                  on clean code and practical outcomes.
                </p>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-primary/5 rounded-xl p-4 border border-primary/20">
                    <div className="text-2xl font-bold text-primary">100+</div>
                    <div className="text-sm text-muted-foreground">Days Streak</div>
                  </div>
                  <div className="bg-primary/5 rounded-xl p-4 border border-primary/20">
                    <div className="text-2xl font-bold text-primary">5+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Skills Tags */}
            <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-10'}`}>
              <h3 className="text-2xl font-bold text-primary mb-6">Core Strengths</h3>
              <div className="flex flex-wrap gap-4">
                {[
                  { label: "Problem Solver", icon: "🧩", delay: "0s" },
                  { label: "Team Player", icon: "🤝", delay: "0.1s" },
                  { label: "Continuous Learner", icon: "📚", delay: "0.2s" },
                  { label: "Innovation Driven", icon: "💡", delay: "0.3s" },
                  { label: "Detail Oriented", icon: "🎯", delay: "0.4s" },
                  { label: "Adaptable", icon: "🔄", delay: "0.5s" }
                ].map((strength, index) => (
                  <div 
                    key={index}
                    className="group relative px-6 py-3 bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary rounded-full border border-primary/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:border-primary/40 cursor-pointer animate-scale-in"
                    style={{ animationDelay: strength.delay }}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-lg">{strength.icon}</span>
                      <span className="font-semibold">{strength.label}</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
              
              {/* Quote */}
              <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-2xl border border-primary/20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <blockquote className="text-lg italic text-muted-foreground">
                  "Code is poetry written in logic, and every bug is just a puzzle waiting to be solved."
                </blockquote>
                <cite className="block mt-2 text-primary font-semibold">- My Development Philosophy</cite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;