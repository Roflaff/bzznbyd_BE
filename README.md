# bzznbyd_BE

## BE개발자 구현과제#02 - GraphQL + MongoDB CRUD  
**김선표 KIN SEON PYO**

---

## 실행 방법 (리눅스 기준)

- GraphQL 서버 (Cloudtype):
  `https://port-0-bzznbyd-be-mamf4e5w533169a8.sel4.cloudtype.app/graphql`

- OR 로컬 서버:
  `http://localhost:5110/graphql`

```bash
# 1. 레포지토리 클론
$git clone https://github.com/Roflaff/bzznbyd_BE.git

# 2. 패키지 설치
$npm install

# 3. 서버 실행
$cd src
$npm start
```

- or <code>curl</code> to send HTTP
---

## 주요 기능

### 환율 등록 (Mutation)

```bash
curl -XPOST "https://port-0-bzznbyd-be-mamf4e5w533169a8.sel4.cloudtype.app/graphql" --silent \
-H "accept: application/json" \
-H "Content-Type: application/json" \
-d '{"query":"mutation { postExchangeRate(info: { src: \"krw\", tgt: \"usd\", rate: 1350.5, date: \"2025-05-15\" }) { src tgt rate date } }"}' | jq
```

---

### 환율 조회

#### TEST_SEARCH 1
```bash
curl -XPOST "https://port-0-bzznbyd-be-mamf4e5w533169a8.sel4.cloudtype.app/graphql" --silent \
-H  "accept: application/json" \
-H  "Content-Type: application/json" \
-d '
{ 
  "query": "query { getExchangeRate (src: \"krw\", tgt: \"usd\") { src tgt rate date } }"
}
' | jq
```

#### RESULT_SEARCH 1
```json
{
  "data": {
    "getExchangeRate": {
      "src": "krw",
      "tgt": "usd",
      "rate": 0.0007450954094671824,
      "date": "2022-11-28"
    }
  }
}
```

#### TEST_SEARCH 2
```bash
curl -XPOST "https://port-0-bzznbyd-be-mamf4e5w533169a8.sel4.cloudtype.app/graphql" --silent \
-H  "accept: application/json" \
-H  "Content-Type: application/json" \
-d '
{ 
  "query": "query { getExchangeRate (src: \"usd\", tgt: \"krw\") { src tgt rate date } }"
}
' | jq
```
#### RESULT_SEARCH 2

```json
{
  "data": {
    "getExchangeRate": {
      "src": "usd",
      "tgt": "krw",
      "rate": 1342.11,
      "date": "2022-11-28"
    }
  }
}
```

#### TEST_SEARCH 3
```bash
curl -XPOST "https://port-0-bzznbyd-be-mamf4e5w533169a8.sel4.cloudtype.app/graphql" --silent \
-H  "accept: application/json" \
-H  "Content-Type: application/json" \
-d '
{ 
  "query": "query { getExchangeRate (src: \"usd\", tgt: \"usd\") { src tgt rate date } }"
}
' | jq
```
#### RESULT_SEARCH 3

```json
{
  "data": {
    "getExchangeRate": {
      "src": "usd",
      "tgt": "usd",
      "rate": 1,
      "date": "2022-11-28"
    }
  }
}
```

#### TEST_SEARCH 4
```bash
curl -XPOST "https://port-0-bzznbyd-be-mamf4e5w533169a8.sel4.cloudtype.app/graphql" --silent \
-H  "accept: application/json" \
-H  "Content-Type: application/json" \
-d '
{ 
  "query": "query { getExchangeRate (src: \"krw\", tgt: \"krw\") { src tgt rate date } }"
}
' | jq
```
#### RESULT_SEARCH 4

```json
{
  "data": {
    "getExchangeRate": {
      "src": "krw",
      "tgt": "krw",
      "rate": 1,
      "date": "2022-11-28"
    }
  }
}
```
---
### 환율 정보 업데이트

#### TEST_UPDATE 1
```bash
curl -XPOST "https://port-0-bzznbyd-be-mamf4e5w533169a8.sel4.cloudtype.app/graphql" --silent \
-H  "accept: application/json" \
-H  "Content-Type: application/json" \
-d '
{ 
  "query": "mutation { postExchangeRate (info: { src: \"usd\", tgt: \"krw\", rate: 1342.11, date:\"2022-11-28\" }) { src tgt rate date } }"
}
' | jq
```
#### RESULT_UPDATE 1

```json
{
  "data": {
    "postExchangeRate": {
      "src": "usd",
      "tgt": "krw",
      "rate": 1342.11,
      "date": "2022-11-28"
    }
  }
}
```

#### TEST_UPDATE 2
```bash
curl -XPOST "https://port-0-bzznbyd-be-mamf4e5w533169a8.sel4.cloudtype.app/graphql" --silent \
-H  "accept: application/json" \
-H  "Content-Type: application/json" \
-d '
{ 
  "query": "mutation { postExchangeRate (info: { src: \"krw\", tgt: \"krw\", rate: 2.0, date:\"2022-11-28\" }) { src tgt rate date } }"
}
' | jq
```
#### RESULT_UPDATE 2

```json
{
  "data": {
    "postExchangeRate": {
      "src": "krw",
      "tgt": "krw",
      "rate": 1,
      "date": "2022-11-28"
    }
  }
}
```
### 환율 정보 삭제

#### TEST_DELETE 1
```bash
curl -XPOST "https://port-0-bzznbyd-be-mamf4e5w533169a8.sel4.cloudtype.app/graphql" --silent \
-H  "accept: application/json" \
-H  "Content-Type: application/json" \
-d '
{ 
  "query": "mutation { deleteExchangeRate (info: { src: \"usd\", tgt: \"krw\", date:\"2022-11-28\" }) { src tgt rate date } }"
}
' | jq
```
#### RESULT_DELETE 1

```json
{
  "data": {
    "deleteExchangeRate": {
      "src": "usd",
      "tgt": "krw",
      "rate": 1342.11,
      "date": "2022-11-28"
    }
  }
}
```

#### TEST_DELETE 2
```bash
curl -XPOST "https://port-0-bzznbyd-be-mamf4e5w533169a8.sel4.cloudtype.app/graphql" --silent \
-H  "accept: application/json" \
-H  "Content-Type: application/json" \
-d '
{ 
  "query": "mutation { deleteExchangeRate (info: { src: \"krw\", tgt: \"krw\", date:\"2022-11-28\" }) { src tgt rate date } }"
}
' | jq
```
#### RESULT_DELETE 2

```json
{
  "data": {
    "deleteExchangeRate": {
      "src": "krw",
      "tgt": "krw",
      "rate": 1,
      "date": "2022-11-28"
    }
  }
}
```
