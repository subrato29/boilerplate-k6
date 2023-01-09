const endpoints = {
    baseUrl: 'https://gorest.co.in',
    get getAllUsers() {
        return `${this.baseUrl}/public/v2/users`;
    },
}

module.exports = endpoints;