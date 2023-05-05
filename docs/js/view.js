$(document).ready(function() {
    //Delete localstorage to fix the pro-active alerts for signed in users when trying out this specific demo a lot.
    // localStorage.removeItem('ZD-suid');
    // localStorage.removeItem('ZD-campaigns');
    // localStorage.removeItem('ZD-buid');

    $('.links').html(`
        <a href="/" class="text-sm font-semibold leading-6 text-gray-900">Basic</a>
        <a href="product.html" class="text-sm font-semibold leading-6 text-gray-900">Product</a>
        <a href="product.html?utm_campaign=trex" class="text-sm font-semibold leading-6 text-gray-900">Product   <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Tagged</span></a>
        <a href="contact.html" class="text-sm font-semibold leading-6 text-gray-900">Contact</a>
        <a href="contact.html#vip" class="text-sm font-semibold leading-6 text-gray-900">Contact   <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">VIP</span></a>
        <a href="french.html" class="text-sm font-semibold leading-6 text-gray-900">🇫🇷 Locale</a>
        `);
        $('.links_mobile').html(`
        <a href="/" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Basic</a>
        <a href="product.html" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Product</a>
        <a href="product.html?utm_campaign=trex" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Product   <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Tagged</span></a>
        <a href="contact.html" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Contact</a>
        <a href="contact.html#vip" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Contact   <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">VIP</span></a>
        <a href="french.html" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">🇫🇷 Locale</a>
    `);

    $('main').append(`
    <div class="pointer-events-none fixed inset-x-0 bottom-0 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8">
        <div class="pointer-events-auto flex items-center justify-between gap-x-6 bg-gray-900 px-6 py-2.5 sm:rounded-xl sm:py-3 sm:pl-4 sm:pr-3.5">
            <div type="button" class="-m-1.5 flex-none p-1.5">
                <span class="sr-only">Dismiss</span>
                <svg class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd" />
                </svg>
            </div>
            <p class="text-sm leading-2 text-white">
                <strong class="font-semibold">Caching</strong>
                <svg viewBox="0 0 2 2" class="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true"><circle cx="1" cy="1" r="1" /></svg>
                If you experience issues triggering the proactive alerts, clear your LocalStorage and try again.
            </p>
        </div>
    </div>
    `);

    $('.toggle_menu').click(function() {
        $('#sidebar').toggleClass('hidden');
    });
    $('.logged_in').click(function() {
        $('.logged_in').addClass('hidden');
    });
});