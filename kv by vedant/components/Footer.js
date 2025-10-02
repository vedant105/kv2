function Footer() {
  try {
    return (
      <footer className="bg-[var(--text-primary)] text-white py-12" data-name="footer" data-file="components/Footer.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* School Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[var(--primary-color)] flex items-center justify-center mr-3">
                  <div className="icon-graduation-cap text-xl text-white"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold">PM Shri Kendriya Vidyalaya NO. 2</h3>
                  <p className="text-gray-300">C.P.E. Itarsi</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Committed to providing quality education and nurturing future leaders with strong moral values and academic excellence.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-[var(--primary-color)] rounded-full flex items-center justify-center hover:bg-[var(--secondary-color)] transition-colors">
                  <div className="icon-facebook text-lg"></div>
                </a>
                <a href="#" className="w-10 h-10 bg-[var(--primary-color)] rounded-full flex items-center justify-center hover:bg-[var(--secondary-color)] transition-colors">
                  <div className="icon-twitter text-lg"></div>
                </a>
                <a href="#" className="w-10 h-10 bg-[var(--primary-color)] rounded-full flex items-center justify-center hover:bg-[var(--secondary-color)] transition-colors">
                  <div className="icon-instagram text-lg"></div>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="academics.html" className="text-gray-300 hover:text-white transition-colors">Academics</a></li>
                <li><a href="admissions.html" className="text-gray-300 hover:text-white transition-colors">Admissions</a></li>
                <li><a href="teacher-dashboard.html" className="text-gray-300 hover:text-white transition-colors">Teacher Portal</a></li>
                <li><a href="student-dashboard.html" className="text-gray-300 hover:text-white transition-colors">Student Portal</a></li>
                <li><a href="gallery.html" className="text-gray-300 hover:text-white transition-colors">Gallery</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="icon-map-pin text-lg mr-3 text-[var(--secondary-color)]"></div>
                  <span className="text-gray-300 text-sm">C.P.E. Itarsi, Madhya Pradesh, India</span>
                </div>
                <div className="flex items-center">
                  <div className="icon-phone text-lg mr-3 text-[var(--secondary-color)]"></div>
                  <span className="text-gray-300 text-sm">+91-XXXX-XXXXXX</span>
                </div>
                <div className="flex items-center">
                  <div className="icon-mail text-lg mr-3 text-[var(--secondary-color)]"></div>
                  <span className="text-gray-300 text-sm">kv2itarsi@kvs.gov.in</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              Developed by Vedant Singh Rajput
            </p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}