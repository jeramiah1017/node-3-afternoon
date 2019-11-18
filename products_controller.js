module.exports = {
    create() {
        const db = req.app.get('db')
        const { name, description, price, image_url } = req.body;
        db.create_product([name, description, price, image_url])
        .then (result => {
            res.status(200).send(result)
        })
        .catch(err => {
            err.status(400).send({errorMessage: 'this just inst working'})
            console.log(err)
        })

    },
    getOne(req, res) {
        const db = req.app.get('db')
        const {id} = req.params;
        db.read_product.product(id)
        .then (result => {
            res.status(200).send(result)
        })
        .catch(err => {
            err.status(400).send({errorMessage: 'this just inst working'})
            console.log(err)
        })

    },
    getAll() {
        const db = req.app.get('db')
        db.read_products()
        .then (result => {
            res.status(200).send(result)
        })
        .catch(err => {
            err.status(400).send({errorMessage: 'this just inst working'})
            console.log(err)
        })
    },
    update(){
        const db = req.app.get('db')
        const { params, query } = req;
        dbInstance.update_product([params.id, query.desc])
        .then (result => {
            res.status(200).send(result)
        })
        .catch(err => {
            err.status(400).send({errorMessage: 'this just inst working'})
            console.log(err)
        })
    },
    delete(req, res){
        const db = req.app.get('db')
        const id = req.params
        db.delete_product.product(req.params.id)
        .then (result => {
            res.status(200).send(result)
          
        })


    }
}