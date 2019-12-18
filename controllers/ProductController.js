const list = (req,res)=> {

    Product.find({},(err,product) => {
        res.json(product);

    });
};

const getOne=(req,res)=> {

    const productId=req.params.productId;
    Product.findOne({_id: productId},(err,product) => {
        res.json(product);

    });

};


const create=(req,res)=> {
    const u = new Product({
        category:mongoose.Types.ObjectId,
        title: req.body.title,
        miniDescription: req.body.miniDescription,
        description: req.body.description,
        price: req.body.price,
        sale: req.body.sale,
        photo: req.body.photo,

    });
    u.save().then(()=>{
        res.json({
            message:"Product created"
        })
    })
};


const deleteProduct=(req,res)=> {

    const productId=req.params.productId;
    Product.deleteOne({_id:req.params.productId},(err,) => {
        res.json({message:"product deleted"});

    });

};

const update = (req,res)=> {

    const productId=req.params.productId;
    User.updateOne({_id:req.params.productId},{
        category:mongoose.Types.ObjectId,
        title:req.body.title,
        miniDescription:req.body.miniDescription,
        description:req.body.descpription,
        price:req.body.price,
        sale:req.body.sale,
        photo:req.body.photo
    },(err,) => {
        res.json({message:"product updated"});

    });

};


const getProduct= (req,res)=> {

    const categoryId=req.params.categoryId;
    Product.find({category:categoryId},(err,product) => {
        res.json(product);

    })
}

module.exports={
    list,
    getOne,
    create,
    deleteProduct,
    update,
    getProduct

};