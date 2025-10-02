function OverviewTab() {
  try {
    const [stats, setStats] = React.useState({
      totalStudents: 120,
      presentToday: 115,
      pendingGrades: 8,
      newNotices: 3
    });

    const quickActions = [
      { title: 'Mark Attendance', icon: 'users', color: 'bg-blue-500' },
      { title: 'Enter Grades', icon: 'chart-bar', color: 'bg-green-500' },
      { title: 'Assign Homework', icon: 'book-open', color: 'bg-purple-500' },
      { title: 'Post Notice', icon: 'bell', color: 'bg-yellow-500' }
    ];

    return (
      <div className="space-y-6" data-name="overview-tab" data-file="components/OverviewTab.js">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="dashboard-card">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center mr-4">
                <div className="icon-users text-xl text-white"></div>
              </div>
              <div>
                <p className="text-2xl font-bold text-[var(--text-primary)]">{stats.totalStudents}</p>
                <p className="text-sm text-[var(--text-secondary)]">Total Students</p>
              </div>
            </div>
          </div>

          <div className="dashboard-card">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center mr-4">
                <div className="icon-check-circle text-xl text-white"></div>
              </div>
              <div>
                <p className="text-2xl font-bold text-[var(--text-primary)]">{stats.presentToday}</p>
                <p className="text-sm text-[var(--text-secondary)]">Present Today</p>
              </div>
            </div>
          </div>

          <div className="dashboard-card">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-lg bg-purple-500 flex items-center justify-center mr-4">
                <div className="icon-chart-bar text-xl text-white"></div>
              </div>
              <div>
                <p className="text-2xl font-bold text-[var(--text-primary)]">{stats.pendingGrades}</p>
                <p className="text-sm text-[var(--text-secondary)]">Pending Grades</p>
              </div>
            </div>
          </div>

          <div className="dashboard-card">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-lg bg-yellow-500 flex items-center justify-center mr-4">
                <div className="icon-bell text-xl text-white"></div>
              </div>
              <div>
                <p className="text-2xl font-bold text-[var(--text-primary)]">{stats.newNotices}</p>
                <p className="text-sm text-[var(--text-secondary)]">New Notices</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card">
          <h3 className="text-xl font-semibold mb-4 text-[var(--text-primary)]">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <button
                key={action.title}
                className="p-4 rounded-lg border border-[var(--border-color)] hover:shadow-md transition-all"
              >
                <div className={`w-12 h-12 rounded-lg ${action.color} flex items-center justify-center mx-auto mb-3`}>
                  <div className={`icon-${action.icon} text-xl text-white`}></div>
                </div>
                <p className="text-sm font-medium text-[var(--text-primary)]">{action.title}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('OverviewTab component error:', error);
    return null;
  }
}