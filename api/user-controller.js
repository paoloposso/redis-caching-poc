
const UserService = require('../core/services/user-service');
const cache = require('../infrastructure/caching/redis/cache-service');

const userService = new UserService({ cache });

const registerUserActions = (app) => {
    app.get('/users/all', (req, res) => {
        userService.getAll()
            .then(users => res.json(users))
            .catch(err => res.status(500).json(err));
    });

    app.post('/user', (req, res) => {
        userService.insert(req.body)
            .then(user => res.json(user))
            .catch(err => res.status(500).json(err));
    });
}

module.exports = {
    registerUserActions
}