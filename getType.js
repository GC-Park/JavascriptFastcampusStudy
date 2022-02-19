export default function (data) {
  return Object.prototype.toString.call(data).slice(8, -1)
}


// 기본 통로에는 하나의 데이터만 내보낼 수 있음