<template>
  <div class="row bg-indigo-lgray w-full">
    <div class="flex items-end max-w-7xl mx-auto">
      <div class="flex-1">
        <div
          class="lg:max-w-[520px] lg:px-8 grid lg:grid-cols-3 lg:gap-y-2 justify-between items-start mt-10 mx-auto flex-wrap sm:flex-wrap text-center"
        >
          <div
            class="col-span-3 flex justify-start flex-1 flex-col items-start"
          >
            <h3 class="text-3xl font-semibold text-indigo-project lg:px-12">
              konum özellikleri
            </h3>
            <p
              class="text-left text-xs text-indigo-gray leading-4 lg:px-12 pt-3 font-bold"
            >
              TEM otoyolunun yanı başında yer alan Ebruli Ispartakule, aynı
              zamanda seçkin eğitim kurumlarına ve sağlık merkezlerine
              yakınlığıyla tüm aile fertlerinin hayatını kolaylaştırmayı
              hedefliyor.
            </p>
          </div>
          <div
            class="flex flex-col justify-between flex-1 items-center space-y-2 px-2"
          >
            <img
              src="images/airplane.svg"
              alt=""
              class="w-[45px] min-w-[45px] min-h-[60px]"
            />
            <div class="flex flex-col justufy-start items-center">
              <p class="text-xs">Avrasya Tüneli’ne “2” km</p>
            </div>
          </div>
          <div
            class="flex flex-col justify-between flex-1 items-center space-y-2 px-2"
          >
            <img
              src="images/bridge.svg"
              alt=""
              class="w-[45px] min-w-[45px] min-h-[60px]"
            />
            <div class="flex flex-col justufy-start items-center">
              <p class="text-xs">En yakın metrobus durağına “500” metre</p>
            </div>
          </div>
          <div
            class="flex flex-col justify-between flex-1 items-center space-y-2 px-2"
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
            class="flex flex-col justify-between flex-1 items-center space-y-2 px-2"
          >
            <img
              src="images/beach.svg"
              alt=""
              class="w-[45px] min-w-[45px] min-h-[60px]"
            />
            <div class="flex flex-col justufy-start items-center">
              <p class="text-xs">8 Km to the Black Sea</p>
            </div>
          </div>
          <div
            class="flex flex-col justify-between flex-1 items-center space-y-2 px-2"
          >
            <img
              src="images/road.svg"
              alt=""
              class="w-[45px] min-w-[45px] min-h-[60px]"
            />
            <div class="flex flex-col justufy-start items-center">
              <p class="text-xs">Yenibosna metro istasyonuna “950” metre</p>
            </div>
          </div>
          <div
            class="flex flex-col justify-between flex-1 items-center space-y-3 px-2"
          >
            <img
              src="images/airplane.svg"
              alt=""
              class="w-[45px] min-w-[45px] min-h-[60px]"
            />
            <div class="flex flex-col justufy-start items-center">
              <p class="text-xs">İstanbul Havalimanına “36” km</p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex-1 self-stretch pt-16 px-20">
        <img src="images/map.png" alt="" class="w-full h-full" />
      </div>
    </div>

    <div class="flex items-start max-w-7xl mx-auto pt-10">
      <div class="flex-1">
        <div
          class="flex flex-col justify-between space-y-4 items-start mx-auto flex-wrap sm:flex-wrap text-center"
        >
          <div class="flex justify-start flex-1 flex-col items-start">
            <h3 class="text-3xl font-semibold text-indigo-project">
              Arkan Proje’ye Hoş Geldiniz
            </h3>
            <p
              class="text-left text-lg text-indigo-gray leading-5 pt-3 lg:max-w-lg"
            >
              Anlık fırsat ve kampanyalarımız hakkında bilgi almak için danışma
              kurulu ekibimizle iletişime geçmenizi rica ederiz.
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
        </div>
      </div>

      <div class="flex-1 self-stretch">
        <form action="#">
          <h4 for="" class="p-2">Kişisel bilgileri</h4>
          <div class="flex justify-between lg:space-x-4 mb-4">
            <input
              type="text"
              class="text-xs rounded-md flex-1 px-3 py-2"
              placeholder="Adı"
            />
            <input
              type="text"
              class="text-xs rounded-md flex-1 px-3 py-2"
              placeholder="E-Posta Adresi"
            />
          </div>

          <div class="flex justify-between lg:space-x-4 mb-4">
            <input
              type="text"
              class="text-xs rounded-md flex-1 px-3 py-2"
              placeholder="Telefon Numarası"
            />
            <input
              type="text"
              class="text-xs rounded-md flex-1 px-3 py-2"
              placeholder="Firma Adı"
            />
          </div>
          <button
            type="submit "
            class="py-2 block rounded-md bg-indigo-blue font-bold text-md text-white w-full"
          >
            Gönderiniz
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script></script>
<style></style>
