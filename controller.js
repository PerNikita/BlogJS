class Controller {
    constructor() {
        this.model = new Model({
            onPostsChanged: this.handleModelPostChanged
        });
        this.view = new View({
            onNewPost: this.handleViewNewPost
        });

        this.api = new API();
    }

    init() {
        this.api.fetchPosts()
            .then(posts => {
                this.model.setPosts(posts);
            })
    }

    handleModelPostChanged = (post, isError) => {
        this.view.renderPosts(post, isError);
    }

    handleViewNewPost = (title, body) => {
        this.model.addPost(title, body);
    }
}