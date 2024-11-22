const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    const section1 = document.querySelectorAll('.section1');

    // Toggle Sidebar
    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('hidden');
    });

    // Activate sections
    navLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
  
        const targetSection = link.getAttribute('data-section');

        sections.forEach(section => section.classList.add('hidden'));
        section1.forEach(section1 => section1.classList.add('hidden'));

        const activeSection = document.getElementById(targetSection);
        if (activeSection) {
          activeSection.classList.remove('hidden');
        }
      });
    });