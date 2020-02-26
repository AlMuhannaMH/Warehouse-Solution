const Authentication = {
    isAuthenticated: false,
    authenticate() { this.isAuthenticated = true },
    logout() { this.isAuthenticated = false },
    getAuth() { return this.isAuthenticated }
};
export default Authentication;