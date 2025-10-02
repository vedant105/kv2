function HomeworkTab() {
  try {
    const [assignments, setAssignments] = React.useState([
      {
        id: 1,
        class: '10A',
        subject: 'Mathematics',
        title: 'Quadratic Equations Practice',
        dueDate: '2025-10-05',
        status: 'active'
      },
      {
        id: 2,
        class: '9B',
        subject: 'Science',
        title: 'Force and Motion Lab Report',
        dueDate: '2025-10-08',
        status: 'active'
      }
    ]);

    const [newAssignment, setNewAssignment] = React.useState({
      class: '10A',
      subject: 'Mathematics',
      title: '',
      description: '',
      dueDate: ''
    });

    const classes = ['10A', '10B', '9A', '9B', '8A', '8B'];
    const subjects = ['Mathematics', 'Science', 'English', 'Hindi', 'Social Studies'];

    const addAssignment = () => {
      if (newAssignment.title && newAssignment.dueDate) {
        setAssignments(prev => [...prev, {
          id: Date.now(),
          ...newAssignment,
          status: 'active'
        }]);
        
        setNewAssignment({
          class: '10A',
          subject: 'Mathematics',
          title: '',
          description: '',
          dueDate: ''
        });
      }
    };

    const deleteAssignment = (id) => {
      setAssignments(prev => prev.filter(assignment => assignment.id !== id));
    };

    return (
      <div className="space-y-6" data-name="homework-tab" data-file="components/HomeworkTab.js">
        {/* Add New Assignment */}
        <div className="card">
          <h3 className="text-xl font-semibold mb-4 text-[var(--text-primary)]">Add New Assignment</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-[var(--text-primary)]">Class</label>
              <select 
                value={newAssignment.class}
                onChange={(e) => setNewAssignment({...newAssignment, class: e.target.value})}
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
                value={newAssignment.subject}
                onChange={(e) => setNewAssignment({...newAssignment, subject: e.target.value})}
                className="w-full px-3 py-2 border border-[var(--border-color)] rounded-lg bg-[var(--bg-primary)]"
              >
                {subjects.map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-[var(--text-primary)]">Assignment Title</label>
            <input
              type="text"
              value={newAssignment.title}
              onChange={(e) => setNewAssignment({...newAssignment, title: e.target.value})}
              className="w-full px-3 py-2 border border-[var(--border-color)] rounded-lg bg-[var(--bg-primary)]"
              placeholder="Enter assignment title"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-[var(--text-primary)]">Description</label>
            <textarea
              value={newAssignment.description}
              onChange={(e) => setNewAssignment({...newAssignment, description: e.target.value})}
              className="w-full px-3 py-2 border border-[var(--border-color)] rounded-lg bg-[var(--bg-primary)]"
              rows="3"
              placeholder="Assignment details and instructions"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-[var(--text-primary)]">Due Date</label>
            <input
              type="date"
              value={newAssignment.dueDate}
              onChange={(e) => setNewAssignment({...newAssignment, dueDate: e.target.value})}
              className="px-3 py-2 border border-[var(--border-color)] rounded-lg bg-[var(--bg-primary)]"
            />
          </div>

          <button onClick={addAssignment} className="btn-primary">
            Add Assignment
          </button>
        </div>

        {/* Existing Assignments */}
        <div className="card">
          <h3 className="text-xl font-semibold mb-4 text-[var(--text-primary)]">Current Assignments</h3>
          
          {assignments.length === 0 ? (
            <p className="text-[var(--text-secondary)]">No assignments posted yet.</p>
          ) : (
            <div className="space-y-3">
              {assignments.map((assignment) => (
                <div key={assignment.id} className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-semibold text-[var(--text-primary)]">{assignment.title}</h4>
                      <p className="text-sm text-[var(--text-secondary)]">
                        {assignment.class} - {assignment.subject}
                      </p>
                      <p className="text-sm text-[var(--text-secondary)]">
                        Due: {assignment.dueDate}
                      </p>
                    </div>
                    
                    <button 
                      onClick={() => deleteAssignment(assignment.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <div className="icon-trash text-lg"></div>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error('HomeworkTab component error:', error);
    return null;
  }
}