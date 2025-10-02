function TeacherLogin({ setIsLoggedIn }) {
  try {
    const [credentials, setCredentials] = React.useState({ username: '', password: '' });
    const [error, setError] = React.useState('');

    const handleLogin = (e) => {
      e.preventDefault();
      
      if (credentials.username === 'teacher' && credentials.password === 'password') {
        localStorage.setItem('teacher_logged_in', 'true');
        localStorage.setItem('teacher_name', 'Dr. Sharma');
        setIsLoggedIn(true);
      } else {
        setError('Invalid credentials. Use username: teacher, password: password');
      }
    };

    return (
      <div className="min-h-screen flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-[var(--primary-color)] rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="icon-user-check text-2xl text-white"></div>
            </div>
            <h2 className="text-3xl font-bold text-[var(--text-primary)]">Teacher Login</h2>
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
                Username
              </label>
              <input
                type="text"
                required
                value={credentials.username}
                onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                className="w-full px-3 py-2 border border-[var(--border-color)] rounded-lg bg-[var(--bg-primary)] text-[var(--text-primary)]"
                placeholder="Enter your username"
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
              Demo credentials: teacher / password
            </div>
          </form>
        </div>
      </div>
    );
  } catch (error) {
    console.error('TeacherLogin component error:', error);
    return null;
  }
}