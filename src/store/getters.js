export default {
    token: ({ user: { token }}) => token,
    info: ({ user }) => user.info,
    uid: ({ user }) => user.info?.id ?? null,
    name: ({ user }) => user.info?.name ?? null,
    username: ({ user }) => user.info?.username ?? null
};
