module.exports = {
    create: (req, res) => {
        const db = req.app.get('db');
        const { name, description, price, image_url } = req.body;

        db.create_product({ name, description, price, image_url })
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send(err);
                console.log(`Error: ${err.message}`);
            });
    },

    getOne: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;

        db.read_product({ id })
            .then(product => res.status(200).send(product))
            .catch(err => {
                res.status(500).send(err);
                console.log(`Error: ${err.message}`);
            });
    },

    getAll: (req, res) => {
        const db = req.app.get('db');

        db.read_products()
            .then(products => res.status(200).send(products))
            .catch(err => {
                res.status(500).send(err);
                console.log(`Error: ${err.message}`);
            });
    },

    update: (req, res) => {
        const db = req.app.get('db');

        const { id } = req.params;
        const { desc } = req.query;
        db.update_product({ id, description: desc })
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send(err);
                console.log(`Error: ${err.message}`);
            });
    },

    delete: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;

        db.delete_product({ id })
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send(err);
                console.log(`Error: ${err.message}`);
            });
    }
};