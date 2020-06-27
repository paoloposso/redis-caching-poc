
const UserService = require('../core/services/user-service');
const cache = require('../infrastructure/caching/redis/caching-service');

const userService = new UserService({ cache });

const registerUserActions = (app) => {

    //not totally useful at all, only a poc to have a sample of caching by now
    app.get('/users/all', (req, res) => {
        userService.getAll()
            .then(users => res.json(users))
            .catch(err => {
                res.status(500).send(err);
            });
    });

    app.post('/user', (req, res) => {
        userService.insert(req.body)
            .then(user => res.json(user))
            .catch(err => {
                res.status(500).send(err);
            });
    });
}

module.exports = {
    registerUserActions
}