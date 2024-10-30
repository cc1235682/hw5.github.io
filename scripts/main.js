const aliceTumbling = [
    { transform: "rotate(0) scale(1)" },
    { transform: "rotate(360deg) scale(0)" },
  ];
  
  const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: "forwards",
  };
  
  const images = document.querySelectorAll(".image");
  
  function animateImages() {
    // 依次执行每个动画
    images.forEach((image, index) => {
      // 设定每个图片的延迟
      const delay = index * 2500; // 每个动画之间的延迟时间
      setTimeout(() => {
        const animation = image.animate(aliceTumbling, aliceTiming);
      }, delay);
    });
  }
  
  // 开始动画
  animateImages();
  