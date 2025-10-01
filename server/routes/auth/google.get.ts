export default defineOAuthGoogleEventHandler({
    async onSuccess(event, { user, tokens }) {
        await setUserSession(event, {
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                urlPicture: user.picture
            },
        });
        return sendRedirect(event, '/');
    },
    onError(event, error) {
        return sendRedirect(event, '/login?error=oauth_google');
    }
})