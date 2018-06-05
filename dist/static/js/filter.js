// 判断一个字段是否有值
const checkVariable = value => {
  if (value === undefined || value === 'undefined' ||
    value === null || value === "") {
    return "暂无数据"
  }
  return value
}

const formatTimeStamp = (value,fmt) => {
  if (value == "暂无数据" || value === undefined || value === 'undefined' ||
    value === null || value === "") {
    return "暂无数据"
  } else {
    value = new Date(value)
    const year = value.getFullYear()
    let month = value.getMonth() + 1
    let day = value.getDate()
    if (month < 10) {
      month = "0" + month
    }
    if (day < 10) {
      day = "0" + day
    }
    return year + '-' + month + '-' + day
  }
}

const returnZero = value => {
  if (value == "" || value == undefined || value == 'undefined' || value != value) {
    return 0
  }else {
    return value
  }
}

export {
  checkVariable,
  formatTimeStamp,
  returnZero
}
