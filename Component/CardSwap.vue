<template>
  <div class="swap-flex">
    <div class="swap-title">
      <h1>Khám phá không gian<br />Khách sạn đẳng cấp</h1>
      <p>Trải nghiệm tiện nghi & dịch vụ tuyệt vời tại nơi lưu trú của bạn!</p>
    </div>
    <div
      class="card-swap-container"
      :style="{
        width: `${width}px`,
        height: `${height}px`,
        perspective: '900px',
        position: 'relative',
      }"
    >
      <div
        v-for="(image, index) in images"
        :key="index"
        ref="cardRefs"
        class="card"
        :style="{
          width: `${width}px`,
          height: `${height}px`,
          position: 'absolute',
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: cardTransforms[index]?.transform || '',
          zIndex: cardTransforms[index]?.zIndex || 0,
        }"
      >
        <div class="card-overlay">
          <span class="hotel-name">Hotel Luxury</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  images: { type: Array, required: true },
  width: { type: Number, default: 500 },
  height: { type: Number, default: 400 },
  cardDistance: { type: Number, default: 60 },
  verticalDistance: { type: Number, default: 70 },
  delay: { type: Number, default: 5000 },
});

const cardRefs = ref([]);
const cards = ref([]);
const cardTransforms = reactive([]);

onMounted(() => {
  const total = props.images.length;
  cards.value = Array.from({ length: total }, (_, i) => i);

  const calculateSlot = (i) => ({
    x: 0,
    y: 0, // hoặc một giá trị nhỏ nếu muốn lệch nhẹ
    z: -i * props.cardDistance * 1.2,
    rotate: 0,
    zIndex: cards.value.length - i,
  });

  const updatePositions = () => {
    cards.value.forEach((cardIndex, i) => {
      const slot = calculateSlot(i);
      cardTransforms[cardIndex] = {
        transform: `translate3d(${slot.x}px, ${slot.y}px, ${slot.z}px) translate(-50%, -50%) rotateZ(${slot.rotate}deg)`,
        zIndex: slot.zIndex,
      };
    });
  };

  const swapCards = () => {
    if (cards.value.length < 2) return;
    const [front, ...rest] = cards.value;
    cards.value = [...rest, front];
    updatePositions();
  };

  updatePositions();
  const interval = setInterval(swapCards, props.delay);

  onBeforeUnmount(() => {
    clearInterval(interval);
  });
});
</script>

<style scoped>
.swap-flex {
  display: flex;
  align-items: center;
  height: 100vh;
  position: relative;
  /* Ảnh nền khách sạn */
  background: url("https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg?auto=compress&cs=tinysrgb&w=600")
    center center/cover no-repeat;
}
.swap-flex::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(20, 20, 20, 0.55); /* overlay tối để chữ nổi bật */
  z-index: 0;
}
.swap-title,
.card-swap-container {
  position: relative;
  z-index: 1;
}
.swap-title {
  flex: 1;
  padding-left: 60px;
  z-index: 2;
  color: #fff;
}
.swap-title h1 {
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 18px;
  line-height: 1.2;
}
.swap-title p {
  font-size: 1.25rem;
  color: #e0e0e0;
}
.card-swap-container {
  flex-shrink: 0;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
.card {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 18px;
  border: 3px solid #ffd700; /* Viền vàng sang trọng */
  background: #000;
  box-shadow: 0 8px 32px #0004, 0 1.5px 8px #0002;
  transform-style: preserve-3d;
  transition: transform 0.8s cubic-bezier(0.4, 2, 0.3, 1), z-index 0.3s;
  overflow: hidden;
}
.card-overlay {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.55) 70%, transparent 100%);
  color: #ffd700;
  padding: 10px;
  text-align: center;
  font-weight: 500;
  font-size: 1.1rem;
  border-top: 2px solid rgba(255, 215, 0, 0.7);
}
.hotel-name {
  display: block;
  margin-top: 5px;
  font-size: 1.2rem;
  font-weight: 700;
}
@media (max-width: 768px) {
  .card-swap-container {
    transform: scale(0.75) translate(25%, 25%);
  }
}

@media (max-width: 480px) {
  .card-swap-container {
    transform: scale(0.55) translate(25%, 25%);
  }
}
</style>
