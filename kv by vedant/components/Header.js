function Header({ theme, toggleTheme }) {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [language, setLanguage] = React.useState('en');

    const toggleLanguage = () => {
      setLanguage(language === 'en' ? 'hi' : 'en');
    };

    const menuItems = [
      { name: language === 'en' ? 'Home' : 'होम', href: 'index.html' },
      { name: language === 'en' ? 'Academics' : 'शैक्षणिक', href: 'academics.html' },
      { name: language === 'en' ? 'Admissions' : 'प्रवेश', href: 'admissions.html' },
      { name: language === 'en' ? 'Gallery' : 'गैलरी', href: 'gallery.html' },
      { name: language === 'en' ? 'Contact' : 'संपर्क', href: 'contact.html' }
    ];

    return (
      <header className="fixed w-full top-0 z-50 glass-effect border-b border-[var(--border-color)]" data-name="header" data-file="components/Header.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and School Name */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-[var(--primary-color)] flex items-center justify-center">
                <div className="icon-graduation-cap text-xl text-white"></div>
              </div>
              <div className="hidden md:block">
                <h1 className="text-lg font-bold text-[var(--text-primary)]">
                  {language === 'en' ? 'PM Shri KV NO. 2 Itarsi' : 'पीएम श्री के.वी. न. 2 इटारसी'}
                </h1>
                <p className="text-sm text-[var(--text-secondary)]">
                  {language === 'en' ? 'Excellence in Education' : 'शिक्षा में उत्कृष्टता'}
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-4">
              {menuItems.map((item) => (
                <a key={item.name} href={item.href} className="nav-link">
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Controls */}
            <div className="flex items-center space-x-3">
              <button onClick={toggleLanguage} className="p-2 rounded-lg hover:bg-[var(--primary-color)] hover:text-white transition-colors">
                <div className="icon-globe text-lg"></div>
              </button>
              <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-[var(--primary-color)] hover:text-white transition-colors">
                <div className={`icon-${theme === 'light' ? 'moon' : 'sun'} text-lg`}></div>
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
                <div className={`icon-${isMenuOpen ? 'x' : 'menu'} text-lg`}></div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-[var(--border-color)]">
              {menuItems.map((item) => (
                <a key={item.name} href={item.href} className="block px-4 py-2 nav-link">
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}