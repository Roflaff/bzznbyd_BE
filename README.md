# bzznbyd_BE

## BE개발자 구현과제#02 - GraphQL + MongoDB CRUD  
**김선표 KIN SEON PYO**

---

## 배포 주소

- GraphQL 서버 (Cloudtype):
  `https://port-0-bzznbyd-be-mamf4e5w533169a8.sel4.cloudtype.app/graphql`

- OR 로컬 서버:
  `http://localhost:5110/graphql`

---

## 주요 기능

### 환율 등록 (Mutation)

```bash
curl -XPOST "https://port-0-bzznbyd-be-mamf4e5w533169a8.sel4.cloudtype.app/graphql" --silent \
-H "accept: application/json" \
-H "Content-Type: application/json" \
-d '{
  "query": "mutation { \
    r1: postExchangeRate(info: { src: \"krw\", tgt: \"usd\", rate: 1350.5, date: \"2025-05-15\" }) { src tgt rate date } \
    r2: postExchangeRate(info: { src: \"krw\", tgt: \"usd\", rate: 1348.2, date: \"2025-05-14\" }) { src tgt rate date } \
    r3: postExchangeRate(info: { src: \"krw\", tgt: \"usd\", rate: 1351.0, date: \"2025-05-13\" }) { src tgt rate date } \
    r4: postExchangeRate(info: { src: \"krw\", tgt: \"usd\", rate: 1347.3, date: \"2025-05-12\" }) { src tgt rate date } \
    r5: postExchangeRate(info: { src: \"krw\", tgt: \"usd\", rate: 1349.9, date: \"2025-05-11\" }) { src tgt rate date } \
    r6: postExchangeRate(info: { src: \"krw\", tgt: \"usd\", rate: 1352.4, date: \"2025-05-10\" }) { src tgt rate date } \
  }"
}' | jq
```

### 환율 조회

#### TEST_SEARCH 1
```bash
curl -XPOST "http://localhost:5110/graphql" --silent \
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
  "query": "query { getExchangeRate (src: \"krw\", tgt: \"usd\") { src tgt rate date } }"
}
' | jq

```
#### RESULT_SEARCH 2
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