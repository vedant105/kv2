// Teacher authentication utilities
const teacherAuth = {
  login(username, password) {
    // Demo authentication
    if (username === 'teacher' && password === 'password') {
      localStorage.setItem('teacher_logged_in', 'true');
      localStorage.setItem('teacher_name', 'Dr. Sharma');
      return { success: true, user: { name: 'Dr. Sharma', id: 'T001' } };
    }
    return { success: false, error: 'Invalid credentials' };
  },

  logout() {
    localStorage.removeItem('teacher_logged_in');
    localStorage.removeItem('teacher_name');
  },

  isLoggedIn() {
    return localStorage.getItem('teacher_logged_in') === 'true';
  },

  getTeacherInfo() {
    return {
      name: localStorage.getItem('teacher_name') || 'Teacher',
      id: localStorage.getItem('teacher_id') || 'T001'
    };
  }
};

window.teacherAuth = teacherAuth;