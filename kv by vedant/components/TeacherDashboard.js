function TeacherDashboard({ setIsLoggedIn }) {
  try {
    const [activeTab, setActiveTab] = React.useState('overview');
    const [teacherName] = React.useState(localStorage.getItem('teacher_name') || 'Teacher');

    const handleLogout = () => {
      localStorage.removeItem('teacher_logged_in');
      localStorage.removeItem('teacher_name');
      setIsLoggedIn(false);
    };

    const tabs = [
      { id: 'overview', name: 'Overview', icon: 'home' },
      { id: 'attendance', name: 'Attendance', icon: 'users' },
      { id: 'grades', name: 'Grades', icon: 'chart-bar' },
      { id: 'homework', name: 'Homework', icon: 'book-open' },
      { id: 'notices', name: 'Notices', icon: 'bell' }
    ];

    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-[var(--text-primary)]">Welcome, {teacherName}</h1>
            <p className="text-[var(--text-secondary)]">Manage your classes and students</p>
          </div>
          <button onClick={handleLogout} className="btn-primary">
            <div className="icon-log-out text-lg mr-2"></div>
            Logout
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-[var(--border-color)] mb-6">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${
                  activeTab === tab.id
                    ? 'border-[var(--primary-color)] text-[var(--primary-color)]'
                    : 'border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                <div className={`icon-${tab.icon} text-lg mr-2`}></div>
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {activeTab === 'overview' && <OverviewTab />}
          {activeTab === 'attendance' && <AttendanceTab />}
          {activeTab === 'grades' && <GradesTab />}
          {activeTab === 'homework' && <HomeworkTab />}
          {activeTab === 'notices' && <NoticesTab />}
        </div>
      </div>
    );
  } catch (error) {
    console.error('TeacherDashboard component error:', error);
    return null;
  }
}