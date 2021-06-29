import Link from 'next/link'
import { AnimateSharedLayout, motion } from 'framer-motion'

const RoomLayoutTransition = ({ children }) => {
  return (
    <div className="layout">
      <header className="container mx-auto">
        <Link href="/">
          <a>
            <svg
              width={167}
              height={44}
              viewBox="0 0 167 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer mt-[37px] ml-8 lg:ml-0"
            >
              <path
                d="M56.404 30V14.7885H61.2325V17.976C61.485 16.882 62.0005 16.0404 62.7789 15.4513C63.5784 14.8411 64.4621 14.5361 65.4299 14.5361C65.9348 14.5361 66.3556 14.5781 66.6922 14.6623V19.1437C66.1242 19.0806 65.6403 19.049 65.2405 19.049C62.5685 19.049 61.2325 20.7427 61.2325 24.13V30H56.404ZM80.6815 28.2011C79.1667 29.716 77.1259 30.4734 74.5591 30.4734C71.9923 30.4734 69.9409 29.716 68.4051 28.2011C66.8692 26.6863 66.1013 24.7507 66.1013 22.3943C66.1013 20.0379 66.8692 18.1128 68.4051 16.619C69.9409 15.1041 71.9923 14.3467 74.5591 14.3467C77.1259 14.3467 79.1667 15.1041 80.6815 16.619C82.2174 18.1128 82.9853 20.0379 82.9853 22.3943C82.9853 24.7507 82.2174 26.6863 80.6815 28.2011ZM74.5591 26.3707C75.6742 26.3707 76.5578 26.0025 77.21 25.2661C77.8623 24.5298 78.1884 23.5725 78.1884 22.3943C78.1884 21.2161 77.8623 20.2588 77.21 19.5224C76.5578 18.786 75.6742 18.4178 74.5591 18.4178C73.423 18.4178 72.5288 18.786 71.8766 19.5224C71.2454 20.2588 70.9298 21.2161 70.9298 22.3943C70.9298 23.5725 71.2454 24.5298 71.8766 25.2661C72.5288 26.0025 73.423 26.3707 74.5591 26.3707ZM91.3347 30.4734C88.852 30.4734 86.8743 29.737 85.4016 28.2643C83.9288 26.7705 83.1925 24.8138 83.1925 22.3943C83.1925 19.9747 83.9288 18.0286 85.4016 16.5558C86.8743 15.0831 88.852 14.3467 91.3347 14.3467C93.5859 14.3467 95.4163 14.9043 96.826 16.0193C98.2356 17.1344 99.0351 18.6493 99.2245 20.5638H94.3959C94.0382 19.1332 93.0284 18.4178 91.3662 18.4178C90.3143 18.4178 89.4937 18.765 88.9046 19.4593C88.3155 20.1536 88.021 21.1319 88.021 22.3943C88.021 23.6566 88.3155 24.635 88.9046 25.3293C89.4937 26.0236 90.3143 26.3707 91.3662 26.3707C93.0284 26.3707 94.0382 25.6974 94.3959 24.3509H99.2245C99.0351 26.2234 98.2356 27.7172 96.826 28.8323C95.4163 29.9264 93.5859 30.4734 91.3347 30.4734ZM115.655 30H109.753L104.925 23.4042V30H100.096V7.90866H104.925V21.1319L109.879 14.7885H115.56L109.501 21.984L115.655 30ZM129.681 21.6053C129.681 22.2365 129.639 22.9413 129.554 23.7197H118.319C118.361 24.7086 118.698 25.4765 119.329 26.0236C119.96 26.5706 120.813 26.8441 121.886 26.8441C123.358 26.8441 124.305 26.3707 124.726 25.4239H129.46C129.228 26.9177 128.408 28.138 126.998 29.0848C125.61 30.0105 123.905 30.4734 121.886 30.4734C119.298 30.4734 117.257 29.758 115.763 28.3274C114.269 26.8967 113.522 24.919 113.522 22.3943C113.522 19.9116 114.269 17.955 115.763 16.5243C117.257 15.0726 119.245 14.3467 121.728 14.3467C124.084 14.3467 125.999 15.02 127.472 16.3665C128.944 17.713 129.681 19.4593 129.681 21.6053ZM118.319 20.7216H124.915C124.894 19.7117 124.61 18.9333 124.063 18.3863C123.516 17.8392 122.727 17.5657 121.696 17.5657C120.665 17.5657 119.845 17.8603 119.235 18.4494C118.646 19.0174 118.34 19.7749 118.319 20.7216ZM138.472 26.2445C139.145 26.2445 139.703 26.2129 140.145 26.1498V30C139.219 30.1683 138.146 30.2525 136.926 30.2525C136.379 30.2525 135.895 30.2209 135.474 30.1578C135.053 30.0947 134.58 29.9579 134.054 29.7475C133.528 29.5161 133.097 29.211 132.76 28.8323C132.423 28.4536 132.129 27.9066 131.876 27.1912C131.645 26.4759 131.529 25.6343 131.529 24.6665V18.6072H129.131V14.7885H131.529V10.2756H136.358V14.7885H139.798V18.6072H136.358V23.6566C136.358 24.6876 136.536 25.3819 136.894 25.7395C137.252 26.0762 137.778 26.2445 138.472 26.2445ZM159.84 14.7885H164.637V36.3118H159.808V28.6745H159.84V27.854C159.419 28.6114 158.767 29.2321 157.883 29.716C157.021 30.1788 156.063 30.4103 155.011 30.4103C152.802 30.4103 151.056 29.6634 149.773 28.1696C148.489 26.6758 147.848 24.7507 147.848 22.3943C147.848 20.0799 148.51 18.1654 149.836 16.6505C151.161 15.1357 152.908 14.3783 155.075 14.3783C156.148 14.3783 157.105 14.6097 157.946 15.0726C158.788 15.5354 159.419 16.1666 159.84 16.9661V14.7885ZM156.4 26.4023C157.557 26.4023 158.451 26.0236 159.083 25.2661C159.714 24.5087 160.029 23.5514 160.029 22.3943C160.029 21.2581 159.714 20.3114 159.083 19.554C158.451 18.7965 157.557 18.4178 156.4 18.4178C155.306 18.4178 154.422 18.786 153.749 19.5224C153.097 20.2588 152.771 21.2161 152.771 22.3943C152.771 23.5725 153.097 24.5403 153.749 25.2977C154.422 26.0341 155.306 26.4023 156.4 26.4023Z"
                fill="#0D114F"
              />
              <path
                d="M146.158 29.4004C145.569 30.0105 144.833 30.3156 143.949 30.3156C143.066 30.3156 142.319 30.0105 141.709 29.4004C141.12 28.7902 140.825 28.0644 140.825 27.2228C140.825 26.3602 141.12 25.6343 141.709 25.0452C142.319 24.4351 143.066 24.13 143.949 24.13C144.833 24.13 145.569 24.4351 146.158 25.0452C146.769 25.6343 147.074 26.3602 147.074 27.2228C147.074 28.0644 146.769 28.7902 146.158 29.4004Z"
                fill="url(#paint0_linear)"
              />
              <rect
                width="43.832"
                height="43.832"
                rx="7.88976"
                fill="url(#paint1_linear)"
              />
              <g filter="url(#filter0_di)">
                <path
                  d="M33.258 32.4131H29.3487C29.1852 32.4131 29.0508 32.2854 29.0363 32.1226C29.0317 32.0711 29.0267 32.0211 29.0214 31.9726C28.7973 29.9298 26.5982 28.1753 24.5583 28.4238C23.0692 28.6052 21.8351 29.7293 20.3445 29.8976C19.3393 30.0111 18.4621 29.9594 17.4596 29.7629C16.5809 29.5908 15.7327 29.2757 14.952 28.8372C13.1132 27.8044 12.126 26.741 11.2107 25.1387C10.681 24.2114 10.303 23.1958 10.1655 22.1368C10.0517 21.2603 10.0589 20.4879 10.1544 19.6373C10.3004 18.3379 10.7168 17.0732 11.3964 15.956C12.3504 14.3877 13.3816 13.4126 15.0616 12.4997C15.7731 12.1131 16.5387 11.8305 17.3296 11.6568C19.3324 11.2169 20.629 11.3458 22.5759 11.956C23.6591 12.2955 24.8356 13.023 25.8362 13.9723C28.0243 16.0482 28.1911 19.3058 28.2464 22.3215C28.2516 22.601 27.996 22.8125 27.7209 22.7627C26.3696 22.5184 25.3981 22.4987 24.0703 22.7098C23.7143 22.7664 23.4214 22.398 23.5175 22.0506C23.5591 21.8998 23.5918 21.7518 23.6163 21.6059C24.0088 19.2711 22.4111 16.606 20.0547 16.3763C18.718 16.246 17.3943 16.7918 16.4138 17.8864C15.8286 18.4381 15.5049 19.3034 15.4028 20.2262C15.1383 22.6173 17.0941 24.9295 19.497 25.0439C19.9555 25.0657 20.3982 24.999 20.8505 24.8457C22.2759 24.3625 23.6654 23.6404 25.1662 23.7534C29.6812 24.0934 32.8523 26.1289 33.6866 31.9218C33.724 32.1814 33.5203 32.4131 33.258 32.4131Z"
                  fill="#FAFAFA"
                />
              </g>
              <defs>
                <filter
                  id="filter0_di"
                  x="8.44906"
                  y="11.3964"
                  width="26.8744"
                  height="24.2814"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="1.63237" />
                  <feGaussianBlur stdDeviation="0.816183" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1.63237" />
                  <feGaussianBlur stdDeviation="1.02023" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2={-1}
                    k3={1}
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.219608 0 0 0 0 0.533333 0 0 0 0 1 0 0 0 0.13 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect2_innerShadow"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear"
                  x1="189.169"
                  y1="-59.0291"
                  x2="177.57"
                  y2="54.1337"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5498FF" />
                  <stop offset="0.515625" stopColor="#428EFF" />
                  <stop offset={1} stopColor="#297FFF" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear"
                  x1="52.463"
                  y1="-66.3077"
                  x2="19.6129"
                  y2="48.5381"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5498FF" />
                  <stop offset="0.515625" stopColor="#428EFF" />
                  <stop offset={1} stopColor="#297FFF" />
                </linearGradient>
              </defs>
            </svg>
          </a>
        </Link>
        <div className="fixed -top-36 -right-36 md:top-[-387px] md:right-[-406px] rounded-full bg-[#5497f610] w-64 h-64 md:w-[633.55px] md:h-[633.55px]"></div>
      </header>

      <main className="container flex lg:justify-between lg:items-center">
        <img
          src="/illustration.png"
          className="mt-[70.17px] ml-[-91px] flex-shrink-0 hidden lg:block"
          draggable={false}
          alt="Ilustração"
        />

        <div className="lg:max-w-sm lg:ml-auto lg:mr-0 max-w-xs mx-auto">
          <AnimateSharedLayout type="crossfade">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {children}
            </motion.div>
          </AnimateSharedLayout>
        </div>
        <div className="fixed bottom-[-148px] right-[56px] rounded-full bg-[#5497f610] w-[212px] h-[212px]"></div>
      </main>
    </div>
  )
}

export default RoomLayoutTransition
