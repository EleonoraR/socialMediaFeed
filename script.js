document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('post-form');
    const postContent = document.getElementById('post-content');
    const postAuthor = document.getElementById('post-author');
    const submitPost = document.getElementById('submit-post');
    const feedContainer = document.getElementById('feed-container');

    const posts = [];

    function createPostElement(content, author) {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <div class="post-content">${content}</div>
            <div class="post-author">Posted by: ${author}</div>
        `;
        return postElement;
    }

    function renderPosts() {
        feedContainer.innerHTML = '';
        posts.forEach(post => {
            feedContainer.appendChild(createPostElement(post.content, post.author));
        });
    }

    submitPost.addEventListener('click', () => {
        const content = postContent.value.trim();
        const author = postAuthor.value.trim();

        if (content && author) {
            posts.unshift({ content, author });
            postContent.value = '';
            postAuthor.value = '';
            renderPosts();
        }
    });
});
