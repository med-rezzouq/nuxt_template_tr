<template>
  <footer class="bg-emerald-200">
    <div
      class="grid grid-cols-1 lg:grid-cols-2 justify-center items-center mx-auto w-11/12 lg:max-w-7xl lg:gap-x-10 gap-y-6 lg:gap-y-12 py-10 text-teal-600"
    >
      <div
        class="flex flex-col space-y-6 sm:space-y-0 sm:flex-row sm:space-x-6 lg:space-x-8 self-stretch"
      >
        <div class="flex-1">
          <img src="/images/logo.png" alt="" class="w-60" />
        </div>
        <div class="flex-1">
          <h3 class="text-xl font-bold">SHOP</h3>
          <ul class="mt-6">
            <li>
              <a href="">CUPS </a>
            </li>
            <li>
              <a href="">SPOONS </a>
            </li>
            <li>
              <a href="">LIDS </a>
            </li>
            <li>
              <a href="">ACCESSORIES </a>
            </li>
            <li>
              <a href="">MARKETING </a>
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <h3 class="text-xl font-bold">INFO</h3>
          <ul class="mt-6">
            <li>
              <a href="">COMPANY </a>
            </li>
            <li>
              <a href="">FRANCHISE </a>
            </li>
            <li>
              <a href="">PARTNERS </a>
            </li>
            <li>
              <a href="">CONTACT </a>
            </li>
            <li>
              <a href="">FAQ </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="flex flex-col sm:flex-row space-y-6 sm:space-y-0 lg:space-x-8"
      >
        <div class="flex-1">
          <h3 class="text-xl font-bold">FOLLOW US</h3>
          <label for="newsleter" class="block mt-6">GET OUR NEWSLETER</label>
          <input
            type="text"
            id="newsleter"
            class="mt-3 block border-1 border-teal-500"
          />
          <button
            class="mt-3 font-bold text-white bg-teal-500 block max-w-max px-8 py-1 rounded-[3px]"
          >
            SIGN UP
          </button>

          <div class="mt-3 flex justify-start space-x-6">
            <a href="">
              <img
                src="/images/icons/facebook.svg"
                class="h-7 w-7"
                alt="facebook"
              />
            </a>

            <a href="">
              <img
                src="/images/icons/twitter.svg"
                class="h-7 w-7"
                alt="twitter"
              />
            </a>

            <a href="">
              <img
                src="/images/icons/linkedin.svg"
                class="h-7 w-7"
                alt="linkedin"
              />
            </a>
          </div>
        </div>
        <div class="flex-1 flex-col">
          <h3 class="text-xl font-bold">PAYMENT</h3>
          <img
            src="/images/payement.png"
            alt=""
            class="h-20 bg-teal-500 w-full mt-6"
          />

          <div class="flex justify-center space-x-3 mt-3 flex-wrap">
            <img src="/images/card.png" alt="" class="h-7 bg-teal-500 flex-1" />
            <img src="/images/card.png" alt="" class="h-7 bg-teal-500 flex-1" />
            <img src="/images/card.png" alt="" class="h-7 bg-teal-500 flex-1" />
            <img src="/images/card.png" alt="" class="h-7 bg-teal-500 flex-1" />
            <img src="/images/card.png" alt="" class="h-7 bg-teal-500 flex-1" />
          </div>
        </div>
      </div>
      <div class="flex flex-col lg:col-span-2 items-center">
        <ul class="">
          <li class="px-2 inline"><a href="">Privacy policy</a></li>
          <label for="">|</label>
          <li class="px-2 inline"><a href="">Terms & conditions</a></li>
        </ul>
        <p>Copyright 2013 Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style></style>
