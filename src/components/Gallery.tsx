import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const Gallery = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const items = [
    {
      title: 'Received Certification from IIIT CK Raju Sir',
      description: 'Awarded FMML O grade certification by CK Raju sir at KIET.',
      image: '/gallery/Certification by ck raju.jpeg',
      position: 'object-center',
    },
    {
      title: 'Participating in Hackathon',
      description: 'Actively participated in a competitive hackathon event.',
      image: '/gallery/participating in hackathon.jpeg',
      position: 'object-center',
    },
    {
      title: 'Leading the Hackathon for Juniors',
      description: 'Guided and led junior participants during a hackathon.',
      image: '/gallery/leading hackathon .jpg',
      position: 'object-[50%_12%]',
    },
  ];

  return (
    <section ref={elementRef} id="gallery" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold mb-12 text-center text-gradient transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
            Gallery & Achievements
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {items.map((item, index) => (
              <div
                key={index}
                className={`relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 border ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'} bg-background/40 backdrop-blur-xl border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-glow`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full h-full object-cover ${item.position ?? 'object-center'} transition-transform duration-500 hover:scale-110`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;