// Interfaces
interface BlogPost {
    id: string;
    title: string;
    category: string;
    image: string;
    excerpt: string;
    content: string;
    date: string;
}

interface AdminSession {
    isLoggedIn: boolean;
}

// Hardcoded Blog Posts
const staticBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Top 7 Web Development Trends to Watch in 2025",
    category: "Development",
    image: "https://picsum.photos/800/450?random=1",
    excerpt: "Discover cutting-edge web development trends in 2025 including AI, WebAssembly, and performance-first design practices.",
    content: `
      <p>As 2025 unfolds, web development continues its fast-paced transformation. Developers must adapt to modern technologies and evolving user expectations.</p>
      <h3>Key Trends:</h3>
      <ul>
        <li>AI-powered personalization</li>
        <li>WebAssembly performance boosts</li>
        <li>Privacy-by-design architecture</li>
        <li>JAMstack and Headless CMS adoption</li>
        <li>Serverless functions for scalability</li>
      </ul>
      <p>Staying ahead of these trends will ensure your web projects remain scalable, user-friendly, and future-ready.</p>
    `,
    date: "2025-01-03",
  },
  {
    id: "2",
    title: "Mastering UI/UX Design in the Age of AI",
    category: "Design",
    image: "https://picsum.photos/800/450?random=2",
    excerpt: "Learn how AI is revolutionizing UI/UX design, from personalized layouts to predictive interface behavior in 2025.",
    content: `
      <p>Design is no longer just about aesthetics. In 2025, AI transforms how interfaces behave and evolve with real-time data.</p>
      <h3>Emerging Concepts:</h3>
      <ul>
        <li>Adaptive interfaces using AI</li>
        <li>Emotion-driven design with machine learning</li>
        <li>Accessibility-first layouts</li>
        <li>Conversational UIs (Voice + Chat)</li>
      </ul>
      <p>Designers must now blend creativity with data analytics to build inclusive, intelligent, and intuitive user experiences.</p>
    `,
    date: "2025-01-07",
  },
  {
    id: "3",
    title: "Startup Marketing Strategy for Rapid Growth in 2025",
    category: "Marketing",
    image: "https://picsum.photos/800/450?random=3",
    excerpt: "Crack the 2025 startup code with powerful marketing frameworks — content, community, short-form video, and SEO.",
    content: `
      <p>New startups are booming, but competition is fierce. The best growth strategies blend storytelling, SEO, and video.</p>
      <h3>Top Tactics:</h3>
      <ol>
        <li>Build niche blogs around your product</li>
        <li>Grow authority through guest posts and podcasts</li>
        <li>Use Instagram & TikTok reels for brand visibility</li>
        <li>Launch an email newsletter with value content</li>
      </ol>
      <p>Consistency and authenticity are your greatest marketing assets.</p>
    `,
    date: "2025-01-12",
  },
  {
    id: "4",
    title: "The Top 5 Front-End Frameworks Compared (2025 Edition)",
    category: "Development",
    image: "https://picsum.photos/800/450?random=4",
    excerpt: "Compare React, Vue, Svelte, SolidJS, and Qwik in 2025 — which one fits your project best?",
    content: `
      <p>Choosing the right front-end framework in 2025 depends on your goals — speed, scalability, or simplicity.</p>
      <h3>Quick Snapshot:</h3>
      <ul>
        <li><strong>React:</strong> Huge ecosystem, mature</li>
        <li><strong>Vue:</strong> Great for beginners, balanced</li>
        <li><strong>Svelte:</strong> No runtime, super fast</li>
        <li><strong>SolidJS:</strong> Fine-grained reactivity</li>
        <li><strong>Qwik:</strong> Fastest initial loads, resumability</li>
      </ul>
      <p>For most startups, Svelte or Vue offer an ideal balance of speed and ease of use.</p>
    `,
    date: "2025-01-18",
  },
  {
    id: "5",
    title: "Creating Lightning-Fast Mobile Responsive Websites",
    category: "Design",
    image: "https://picsum.photos/800/450?random=5",
    excerpt: "Mobile-first is no longer optional. Learn responsive design best practices and frameworks that perform in 2025.",
    content: `
      <p>Users spend over 70% of browsing time on mobile. Here’s how to ensure your site performs beautifully on every screen.</p>
      <h3>Responsive Best Practices:</h3>
      <ul>
        <li>Use CSS Grid/Flexbox with media queries</li>
        <li>Design for touch — big buttons, spacing</li>
        <li>Compress images with WebP or AVIF</li>
        <li>Lazy-load scripts and assets</li>
      </ul>
      <p>Great mobile UX is the foundation of SEO and conversions in 2025.</p>
    `,
    date: "2025-01-22",
  },
  {
    id: "6",
    title: "Email Marketing in 2025: Still the Highest ROI Channel?",
    category: "Marketing",
    image: "https://picsum.photos/800/450?random=6",
    excerpt: "Despite changing platforms, email still leads in engagement and conversion. Here's how to do it right in 2025.",
    content: `
      <p>Email isn't dead — it's evolving. In 2025, it remains unmatched for direct communication, automation, and conversion.</p>
      <h3>Email Strategy Tips:</h3>
      <ul>
        <li>Use personalization (first names, behavior-based emails)</li>
        <li>Segment lists by interests & funnel stage</li>
        <li>Send value content: not just promotions</li>
        <li>Use clean, mobile-optimized templates</li>
      </ul>
      <p>Build trust first. Sales will follow.</p>
    `,
    date: "2025-01-27",
  },
  {
    id: "7",
    title: "Beginner's Guide to SEO in 2025: Rank Smarter, Not Harder",
    category: "Marketing",
    image: "https://picsum.photos/800/450?random=7",
    excerpt: "Understand modern SEO strategies for higher ranking in 2025, including AI tools, EEAT, and semantic search.",
    content: `
      <p>SEO is no longer just keyword stuffing. Google now prioritizes expertise, intent, and user experience.</p>
      <h3>Key SEO Tips:</h3>
      <ul>
        <li>Use long-tail, intent-based keywords</li>
        <li>Optimize titles, H1-H3 structure, and internal links</li>
        <li>Add schema markup for rich snippets</li>
        <li>Use AI tools like SurferSEO, Clearscope, or ChatGPT for outline ideas</li>
      </ul>
      <p>Provide value first — traffic will follow naturally.</p>
    `,
    date: "2025-02-01",
  },
  {
    id: "8",
    title: "How to Make Your Website Accessible to Everyone",
    category: "Development",
    image: "https://picsum.photos/800/450?random=8",
    excerpt: "Accessibility is essential. Build websites that serve every user, including those with disabilities.",
    content: `
      <p>In 2025, accessibility is not just ethical — it’s expected. Google ranks accessible sites higher too.</p>
      <h3>Checklist:</h3>
      <ul>
        <li>Use semantic HTML (header, nav, main, etc.)</li>
        <li>Add alt text to all images</li>
        <li>Ensure color contrast ratios meet WCAG</li>
        <li>Allow full keyboard navigation</li>
      </ul>
      <p>Accessible sites perform better — both in search and for users.</p>
    `,
    date: "2025-02-04",
  },
  {
    id: "9",
    title: "Understanding Color Psychology in Web Design",
    category: "Design",
    image: "https://picsum.photos/800/450?random=9",
    excerpt: "Colors influence user decisions and emotion. Learn how to use them effectively in web design.",
    content: `
      <p>Color isn’t just decoration — it’s psychology. Each hue evokes emotion and trust signals that impact engagement.</p>
      <h3>Examples:</h3>
      <ul>
        <li><strong>Blue:</strong> Trust, calm, technology</li>
        <li><strong>Red:</strong> Urgency, passion, danger</li>
        <li><strong>Green:</strong> Growth, money, health</li>
        <li><strong>Yellow:</strong> Energy, youth, optimism</li>
      </ul>
      <p>Pick your palette with purpose — and always test your color combinations with real users.</p>
    `,
    date: "2025-02-08",
  },
  {
    id: "10",
    title: "How to Use AI to Boost Your Blog Traffic in 2025",
    category: "Marketing",
    image: "https://picsum.photos/800/450?random=10",
    excerpt: "AI is your new content assistant. Discover how to use tools for content planning, SEO, and promotion.",
    content: `
      <p>AI tools can help bloggers save time and grow faster. Here’s how to leverage them smartly.</p>
      <h3>Top Tools to Try:</h3>
      <ul>
        <li>ChatGPT for content ideas and outlines</li>
        <li>Jasper or Copy.ai for copy generation</li>
        <li>SurferSEO for keyword and content score</li>
        <li>Canva AI for blog banners</li>
      </ul>
      <p>Use AI to enhance your voice — not replace it. Authenticity still wins.</p>
    `,
    date: "2025-02-12",
  },
];



