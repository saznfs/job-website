// Sample Job Data
const jobs = [
    {
        title: "Frontend Developer",
        company: "Tech Corp",
        location: "New York",
        salary: "$80k - $120k",
        type: "Full-time",
        category: "IT"
    },
    {
        title: "Marketing Manager",
        company: "Digital Solutions",
        location: "Remote",
        salary: "$70k - $90k",
        type: "Contract",
        category: "Marketing"
    }
];

// Load Jobs Function
function loadJobs(filter = {}) {
    const jobsGrid = document.getElementById('allJobs') || document.getElementById('featuredJobs');
    jobsGrid.innerHTML = '';

    const filteredJobs = jobs.filter(job => {
        return (
            (!filter.category || job.category === filter.category) &&
            (!filter.search || job.title.toLowerCase().includes(filter.search))
        );
    });

    filteredJobs.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.className = 'job-card';
        jobCard.innerHTML = `
            <h3>${job.title}</h3>
            <p class="company">${job.company}</p>
            <div class="job-meta">
                <span>📍 ${job.location}</span>
                <span>💼 ${job.type}</span>
            </div>
            <p class="salary">${job.salary}</p>
            <button class="apply-btn">Apply Now</button>
        `;
        jobsGrid.appendChild(jobCard);
    });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    loadJobs();
    
    // Search Functionality
    const searchInput = document.getElementById('searchInput');
    if(searchInput) {
        searchInput.addEventListener('input', (e) => {
            loadJobs({ search: e.target.value.toLowerCase() });
        });
    }

    // Category Filter
    const categoryFilter = document.getElementById('categoryFilter');
    if(categoryFilter) {
        categoryFilter.addEventListener('change', (e) => {
            loadJobs({ category: e.target.value });
        });
    }
});

// Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Close menu when clicking outside (mobile)
document.addEventListener("click", (e) => {
    if(!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }
});

// Update active link
document.querySelectorAll(".nav-link").forEach(link => {
    if(link.href === window.location.href) {
        link.classList.add("active");
        document.querySelector(".active").classList.remove("active");
    }
});