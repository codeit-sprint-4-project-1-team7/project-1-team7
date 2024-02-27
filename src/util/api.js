const API_URL = "https://rolling-api.vercel.app";

const RECIPIENT_API_URL = `${API_URL}/4-7/recipients/`;

const MESSAGE_API_URL = `${API_URL}/messages/`;

const ERROR_MESSAGE = "데이터를 불러오는데 실패했습니다.";

async function getApi(url) {
  const response = await fetch(url);

  if (!response?.ok) {
    return new Error(ERROR_MESSAGE);
  }

  const body = response.json();

  return body;
}

async function postApi(url, obj) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "content-type": "appliction/json" },
    body: JSON.stringify(obj),
  });

  if (!response?.ok) {
    return new Error(ERROR_MESSAGE);
  }

  const body = response.json();

  return body;
}

async function deleteApi(url) {
  const response = await fetch(url, {
    method: "DELETE",
    headers: { "content-type": "appliction/json" },
  });

  if (!response?.ok) {
    return new Error(ERROR_MESSAGE);
  }

  const body = response.json();

  return body;
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

export function getRecipientsApiResponse(recipientId) {
  const getRecipientsUrl = recipientId
    ? RECIPIENT_API_URL + recipientId + "/"
    : RECIPIENT_API_URL;
  return getApi(getRecipientsUrl);
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

export function getMessagesApiResponse(recipientId) {
  return getApi(RECIPIENT_API_URL + recipientId + "/messages/");
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