// Helper functions for localStorage
const getStoredBlogPosts = (): BlogPost[] => {
    const storedPosts = localStorage.getItem('adminBlogPosts');
    return storedPosts ? JSON.parse(storedPosts) : [];
};

const saveBlogPosts = (posts: BlogPost[]) => {
    localStorage.setItem('adminBlogPosts', JSON.stringify(posts));
};

const getCombinedBlogPosts = (): BlogPost[] => {
    return [...staticBlogPosts, ...getStoredBlogPosts()];
};

// Global DOM elements (for common functionalities)
const navMenu = document.querySelector('nav ul');
const menuToggle = document.querySelector('.menu-toggle');
const scrollToTopBtn = document.getElementById('scroll-to-top');

// --- Common UI Functions ---

// Navigation Toggle
const setupNavToggle = () => {
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
};

// Scroll-to-top functionality
const setupScrollToTop = () => {
    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) { // Show button after scrolling 300px
                scrollToTopBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
};

// Highlight active navigation link
const highlightActiveNav = () => {
    const currentPath = window.location.pathname.split('/').pop();
    document.querySelectorAll('nav ul li a').forEach(link => {
        const linkPath = link.getAttribute('href')?.split('/').pop();
        if (currentPath === linkPath || 
            (currentPath === 'index.html' && linkPath === undefined) ||
            (linkPath === 'index.html' && currentPath === '') ||
            (currentPath === '' && linkPath === 'index.html') // handle root / for index.html
        ) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Special handling for blog pages
    if (currentPath?.startsWith('blog')) {
        document.querySelector('nav ul li a[href*="blog"]')
            ?.classList.add('active');
    }
     // Special handling for admin pages
     if (currentPath?.startsWith('admin')) {
        document.querySelector('nav ul li a[href*="admin"]') // Assuming admin link doesn't exist in header, this is fine
            ?.classList.remove('active'); // Remove active if admin link exists
    }
};


// --- Page Specific Logic ---

// Blog Listing Page (blog/index.html)
const initializeBlogListing = () => {
    const blogGrid = document.getElementById('blog-grid');
    const categoryButtons = document.querySelectorAll('.blog-categories button');

    if (blogGrid && categoryButtons.length > 0) {
        const renderBlogCards = (category: string = 'All') => {
            blogGrid.innerHTML = ''; // Clear existing cards
            const allPosts = getCombinedBlogPosts();
            const filteredPosts = category === 'All'
                ? allPosts
                : allPosts.filter(post => post.category === category);

            if (filteredPosts.length === 0) {
                blogGrid.innerHTML = '<p class="text-center">No blog posts found for this category.</p>';
                return;
            }

            filteredPosts.forEach(post => {
                const card = document.createElement('div');
                card.classList.add('blog-card');
                card.innerHTML = `
                    <img src="${post.image}" alt="${post.title}">
                    <div class="blog-card-content">
                        <h3>${post.title}</h3>
                        <p>${post.excerpt}</p>
                        <a href="blog-detail.html?id=${post.id}" class="btn">Read More</a>
                    </div>
                `;
                blogGrid.appendChild(card);
            });
        };

       categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    categoryButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const category = (button as HTMLElement).dataset.category;
    renderBlogCards(category);
  });
});


        // Initial render
        renderBlogCards('All');
        document.querySelector('.blog-categories button[data-category="All"]')?.classList.add('active');
    }
};

