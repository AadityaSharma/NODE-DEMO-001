const products = [];

exports.getAddProduct = (req, res, next) => {
  // console.log('In another middleware');
  // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"/><button type="submit">Submit</button></form>');

  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true 
  });
};

exports.postAddProduct = (req, res, next) => {
  products.push({ title: req.body.title })
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProduct: products.length > 0,
    activeShop: true,
    productCSS: true,
    // layout: false // setting false will not render the default layout
  });
};