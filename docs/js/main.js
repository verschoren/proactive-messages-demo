//document ready
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
    `);
    $('.links_mobile').html(`
        <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Product</a>
        <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Features</a>
        <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Marketplace</a>
        <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Company</a>
    `);
//if page url contains #vip

    if (window.location.href.indexOf("#vip") > -1) {
        $('#vip').removeClass('hidden');
        $('#normal').addClass('hidden');
    } else {
    
    }
});