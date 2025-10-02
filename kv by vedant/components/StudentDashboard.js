function StudentDashboard({ setIsLoggedIn }) {
  try {
    const [studentName] = React.useState(localStorage.getItem('student_name') || 'Student');
    const [studentClass] = React.useState(localStorage.getItem('student_class') || '10A');
    const [studentRoll] = React.useState(localStorage.getItem('student_roll') || '001');

    const [attendance] = React.useState({ present: 85, total: 92, percentage: 92.4 });
    const [grades] = React.useState([
      { subject: 'Mathematics', marks: 85, total: 100 },
      { subject: 'Science', marks: 92, total: 100 },
      { subject: 'English', marks: 78, total: 100 },
      { subject: 'Hindi', marks: 88, total: 100 }
    ]);
    
    const [assignments] = React.useState([
      { id: 1, subject: 'Mathematics', title: 'Quadratic Equations Practice', dueDate: '2025-10-05', status: 'pending' },
      { id: 2, subject: 'Science', title: 'Force and Motion Lab Report', dueDate: '2025-10-08', status: 'submitted' }
    ]);

    const handleLogout = () => {
      localStorage.removeItem('student_logged_in');
      localStorage.removeItem('student_name');
      localStorage.removeItem('student_roll');
      localStorage.removeItem('student_class');
      setIsLoggedIn(false);
    };

    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-[var(--text-primary)]">Welcome, {studentName}</h1>
            <p className="text-[var(--text-secondary)]">Class {studentClass} - Roll No. {studentRoll}</p>
          </div>
          <button onClick={handleLogout} className="btn-primary">
            <div className="icon-log-out text-lg mr-2"></div>
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Attendance */}
          <div className="card">
            <h3 className="text-xl font-semibold mb-4 text-[var(--text-primary)]">Attendance</h3>
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--accent-color)] mb-2">
                {attendance.percentage}%
              </div>
              <p className="text-[var(--text-secondary)]">
                {attendance.present} / {attendance.total} days present
              </p>
            </div>
          </div>

          {/* Recent Grades */}
          <div className="card lg:col-span-2">
            <h3 className="text-xl font-semibold mb-4 text-[var(--text-primary)]">Recent Grades</h3>
            <div className="space-y-3">
              {grades.map((grade) => (
                <div key={grade.subject} className="flex justify-between items-center p-3 border rounded-lg">
                  <span className="font-medium text-[var(--text-primary)]">{grade.subject}</span>
                  <span className="text-lg font-bold text-[var(--primary-color)]">
                    {grade.marks}/{grade.total}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Assignments */}
          <div className="card lg:col-span-3">
            <h3 className="text-xl font-semibold mb-4 text-[var(--text-primary)]">Assignments</h3>
            <div className="space-y-3">
              {assignments.map((assignment) => (
                <div key={assignment.id} className="flex justify-between items-center p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium text-[var(--text-primary)]">{assignment.title}</h4>
                    <p className="text-sm text-[var(--text-secondary)]">
                      {assignment.subject} - Due: {assignment.dueDate}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded text-sm ${
                    assignment.status === 'submitted' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('StudentDashboard component error:', error);
    return null;
  }
}