function StudentLogin({ setIsLoggedIn }) {
  try {
    const [credentials, setCredentials] = React.useState({ rollNumber: '', password: '' });
    const [error, setError] = React.useState('');

    const handleLogin = (e) => {
      e.preventDefault();
      
      if (credentials.rollNumber === '001' && credentials.password === 'student123') {
        localStorage.setItem('student_logged_in', 'true');
        localStorage.setItem('student_name', 'Arjun Sharma');
        localStorage.setItem('student_roll', '001');
        localStorage.setItem('student_class', '10A');
        setIsLoggedIn(true);
      } else {
        setError('Invalid credentials. Use roll number: 001, password: student123');
      }
    };

    return (
      <div className="min-h-screen flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-[var(--accent-color)] rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="icon-users text-2xl text-white"></div>
            </div>
            <h2 className="text-3xl font-bold text-[var(--text-primary)]">Student Login</h2>
            <p className="mt-2 text-[var(--text-secondary)]">Access your dashboard</p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                Roll Number
              </label>
              <input
                type="text"
                required
                value={credentials.rollNumber}
                onChange={(e) => setCredentials({...credentials, rollNumber: e.target.value})}
                className="w-full px-3 py-2 border border-[var(--border-color)] rounded-lg bg-[var(--bg-primary)] text-[var(--text-primary)]"
                placeholder="Enter your roll number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                Password
              </label>
              <input
                type="password"
                required
                value={credentials.password}
                onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                className="w-full px-3 py-2 border border-[var(--border-color)] rounded-lg bg-[var(--bg-primary)] text-[var(--text-primary)]"
                placeholder="Enter your password"
              />
            </div>

            <button type="submit" className="w-full btn-primary">
              Sign In
            </button>
            
            <div className="text-center text-sm text-[var(--text-secondary)]">
              Demo credentials: 001 / student123
            </div>
          </form>
        </div>
      </div>
    );
  } catch (error) {
    console.error('StudentLogin component error:', error);
    return null;
  }
}