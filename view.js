class View {
    constructor({onNewPost}) {
        this.postsNode = document.querySelector('#posts');
        this.titleInputNode = document.querySelector('#title-input');
        this.bodyInputNode = document.querySelector('#body-input');
        this.btnNode = document.querySelector('#add-pust-btn');
        this.errorNode = document.querySelector('#error');


        this.onNewPost = onNewPost;
        
        this.btnNode.addEventListener('click', this.handleBtnClick);
    }

    renderPosts(posts, isError) {
        this._clearView();

        if (isError) {
            this.errorNode.innerText = 'Ошибка ввода';
        }

        posts.forEach(post => {
            this.postsNode.innerHTML += `
            <div>
                <p>${this.buildDateString(post.timestamp)}</p>
                <p>${post.title}</p>
                <p>${post.body}</p>
            </div>
            `
        });
    }

    handleBtnClick = () => {
        const title = this.titleInputNode.value;
        const body = this.bodyInputNode.value;

        this.onNewPost(title, body)
    }

    buildDateString(timestamp) {
        const date = new Date(timestamp);
        return `
        ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}
        `;
    }

    _clearView() {
        this.postsNode.innerHTML = '';
        this.errorNode.innerText = '';
    }
}