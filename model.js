class Model {
    constructor({onPostsChanged}) {
        this.posts = [];
        this.isError = false;
        this.onPostsChanged = onPostsChanged;
    }

    addPost(title, body) {
        if(this._isPostValid(title)) {
            this.isError = false;

            this.posts.push({
                title,
                body,
                timestamp: Date.now()
            });
        } else {
            this.isError = true;
        }
        this.onPostsChanged(this.posts, this.isError);
    }

    setPosts(posts) {
        this.posts = posts;

        this.onPostsChanged(this.posts, this.isError);
    }

    getPosts() {
        return this.posts;
    }

    _isPostValid(title) {
        return title.length < 100;
    }
}
