<template>
  <div class="row bg-indigo-lgray w-full lg:mt-16 mt-6">
    <div class="flex flex-col lg:flex-row items-end max-w-5xl mx-auto">
      <div class="flex-1 mx-10 lg:mx-0">
        <div
          class="lg:px-8 grid lg:grid-cols-3 lg:gap-y-2 justify-between items-start mt-10 mx-auto flex-wrap sm:flex-wrap text-center"
        >
          <div
            class="hidden lg:flex col-span-3 justify-start flex-1 flex-col items-start"
          >
            <h3 class="text-3xl font-semibold text-indigo-soft lg:px-12">
              konum özellikleri
            </h3>
            <p
              class="text-left text-[11px] text-indigo-gray leading-4 lg:px-12 pt-3 font-bold"
            >
              TEM otoyolunun yanı başında yer alan Ebruli Ispartakule, aynı
              zamanda seçkin eğitim kurumlarına ve sağlık merkezlerine
              yakınlığıyla tüm aile fertlerinin hayatını kolaylaştırmayı
              hedefliyor.
            </p>
          </div>

          <div
            class="flex lg:hidden col-span-3 justify-center flex-1 flex-col items-center"
          >
            <h3 class="text-2xl font-semibold text-indigo-soft lg:px-12">
              location
            </h3>
            <p
              class="lg:text-left text-[11px] text-indigo-gray leading-4 py-3 lg:py-0 text-justify lg:px-12 pt-3 font-bold"
            >
              independent villas, Green spaces, Outdoor parking lot, entrance
              for each villa, Swimming pool
            </p>
          </div>
          <div
            class="flex flex-col justify-between flex-1 items-center space-y-1 px-2"
          >
            <img
              src="images/airplane.svg"
              alt=""
              class="w-[40px] min-w-[40px] min-h-[55px]"
            />
            <div class="flex flex-col justufy-start items-center">
              <p class="text-xs">Avrasya Tüneli’ne “2” km</p>
            </div>
          </div>
          <div
            class="flex flex-col justify-between flex-1 items-center space-y-1 px-2"
          >
            <img
              src="images/bridge.svg"
              alt=""
              class="w-[40px] min-w-[40px] min-h-[55px]"
            />
            <div class="flex flex-col justufy-start items-center">
              <p class="text-xs">En yakın metrobus durağına “500” metre</p>
            </div>
          </div>
          <div
            class="flex flex-col justify-between flex-1 items-center space-y-1 px-2"
          >
            <img
              src="images/city-map.svg"
              alt=""
              class="w-[35px] min-w-[35px] min-h-[60px]"
            />
            <div class="flex flex-col justufy-start items-center">
              <p class="text-xs">Taksim Meydanı’na “11” km</p>
            </div>
          </div>
          <div
            class="flex flex-col justify-between flex-1 items-center space-y-1 px-2"
          >
            <img
              src="images/beach.svg"
              alt=""
              class="w-[40px] min-w-[40px] min-h-[55px]"
            />
            <div class="flex flex-col justufy-start items-center">
              <p class="text-xs">8 Km to the Black Sea</p>
            </div>
          </div>
          <div
            class="flex flex-col justify-between flex-1 items-center space-y-1 px-2"
          >
            <img
              src="images/road.svg"
              alt=""
              class="w-[40px] min-w-[40px] min-h-[55px]"
            />
            <div class="flex flex-col justufy-start items-center">
              <p class="text-xs">Yenibosna metro istasyonuna “950” metre</p>
            </div>
          </div>
          <div
            class="flex flex-col justify-between flex-1 items-center space-y-1 px-2"
          >
            <img
              src="images/airplane.svg"
              alt=""
              class="w-[40px] min-w-[40px] min-h-[55px]"
            />
            <div class="flex flex-col justufy-start items-center">
              <p class="text-xs">İstanbul Havalimanına “36” km</p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex-1 self-stretch pt-16">
        <img src="images/map.png" alt="" class="w-full h-full" />
      </div>
    </div>

    <div
      class="flex bg-indigo-wgray lg:border-t-8 lg:border-gray-200 lg:border-spacing-3 lg:mt-16"
    >
      <div
        class="flex flex-col lg:flex-row items-start mx-auto lg:py-20 max-w-7xl lg:bg-indigo-wgray bg-indigo-dark"
      >
        <div class="flex-1 lg:px-12 px-6">
          <div
            class="flex flex-col justify-between lg:space-y-4 lg:space-x-10 items-start mx-auto text-center"
          >
            <div
              class="hidden lg:flex justify-start flex-1 flex-col items-start lg:px-10"
            >
              <h3 class="text-3xl font-semibold text-indigo-project">
                Arkan Proje’ye Hoş Geldiniz
              </h3>
              <p class="text-left text-lg text-indigo-gray leading-5 pt-3">
                Anlık fırsat ve kampanyalarımız hakkında bilgi almak için
                danışma kurulu ekibimizle iletişime geçmenizi rica ederiz.
              </p>
              <b class="text-lg font-bold text-indigo-project my-3"
                >Müşteri Türü</b
              >
              <div class="flex space-x-6">
                <button
                  type="submit "
                  class="py-1 px-6 text-2xl font-semibold rounded-md bg-indigo-blue text-white w-full"
                >
                  Satıcı
                </button>
                <button
                  type="submit "
                  class="py-1 pl-6 pr-8 rounded-md font-semibold bg-indigo-hgray text-white text-2xl w-full"
                >
                  Alıcı
                </button>
              </div>
            </div>

            <div
              class="flex lg:hidden justify-start text-white flex-col items-center"
            >
              <h3 class="text-3xl font-bold py-8">
                Welcome <br />
                To Arkan
              </h3>
              <div class="flex justify-center flex-1 items-center">
                <img
                  src="images/intro_image.png"
                  alt=""
                  class="max-h-[230px] lg:max-h-[600px] flex mx-auto"
                />
              </div>
              <p class="text-center text-sm leading-5 pt-3 py-8">
                Thanks for contacting our consulting team, we are ready to serve
                you and answer all your queries.
              </p>
            </div>
          </div>
        </div>
        <div class="flex-1 self-stretch lg:px-12 px-6 pb-20 lg:pb-0">
          <form action="#">
            <h4 for="" class="p-2 hidden lg:flex">Kişisel bilgileri</h4>
            <div
              class="flex flex-col lg:flex-row justify-between lg:space-x-4 lg:mb-4"
            >
              <input
                type="text"
                class="text-xs rounded-md flex-1 px-3 mb-[0.4rem] lg:mb-0 py-2"
                placeholder="Adı"
              />
              <input
                type="text"
                class="text-xs rounded-md flex-1 px-3 mb-[0.4rem] lg:mb-0 py-2"
                placeholder="E-Posta Adresi"
              />
            </div>
            <div
              class="flex flex-col lg:flex-row justify-between lg:space-x-4 lg:mb-4"
            >
              <input
                type="text"
                class="text-xs rounded-md flex-1 px-3 mb-[0.4rem] lg:mb-0 py-2"
                placeholder="Telefon Numarası"
              />
              <input
                type="text"
                class="text-xs rounded-md flex-1 px-3 mb-[0.4rem] lg:mb-0 py-2"
                placeholder="Firma Adı"
              />
            </div>
            <button
              type="submit "
              class="hidden lg:block py-2 rounded-md bg-indigo-blue font-bold text-md text-white w-full"
            >
              Gönderiniz
            </button>

            <button
              type="submit "
              class="py-[0.4rem] block lg:hidden rounded-md text-indigo-blue font-bold text-[1.1rem] bg-white w-full mt-3"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>
<style></style>
