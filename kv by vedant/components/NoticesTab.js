function NoticesTab() {
  try {
    const [notices, setNotices] = React.useState([
      {
        id: 1,
        title: 'Parent-Teacher Meeting',
        content: 'PTM scheduled for October 15th, 2025',
        date: '2025-10-01',
        priority: 'high'
      },
      {
        id: 2,
        title: 'Sports Day Practice',
        content: 'All students to attend sports practice sessions',
        date: '2025-09-30',
        priority: 'medium'
      }
    ]);

    const [newNotice, setNewNotice] = React.useState({
      title: '',
      content: '',
      priority: 'medium'
    });

    const addNotice = () => {
      if (newNotice.title && newNotice.content) {
        setNotices(prev => [...prev, {
          id: Date.now(),
          ...newNotice,
          date: new Date().toISOString().split('T')[0]
        }]);
        
        setNewNotice({ title: '', content: '', priority: 'medium' });
      }
    };

    const deleteNotice = (id) => {
      setNotices(prev => prev.filter(notice => notice.id !== id));
    };

    const getPriorityColor = (priority) => {
      switch (priority) {
        case 'high': return 'bg-red-100 text-red-800 border-red-200';
        case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
        case 'low': return 'bg-green-100 text-green-800 border-green-200';
        default: return 'bg-gray-100 text-gray-800 border-gray-200';
      }
    };

    return (
      <div className="space-y-6" data-name="notices-tab" data-file="components/NoticesTab.js">
        {/* Post New Notice */}
        <div className="card">
          <h3 className="text-xl font-semibold mb-4 text-[var(--text-primary)]">Post New Notice</h3>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-[var(--text-primary)]">Notice Title</label>
            <input
              type="text"
              value={newNotice.title}
              onChange={(e) => setNewNotice({...newNotice, title: e.target.value})}
              className="w-full px-3 py-2 border border-[var(--border-color)] rounded-lg bg-[var(--bg-primary)]"
              placeholder="Enter notice title"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-[var(--text-primary)]">Content</label>
            <textarea
              value={newNotice.content}
              onChange={(e) => setNewNotice({...newNotice, content: e.target.value})}
              className="w-full px-3 py-2 border border-[var(--border-color)] rounded-lg bg-[var(--bg-primary)]"
              rows="4"
              placeholder="Notice content and details"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-[var(--text-primary)]">Priority</label>
            <select 
              value={newNotice.priority}
              onChange={(e) => setNewNotice({...newNotice, priority: e.target.value})}
              className="px-3 py-2 border border-[var(--border-color)] rounded-lg bg-[var(--bg-primary)]"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <button onClick={addNotice} className="btn-primary">
            Post Notice
          </button>
        </div>

        {/* Posted Notices */}
        <div className="card">
          <h3 className="text-xl font-semibold mb-4 text-[var(--text-primary)]">Posted Notices</h3>
          
          {notices.length === 0 ? (
            <p className="text-[var(--text-secondary)]">No notices posted yet.</p>
          ) : (
            <div className="space-y-4">
              {notices.map((notice) => (
                <div key={notice.id} className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-[var(--text-primary)]">{notice.title}</h4>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 text-xs rounded border ${getPriorityColor(notice.priority)}`}>
                        {notice.priority.toUpperCase()}
                      </span>
                      <button 
                        onClick={() => deleteNotice(notice.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <div className="icon-trash text-lg"></div>
                      </button>
                    </div>
                  </div>
                  <p className="text-[var(--text-secondary)] mb-2">{notice.content}</p>
                  <p className="text-sm text-[var(--text-secondary)]">Posted: {notice.date}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error('NoticesTab component error:', error);
    return null;
  }
}
// Partial content, replace this line and continue implementing the file.