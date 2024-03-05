const API_URL = "https://rolling-api.vercel.app";

const BACKGROUND_IMAGES_API_URL = `${API_URL}/background-images/`;
const PROFILE_IMAGES_API_URL = `${API_URL}/profile-images/`;
const RECIPIENT_API_URL = `${API_URL}/4-7/recipients/`;
const MESSAGE_API_URL = `${API_URL}/4-7/messages/`;
const ERROR_MESSAGE = "데이터를 불러오는데 실패했습니다.";

async function getApi(url) {
  const response = await fetch(url);
  const body = await response.json();
  return body;
}

async function postApi(url, obj) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(obj),
  });

  if (!response?.ok) {
    throw new Error(ERROR_MESSAGE);
  }

  const body = await response.json();

  return body;
}

async function deleteApi(url) {
  const response = await fetch(url, {
    method: "DELETE",
  });

  if (!response?.ok) {
    throw new Error(ERROR_MESSAGE);
  }
}

/* background-images
GET /background-images/                       -- 기본 배경 이미지 조회
*/

export function getBackgroundImagesApiResponse() {
  return getApi(BACKGROUND_IMAGES_API_URL);
}

/* profile-images
GET /profile-images/                          -- 기본 프로필 이미지 조회
*/

export function getProfileImagesApiResponse() {
  return getApi(PROFILE_IMAGES_API_URL);
}

/* recipient(대상)
POST   /recipients/                           -- 롤링 페이퍼 대상 생성
GET    /recipients/                           -- 롤링 페이퍼 대상 목록 조회
GET    /recipients/{recipientId}/             -- 롤링 페이퍼 대상 조회
DELETE /recipients/{recipientId}/             -- 롤링 페이퍼 대상 삭제
*/

export function postRecipientApiResponse(obj) {
  return postApi(RECIPIENT_API_URL, obj);
}

export function getRecipientsApiResponse(recipientId, sort) {
  const queryString = sort === "like" ? `?sort=like` : ``;
  const conditionalRecipientUrl = recipientId
    ? RECIPIENT_API_URL + recipientId + "/" + queryString
    : RECIPIENT_API_URL + queryString;
  return getApi(conditionalRecipientUrl);
}

export function deleteRecipientApiResponse(recipientId) {
  return deleteApi(RECIPIENT_API_URL + recipientId + "/");
}

/* message(메세지)
POST   /recipients/{recipientId}/messages/    -- 대상에게 보내는 메세지 생성
GET    /recipients/{recipientId}/messages/    -- 대상에게 보낸 메세지 목록 조회
DELETE /messages/{messageId}/                 -- 메세지 삭제
*/

export function postMessageApiResponse(obj, recipientId) {
  return postApi(RECIPIENT_API_URL + recipientId + "/messages/", obj);
}

export function getMessagesApiResponse(recipientId, offset, type) {
  const queryString =
    type === "edit"
      ? `?limit=5&offset=0`
      : offset
      ? `?limit=6&offset=${offset}`
      : `?limit=5&offset=0`;
  return getApi(RECIPIENT_API_URL + recipientId + "/messages/" + queryString);
}

export function deleteMessageApiResponse(messageId) {
  return deleteApi(MESSAGE_API_URL + messageId + "/");
}

/* reaction(리액션)
POST   /recipients/{recipient_id}/reactions/  -- 대상에게 리액션 달기
GET    /recipients/{recipient_id}/reactions/  -- 대상에게 단 리액션 조회
*/

export function postReactionApiResponse(obj, recipientId) {
  return postApi(RECIPIENT_API_URL + recipientId + "/reactions/", obj);
}

export function getReactionsApiResponse(recipientId) {
  return getApi(RECIPIENT_API_URL + recipientId + "/reactions/");
}

//직접 선택한 이미지 서버에 업로드 후 생성된 url 받아오는 함수
export const upLoadImg = async (imgFile) => {
  try {
    const formData = new FormData();
    formData.append("image", imgFile);
    const response = await fetch(
      "https://api.imgbb.com/1/upload?key=d0683b0869118bab9113ca272a7d46b1",
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response?.ok) {
      throw new Error("이미지를 업로드 하는 데 실패했습니다.");
    }
    const data = await response.json();
    return data.data.url;
  } catch (error) {
    console.error("Error uploading image:", error);
  }
};
