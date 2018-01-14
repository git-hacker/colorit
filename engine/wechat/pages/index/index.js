var app = getApp()

Page({
  data: {
    imageBgSrc: '../../image/con-bg.jpg',
    imageAddSrc: '../../image/camera.svg',
    item: 'camera',
    isShowCamera: true,
    isShowText: true,
    isProgress: false,
    isShowAgainButton: false,
    progressPercent: 0,
  },
  handleChooseImage: function (event) {
    var _this = this
    chooseImage(_this)
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
        imageAddSrc: base64,
        isProgress: false,
        isShowCamera: true,
        isShowAgainButton: true
      })
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