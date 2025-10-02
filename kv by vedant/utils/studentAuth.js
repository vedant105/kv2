// Student authentication utilities
const studentAuth = {
  login(rollNumber, password) {
    // Demo authentication
    if (rollNumber === '001' && password === 'student123') {
      localStorage.setItem('student_logged_in', 'true');
      localStorage.setItem('student_name', 'Arjun Sharma');
      localStorage.setItem('student_roll', '001');
      localStorage.setItem('student_class', '10A');
      return { success: true, user: { name: 'Arjun Sharma', roll: '001', class: '10A' } };
    }
    return { success: false, error: 'Invalid credentials' };
  },

  logout() {
    localStorage.removeItem('student_logged_in');
    localStorage.removeItem('student_name');
    localStorage.removeItem('student_roll');
    localStorage.removeItem('student_class');
  },

  isLoggedIn() {
    return localStorage.getItem('student_logged_in') === 'true';
  },

  getStudentInfo() {
    return {
      name: localStorage.getItem('student_name') || 'Student',
      roll: localStorage.getItem('student_roll') || '001',
      class: localStorage.getItem('student_class') || '10A'
    };
  }
};

window.studentAuth = studentAuth;