const Authentication = {
    isAuthenticated: true,
    authenticate() { this.isAuthenticated = true },
    logout() { this.isAuthenticated = false },
    getAuth() { return this.isAuthenticated }
};
export default Authentication;