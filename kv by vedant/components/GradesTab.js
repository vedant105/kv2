function GradesTab() {
  try {
    const [selectedClass, setSelectedClass] = React.useState('10A');
    const [selectedSubject, setSelectedSubject] = React.useState('Mathematics');
    const [examType, setExamType] = React.useState('Unit Test');
    
    const [grades, setGrades] = React.useState([
      { id: 1, name: 'Arjun Sharma', rollNo: '001', marks: 85 },
      { id: 2, name: 'Priya Singh', rollNo: '002', marks: 92 },
      { id: 3, name: 'Rahul Kumar', rollNo: '003', marks: 78 },
      { id: 4, name: 'Ananya Gupta', rollNo: '004', marks: 88 },
      { id: 5, name: 'Vikash Yadav', rollNo: '005', marks: 81 }
    ]);

    const classes = ['10A', '10B', '9A', '9B', '8A', '8B'];
    const subjects = ['Mathematics', 'Science', 'English', 'Hindi', 'Social Studies'];
    const examTypes = ['Unit Test', 'Mid Term', 'Final Exam', 'Assignment'];

    const updateMarks = (studentId, marks) => {
      setGrades(prev => prev.map(student => 
        student.id === studentId ? { ...student, marks: parseInt(marks) || 0 } : student
      ));
    };

    const submitGrades = () => {
      console.log('Grades submitted:', { 
        class: selectedClass, 
        subject: selectedSubject, 
        examType, 
        grades 
      });
      // Here you would normally send to backend
    };

    return (
      <div className="space-y-6" data-name="grades-tab" data-file="components/GradesTab.js">
        {/* Controls */}
        <div className="card">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-[var(--text-primary)]">Class</label>
              <select 
                value={selectedClass} 
                onChange={(e) => setSelectedClass(e.target.value)}
                className="w-full px-3 py-2 border border-[var(--border-color)] rounded-lg bg-[var(--bg-primary)]"
              >
                {classes.map(cls => (
                  <option key={cls} value={cls}>{cls}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2 text-[var(--text-primary)]">Subject</label>
              <select 
                value={selectedSubject} 
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="w-full px-3 py-2 border border-[var(--border-color)] rounded-lg bg-[var(--bg-primary)]"
              >
                {subjects.map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2 text-[var(--text-primary)]">Exam Type</label>
              <select 
                value={examType} 
                onChange={(e) => setExamType(e.target.value)}
                className="w-full px-3 py-2 border border-[var(--border-color)] rounded-lg bg-[var(--bg-primary)]"
              >
                {examTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Grades Entry */}
          <div className="space-y-3">
            <h4 className="font-semibold text-[var(--text-primary)]">
              Enter Marks - {selectedSubject} ({examType})
            </h4>
            
            {grades.map((student) => (
              <div key={student.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex-1">
                  <p className="font-medium text-[var(--text-primary)]">{student.name}</p>
                  <p className="text-sm text-[var(--text-secondary)]">Roll No: {student.rollNo}</p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={student.marks}
                    onChange={(e) => updateMarks(student.id, e.target.value)}
                    className="w-20 px-2 py-1 border border-[var(--border-color)] rounded text-center"
                    placeholder="0"
                  />
                  <span className="text-[var(--text-secondary)]">/ 100</span>
                </div>
              </div>
            ))}
          </div>

          <button onClick={submitGrades} className="mt-6 btn-primary">
            Submit Grades
          </button>
        </div>
      </div>
    );
  } catch (error) {
    console.error('GradesTab component error:', error);
    return null;
  }
}