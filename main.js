
// Mock Data for Courses
const courses = [
  {
    id: 1,
    title: "Matematika Dasar: Aljabar",
    category: "math",
    description: "Pelajari konsep dasar aljabar dengan metode yang mudah dipahami dan interaktif.",
    lessons: 12,
    students: 1200,
    rating: 4.8,
    image: "https://placehold.co/600x400/4F46E5/FFFFFF?text=Math"
  },
  {
    id: 2,
    title: "Biologi: Sel & Jaringan",
    category: "sains",
    description: "Eksplorasi dunia mikroskopis sel makhluk hidup dan fungsinya.",
    lessons: 8,
    students: 850,
    rating: 4.9,
    image: "https://placehold.co/600x400/10B981/FFFFFF?text=Bio"
  },
  {
    id: 3,
    title: "Bahasa Inggris: Tenses",
    category: "bahasa",
    description: "Kuasai 16 tenses bahasa Inggris dengan cepat melalui video animasi.",
    lessons: 20,
    students: 2100,
    rating: 4.7,
    image: "https://placehold.co/600x400/F59E0B/FFFFFF?text=English"
  },
  {
    id: 4,
    title: "Pengenalan Coding Python",
    category: "tech",
    description: "Belajar coding dari nol dengan bahasa Python yang ramah pemula.",
    lessons: 15,
    students: 3000,
    rating: 4.9,
    image: "https://placehold.co/600x400/3B82F6/FFFFFF?text=Python"
  },
  {
    id: 5,
    title: "Fisika: Hukum Newton",
    category: "sains",
    description: "Pahami hukum gerak Newton melalui simulasi lab virtual.",
    lessons: 10,
    students: 900,
    rating: 4.6,
    image: "https://placehold.co/600x400/EF4444/FFFFFF?text=Physics"
  },
  {
    id: 6,
    title: "Sejarah Kemerdekaan RI",
    category: "other",
    description: "Telusuri jejak perjuangan pahlawan bangsa dalam meraih kemerdekaan.",
    lessons: 14,
    students: 1500,
    rating: 4.8,
    image: "https://placehold.co/600x400/8B5CF6/FFFFFF?text=History"
  }
];

// DOM Elements
const courseGrid = document.getElementById('course-grid');
const filterBtns = document.querySelectorAll('.cat-btn');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const searchInput = document.getElementById('course-search');

// Render Courses
function renderCourses(data) {
  courseGrid.innerHTML = data.map(course => `
    <div class="course-card" data-category="${course.category}">
      <div class="course-thumb" style="background-image: url('${course.image}'); background-size: cover; background-position: center;">
        <span class="course-tag">${course.category}</span>
      </div>
      <div class="course-content">
        <div class="course-meta">
          <span>${course.lessons} Pelajaran</span>
          <span>${course.students} Siswa</span>
        </div>
        <h3 class="course-title">${course.title}</h3>
        <p class="course-desc">${course.description}</p>
        <div class="course-footer">
          <div class="rating">⭐ ${course.rating}</div>
          <a href="#" class="btn-link">Mulai Belajar →</a>
        </div>
      </div>
    </div>
  `).join('');
}

// Initial Render
renderCourses(courses);

// Filter Logic
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all
    filterBtns.forEach(b => b.classList.remove('active'));
    // Add active to clicked
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    if (filter === 'all') {
      renderCourses(courses);
    } else {
      const filtered = courses.filter(c => c.category === filter);
      renderCourses(filtered);
    }
  });
});

// Search Logic
searchInput.addEventListener('input', (e) => {
  const term = e.target.value.toLowerCase();
  const searchResults = courses.filter(course =>
    course.title.toLowerCase().includes(term) ||
    course.description.toLowerCase().includes(term)
  );
  renderCourses(searchResults);
});

// Mobile Menu
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');

  // Animate Hamburger
  const bars = menuToggle.querySelectorAll('.bar');
  // Simple animation toggle could go here
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    navLinks.classList.remove('active'); // Close menu on click
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
