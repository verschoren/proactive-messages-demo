$(document).ready(function() {
    $('.toggle_menu').click(function() {
        $('#sidebar').toggleClass('hidden');
    });
    $('.logged_in').click(function() {
        $('.logged_in').addClass('hidden');
    });

    $('.links').html(`
        <a href="product.html" class="text-sm font-semibold leading-6 text-gray-900">Product</a>
        <a href="product.html?utm_campaign=trex" class="text-sm font-semibold leading-6 text-gray-900">Product Tagged</a>
        <a href="contact.html" class="text-sm font-semibold leading-6 text-gray-900">Contact</a>
        <a href="contact.html#vip" class="text-sm font-semibold leading-6 text-gray-900">Contact VIP</a>
        <a href="french.html" class="text-sm font-semibold leading-6 text-gray-900">Locale</a>
        `);
        $('.links_mobile').html(`
        <a href="product.html" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Product</a>
        <a href="product.html?utm_campaign=trex" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Product Tagged</a>
        <a href="contact.html" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Contact</a>
        <a href="contact.html#vip" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Contact VIP</a>
        <a href="french.html" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Locale</a>
    `);

    //if page url contains contact
    if (window.location.href.indexOf("contact") > -1) {
        Logout();
        var random = randomString(16); //this make sure every demo starts with a fresh user.
        if (window.location.href.indexOf("#vip") > -1) {
            Login({
                name: 'Vito Corleone',
                email:'vitocorleone+'+random+'@example.com',
                external_id: random
            });
            $('#vip').removeClass('hidden');
            $('#normal').addClass('hidden');
        } else {
            Login({
                name: 'Maximus Decimus Meridius',
                email:'maximus+'+random+'@example.com',
                external_id: random
            });
            $('#normal').removeClass('hidden');
            $('#vip').addClass('hidden');
        }
    } else {
        Logout();
    }

    if (window.location.href.indexOf("french") > -1) {
        zE('messenger:set', 'locale', 'fr')
    }
    //JWT Messaging Code, see https://jwt.internalnote.com/messaging.html
    function Logout(){
        zE('messenger', 'logoutUser');
    }
    
    function Login(user){
        //get token for current user
        var jwttoken = '';
        $.ajax({
          type: "POST",
          url: 'https://jwt-demo.verschoren.workers.dev/messaging', //replace with your worker
          data: JSON.stringify({ "external_id": user.external_id, "user_email": user.email, "user_name": user.name }),
          dataType: 'text',
          async: false,
          success: function (json) {
            jwttoken = json;
          }
        });
        console.log(jwttoken)
    
        //authenticate messaging
        zE('messenger', 'loginUser', function (callback) {
          callback(jwttoken);
        });
      }

      function randomString(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
});