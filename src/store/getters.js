export default {
    token: ({ token }) => token,
    user: ({ user }) => user,
    uid: ({ user }) => user?.id,
    name: ({ user }) => user?.name,
    username: ({ user }) => user?.username
};
