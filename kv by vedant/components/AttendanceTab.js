function AttendanceTab() {
  try {
    const [selectedClass, setSelectedClass] = React.useState('10A');
    const [selectedDate, setSelectedDate] = React.useState(new Date().toISOString().split('T')[0]);
    
    const [students, setStudents] = React.useState([
      { id: 1, name: 'Arjun Sharma', rollNo: '001', status: 'present' },
      { id: 2, name: 'Priya Singh', rollNo: '002', status: 'present' },
      { id: 3, name: 'Rahul Kumar', rollNo: '003', status: 'absent' },
      { id: 4, name: 'Ananya Gupta', rollNo: '004', status: 'present' },
      { id: 5, name: 'Vikash Yadav', rollNo: '005', status: 'present' }
    ]);

    const classes = ['10A', '10B', '9A', '9B', '8A', '8B'];

    const markAttendance = (studentId, status) => {
      setStudents(prev => prev.map(student => 
        student.id === studentId ? { ...student, status } : student
      ));
    };

    const submitAttendance = () => {
      console.log('Attendance submitted:', { class: selectedClass, date: selectedDate, students });
      // Here you would normally send to backend
    };

    return (
      <div className="space-y-6" data-name="attendance-tab" data-file="components/AttendanceTab.js">
        {/* Controls */}
        <div className="card">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-[var(--text-primary)]">Select Class</label>
              <select 
                value={selectedClass} 
                onChange={(e) => setSelectedClass(e.target.value)}
                className="px-3 py-2 border border-[var(--border-color)] rounded-lg bg-[var(--bg-primary)]"
              >
                {classes.map(cls => (
                  <option key={cls} value={cls}>{cls}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2 text-[var(--text-primary)]">Date</label>
              <input 
                type="date" 
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="px-3 py-2 border border-[var(--border-color)] rounded-lg bg-[var(--bg-primary)]"
              />
            </div>
          </div>

          {/* Student List */}
          <div className="space-y-3">
            <h4 className="font-semibold text-[var(--text-primary)]">Students - Class {selectedClass}</h4>
            {students.map((student) => (
              <div key={student.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium text-[var(--text-primary)]">{student.name}</p>
                  <p className="text-sm text-[var(--text-secondary)]">Roll No: {student.rollNo}</p>
                </div>
                
                <div className="flex space-x-2">
                  <button
                    onClick={() => markAttendance(student.id, 'present')}
                    className={`px-3 py-1 rounded text-sm ${
                      student.status === 'present' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    Present
                  </button>
                  <button
                    onClick={() => markAttendance(student.id, 'absent')}
                    className={`px-3 py-1 rounded text-sm ${
                      student.status === 'absent' 
                        ? 'bg-red-500 text-white' 
                        : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    Absent
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button onClick={submitAttendance} className="mt-6 btn-primary">
            Submit Attendance
          </button>
        </div>
      </div>
    );
  } catch (error) {
    console.error('AttendanceTab component error:', error);
    return null;
  }
}