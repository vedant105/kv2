class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Teacher app error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
            <button onClick={() => window.location.reload()} className="btn-primary">
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function TeacherApp() {
  try {
    const [theme, setTheme] = React.useState('light');
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    React.useEffect(() => {
      const savedTheme = localStorage.getItem('theme') || 'light';
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
      
      const loginStatus = localStorage.getItem('teacher_logged_in') === 'true';
      setIsLoggedIn(loginStatus);
    }, []);

    const toggleTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    };

    return (
      <div className="min-h-screen bg-[var(--bg-secondary)]">
        <TeacherHeader theme={theme} toggleTheme={toggleTheme} />
        {isLoggedIn ? (
          <TeacherDashboard setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <TeacherLogin setIsLoggedIn={setIsLoggedIn} />
        )}
      </div>
    );
  } catch (error) {
    console.error('TeacherApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <TeacherApp />
  </ErrorBoundary>
);