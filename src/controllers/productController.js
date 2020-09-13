
exports.getProduct = (req,res,next)=>{
    return res.json({
        "**Express js Version" : require('express/package').version
    });
    next();
}
exports.createProduct = (req,res,next)=>{
    res.json({
        'nama' : 'angga maulana',
        'work' : 'its work bro'
    })
    next();
}

exports.editProduct = (req,res,next)=>{
    res.json({
        'nama' : 'angga maulana',
        'work' : 'its work bro'
    })
    next();
}

exports.deleteProduct = (req,res,next)=>{
    res.json({
        'nama' : 'angga maulana',
        'work' : 'its work bro'
    })
    next();
}