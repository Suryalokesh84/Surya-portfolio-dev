import { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    {
      title: "Hackathon Project Demo",
      description: "Presenting AI-powered solutions at the regional hackathon",
      category: "Hackathons"
    },
    {
      title: "Face Recognition System",
      description: "Smart attendance system in action with real-time face detection",
      category: "Projects"
    },
    {
      title: "Tech Workshop",
      description: "Conducting a workshop on modern web development",
      category: "Events"
    },
    {
      title: "AI Model Training",
      description: "Working on machine learning model optimization",
      category: "AI/ML"
    },
    {
      title: "Code Review Session",
      description: "Collaborative development and best practices discussion",
      category: "Development"
    },
    {
      title: "Project Deployment",
      description: "Successfully deploying applications to cloud platforms",
      category: "DevOps"
    }
  ];

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-secondary/10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-primary/20 to-purple-500/20"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gradient animate-slide-up">
              Gallery & Achievements
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              A visual journey through my development milestones, events, and project highlights
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {galleryItems.map((item, index) => (
              <div 
                key={index}
                className="group relative cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage(index)}
              >
                <div className="card-gradient rounded-3xl overflow-hidden shadow-card transition-all duration-500 hover:scale-105 hover:shadow-glow border border-primary/10 hover:border-primary/30">
                  {/* Image/Icon Area */}
                  <div className="relative aspect-video bg-gradient-to-br from-primary/20 via-purple-500/20 to-blue-500/20 flex items-center justify-center overflow-hidden">
                    <div className="text-center p-8">
                      <div className="text-5xl lg:text-6xl mb-4 group-hover:scale-110 transition-transform duration-500 animate-bounce-subtle">
                        {item.category === 'Hackathons' && '🏆'}
                        {item.category === 'Projects' && '💻'}
                        {item.category === 'Events' && '🎤'}
                        {item.category === 'AI/ML' && '🤖'}
                        {item.category === 'Development' && '⚡'}
                        {item.category === 'DevOps' && '☁️'}
                      </div>
                      <span className="inline-block px-4 py-2 bg-primary/90 text-primary-foreground rounded-full text-sm font-semibold backdrop-blur-sm">
                        {item.category}
                      </span>
                    </div>
                    
                    {/* Overlay Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* View Icon */}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-primary/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      <svg className="w-5 h-5 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 lg:p-8">
                    <h3 className="text-lg lg:text-xl font-bold text-primary mb-3 group-hover:text-gradient transition-all duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Enhanced Modal */}
          {selectedImage !== null && (
            <div 
              className="fixed inset-0 bg-black/90 backdrop-blur-xl flex items-center justify-center z-50 p-4 animate-fade-in"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative card-gradient rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-glow border border-primary/30 animate-scale-in">
                {/* Close Button */}
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(null);
                  }}
                  className="absolute top-6 right-6 z-10 w-12 h-12 bg-primary/90 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-primary"
                >
                  <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-purple-500/20 to-blue-500/20 flex items-center justify-center relative">
                  <div className="text-center p-12">
                    <div className="text-8xl lg:text-9xl mb-8 animate-float">
                      {galleryItems[selectedImage].category === 'Hackathons' && '🏆'}
                      {galleryItems[selectedImage].category === 'Projects' && '💻'}
                      {galleryItems[selectedImage].category === 'Events' && '🎤'}
                      {galleryItems[selectedImage].category === 'AI/ML' && '🤖'}
                      {galleryItems[selectedImage].category === 'Development' && '⚡'}
                      {galleryItems[selectedImage].category === 'DevOps' && '☁️'}
                    </div>
                    <span className="inline-block px-6 py-3 bg-primary/90 text-primary-foreground rounded-full text-lg font-semibold backdrop-blur-sm">
                      {galleryItems[selectedImage].category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12">
                  <h3 className="text-3xl lg:text-4xl font-bold text-gradient mb-6">
                    {galleryItems[selectedImage].title}
                  </h3>
                  <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8">
                    {galleryItems[selectedImage].description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={() => setSelectedImage(null)}
                      className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-glow"
                    >
                      Close Gallery
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        const nextIndex = (selectedImage + 1) % galleryItems.length;
                        setSelectedImage(nextIndex);
                      }}
                      className="px-8 py-4 border-2 border-primary text-primary rounded-xl font-semibold transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105"
                    >
                      Next Item
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;