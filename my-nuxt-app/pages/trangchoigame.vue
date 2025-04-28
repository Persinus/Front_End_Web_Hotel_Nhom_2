<template>
  <div class="container">
    <img id="hand" src="https://i.imgur.com/vJx9k4T.png" alt="Hand">
    <img
      id="wheel"
      :style="{ transform: `rotate(${rotation}deg)` }"
      :src="wheelBackground"
      alt="Wheel"
      @transitionend="handleTransitionEnd"
    />

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
          <li v-for="(prize, index) in prizes" :key="index">
            <img :src="prize.img" class="pic" alt="Prize"> ➔ {{ prize.name }}
          </li>
        </ul>
        <button @click="toggleGuide">Đóng</button>
      </div>
    </div>

    <!-- Modal Kết quả -->
    <div v-if="showPrizeModal" class="prize-modal">
      <div class="prize-content">
        <h2>🎉 Bạn nhận được!</h2>
        <img :src="prizes[currentPrize - 1]?.img" class="prize-img" alt="Prize">
        <p class="prize-name">{{ prizes[currentPrize - 1]?.name }}</p>
        <button @click="resetGame">Chơi lại</button>
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
const isSpun = ref(false) // Quản lý trạng thái chỉ quay 1 lần

const wheelBackground = "https://i.imgur.com/MRyOcpy.png"

const prizes = [
  { name: "Gấu bông tự chọn", img: "https://i.pinimg.com/474x/c1/55/51/c15551371c0606d1a7dc7963b132066c.jpg" },
  { name: "Bánh kem", img: "https://i.pinimg.com/474x/3c/92/af/3c92aff4aca619b833b4c2561f682c71.jpg" },
  { name: "Nước ngọt", img: "https://i.pinimg.com/474x/d9/90/b4/d990b4e3fafb7073f2ab7241e48aea0b.jpg" },
  { name: "Trà sữa", img: "https://i.pinimg.com/474x/ce/7d/a4/ce7da4eb27d85e6dba3d0ab5691f12ca.jpg" },
  { name: "Ốp điện thoại", img: "https://i.pinimg.com/474x/bb/6c/ad/bb6cad0667fbb72af4181010254b8375.jpg" },
  { name: "Phiếu spa mini miễn phí", img: "https://i.imgur.com/QzG1Svt.png" },
  { name: "Cốc sứ dễ thương", img: "https://i.imgur.com/Y3RYJWz.png" },
  { name: "Quạt điện dễ thương", img: "https://i.imgur.com/MRyOcpy.png" }, // Lặp lại hình nền
]

const spinButtonStyle = ref({
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  opacity: "1",
  boxShadow: "0 5px 1.5px #999",
  transform: "translate(0%, 0%)",
  pointerEvents: "auto"
})

function spin() {
  if (isSpun.value) return // Ngăn quay lại

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

  isSpun.value = true // Đánh dấu đã quay
}

function handleTransitionEnd() {
  currentPrize.value = prize.value
  if (currentPrize.value > 8) currentPrize.value = 8 // Bảo vệ out of range

  history.value.push(prizes[currentPrize.value - 1]?.name || "Giải bí ẩn")
  if (history.value.length > 10) history.value.shift()

  showPrizeModal.value = true
}

function resetGame() {
  // Reset toàn bộ game
  rotation.value = 0
  tick.value = 0
  prize.value = 0
  showPrizeModal.value = false
  spinButtonStyle.value = {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    opacity: "1",
    boxShadow: "0 5px 1.5px #999",
    transform: "translate(0%, 0%)",
    pointerEvents: "auto"
  }
  isSpun.value = false
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
  border-radius: 16px;
  text-align: center;
  max-width: 90%;
  max-height: 80%;
  overflow-y: auto;
  box-shadow: 0px 0px 20px rgba(0,0,0,0.3);
  animation: slideDown 0.6s ease, fadeIn 0.5s ease;
}

@keyframes slideDown {
  0% { transform: translateY(-50px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
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
  