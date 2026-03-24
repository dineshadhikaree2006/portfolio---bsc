function formatPostDate(dateString) {
  const date = new Date(`${dateString}T12:00:00`);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

function renderSection(section) {
  const paragraphs = (section.paragraphs || [])
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");

  const list =
    section.list && section.list.length
      ? `<ul class="post-section-list">${section.list
          .map((item) => `<li>${item}</li>`)
          .join("")}</ul>`
      : "";

  const code = section.code ? `<pre>${section.code}</pre>` : "";

  return `
    <article class="card post-section-card">
      <h2>${section.heading}</h2>
      ${code}
      ${paragraphs}
      ${list}
    </article>
  `;
}

function renderPostPage() {
  const postRoot = document.getElementById("postRoot");
  if (!postRoot || !window.PORTFOLIO_POSTS) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");
  const post = window.PORTFOLIO_POSTS.find((entry) => entry.slug === slug);

  if (!post) {
    document.title = "Post Not Found | Dinesh Adhikari";
    postRoot.innerHTML = `
      <section class="page-hero">
        <div class="container">
          <p class="eyebrow">Posts</p>
          <h1>Post not found</h1>
          <p class="page-lead">Check the link or return to the posts page.</p>
          <a class="btn btn-primary" href="projects.html">Back to Posts</a>
        </div>
      </section>
    `;
    return;
  }

  document.title = `${post.title} | Dinesh Adhikari`;

  postRoot.innerHTML = `
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">${post.type}</p>
        <h1>${post.title}</h1>
        <p class="page-lead">${post.intro}</p>
        <div class="post-detail-meta">
          <span>${formatPostDate(post.date)}</span>
          <span>${post.readTime}</span>
        </div>
        <div class="project-tag-wrap">${post.tags
          .map((tag) => `<span class="post-tag">${tag}</span>`)
          .join("")}</div>
      </div>
    </section>

    <section class="section">
      <div class="container post-layout">
        ${post.sections.map(renderSection).join("")}
      </div>
    </section>
  `;
}

document.addEventListener("DOMContentLoaded", renderPostPage);
