var app = getApp()

Page({
  data: {
    imageBgSrc: '../../image/con-bg.jpg',
    imageAddSrc: '../../image/camera.svg',
    isShowCamera: true,
    isShowText: true,
    isProgress: false,
    isShowCanvas: false,
    isShowAgainButton: false,
    progressPercent: 0,
  },
  handleChooseImage: function () {
    var _this = this
    chooseImage(_this)
  },
  handleSaveImage: function () {
    saveCanvas()
  },
  handlePlayAgain: function () {
    this.setData({
      item: 'camera',
      imageAddSrc: '../../image/camera.svg',
      isShowCamera: true,
      isShowCanvas: false,
      isShowText: true,
      isShowAgainButton: false,
    })
  }
})


function chooseImage(page) {
  wx.chooseImage({
    count: 1,
    success: function (res) {
      var tempFilePaths = res.tempFilePaths
      page.setData({
        item: 'image',
        isProgress: true,
        isShowCamera: false,
        isShowText: false,
      })

      uploadImage(page, tempFilePaths[0])
    },
  })
}

function uploadImage(page, path) {
  var uploadTask = wx.uploadFile({
    url: app.globalData.APIHost + app.globalData.uploadFilePath,
    filePath: path,
    name: 'image',
    success: function (res) {
      console.log('success')
      var base64 = 'data:image/jpeg;base64,' + res.data.substring(1, res.data.length - 1)
      page.setData({
        isProgress: false,
        isShowCamera: false,
        isShowCanvas: true,
        isShowAgainButton: true
      })
      drawImage(base64)
    },
    fail: function (res) {
      consloe.log(res)
      wx.showModal({
        title: 'colorit',
        content: '上传失败,请稍后重试',
        showCancel: false
      })
    }
  })
  uploadTask.onProgressUpdate((res) => {
    page.setData({
      progressPercent: 100
    })
  })
}

function drawCanvas(base64) {
  var context = wx.createCanvasContext('canvas')
  context.drawImage(base64, 0, 0, 224, 224)
  context.draw()
}

function saveCanvas() {
  wx.canvasToTempFilePath({
    canvasId: 'canvas',
    success: function (res) {
      saveImage(res.tempFilePath)
    },
    fail: function (res) {
      console.log(res)
    }
  })
}

function saveImage(path) {
  wx.saveImageToPhotosAlbum({
    filePath: path,
    success: function (res) {
      console.log(res)
      wx.showModal({
        title: 'colorit',
        content: '保存成功',
        showCancel: false
      })
    },
    fail: function (res) {
      console.log(res)
    }
  })
}