// Blog Detail Page (blog/blog-detail.html)
const initializeBlogDetail = () => {
    const blogDetailContainer = document.getElementById('blog-detail-content');
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    if (blogDetailContainer && postId) {
        const post = getCombinedBlogPosts().find(p => p.id === postId);

        if (post) {
            blogDetailContainer.innerHTML = `
                <h1>${post.title}</h1>
                <div class="blog-meta">
                    <span>Category: ${post.category}</span>
                    <span>Date: ${post.date}</span>
                </div>
                <img src="${post.image}" alt="${post.title}">
                <div class="blog-content">
                    ${post.content}
                </div>
            `;
        } else {
            blogDetailContainer.innerHTML = `
                <div class="not-found">
                    <h1>404</h1>
                    <p>Blog post not found.</p>
                    <a href="index.html" class="btn">Go to Blog Home</a>
                </div>
            `;
        }
    } else if (blogDetailContainer) {
        blogDetailContainer.innerHTML = `
            <div class="not-found">
                <h1>Error</h1>
                <p>No blog post ID provided.</p>
                <a href="index.html" class="btn">Go to Blog Home</a>
            </div>
        `;
    }
};

// Admin Login Page (admin/login.html)
const initializeAdminLogin = () => {
    const loginForm = document.getElementById('login-form') as HTMLFormElement;
    const messageDiv = document.getElementById('message');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const usernameInput = document.getElementById('username') as HTMLInputElement;
            const passwordInput = document.getElementById('password') as HTMLInputElement;

            const username = usernameInput.value;
            const password = passwordInput.value;

            // Hardcoded credentials
            if (username === 'admin' && password === '123456') {
                localStorage.setItem('adminSession', JSON.stringify({ isLoggedIn: true }));
                if (messageDiv) {
                    messageDiv.className = 'message success';
                    messageDiv.textContent = 'Login successful! Redirecting...';
                }
                setTimeout(() => {
                    window.location.href = 'dashboard.html';
                }, 1000);
            } else {
                if (messageDiv) {
                    messageDiv.className = 'message error';
                    messageDiv.textContent = 'Invalid username or password.';
                }
            }
        });
    }
};

