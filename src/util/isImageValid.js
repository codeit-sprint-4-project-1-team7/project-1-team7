export function isImageValid(url, callback) {
  if (!url) callback(false);
  // XMLHttpRequest 객체 생성
  var xhr = new XMLHttpRequest();

  // HTTP HEAD 요청 설정
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      // 응답 상태가 200이면 유효한 이미지로 간주
      callback(xhr.status === 200);
    }
  };

  // HEAD 메서드로 이미지 URL에 요청 보내기
  xhr.open("HEAD", url, true);
  xhr.send();
}
