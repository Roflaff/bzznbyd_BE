# bzznbyd_BE

### BE개발자 구현과제#02 - GraphQL + mongoDB CRUD
#### KIN SEON PYO
info : 

---
# termial

<div>

## Insert data

```bash
curl -XPOST "https://port-0-bzznbyd-be-mamf4e5w533169a8.sel4.cloudtype.app/graphql" --silent \
-H "accept: application/json" \
-H "Content-Type: application/json" \
-d '
{
  "query": "mutation {
    r1: postExchangeRate(info: { src: \"krw\", tgt: \"usd\", rate: 1350.5, date: \"2025-05-15\" }) { src tgt rate date },
    r2: postExchangeRate(info: { src: \"krw\", tgt: \"usd\", rate: 1348.2, date: \"2025-05-14\" }) { src tgt rate date },
    r3: postExchangeRate(info: { src: \"krw\", tgt: \"usd\", rate: 1351.0, date: \"2025-05-13\" }) { src tgt rate date },
    r4: postExchangeRate(info: { src: \"krw\", tgt: \"usd\", rate: 1347.3, date: \"2025-05-12\" }) { src tgt rate date },
    r5: postExchangeRate(info: { src: \"krw\", tgt: \"usd\", rate: 1349.9, date: \"2025-05-11\" }) { src tgt rate date },
    r6: postExchangeRate(info: { src: \"krw\", tgt: \"usd\", rate: 1352.4, date: \"2025-05-10\" }) { src tgt rate date },
  }"
}
' | jq
```

### Seach

```bash
curl -XPOST "https://port-0-bzznbyd-be-mamf4e5w533169a8.sel4.cloudtype.app/graphql" --silent \
-H  "accept: application/json" \
-H  "Content-Type: application/json" \
-d '
{ 
  "query": "query { getExchangeRate (src: \"KRW\", tgt: \"USD\") { src tgt rate date } }"
}
' | jq
```

```bash
curl -XPOST "https://port-0-bzznbyd-be-mamf4e5w533169a8.sel4.cloudtype.app/graphql" --silent \
-H  "accept: application/json" \
-H  "Content-Type: application/json" \
-d '
{ 
  "query": "mutation { deleteExchangeRate (info: { src: \"KRW\", tgt: \"USD\", date:\"2025-05-15\" }) { src tgt rate date } }"
}
' | jq
```

</div>