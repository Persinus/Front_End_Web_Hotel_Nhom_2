<!-- components/PromoBanner.vue -->
<template>
    <va-card class="promo-banner" outlined>
      <div class="marquee-wrapper">
        <div class="marquee-text">
          🎁 Ưu đãi HOT: Giảm 20% cho tất cả đơn đặt phòng tuần này! |
          ☎ Gọi ngay: 0236 123 4567 để đặt phòng! |
          🏖️ Trải nghiệm nghỉ dưỡng đẳng cấp tại OceanView Resort & Hotel!
        </div>
      </div>
    </va-card>
  </template>
  
  <style scoped>
  .marquee-wrapper {
    overflow: hidden;
    white-space: nowrap;
    position: relative;
    height: 40px;
    background: linear-gradient(to right, #00c6ff, #0072ff);
    color: white;
    display: flex;
    align-items: center;
    font-weight: 600;
  }
  
  .marquee-text {
    display: inline-block;
    padding-left: 100%;
    animation: scroll-left 15s linear infinite;
  }
  
  @keyframes scroll-left {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  </style>