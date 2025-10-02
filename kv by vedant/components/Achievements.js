function Achievements() {
  try {
    const achievements = [
      {
        number: "99%",
        label: "Board Results",
        description: "Excellent performance in CBSE examinations"
      },
      {
        number: "1466+", 
        label: "Students",
        description: "Enrolled across all classes"
      },
      {
        number: "60+",
        label: "Teachers",
        description: "Qualified and experienced faculty"
      },
      {
        number: "50+",
        label: "Years",
        description: "Of educational excellence"
      }
    ];

    const highlights = [
      "CBSE Board Topper 2024",
      "Best School Infrastructure Award",
      "Excellence in Sports Activities", 
      "Digital Learning Pioneer",
      "Environmental Conservation Champion"
    ];

    return (
      <section className="py-16 bg-[var(--bg-primary)]" data-name="achievements" data-file="components/Achievements.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Statistics */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-12">Our Achievements</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={achievement.label} className="text-center" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="text-4xl md:text-5xl font-bold text-[var(--primary-color)] mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-lg font-semibold text-[var(--text-primary)] mb-1">
                    {achievement.label}
                  </div>
                  <div className="text-sm text-[var(--text-secondary)]">
                    {achievement.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Recent Highlights</h3>
              <p className="text-lg opacity-90">Celebrating our latest accomplishments</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {highlights.map((highlight, index) => (
                <div 
                  key={highlight}
                  className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm flex items-center"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-8 h-8 rounded-full bg-white bg-opacity-30 flex items-center justify-center mr-3">
                    <div className="icon-trophy text-sm text-white"></div>
                  </div>
                  <span className="font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Achievements component error:', error);
    return null;
  }
}