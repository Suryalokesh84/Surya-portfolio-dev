import { useState, useEffect } from 'react';
import profileImage from '@/assets/profile-image.jpg';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Full Stack Developer | AIML Enthusiast';
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        setIndex(index + 1);
      } else if (!isDeleting && index === fullText.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && index > 0) {
        setText(fullText.slice(0, index - 1));
        setIndex(index - 1);
      } else if (isDeleting && index === 0) {
        setIsDeleting(false);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, fullText]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 hero-gradient opacity-10"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center">
          <div className="mb-12 inline-block animate-scale-in" style={{ marginTop: '5%' }}>
            <div className="relative">
              <div className="w-52 h-52 sm:w-60 sm:h-60 lg:w-72 lg:h-72 mx-auto rounded-full overflow-hidden border-4 border-primary shadow-glow animate-float bg-gradient-to-br from-primary/20 to-purple-500/20 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={profileImage} 
                    alt="Dunaboyina Surya Lokesh" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </div>
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary to-purple-500 opacity-20 animate-glow"></div>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 text-gradient animate-slide-up leading-tight">
            Dunaboyina Surya Lokesh
          </h1>
          
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-12 h-12 sm:h-14 md:h-16 flex items-center justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <span className="text-primary font-mono">
              {text}
              <span className="animate-pulse text-primary">|</span>
            </span>
          </div>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Passionate and self-taught developer crafting innovative solutions with modern technologies
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <a 
              href="#contact" 
              className="group relative px-10 py-4 bg-primary text-primary-foreground rounded-full font-semibold transition-all duration-300 hover:shadow-glow hover:scale-105 hover:-translate-y-1 overflow-hidden"
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a 
              href="#projects" 
              className="group relative px-10 py-4 border-2 border-primary text-primary rounded-full font-semibold transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105 hover:-translate-y-1 overflow-hidden"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
          </div>
          

        </div>
      </div>
    </section>
  );
};

export default Hero;