// Admin Dashboard Page (admin/dashboard.html)
const initializeAdminDashboard = () => {
    const adminSession: AdminSession = JSON.parse(localStorage.getItem('adminSession') || '{ "isLoggedIn": false }');

    if (!adminSession.isLoggedIn) {
        window.location.href = 'login.html'; // Redirect to login if not logged in
        return;
    }

    const logoutBtn = document.getElementById('logout-btn');
    const blogPostForm = document.getElementById('blog-post-form') as HTMLFormElement;
    const blogPostsList = document.getElementById('blog-posts-list');
    const messageDiv = document.getElementById('admin-message');

    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('adminSession');
            window.location.href = 'login.html';
        });
    }

    const renderAdminBlogPosts = () => {
        if (blogPostsList) {
            blogPostsList.innerHTML = ''; // Clear list
            const posts = getStoredBlogPosts();
            if (posts.length === 0) {
                blogPostsList.innerHTML = '<p>No blog posts created yet.</p>';
                return;
            }
            posts.forEach(post => {
                const item = document.createElement('div');
                item.classList.add('blog-post-item');
                item.innerHTML = `
                    <span>${post.title}</span>
                    <button class="btn-delete" data-id="${post.id}">Delete</button>
                `;
                blogPostsList.appendChild(item);
            });

            document.querySelectorAll('.btn-delete').forEach(button => {
                button.addEventListener('click', (e) => {
                    const idToDelete = (e.target as HTMLButtonElement).dataset.id;
                    if (idToDelete && confirm('Are you sure you want to delete this post?')) {
                        let posts = getStoredBlogPosts();
                        posts = posts.filter(post => post.id !== idToDelete);
                        saveBlogPosts(posts);
                        renderAdminBlogPosts();
                        if (messageDiv) {
                            messageDiv.className = 'message success';
                            messageDiv.textContent = 'Blog post deleted successfully!';
                            setTimeout(() => messageDiv.textContent = '', 3000);
                        }
                    }
                });
            });
        }
    };

    if (blogPostForm) {
        blogPostForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const title = (document.getElementById('post-title') as HTMLInputElement).value;
            const category = (document.getElementById('post-category') as HTMLSelectElement).value;
            const imageUrl = (document.getElementById('post-image') as HTMLInputElement).value;
            const content = (document.getElementById('post-content') as HTMLTextAreaElement).value;

            if (!title || !category || !imageUrl || !content) {
                if (messageDiv) {
                    messageDiv.className = 'message error';
                    messageDiv.textContent = 'Please fill in all fields.';
                }
                return;
            }

            const newPost: BlogPost = {
                id: Date.now().toString(), // Simple unique ID
                title,
                category,
                image: imageUrl,
                excerpt: content.substring(0, 150) + '...', // Generate excerpt
                content,
                date: new Date().toISOString().slice(0, 10) // Current date
            };

            const existingPosts = getStoredBlogPosts();
            existingPosts.push(newPost);
            saveBlogPosts(existingPosts);

            if (messageDiv) {
                messageDiv.className = 'message success';
                messageDiv.textContent = 'Blog post created successfully!';
                setTimeout(() => messageDiv.textContent = '', 3000);
            }

            blogPostForm.reset(); // Clear form
            renderAdminBlogPosts(); // Re-render the list
        });
    }

    renderAdminBlogPosts(); // Initial render of posts
};


// --- Initialize based on current page ---
document.addEventListener('DOMContentLoaded', () => {
    setupNavToggle();
    setupScrollToTop();
    highlightActiveNav();

    const path = window.location.pathname;

    if (path.includes('blog/index.html')) {
        initializeBlogListing();
    } else if (path.includes('blog/blog-detail.html')) {
        initializeBlogDetail();
    } else if (path.includes('admin/login.html')) {
        initializeAdminLogin();
    } else if (path.includes('admin/dashboard.html')) {
        initializeAdminDashboard();
    }
});