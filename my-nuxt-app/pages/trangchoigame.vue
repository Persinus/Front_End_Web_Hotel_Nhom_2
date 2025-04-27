<template>
    <div class="container">
      <img id="hand" src="https://i.imgur.com/vJx9k4T.png" alt="Hand">
      <img id="wheel" :style="{ transform: `rotate(${rotation}deg)` }" :src="images[0]" alt="Wheel" @transitionend="handleTransitionEnd">
  
      <div id="button" @click="spin" :style="spinButtonStyle">SPIN</div>
      <div id="button2" @click="toggleHistory">HISTORY</div>
      <div id="guide" @click="toggleGuide">HƯỚNG DẪN</div>
  
      <div id="history" :class="{ hide: !showHistory }">
        <div id="historytext">{{ history.join('\n') }}</div>
      </div>
  
      <!-- Modal Hướng Dẫn -->
<div v-if="showGuide" class="modal">
  <div class="modal-content">
    <h2>🎯 Phần Thưởng Mini Game</h2>
    <ul>
        <li><img :src="images[0]" class="pic" alt=""> ➔ alo </li>
      <li><img :src="images[1]" class="pic" alt=""> ➔ Gấu bông tự chọn</li>
      <li><img :src="images[2]" class="pic" alt=""> ➔ Bánh kem</li>
      <li><img :src="images[3]" class="pic" alt=""> ➔ Nước ngọt</li>
      <li><img :src="images[4]" class="pic" alt=""> ➔ Trà sữa</li>
      <li><img :src="images[5]" class="pic" alt=""> ➔ Ốp điện thoại</li>
      <li><img :src="images[6]" class="pic" alt=""> ➔ Phiếu spa mini miễn phí</li>
      <li><img :src="images[7]" class="pic" alt=""> ➔ Cốc sứ dễ thương</li>

    </ul>
    <button @click="toggleGuide">Đóng</button>
  
</div>

      </div>
  
      <!-- Modal Kết quả -->
      <div v-if="showPrizeModal" class="prize-modal">
        <div class="prize-content">
          <h2>🎉 Bạn nhận được!</h2>
          <img :src="images[currentPrize]" class="prize-img" alt="Prize">
          <p class="prize-name">{{ prizeNames[currentPrize - 1] }}</p>
          <button @click="showPrizeModal = false">Chơi tiếp</button>
        </div>
      </div>
    </div>

  </template>
  
  <script setup>
import { ref } from 'vue'

const rotation = ref(0)
const tick = ref(0)
const cycle = 6 * 360
const prize = ref(0)

const history = ref([])
const showHistory = ref(false)
const showGuide = ref(false)
const showPrizeModal = ref(false)
const currentPrize = ref(0)

// Thêm đủ 8 phần thưởng
const images = ref([
  "https://i.imgur.com/MRyOcpy.png", // Wheel background
  "https://i.pinimg.com/474x/c1/55/51/c15551371c0606d1a7dc7963b132066c.jpg", // Gấu bông
  "https://i.pinimg.com/474x/3c/92/af/3c92aff4aca619b833b4c2561f682c71.jpg", // Bánh kem
  "https://i.pinimg.com/474x/d9/90/b4/d990b4e3fafb7073f2ab7241e48aea0b.jpg", // Nước ngọt
  "https://i.pinimg.com/474x/ce/7d/a4/ce7da4eb27d85e6dba3d0ab5691f12ca.jpg", // Trà sữa
  "https://i.pinimg.com/474x/bb/6c/ad/bb6cad0667fbb72af4181010254b8375.jpg", // Ốp điện thoại
  "https://i.imgur.com/QzG1Svt.png", // Phiếu spa mini
  "https://i.imgur.com/Y3RYJWz.png", // Cốc sứ dễ thương
    "https://i.imgur.com/MRyOcpy.png" // Gấu bông tự chọn (lặp lại để đủ 8 phần thưởng)
])

