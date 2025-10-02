function Hero() {
  try {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    
    const slides = [
      {
        title: "Welcome to PM Shri Kendriya Vidyalaya",
        subtitle: "Excellence in Education Since 1963",
        description: "Nurturing young minds with quality education and holistic development",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      },
      {
        title: "Modern Learning Environment", 
        subtitle: "State-of-the-art Facilities",
        description: "Equipped with smart classrooms and digital learning resources",
        image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      },
      {
        title: "Holistic Development",
        subtitle: "Beyond Academics",
        description: "Sports, arts, and extracurricular activities for complete personality development",
        image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      }
    ];

    React.useEffect(() => {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(timer);
    }, []);

    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" data-name="hero" data-file="components/Hero.js">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 mt-16">
          <div className="animate-float mb-8">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white bg-opacity-20 flex items-center justify-center backdrop-blur-sm">
              <div className="icon-graduation-cap text-4xl text-white"></div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            {slides[currentSlide].title}
          </h1>
          
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[var(--secondary-color)]">
            {slides[currentSlide].subtitle}
          </h2>
          
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {slides[currentSlide].description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="teacher-dashboard.html" className="btn-primary inline-flex items-center">
              <div className="icon-user-check text-lg mr-2"></div>
              Teacher Login
            </a>
            <a href="student-dashboard.html" className="btn-secondary inline-flex items-center">
              <div className="icon-users text-lg mr-2"></div>
              Student Login
            </a>
            <a href="admissions.html" className="btn-primary inline-flex items-center">
              <div className="icon-file-text text-lg mr-2"></div>
              Admissions Open
            </a>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}