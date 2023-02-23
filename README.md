
# 펫피탈
펫피탈: Petpital(Pet + hospital)

![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)

반려동물🐶을 키워보신 경험이 있으신가요?

국내 반려동물 양육 가구 수는 **602만** 가구이며, 양육 인구는 약 **1,306만** 명에 달한다고 합니다. 그러나 반려동물이 아플 때마다 병원을 찾아가신 분들은 천차만별로 다른 비용에 당황하신 경험이 있으실 겁니다. 반려동물은 보험이 적용되지 않아 병원마다 가격이 다르고, 가격을 투명하게 공개하지 않기 때문에 정보를 얻기는 어렵습니다.

저희는 이러한 경험을 바탕으로, 이용자들이 병원의 비용 정보와 경험담을 나누고, 궁금한 사항을 해결할 수 있는 Q&A 게시판을 제공하는 프로젝트를 기획하였습니다.
## Screenshots

### 전체적인 기능
![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

### 메인페이지
![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

### 서치맵 페이지
![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

### Q&A페이지
![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

### 마이페이지
![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

## Tech Stack

Client: Next, React, Recoil, Typescript, Javascript

Server: Firebase


## Features

- 카카오맵 검색
- 카카오맵 로드뷰
- 카카오 REST API 장소 이미지 검색
- 로그인/회원가입
- 구글/페이스북 로그인
- 리뷰 CRUD
- Q&A 및 Q&A 답변 CRUD

## API Reference
| 화면          | HTTP Verbs | Endpoints                    | Action                        |
| ------------- | ---------- | ---------------------------- | ----------------------------- |
| 회원가입      | POST       | /api/user/signup             | 회원가입                      |
| 로그인        | POST       | /api/user/login              | 가입된 유저가 로그인          |
| SearchMap 페이지   | GET        | /api/link/map/${keyword}     | 키워드에 맞는 동물 병원 출력 |
| SearchMap 페이지 | GET        | /api/link/roadview/${hospitalId} | hospitalId에 맞는 로드뷰 출력     |
| SearchMap 페이지 | POST       | /api/${hospitalId}/review        | 동물 병원에 리뷰 작성              |
| SearchMap 페이지 | GET        | /api/${hospitalId}/review        | 동물 병원 별 리뷰 출력             |
| SearchMap 페이지 | PATCH/DELETE     | /api/${hospitalId}/review        | 작성한 리뷰를 수정/삭제            |
| Q&A 페이지 | GET     | /api/qna        | 전체 Q&A List 출력            |
| Q&A 페이지 | POST     | /api/qna      | Q&A 작성          
| Q&A 페이지 | GET     | /api/qna/${qnaId}        | qnaId에 맞는 Q&A 출력          
| Q&A 페이지 | PATCH/DELETE     | /api/qna/${qnaId}        | qnaId에 맞는 Q&A 수정/삭제            |
| Q&A 페이지 | GET     | /api/qna/        |   Q&A에 답글 작성       |
| Q&A 페이지 | GET     | /api/qnareview/${qnaId}        | qnaId에 맞는 답글 출력       |
| Q&A 페이지 | PATCH/DELETE     | /api/qna/${qnaReviewId}        | qnaReviewId에 맞는 답글 수정/삭제            |
| 마이 페이지   | PATCH      | /api/${userId}               | 프로필 사진, 닉네임 수정      |



## 배포

배포 링크 달기


## Authors

- 송지현 [리더] [@no-pla](https://www.github.com/no-pla)
- 이재성 [부리더] [@ambition0103](https://www.github.com/ambition0103)
- 박재현 [@vgb30xk](https://www.github.com/vgb30xk)
- 이태언 [@lte94](https://www.github.com/lte94)
- 김재열 [디자이너] [@charlie7590](https://notefolio.net/charlie7590)

