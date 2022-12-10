var endpoints = {
    baseUrl: () => {
        return 'https://gorest.co.in';
    },
    getAllUsers: () => {
        return endpoints.baseUrl() + '/public/v2/users';
    },
}

module.exports = endpoints;