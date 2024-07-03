// 上传资源
export const inputUploadFile = async ({
  accept = "image",
  multiple = false,
} = {}) => {
  const acceptProcesser = {
    image: "image/jpeg,image/jpg,image/png,image/gif",
    video: "video/quicktime,video/mp4,video/x-m4v",
    audio: "acc,.mp3,audio/ogg,audio/aac,audio/mp3,audio/m4a,audio/x-m4a",
  };
  accept = acceptProcesser[accept] || acceptProcesser.image;

  const input = document.createElement("input");

  input.type = "file";
  input.style.position = "absolute";
  input.style.top = "-9999px";
  input.style.bottom = "-9999px";
  input.accept = accept;
  input.multiple = multiple;
  input.click();

  const files = await new Promise((resolve) => {
    input.addEventListener("change", (evt) => resolve(evt.target.files));
  });
  return files;
};

// 将input导入的files文件转为真实数组结构
export const filesToArray = (files = []) => {
  const fileArray = [];

  if (files.map) {
    return files;
  }
  for (let i = 0; i < files.length; i++) {
    fileArray.push(files[i]);
  }
  return fileArray;
};


// 读取媒体信息
export const readMedia = async (url) => {
  const element = new Audio(url)

  await new Promise((resolve, reject) => {
    element.addEventListener('loadedmetadata', evt => {
      // 时长 duration
      element.remove()
      resolve(true)
    })
    element.addEventListener('error', evt => {
      // 时长 duration
      element.remove()
      reject(new Error('media load fail'))
    })
  })
  return element
}


// 获取视频封面信息
export const readVideo = async (url) => {
  const element = document.createElement('video')

  element.muted = true
  element.src = url

  await new Promise((resolve, reject) => {
    element.addEventListener('loadedmetadata', _event => {
      resolve(true)
    })
  })

  let isSuitbalePoster = false
  let isTimeout = false
  let imgSrc
  const start = Date.now()
  while (!isTimeout && !isSuitbalePoster) {
    if (Date.now() - start > 3000) {
      isTimeout = true
      continue
    }
    await playAndPauseVideo(element, 100)
    const { videoWidth, videoHeight } = element
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')
    const scale = 0.8 // 压缩系数
    canvas.width = videoWidth * scale
    canvas.height = videoHeight * scale
    if (context) {
      // canvas画图
      context.drawImage(element, 0, 0, canvas.width, canvas.height)
      console.time('imageBrightness')
      const imageBrightness = getCanvasImageBrightness(canvas, context)
      console.timeEnd('imageBrightness')
      if (imageBrightness > 0) {
        imgSrc = canvas.toDataURL('image/jpg')
        isSuitbalePoster = true
      } else {
        console.log(`|----    继续播放，截图`);
        continue
      }
    } else {
      console.log(`|----    获取canvas context失败`);
      continue
    }
  }

  element.currentTime = 3


//   // canvas画图
//   context.drawImage(element, 0, 0, canvas.width, canvas.height)
//   // 把canvas转成base64编码格式
//   const imgSrc = canvas.toDataURL('image/jpg')

  return { videoWidth, videoHeight, poster: imgSrc }
}

const playAndPauseVideo = async (element, timeout) => {
  element.play()

  // timeupdate
  await new Promise((resolve, reject) => {
    element.addEventListener('timeupdate', _event => {
      resolve(true)
    })
  })
  const TIME = timeout || 0
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, TIME);
  })

  element.pause()
}



/**
 * 获取canvas图片的平均亮度
 * @param canvas
 * @param context
 * @returns
 */
export const getCanvasImageBrightness = (canvas, context) => {
  const data = context.getImageData(0, 0, canvas.width, canvas.height).data
  let brightnessSum = 0

  console.log(`|----    data.length`, data.length);

  for (let i = 0; i < data.length; i += 4) {
    // RGB三原色分量求平均得到亮度值
    const r = data[i]
    const g = data[i + 1]
    const b = data[i + 2]

    const averageBrightness = Math.round((r + g + b) / 3)
    brightnessSum += averageBrightness
  }

  const globalAverageBrightness = brightnessSum / (canvas.width * canvas.height)

  // eslint-disable-next-line no-console
  console.log('图片亮度：' + globalAverageBrightness)
  return globalAverageBrightness
}

