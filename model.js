class Model {
    constructor() {
        this.posts = [];

    }

    addPost(title, description) {
        this.posts.push({
            title,
            description
        });
    }

    getPosts() {
        return this.posts;
    }
}
}