const prizeNames = [
  "Gấu bông tự chọn",
  "Bánh kem",
  "Nước ngọt",
  "Trà sữa",
  "Ốp điện thoại",
  "Cái ô",
  "Phiếu spa mini miễn phí",
  "Cốc sứ dễ thương",
 
]

const spinButtonStyle = ref({
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  opacity: "1",
  boxShadow: "0 5px 1.5px #999",
  transform: "translate(0%, 0%)",
  pointerEvents: "auto"
})

function spin() {
  spinButtonStyle.value = {
    backgroundColor: "#476eb4",
    opacity: "0.6",
    boxShadow: "0 3px 1.5px #666",
    transform: "translate(0%, 14%)",
    pointerEvents: "none"
  }

  tick.value++
  const randomSpin = Math.ceil(Math.random() * 360)
  rotation.value = randomSpin + (cycle * tick.value)
  prize.value = Math.ceil((rotation.value % 360) / 45)
}

function handleTransitionEnd() {
  currentPrize.value = prize.value
  if (currentPrize.value > 8) currentPrize.value = 8 // Không để >8
  history.value.push(prizeNames[currentPrize.value - 1])
  if (history.value.length > 10) history.value.shift()

  showPrizeModal.value = true

  spinButtonStyle.value = {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    opacity: "1",
    boxShadow: "0 5px 1.5px #999",
    transform: "translate(0%, 0%)",
    pointerEvents: "auto"
  }
}

function toggleHistory() {
  showHistory.value = !showHistory.value
}

function toggleGuide() {
  showGuide.value = !showGuide.value
}
</script>

  
  <style scoped>
  /* ---------- Layout ---------- */
  .container {
    background-color: #e5e5f7;
    background-image: radial-gradient(#4333ff 1.45px, transparent 1.45px), radial-gradient(#4333ff 1.45px, #e5e5f7 1.45px);
    background-size: 58px 58px;
    background-position: 0 0, 29px 29px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0;
    overflow-x: hidden;
    height: 100vh;
    position: relative;
  }
  
  #hand {
    width: 5rem;
    height: 5rem;
    margin-top: 2rem;
  }
  
  #wheel {
    width: 26rem;
    height: 26rem;
    margin-top: 1rem;
    transition: all 8s cubic-bezier(0, .57, .61, 0.99);
    filter: drop-shadow(0px 0px 10px #000);
  }
  
  /* ---------- Buttons ---------- */
  #button, #button2, #guide {
    margin-top: 1rem;
    padding: 12px 18px;
    border: 3px solid black;
    border-radius: 40px;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-size: 1.6rem;
    user-select: none;
    background-color: rgba(68,76,247,0.8);
    box-shadow: 0 5px 1.5px #999;
    cursor: pointer;
  }
  
  #button2, #guide {
    position: absolute;
    right: 2rem;
  }
  
  /* ---------- Slot, Wallet, History ---------- */
  #history {
    position: absolute;
    background-color: rgba(68,76,247,0.8);
    border-radius: 12px;
    border: 3px solid black;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    text-align: center;
    box-shadow: 0 5px 1.5px #999;
    top: 5rem;
    right: 1rem;
    width: 8rem;
    height: 8rem;
    overflow: auto;
  }
  
  .hide {
    visibility: hidden;
  }
  
  /* ---------- Modal Guide ---------- */
  .modal, .prize-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal-content, .prize-content {
    background: #fff;
    padding: 2rem;
    border-radius: 12px;
    text-align: center;
    animation: fadeIn 0.5s ease;
  }
  .modal-content ul {
    list-style: none;
    padding: 0;
  }
  .modal-content li {
    margin: 1rem 0;
  }
  .pic, .prize-img {
    width: 5rem;
    height: 5rem;
    object-fit: cover;
  }
  .prize-name {
    font-size: 1.6rem;
    font-weight: bold;
    margin: 1rem 0;
  }
  
  /* ---------- Animations ---------- */
  @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.8); }
    to { opacity: 1; transform: scale(1); }
  }
  
  /* ---------- Responsive ---------- */
  @media (max-width: 700px) {
    #wheel { width: 20rem; height: 20rem; }
  }
  </style>
  