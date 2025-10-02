function StudentHeader({ theme, toggleTheme }) {
  try {
    return (
      <header className="bg-[var(--bg-primary)] shadow-lg border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <a href="index.html" className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-[var(--accent-color)] flex items-center justify-center">
                  <div className="icon-graduation-cap text-lg text-white"></div>
                </div>
                <div>
                  <h1 className="text-lg font-bold text-[var(--text-primary)]">KV Itarsi</h1>
                  <p className="text-xs text-[var(--text-secondary)]">Student Portal</p>
                </div>
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-[var(--bg-secondary)] transition-colors"
              >
                <div className={`icon-${theme === 'light' ? 'moon' : 'sun'} text-lg text-[var(--text-primary)]`}></div>
              </button>
              
              <a href="index.html" className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary-color)]">
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  } catch (error) {
    console.error('StudentHeader component error:', error);
    return null;
  }
}