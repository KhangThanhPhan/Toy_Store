//click all products in search box
$('.all-drop').click(function (e) {
    e.preventDefault();
    $('.drop').show();
});
$(document).on("click", function (event) {
    var click = $(".all-drop");
    if (click !== event.target && !click.has(event.target).length) {
        $(".drop").hide();
    }
});
// on responsive screen, click the bar
$(document).ready(function () {
    //open 
    $('.bar').click(function (e) {
        e.preventDefault();
        $(this).empty();
        $(`<div class="close-bar">
            <i class="fa fa-times-circle" aria-hidden="true"></i>
            </div>`).appendTo(this);
        $('.drop-res').css({ 'transform': 'translateX(0)' });
    })
    //close
    $(document).on('click', '.close-bar', function (e) {
        e.preventDefault();
        $('.bar').empty();
        $(`<div class="open-bar">
        <span></span>
        <span></span>
        <span></span>
        </div>`).appendTo('.bar');
        $('.drop-res').css({ 'transform': 'translateX(-100%)' });
    });
    //show dropdown
    $(document).on('click', '.open-drop', function (e) {
        e.preventDefault();
        $(this).parent('.drop-name').append(`<span class="close-drop">
        <i class="fa fa-angle-up" aria-hiden="true"></i>
        </span>
        `);
        $(this).parents('.drop-menu').children('.drop-detail').css('display', 'block');
        $(this).parent('.drop-name').children('.open-drop').remove();
    });
    //hide dropdown
    $(document).on('click', '.close-drop', function (e) {
        e.preventDefault();
        $(this).parent('.drop-name').append(`<span class="open-drop"><i class="fa fa-angle-down" aria-hidden="true"></i>
        </span>`);
        $(this).parents('.drop-menu').children('.drop-detail').css('display', 'none');
        $(this).parent('.drop-name').children('.close-drop').remove();
    });
    //show sub-dropdown
    $(document).on('click', '.sub-open-drop', function (e) {
        e.preventDefault();
        $(this).parent('.title').append(`<span class="sub-close-drop"><i class="fa fa-angle-up" aria-hidden="true"></i></span>`);
        $(this).parents('.sub-drop-menu').children('.sub-drop-detail').css('display', 'block');
        $(this).parent('.title').children('.sub-open-drop').remove();

    });
    //hide sub-dropdown
    $(document).on('click', '.sub-close-drop', function (e) {
        e.preventDefault();
        $(this).parent('.title').append(`<span class="sub-open-drop"><i class="fa fa-angle-down"
        aria-hidden="true"></i></span>`);
        $(this).parents('.sub-drop-menu').children('.sub-drop-detail').css('display', 'none');
        $(this).parent('.title').children('.sub-close-drop').remove();
    });
});
//on responsive screen, click search icon
$(document).ready(function () {
    //open search box in small screen
    $('.search-icon').click(function (e) {
        e.preventDefault();
        $(this).empty();
        $(`
            <span class="close-search"><i class="fa fa-times" aria-hidden="true"></i></span>
        `).appendTo(this);
        $('.search-box').show();
        //$(`.search-list`).show();
    });
    //open search box 
    $('.s-h').click(function (e) {
        e.preventDefault();
        $(this).empty();
        $(`
            <span class="close-search-s-h"><i class="fa fa-times" aria-hidden="true"></i></span>
        `).appendTo(this);
        $('.search-box').show();
        //$(`.search-list`).show();
    });
    //close search box in small screen
    $(document).on('click', '.close-search', function (e) {
        e.preventDefault();
        $('.search-icon').empty();
        $(`<div class="open-search">
        <i class="fa fa-search search-back" aria-hidden="true"></i>
        </div>`).appendTo('.search-icon');
        $('.search-box').hide();
    });
    //close search box
    $(document).on('click', '.close-search-s-h', function (e) {
        e.preventDefault();
        $('.s-h').empty();
        $(`<i class="fa fa-search" aria-hidden="true"></i>`).appendTo('.s-h');
        $('.search-box').hide();
    });
});
//slide by owl-carousel
$(document).ready(function () {
    $('.slide').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 7000,
        autoplaySpeed: 1700,
    });
});
//open&close login/resiter box
$(document).ready(function () {
    $('.profile').click(function (e) {
        e.preventDefault();
        $('.Verify').fadeIn().css('display', 'block');
    });
    $('.close-form').click(function (e) {
        e.preventDefault();
        $('.Verify').fadeOut();
    });
});
//login button click
$('.btn-login').click(function (e) {
    e.preventDefault();
    let getText = document.querySelectorAll('.input-group p');
    let getSuccess = document.querySelectorAll('.login-successfully p');

    for (let i = 0; i < getText.length; i++) {
        getText[i].remove();
    }
    for (let i = 0; i < getSuccess.length; i++) {
        getSuccess[i].remove();
    }
    let userName = $('.email').val();
    let passWord = $('.password').val();
    if (!userName) {
        $(`<p style = 'font-size: 14px; color: red; margin-bottom: -10px;'>Invalid Email!!!</p>`).appendTo('.email-group');
    }
    let testEmail = true;
    if (!/^[a-zA-Z0-9]/.test(userName) || !/@./.test(userName)) {
        testEmail = false;
        $(`<p style = 'font-size:14px; color:red; margin: 0px 0px -30px -70px'>Please enter the valid email address!!!</p>`).appendTo(".email-group");
    }
    if (!passWord) {
        $(`<p style = 'font-size: 14px; color: red;margin-bottom: -10px;'>Invalid Password!!!</p>`).appendTo('.password-group');
    }
    let testPass = true
    if (passWord.length < 6 || passWord.length > 16) {
        testPass = false;
        $(`<p style = 'font-size: 14px; color: red;margin: 0px 0px -30px -110px;'>Passwords must be at least 6 characters in length, <br> at most 16!!!</p>`).appendTo('.password-group');
    }
    if (testEmail && userName && passWord && testPass) {
        $(`<p style = 'font-size: 20px; color: #0090f0; margin: -15px 0px -20px 50px;'>Login Successfully!!!</p>`).prependTo('.login-form .login-successfully');
        $('.email').val('');
        $('.password').val('');
        window.alert('Login Successfully!!!');
        $('.Verify').fadeOut(3000);
        //window.location.href = '/toy.html';
    }
});
//click Signun now on login form
$('.register-tag').click(function (e) {
    e.preventDefault();
    $('.login-form').css('display', 'none');
    $('.register-form').css('display', 'block');
});
//click Signin on register form
$('.login-tag').click(function (e) {
    e.preventDefault();
    $('.register-form').css('display', 'none');
    $('.login-form').css('display', 'block');
});
//register button click
$('.btn-register').click(function (e) {
    e.preventDefault();
    let getText = document.querySelectorAll('.input-group p');
    let getSuccess = document.querySelectorAll('.login-successfully p');
    for (let i = 0; i < getText.length; i++) {
        getText[i].remove();
    }
    for (let i = 0; i < getSuccess.length; i++) {
        getSuccess[i].remove();
    }
    let userName_reg = $('.email-reg').val();
    let passWord_reg = $('.password-reg').val();
    let passWord_confirm = $('.password-confirm').val();
    let agree_check = $('#agree-check').is(':checked');
    //console.log(agree_check);
    if (!userName_reg) {
        $(`<p style = 'font-size: 14px; color: red; margin-bottom: -30px;'>Invalid Email!!!</p>`).appendTo('.email-reg-group');
    }
    let testEmailReg = true;
    if (!/^[a-zA-Z0-9]/.test(userName_reg) || !/@./.test(userName_reg)) {
        testEmailReg = false;
        $(`<p style = 'font-size:14px; color:red; margin: 0px 0px -40px -80px'>Please enter the valid email address!!!</p>`).appendTo(".email-reg-group");
    }
    if (!passWord_reg) {
        $(`<p style = 'font-size: 14px; color: red;margin-bottom: -30px;'>Invalid Password!!!</p>`).appendTo('.password-reg-group');
    }
    let testPassReg = true
    if (passWord_reg.length < 6 || passWord_reg.length > 16) {
        testPassReg = false;
        $(`<p style = 'font-size: 14px; color: red;margin: 0px 0px -40px -120px;'>Passwords must be at least 10 characters in length, <br> at most 16!!!</p>`).appendTo('.password-reg-group');
    }
    if (!passWord_confirm) {
        $(`<p style = 'font-size: 14px; color: red; margin: 0px 0px -30px -40px;'>Invalid Password Confirm!!!</p>`).appendTo('.password-reg-group-confirm');
    }
    let match = true;
    if (passWord_confirm !== passWord_reg) {
        match = false;
        $(`<p style = 'font-size: 14px; color: red;margin: 0px 0px -20px -20px;'>Password not match!!!</p>`).appendTo('.password-reg-group-confirm');
    }
    if (!agree_check) {
        $(`<p style = 'font-size: 14px; color: red;margin: -10px 0px -40px -20px;'>You're not accepting the terms..!!!</p>`).appendTo('.mess');
    } else {
        $('.mess').remove();
    }
    if (userName_reg && testEmailReg && passWord_reg && testPassReg && passWord_confirm && match && agree_check) {
        $(`<p style = 'font-size: 20px; color: #0090f0; margin: 0px 0px -30px 50px;'>Register Successfully!!!</p>`).prependTo('.register-form .register-successfully');

        $('.email-reg').val('');
        $('.password-reg').val('');
        $('.password-confirm').val('');
        window.alert('Register Successfully!!!');
        $('.Verify').fadeOut(3000);
    }
});
//Scroll to top 
$(window).scroll(function () {
    const thisPos = $(this).scrollTop();
    if (thisPos < 300) {
        $('.scroll-top').css({ 'transform': 'translateY(100px)' });
    } else {
        $('.scroll-top').css({ 'transform': 'translateY(-100%)' });
    }
});
$('.scroll-top').click(function (e) {
    e.preventDefault();
    $('body, html').animate(
        {
            scrollTop: 0,
        }
    );
});
// Detect scroll
let lastScroll = 0, delta = 1;
$(function () {
    $(window).scroll(function () {
        let nowScroll = $(this).scrollTop();

        if ($(window).width() > 1025) {
            if (Math.abs(lastScroll - nowScroll) >= delta) {
                if (nowScroll > lastScroll) {
                    $("#header-origin").stop(true, false, true).slideUp(100);
                }
                else {
                    $("#header-origin").stop(true, false, true).slideDown(100);

                }
                lastScroll = nowScroll;
            }
        }

    });
});
if (JSON.parse(localStorage.getItem('cart')) === null) {
    let cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
}
if (JSON.parse(localStorage.getItem('wishlist')) === null) {
    let wishlist = [];
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}
//product source
const products = [
    { id: 'toy1', name: 'Unicorn Toy', price: '69.15', rate: 4, imgUrl: './images/products/unicorn.jpg', filter: 'sale' },
    { id: 'toy2', name: 'Giraffe Toy', price: '72.05', rate: 3, imgUrl: './images/products/giraffe.jpg', filter: 'new' },
    { id: 'toy3', name: 'CaptianA Toy', price: '66.01', rate: 5, imgUrl: './images/products/captianA.jpg', filter: 'best' },
    { id: 'toy4', name: 'T-Rex Toy', price: '61.05', rate: 4, imgUrl: './images/products/dino.jpg', filter: 'new' },
    { id: 'toy5', name: 'Fireman Toy', price: '96.04', rate: 4, imgUrl: './images/products/fireman.jpg', filter: 'sale' },
    { id: 'toy6', name: 'Robo Toy', price: '70.35', rate: 5, imgUrl: './images/products/robo.jpg', filter: 'best' },
    { id: 'toy7', name: 'Rhinoceros Toy', price: '71.05', rate: 3, imgUrl: './images/products/rhinoceros.jpg', filter: 'sale' },
    { id: 'toy8', name: 'Viverra Toy', price: '63.99', rate: 4, imgUrl: './images/products/viverra.jpg', filter: 'sale' },
];
localStorage.setItem('products', JSON.stringify(products));
//fill item to product list
const showProducts = (products) => {
    products.map((val) => {
        $(`
        <div class="product">
                        <div class="product-img">
                            <img src="${val.imgUrl}" alt="">
                            <section class="wishlist-add">
                                <div class="wishlist-stick">
                                    <p>Add to Wishlist</p>
                                    <div class="triangle"></div>
                                </div>
                                <div class="wishlist-icon" data-id=${val.id}>
                                    <i class="fa fa-heart-o" aria-hidden="true"></i>
                                </div>
                            </section>
                            <section class="compare-add">
                                <div class="compare-stick">
                                    <p>Compare</p>
                                    <div class="triangle"></div>
                                </div>
                                <div class="compare-icon" data-id=${val.id}>
                                    <i class="fa fa-refresh" aria-hidden="true"></i>
                                </div>
                            </section>
                            <section class="quickview">
                                <div class="quickview-stick">
                                    <p>Quickview</p>
                                    <div class="triangle"></div>
                                </div>
                                <div class="quickview-icon" data-id=${val.id}>
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </div>
                            </section>
                        </div>
                        <div class="detail">
                            <h3 class="product-name">${val.name}</h3>
                            <h4 class="price">$ ${val.price}</h4>
                            <span class="rate">
                                ${'<i class="fa fa-star" aria-hidden="true"></i>'.repeat(val.rate)}${'<i class="fa fa-star-o" aria-hidden="true"></i>'.repeat(5 - val.rate)}
                            </span>
                            <p class="cart-add" data-id=${val.id}>+ Add to cart</p>
                        </div>
                    </div>
        `).appendTo('.products');
    });
}
//show list of products when load page
showProducts(products);
//search products
$(document).ready(function () {
    $('#search-input').keyup(function (e) {
        let press = $(this).val();
        let searchList = products.filter((val) => {
            return val.name.toLocaleLowerCase().includes(press.toLocaleLowerCase());
        });
        $('.search-list').empty();
        $(`<span class= "cant-find" style ="color: red; font-size: 16px; padding-top: 20px;">Sorry, the product could not be found!</span>`).prependTo('.search-list');
        if (searchList.length) {
            //$('.search-list').css('height', '83vh');
            $('.cant-find').remove();
            searchList.map((val) => {
                $(
                    `
                    <div class="product">
                        <div class="product-img">
                            <img src="${val.imgUrl}" alt="">
                            <section class="wishlist-add">
                                <div class="wishlist-stick">
                                    <p>Add to Wishlist</p>
                                    <div class="triangle"></div>
                                </div>
                                <div class="wishlist-icon" data-id=${val.id}>
                                    <i class="fa fa-heart-o" aria-hidden="true"></i>
                                </div>
                            </section>
                            <section class="compare-add">
                                <div class="compare-stick">
                                    <p>Compare</p>
                                    <div class="triangle"></div>
                                </div>
                                <div class="compare-icon" data-id=${val.id}>
                                    <i class="fa fa-refresh" aria-hidden="true"></i>
                                </div>
                            </section>
                            <section class="quickview">
                                <div class="quickview-stick">
                                    <p>Quickview</p>
                                    <div class="triangle"></div>
                                </div>
                                <div class="quickview-icon" data-id=${val.id}>
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </div>
                            </section>
                        </div>
                        <div class="detail">
                            <h3 class="product-name">${val.name.split(press).join(`<span style= "color: red">${press}</span>`)}</h3>
                            <h4 class="price">$ ${val.price}</h4>
                            <span class="rate">
                            ${'<i class="fa fa-star" aria-hidden="true"></i>'.repeat(val.rate)}${'<i class="fa fa-star-o" aria-hidden="true"></i>'.repeat(5 - val.rate)}
                            </span>
                            <p class="cart-add" data-id=${val.id}>+ Add to cart</p>
                        </div>
                    </div>
                    `
                ).appendTo('.search-list');
            });
        }
        if (press === '') {
            $('.search-list').empty();
        }
    });
});
//cart
//render cart
const renderCart = (cart, quantity) => {
    $('.render-cart .products-cart').empty();
    $('#count-item').text(`${quantity}`);
    $('#cart span').text(`${quantity}`);
    $('#cart-count-respon').text(`${quantity}`);
    $('#sub-total').text(`$ ${cart.reduce((acc, val) => {
        let price = Number(val.price.split('').join(''));
        return Number((acc + val.quantity * price).toFixed(2));
    }, 0)}`);
    if (cart.length) {
        $('.render-cart').css('display', 'flex');
        cart.map((val) => {
            $(
                `
                <div class="product-in-cart">
                <div class="image">
                    <img src="${val.imgUrl}" alt="">
                </div>
                <div class="detail">
                    <p class="name">${val.name}</p>
                    <div class="quantity-product">
                        <span class="sub" data-id= ${val.id}><i class="fa fa-minus" aria-hidden="true"></i></span>
                        <span class="quantity">${val.quantity}</span>
                        <span class="add" data-id= ${val.id}><i class="fa fa-plus" aria-hidden="true"></i></span>
                    </div>
                </div>
                <div class="delete-product">
                    <span id="delete" data-id= ${val.id}><i class="fa fa-times" aria-hidden="true"></i></span>
                    <p class="product-price">$ ${Number((val.quantity * Number(val.price.split('').join(''))).toFixed(2))}</p>
                </div>
                </div>
                `
            ).appendTo('.render-cart .products-cart');;
        });
    } else {
        $('.products-cart').text('No product in cart!');
        //$('.render-cart .bottom').css('display', 'none');
    }
    upLoadC(cart, name = 'cart');
}
//upload localStorage
const upLoadC = (cart, name = 'cart') => { localStorage.setItem(`${name}`, JSON.stringify(cart)) };
let cart = JSON.parse(localStorage.getItem('cart'));
let quantity = cart.reduce((acc, val) => {
    return acc + val.quantity;
}, 0);
renderCart(cart, quantity);
//click add to cart in product
$(document).ready(function () {
    $(document).on('click', '.cart-add', function (e) {
        e.preventDefault();
        showCart();
        let curId = $(this).data('id');
        let idx = cart.findIndex((val) => val.id === curId);
        if (idx !== -1) {
            cart[idx].quantity += 1;
        } else {
            const item = products.find((val) => val.id === curId);
            cart.push({ ...item, quantity: 1 });
        }
        quantity = cart.reduce((acc, val) => {
            return acc + val.quantity;
        }, 0);
        renderCart(cart, quantity);
    });
    //show cart
    $('#cart').click(function (e) {
        e.preventDefault();
        showCart();
    });
    $('#cart-respon').click(function (e) {
        e.preventDefault();
        showCart();
    });
    let showCart = () => {
        $('.render-cart').css('transform', 'translateX(0)');
        renderCart(cart, quantity);
    }
    //close cart 
    $('.render-cart .top .close-cart').click(function (e) {
        e.preventDefault();
        $('.render-cart').css('transform', 'translateX(100%)');
    });
    //add product by add-click in cart-show
    $(document).on('click', '.add', function () {
        let cartProductId = $(this).data('id');
        let idx = cart.findIndex((val) => val.id === cartProductId);
        cart[idx].quantity += 1;
        quantity++;
        renderCart(cart, quantity);
    });
    //sub product by sub-click in cart-show
    $(document).on('click', '.sub', function () {
        let cartProductId = $(this).data('id');
        let idx = cart.findIndex((val) => val.id === cartProductId);
        cart[idx].quantity -= 1;
        quantity--;
        if (cart[idx].quantity === 0) {
            cart.splice(idx, 1);
            renderCart(cart, quantity);
        } else {
            renderCart(cart, quantity);
        }
    });

    //delete product by delete-click in cart-show
    $(document).on('click', '#delete', function () {
        let cartProductId = $(this).data('id');
        let idx = cart.findIndex((val) => val.id === cartProductId);
        quantity -= cart[idx].quantity;
        cart.splice(idx, 1);
        renderCart(cart, quantity);
    });
});
//wishlist
let wishlist = JSON.parse(localStorage.getItem('wishlist'));
//render wishlist
const renderWishlist = (wishlist) => {
    $('.render-wishlist .wishlist-products').empty();
    $('#wishlist span').text(`${wishlist.length}`);
    $('#wishlist-count-respon').text(`${wishlist.length}`);
    //$('#wishlist span').text(`${quantity}`);
    if (wishlist.length) {
        $('.render-wishlist').css('display', 'flex');
        wishlist.map((val) => {
            $(`
            <div class="product-in-wishlist">
            <div class="image">
            <img src="${val.imgUrl}" alt="">
            </div>
            <div class="detail">
            <p class="product-name">${val.name}</p>
            <p class="product-price">$ ${val.price}</p>
            </div>
            <div class="action">
            <span id="wl-delete" data-id= ${val.id}><i class="fa fa-times"></i></span>
            <span id="wl-add-cart" data-id = ${val.id}><i class="fa fa-cart-plus" aria-hidden="true"></i></span>
            </div>
            </div>
            `).appendTo('.render-wishlist .wishlist-products');
        });
    } else {
        $('.wishlist-products').text('No product in wishlist!');
    }
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}
const upLoadW = (wishlist, name = 'wishlist') => { localStorage.setItem(`${name}`, JSON.stringify(wishlist)) };
renderWishlist(wishlist);
$(document).ready(function () {
    //add product to wishlist
    $(document).on('click', '.wishlist-icon', function (e) {
        e.preventDefault();
        showWishlist();
        let curId = $(this).data('id');
        let idx = products.findIndex((val) => val.id === curId);
        if (!wishlist.some((val) => val.id === curId)) {
            wishlist.push(products[idx]);
        }
        $('#wishlist span').text(`${wishlist.length}`);
        $(this).children('i').css('color', 'red');
        renderWishlist(wishlist);
        upLoadW(wishlist, name = 'wishlist');
    });
    //show wishlist
    $('#wishlist').click(function (e) {
        e.preventDefault();
        showWishlist();
    });
    $('#wishlist-respon').click(function (e) {
        e.preventDefault();
        showWishlist();
    });
    let showWishlist = () => {
        $('.render-wishlist').css('transform', 'translateX(0)');
        renderWishlist(wishlist);
    }
    //close wishlist 
    $('.render-wishlist .top .close-wishlist').click(function (e) {
        e.preventDefault();
        $('.render-wishlist').css('transform', 'translateX(100%)');
    });
    //delete product 
    $(document).on('click', '#wl-delete', function () {
        let wlProductId = $(this).data('id');
        let idx = wishlist.findIndex((val) => val.id === wlProductId);
        wishlist.splice(idx, 1);
        $('#wishlist span').text(`${wishlist.length}`);
        renderWishlist(wishlist);
    });
    //add product to cart in wishlist-show
    $(document).on('click', '#wl-add-cart', function (e) {
        e.preventDefault();
        //showCart();
        window.alert('Product added to cart!!');
        let curId = $(this).data('id');
        let idx = cart.findIndex((val) => val.id === curId);
        if (idx !== -1) {
            cart[idx].quantity += 1;
        } else {
            const item = products.find((val) => val.id === curId);
            cart.push({ ...item, quantity: 1 });
        }
        quantity = cart.reduce((acc, val) => {
            return acc + val.quantity;
        }, 0);
        renderCart(cart, quantity);
    });
});
//quickview
$(document).ready(function () {
    $(document).on('click', '.quickview-icon', function (e) {
        e.preventDefault();
        const curId = $(this).data('id');
        let idx = products.findIndex((val) => val.id === curId);
        $('.product-quickview .container').empty();
        $(
            `
            <div class="quickview-modal">
            <div class="image">
                <img src="${products[idx].imgUrl}" alt="">
            </div>
            <div class="detail">
                <div class="product-name">
                    <h3 class="name-qv">${products[idx].name}</h3>
                    <div class="price-qv">$ ${products[idx].price}</div>
                    <span><a href="#">See all Features</a></span>
                </div>
                <div class="product-detail">
                    <div class="quantity-product-qv">
                        <span class="sub-qv" data-id= ${products[idx].id}><i class="fa fa-minus" aria-hidden="true"></i></span>
                        <span class="quantity-qv">1</span>
                        <span class="add-qv" data-id= ${products[idx].id}><i class="fa fa-plus" aria-hidden="true"></i></span>
                        <h3 class="add-cart-qv" data-id= ${products[idx].id}>ADD TO CART</h3>
                    </div>
                    <div class="describe">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam minus molestias error
                            consequuntur reiciendis nulla, libero unde placeat sit excepturi nam saepe ex
                            reprehenderit accusantium quas. Reiciendis laboriosam ut possimus!</p>
                    </div>
                    <div class="share-product">
                        <h3>Share this product</h3>
                        <div class="share-icon">
                            <ul>
                                <li class="facebook"><a href="#"><i class="fa fa-facebook face"
                                            aria-hidden="true"></i></a></li>
                                <li class="twitter"><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                                </li>
                                <li class="pinterest"><a href="#"><i class="fa fa-pinterest"
                                            aria-hidden="true"></i></a></li>
                                <li class="linkedin"><a href="#"><i class="fa fa-linkedin"
                                            aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="close-quickview"><i class="fa fa-times" aria-hidden="true"></i></div>
        </div>
        `
        ).appendTo('.product-quickview .container');
        $('.product-quickview').fadeIn().css('display', 'flex');
    });
    //close quickview
    $(document).on('click', '.close-quickview', function (e) {
        e.preventDefault();
        $('.product-quickview').fadeOut();
    });
    //add click
    $(document).on('click', '.add-qv', function (e) {
        e.preventDefault();
        $('.quantity-qv').text(`${Number($('.quantity-qv').text()) + 1}`);
    });
    //sub click
    $(document).on('click', '.sub-qv', function (e) {
        e.preventDefault();
        if (Number($('.quantity-qv').text()) > 1) {
            $('.quantity-qv').text(`${Number($('.quantity-qv').text()) - 1}`);
        }
    });
    //add to cart click
    $(document).on('click', '.add-cart-qv', function (e) {
        e.preventDefault();
        let curId = $(this).data('id');
        let idx = cart.findIndex((val) => val.id === curId);
        if (idx !== -1) {
            cart[idx].quantity += Number($('.quantity-qv').text());
        } else {
            const product = products.find((val) => val.id === curId);
            cart.push({ ...product, quantity: Number($('.quantity-qv').text()) });
        }
        window.alert('Product added to cart!');
        quantity = cart.reduce((acc, val) => {
            return acc + val.quantity;
        }, 0);
        renderCart(cart, quantity);
    });
});
//compare products
let compareBox = [];
$(document).ready(function () {
    //compare click
    $(document).on('click', '.compare-icon', function (e) {
        e.preventDefault();
        const curId = $(this).data('id');
        let idx = products.findIndex((val) => val.id === curId);
        if (!compareBox.includes(products[idx])) {
            compareBox.push(products[idx]);
        }
        $('.loading').fadeIn();
        $('.loading').css('display', 'flex');
        $('.loading').fadeOut(2000);
        $('.product-compare').show(2100);
        $('.product-compare').css('display', 'flex');
        renderCompare();
    });
    //close compare
    $('.close-compare').click(function (e) {
        e.preventDefault();
        $('.product-compare').fadeOut();
    });
    //delete product in compare
    $(document).on('click', '.delete-product-cp', function (e) {
        e.preventDefault();
        const curId = $(this).data('id');
        let idx = compareBox.findIndex((val) => val.id === curId);
        compareBox.splice(idx, 1);
        if (compareBox.length === 0) {
            $('.compare-product-box .content').empty();
            $('.compare-product-box .content').css('width', '100%');
            $(`
                <div style="width:90%;border-top:1px solid #ebeeee;border-bottom:1px solid #ebeeee;padding:10px 0px; text-align:center;margin-left:40px;">
                    No products added in the compare table.
                </div>
            `).appendTo('.compare-product-box .content');
        } else {
            renderCompare();
        }
    });
    //add to cart in compare box
    $(document).on('click', '.add-product-cp', function (e) {
        e.preventDefault();
        let curId = $(this).data('id');
        let idx = cart.findIndex((val) => val.id === curId);
        if (idx !== -1) {
            cart[idx].quantity += 1;
        } else {
            const product = products.find((val) => val.id === curId);
            cart.push({ ...product, quantity: 1 });
        }
        quantity = cart.reduce((acc, val) => {
            return acc + val.quantity;
        }, 0);
        window.alert('Product added to cart!');
        renderCart(cart, quantity);
    });
    //render compareBox
    let renderCompare = () => {
        $('.compare-product-box .content').css('width', 'max-content');
        $('.compare-product-box .content').empty();
        //create the table
        $(
            `
            <tr class="image-cp">
            <td></td>
            </tr>
            <tr class="title-cp">
            <td>TITLE</td>
            </tr>
            <tr class="price-cp">
            <td>PRICE</td>
            </tr>
            <tr class="add-cp">
            <td>ADD TO CART</td>
            </tr>
            <tr class="availability">
            <td>AVAILABILITY</td>
            </tr>
            `
        ).appendTo('.compare-product-box .content');

        compareBox.map((val) => {
            $(`<td><img src="${val.imgUrl}" alt=""><span class="delete-product-cp" data-id= "${val.id}"><i
            class="fa fa-times" aria-hidden="true"></i></span></td>`).appendTo('.content .image-cp');
            $(`<td>${val.name}</td>`).appendTo('.content .title-cp');
            $(`<td>$ ${val.price}</td>`).appendTo('.content .price-cp');
            $(`<td class="add-product-cp" data-id= "${val.id}"><span> ADD TO CART</span></td>`).appendTo('.content .add-cp');
            $(`<td class="avai">In Stock</td>`).appendTo('.content .availability');
        });
    }
});
// deal count-down
const deadLine = '2023/12/31';
const getTime = (deadLine) => {
    const deadLineDate = new Date(deadLine);
    const now = new Date();
    const distance = (deadLineDate - now) / 1000; //seconds
    const days = Math.floor(distance / 3600 / 24);
    const hours = Math.floor(distance / 3600) % 24;
    const mins = Math.floor(distance / 60) % 60;
    const secs = Math.floor(distance) % 60;

    $('.time-days').text(days);
    $('.time-hours').text(hours);
    $('.time-mins').text(mins);
    $('.time-secs').text(secs);
}
setInterval(() => {
    getTime(deadLine);
}, 1000);
//filter products
//new arrival
products.filter((val) => {
    if ('filter' in val) {
        return val.filter.split(' ').includes('new');
    }
}).map((val) => {
    $(`
    <div class="new">
    <div class="image">
        <img src="${val.imgUrl}" alt="">
        <p class="cart-add" data-id= "${val.id}">+ Add to cart</p>
    </div>
    <div class="detail">
        <h3 class="product-name">${val.name}</h3>
        <h4 class="product-price">$ ${val.price}</h4>
        <span class="rate">
        ${'<i class="fa fa-star" aria-hidden="true"></i>'.repeat(val.rate)}${'<i class="fa fa-star-o" aria-hidden="true"></i>'.repeat(5 - val.rate)}
        </span>
        <div class="action">
            <section class="wishlist-add">
                <div class="wishlist-stick">
                    <p>Wishlist</p>
                    <div class="triangle"></div>
                </div>
                <div class="wishlist-icon" data-id= "${val.id}">
                    <i class="fa fa-heart-o" aria-hidden="true"></i>
                </div>
            </section>
            <section class="compare-add">
                <div class="compare-stick">
                    <p>Compare</p>
                    <div class="triangle"></div>
                </div>
                <div class="compare-icon" data-id= "${val.id}">
                    <i class="fa fa-refresh" aria-hidden="true"></i>
                </div>
            </section>
            <section class="quickview">
                <div class="quickview-stick">
                    <p>Quickview</p>
                    <div class="triangle"></div>
                </div>
                <div class="quickview-icon" data-id= "${val.id}">
                    <i class="fa fa-search" aria-hidden="true"></i>
                </div>
            </section>
        </div>
    </div>
</div>
    `).appendTo('.products-new');
});
//best seller
products.filter((val) => {
    if ('filter' in val) {
        return val.filter.split(' ').includes('best');
    }
}).map((val) => {
    $(`
        <div class="best">
        <div class="image">
            <img src="${val.imgUrl}" alt="">
            <p class="cart-add" data-id= "${val.id}">+ Add to cart</p>
        </div>
        <div class="detail">
            <h3 class="product-name">${val.name}</h3>
            <h4 class="product-price">$ ${val.price}</h4>
            <span class="rate">
            ${'<i class="fa fa-star" aria-hidden="true"></i>'.repeat(val.rate)}${'<i class="fa fa-star-o" aria-hidden="true"></i>'.repeat(5 - val.rate)}
            </span>
            <div class="action">
                <section class="wishlist-add">
                    <div class="wishlist-stick">
                        <p>Wishlist</p>
                        <div class="triangle"></div>
                    </div>
                    <div class="wishlist-icon" data-id= "${val.id}">
                        <i class="fa fa-heart-o" aria-hidden="true"></i>
                    </div>
                </section>
                <section class="compare-add">
                    <div class="compare-stick">
                        <p>Compare</p>
                        <div class="triangle"></div>
                    </div>
                    <div class="compare-icon" data-id= "${val.id}">
                        <i class="fa fa-refresh" aria-hidden="true"></i>
                    </div>
                </section>
                <section class="quickview">
                    <div class="quickview-stick">
                        <p>Quickview</p>
                        <div class="triangle"></div>
                    </div>
                    <div class="quickview-icon" data-id= "${val.id}">
                        <i class="fa fa-search" aria-hidden="true"></i>
                    </div>
                </section>
            </div>
        </div>
    </div>
        `).appendTo('.products-best');
});
//brands slider
$(document).ready(function () {
    $('.brands').owlCarousel({
        loop: false,
        items: 5,
        dots: false,
        nav: true,
        responsive: {
            1000: {
                items: 5,
            },
            800: {
                items: 4,
            },
            600: {
                items: 3
            },
            0: {
                items: 2,
            }
        },
    });
});
//latest blog 
const blogs = [
    {
        imageURL: './images/blog-1-500x300.jpg',
        date: 'May 28, 2022',
        cmt: 63,
        title: 'Blog image posts',
    },
    {
        imageURL: './images/blog-2-500x300.jpg',
        date: 'May 15, 2022',
        cmt: 41,
        title: 'Post with Audio',
    },
    {
        imageURL: './images/blog-3-500x300.jpg',
        date: 'May 22, 2022',
        cmt: 58,
        title: 'Post with Gallery',
    },
    {
        imageURL: './images/blog-4-500x300.jpg',
        date: 'May 10, 2022',
        cmt: 34,
        title: 'Post with Video',
    },
];
//show blog
blogs.map((val) => {
    $(
        `
        <div class="blog">
        <div class="image">
            <img src="${val.imageURL}" alt="">
        </div>
        <div class="detail">
            <h2 class="title">${val.title}</h2>
            <div class="time">
                <span class="calen-icon"><i class="fa fa-calendar" aria-hidden="true"></i> ${val.date}</span>
                <span class="cmt"><i class="fa fa-commenting-o"></i> ${val.cmt} comments</span>
            </div>
        </div>
        <button class="read-more"><a href="#">+READ MORE</a></button>
    </div>
        `
    ).appendTo('.latest-blog .blogs');
});
