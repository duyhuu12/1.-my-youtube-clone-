// Hàm sao chép liên kết video vào clipboard
function copyVideoUrl() {
  const videoId = videoPlayer.src.split("/embed/")[1];
  const url = `https://www.youtube.com/watch?v=${videoId}`;

  navigator.clipboard.writeText(url).then(() => {
    alert("Liên kết video đã được sao chép!");
  }).catch(err => {
    console.error("Lỗi sao chép liên kết video:", err);
  });
}
