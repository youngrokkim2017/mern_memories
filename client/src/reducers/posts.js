// reducer accepts state and action
// based on action type, return the action or updated state
export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return posts
        case 'CREATE':
            return posts
        default:
            return posts;
    }
}