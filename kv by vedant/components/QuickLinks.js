function QuickLinks() {
  try {
    const links = [
      {
        title: "Teacher Dashboard",
        description: "Attendance, grades, and student management",
        icon: "user-check",
        href: "teacher-dashboard.html",
        color: "bg-blue-500"
      },
      {
        title: "Student Dashboard", 
        description: "Assignments, grades, and resources",
        icon: "users",
        href: "student-dashboard.html",
        color: "bg-green-500"
      },
      {
        title: "Notices & Events",
        description: "Latest announcements and updates",
        icon: "bell",
        href: "notices.html",
        color: "bg-yellow-500"
      },
      {
        title: "Admissions",
        description: "Apply for new academic session",
        icon: "file-plus",
        href: "admissions.html", 
        color: "bg-purple-500"
      },
      {
        title: "Academic Calendar",
        description: "Important dates and schedules",
        icon: "calendar",
        href: "academics.html",
        color: "bg-red-500"
      },
      {
        title: "Gallery",
        description: "Photos and videos of school events",
        icon: "camera",
        href: "gallery.html",
        color: "bg-indigo-500"
      }
    ];

    return (
      <section className="py-16 bg-[var(--bg-secondary)]" data-name="quick-links" data-file="components/QuickLinks.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">Quick Access</h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Access all important sections of our school portal with just one click
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {links.map((link, index) => (
              <a
                key={link.title}
                href={link.href}
                className="card hover:transform hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg ${link.color} flex items-center justify-center mr-4`}>
                    <div className={`icon-${link.icon} text-xl text-white`}></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--primary-color)] transition-colors">
                      {link.title}
                    </h3>
                  </div>
                </div>
                <p className="text-[var(--text-secondary)] mb-4">{link.description}</p>
                <div className="flex items-center text-[var(--primary-color)] font-medium">
                  <span>Access Now</span>
                  <div className="icon-arrow-right text-sm ml-2 group-hover:translate-x-1 transition-transform"></div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('QuickLinks component error:', error);
    return null;
  }
}