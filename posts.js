function formatPostDate(dateString) {
  const date = new Date(`${dateString}T12:00:00`);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

function createTagMarkup(tags) {
  return tags
    .map((tag) => `<span class="post-tag">${tag}</span>`)
    .join("");
}

function renderPosts(posts) {
  const postGrid = document.getElementById("postGrid");
  const postCount = document.getElementById("postCount");

  if (!postGrid || !postCount || !window.PORTFOLIO_POSTS) return;

  if (!posts.length) {
    postCount.textContent = "0 posts";
    postGrid.innerHTML = `
      <article class="card empty-state">
        <h3>No posts in this view</h3>
        <p>Add a new item in <code>data/posts.js</code> or switch the filter.</p>
      </article>
    `;
    return;
  }

  postCount.textContent = `${posts.length} post${posts.length === 1 ? "" : "s"}`;

  postGrid.innerHTML = posts
    .map(
      (post) => `
        <article class="card post-card">
          <div class="post-card-top">
            <span class="post-type-badge">${post.type}</span>
            <span class="post-meta">${formatPostDate(post.date)} • ${post.readTime}</span>
          </div>
          <h3>${post.title}</h3>
          <p>${post.excerpt}</p>
          <div class="project-tag-wrap">${createTagMarkup(post.tags)}</div>
          <a class="project-link" href="post.html?slug=${post.slug}">Read Post</a>
        </article>
      `
    )
    .join("");
}

function initPostFilters() {
  const filterSelect = document.getElementById("postTypeFilter");
  if (!filterSelect || !window.PORTFOLIO_POSTS) return;

  const sortNewestFirst = [...window.PORTFOLIO_POSTS].sort((a, b) =>
    b.date.localeCompare(a.date)
  );

  renderPosts(sortNewestFirst);

  filterSelect.addEventListener("change", () => {
    const value = filterSelect.value;
    const filteredPosts =
      value === "All"
        ? sortNewestFirst
        : sortNewestFirst.filter((post) => post.type === value);

    renderPosts(filteredPosts);
  });
}

document.addEventListener("DOMContentLoaded", initPostFilters);
