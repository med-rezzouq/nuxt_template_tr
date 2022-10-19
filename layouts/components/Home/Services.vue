<template>
  <div class="row">
    <div
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:flex-row justify-center lg:justify-between max-w-4xl items-start px-10 lg:px-10 mt-10 lg:mb-16 mb-6 mx-auto flex-wrap sm:flex-wrap text-center"
    >
      <div class="flex flex-col justify-between flex-1 items-center">
        <img src="images/house.svg" alt="" class="w-[106px] min-w-[106px]" />

        <div class="flex flex-col justufy-start items-center">
          <h5 class="text-indigo-soft font-bold">gayrimenkul türü</h5>
          <p class="">apartman dairesi</p>
        </div>
      </div>

      <div class="flex flex-col justify-between flex-1 items-center">
        <img
          src="images/markericon.svg"
          alt=""
          class="w-[106px] min-w-[106px]"
        />

        <div class="flex flex-col justufy-start items-center">
          <h5 class="text-indigo-soft font-bold">bölge</h5>
          <p class="">Bahçeşehir</p>
        </div>
      </div>

      <div class="flex flex-col justify-between flex-1 items-center">
        <img src="images/money.svg" alt="" class="w-[106px] min-w-[106px]" />

        <div class="flex flex-col justufy-start items-center">
          <h5 class="text-indigo-soft font-bold">en düşük fiyat</h5>
          <p class="">1,400,000 TL</p>
        </div>
      </div>

      <div class="flex flex-col justify-between flex-1 items-center">
        <img src="images/calendar.svg" alt="" class="w-[106px] min-w-[106px]" />

        <div class="flex flex-col justufy-start items-center">
          <h5 class="text-indigo-soft font-bold">teslim tarihi</h5>
          <p class="">tesilme hazır</p>
        </div>
      </div>

      <div class="flex flex-col justify-between flex-1 items-center">
        <img src="images/dollar.svg" alt="" class="w-[106px] min-w-[106px]" />

        <div class="flex flex-col justufy-start items-center">
          <h5 class="text-indigo-soft font-bold">ödeme</h5>
          <p class="">
            ödemenin %35'i peşinat olup geriye kalanı ise 24 aylık taksittir.
          </p>
        </div>
      </div>
    </div>
    <a href="#" alt="scroll down" class="hidden lg:flex">
      <img
        src="images/down_arrow.svg"
        alt="arrow scroll down"
        class="w-10 mx-auto"
      />
    </a>

    <div
      class="hidden lg:flex lg:flex-row justify-between max-w-4xl items-start mt-14 mx-auto"
    >
      <div class="flex justify-center flex-1 items-center">
        <img
          src="images/intro_image.png"
          alt=""
          class="lg:max-h-[500px] lg:w-[475px] lg:max-w-[150%]"
        />
      </div>
      <div
        class="flex justify-end flex-1 flex-col items-start lg:px-14 space-y-1"
      >
        <h2 class="text-[37px] font-bold text-indigo-project">HİZMETLERİMİZ</h2>
        <div class="flex items-start justify-between space-x-3">
          <img src="images/arkan1.svg" alt="" class="mt-2 w-5" />
          <div>
            <h4 class="font-bold text-sm">Hukuki Danışmanlık</h4>
            <p class="font-light text-[11px] leading-4">
              Yatırımcıların beklentileri göz önünde bulundurarak yatırım yapmak
              istedikleri gayrimenkul ile ilgili detaylı araştırmalar yapar,
              ilgili resmî kurumlara müracaat eder ve bunun sonucunda
              danışanlarına hukuki süreçler hakkında bilgi verir.
            </p>
          </div>
        </div>

        <div class="flex items-start justify-between space-x-3">
          <img src="images/arkan1.svg" alt="" class="mt-2 w-5" />
          <div>
            <h4 class="font-bold text-sm">Gayrimenkul Pazarlama</h4>
            <p class="font-light text-[11px] leading-4">
              Müşteri memnuniyetini her şeyden üstün tutan Arkan Proje,
              pazarlamasını üstlendiği bütün projelerin yapılabilir raporunu
              hazırlar.
            </p>
          </div>
        </div>

        <div class="flex items-start justify-between space-x-3">
          <img src="images/arkan1.svg" alt="" class="mt-2 w-5" />
          <div>
            <h4 class="font-bold text-sm">Gayrimenkul Pazarlama</h4>
            <p class="font-light text-[11px] leading-4">
              Gayrimenkul sektörünün sırlarına, püf noktalarına hâkim olan ve
              Türkiye’deki emlak pazarlarının giriş anahtarlarını elinde
              bulunduran Arkan Proje, yakından takip ettiği yatırımlar konusunda
              satış danışmanlığı hizmetini vermektedir
            </p>
          </div>
        </div>

        <div class="flex items-start justify-between space-x-3">
          <img src="images/arkan1.svg" alt="" class="mt-2 w-5" />
          <div>
            <h4 class="font-bold text-sm">Proje Yönetimi</h4>
            <p class="font-light text-[11px] leading-4">
              Yatırımcılarımıza, Türkiye’nin emlak piyasası hakkında detaylı
              bilgiler vermekten öte yatırım yapmak istedikleri projelerin
              gerçek maliyetini ve uzun vadeli beklenen getirisi gibi önemli
              hususlarda yardımcı olmaktayız.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div
      class="flex flex-col lg:hidden lg:flex-row justify-center max-w-4xl items-center mt-14 mx-auto bg-[url('/images/smart_city.png')] bg-complete bg-no-repeat"
    >
      <h2 class="text-3xl font-semibold text-indigo-blue mx-auto my-6">
        proje ayricaliklari
      </h2>
      <agile :options="myOptions">
        <div
          class="relative flex flex-col items-end text-right justify-center h-80 text-indigo-lblue space-y-8 slide px-20"
        >
          <div class="flex items-start justify-between space-x-3">
            <img src="images/arkan1.svg" alt="" class="mt-2 w-5" />
            <div class="w-full text-center">
              <h4
                class="font-semibold text-sm bg-gray-200 shadowshadow-lg py-1 px-2 rounded-lg"
              >
                Çocuklar için oyun alanları
              </h4>
            </div>
          </div>

          <div class="flex items-start justify-between space-x-3">
            <img src="images/arkan1.svg" alt="" class="mt-2 w-5" />
            <div class="w-full text-center">
              <h4
                class="font-semibold text-sm bg-gray-200 shadowshadow-lg py-1 px-2 rounded-lg"
              >
                Kapalı yüzme havuzu ve sauna
              </h4>
            </div>
          </div>

          <div class="flex items-start justify-between space-x-3">
            <img src="images/arkan1.svg" alt="" class="mt-2 w-5" />
            <div class="w-full text-center">
              <h4
                class="font-semibold text-sm bg-gray-200 shadowshadow-lg py-1 px-2 rounded-lg"
              >
                Açık ve kapalı otoparklar
              </h4>
            </div>
          </div>

          <div class="flex items-start justify-between space-x-3">
            <img src="images/arkan1.svg" alt="" class="mt-2 w-5" />
            <div class="w-full text-center">
              <h4
                class="font-semibold text-sm bg-gray-200 shadowshadow-lg py-1 px-2 rounded-lg"
              >
                Bahçeler ve yeşil alanlar
              </h4>
            </div>
          </div>

          <div class="flex items-start justify-between space-x-3">
            <img src="images/arkan1.svg" alt="" class="mt-2 w-5" />
            <div class="w-full text-center">
              <h4
                class="font-semibold text-sm bg-gray-200 shadowshadow-lg py-1 px-2 rounded-lg"
              >
                Türk hamamı
              </h4>
            </div>
          </div>
        </div>

        <div
          class="relative flex flex-col items-end text-right justify-center h-80 text-indigo-lblue space-y-8 slide px-20"
        >
          <div class="flex items-start justify-between space-x-3">
            <img src="images/arkan1.svg" alt="" class="mt-2 w-5" />
            <div class="w-full text-center">
              <h4
                class="font-semibold text-sm bg-gray-200 shadowshadow-lg py-1 px-2 rounded-lg"
              >
                Çocuklar için oyun alanları
              </h4>
            </div>
          </div>

          <div class="flex items-start justify-between space-x-3">
            <img src="images/arkan1.svg" alt="" class="mt-2 w-5" />
            <div class="w-full text-center">
              <h4
                class="font-semibold text-sm bg-gray-200 shadowshadow-lg py-1 px-2 rounded-lg"
              >
                Kapalı yüzme havuzu ve sauna
              </h4>
            </div>
          </div>

          <div class="flex items-start justify-between space-x-3">
            <img src="images/arkan1.svg" alt="" class="mt-2 w-5" />
            <div class="w-full text-center">
              <h4
                class="font-semibold text-sm bg-gray-200 shadowshadow-lg py-1 px-2 rounded-lg"
              >
                Açık ve kapalı otoparklar
              </h4>
            </div>
          </div>

          <div class="flex items-start justify-between space-x-3">
            <img src="images/arkan1.svg" alt="" class="mt-2 w-5" />
            <div class="w-full text-center">
              <h4
                class="font-semibold text-sm bg-gray-200 shadowshadow-lg py-1 px-2 rounded-lg"
              >
                Bahçeler ve yeşil alanlar
              </h4>
            </div>
          </div>

          <div class="flex items-start justify-between space-x-3">
            <img src="images/arkan1.svg" alt="" class="mt-2 w-5" />
            <div class="w-full text-center">
              <h4
                class="font-semibold text-sm bg-gray-200 shadowshadow-lg py-1 px-2 rounded-lg"
              >
                Türk hamamı
              </h4>
            </div>
          </div>
        </div>

        <template slot="prevButton"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="34"
            viewBox="0 0 33 34"
          >
            <g id="arrow-left-circle" transform="translate(1.744 2.309)">
              <ellipse
                id="Ellipse_5"
                data-name="Ellipse 5"
                cx="14.5"
                cy="15"
                rx="14.5"
                ry="15"
                transform="translate(0.256 -0.309)"
                fill="none"
                stroke="#236194"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
              />
              <path
                id="Path_11"
                data-name="Path 11"
                d="M13.893,8,8,13.893l5.893,5.893"
                transform="translate(0.839 0.839)"
                fill="none"
                stroke="#236194"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
              />
              <line
                id="Line_35"
                data-name="Line 35"
                x1="11"
                transform="translate(9.256 14.691)"
                fill="none"
                stroke="#236194"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
              />
            </g>
          </svg>
        </template>
        <template slot="nextButton"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 34 34"
          >
            <g
              id="arrow-left-circle"
              transform="translate(31.524 31.773) rotate(180)"
            >
              <circle
                id="Ellipse_5"
                data-name="Ellipse 5"
                cx="15"
                cy="15"
                r="15"
                transform="translate(-0.476 -0.227)"
                fill="none"
                stroke="#236194"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
              />
              <path
                id="Path_11"
                data-name="Path 11"
                d="M5.893,0,0,5.893l5.893,5.893"
                transform="translate(8.839 8.839)"
                fill="none"
                stroke="#236194"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
              />
              <line
                id="Line_35"
                data-name="Line 35"
                x1="11.786"
                transform="translate(8.839 14.732)"
                fill="none"
                stroke="#236194"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
              />
            </g>
          </svg>
        </template>
      </agile>

      <img
        src="images/bgagile.png"
        alt="icon group promotion"
        class="lg:hidden max-w-[322px] mx-auto"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      myOptions: {
        navButtons: true,
        autoplay: true,
      },
    };
  },
};
</script>

<style>
.agile {
  width: 100%;
  position: relative;
}

.agile__actions {
  margin-top: 20px;
}

.agile__nav-button--next {
  right: 5%;
  top: 33% !important;
  position: absolute !important;
}

.agile__nav-button--prev {
  left: 5%;
  top: 33% !important;
  position: absolute !important;
}

.agile__nav-button {
  background-image: transparent;
  border: none;
  color: #ccc;

  cursor: pointer;
  font-size: 24px;
  transition-duration: 0.3s;
}

.agile__nav-button:hover {
  color: #888;
}

.agile__dots {
  margin: 0 10px;
  width: 100%;
  display: flex;

  justify-content: center;
}

.agile__dots button {
  background-color: #2e6da1;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  z-index: 9999;
  height: 10px;
  font-size: 0;
  line-height: 0;
  margin: 0.5rem;
  padding: 0.5rem;
  transition-duration: 0.3s;
  width: 10px;
}

.agile__dot--current button,
.agile__dot:hover button {
  background-color: #1a4a74;
}

.slide {
  align-items: end;

  display: flex;

  justify-content: center;
}
</style>
