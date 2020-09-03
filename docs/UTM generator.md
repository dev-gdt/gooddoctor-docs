---
id: utm
title: UTM Generator Guide
sidebar_label: "UTM Generator"
---



## UTM Generator Tools

The UTM generator tools will align and formalize the way we generate deeplink
for UTM related URL

## Framework

**React + Nextjs + UI semantic**

## Feature

You can use:

> - Generator Deeplink URL
> - Record deeplink url status

## Pages:

1. Home page
   - generator deeplink page, and update onelink
2. History Page
   - display hisotry table
3. History Editor
   - change information and status

## Generator Rule

```js
const host = "https://www.gooddoctor.co.id"
const path = "/health-psychic/#/provider"
const fullURL = host + path

const grab_api_obj = {
  url: "https://api.grab.com/grabid/v1/oauth2/grablet/config?",
  client_id: "699cc1833d044f07bc6593cd1ff67a6a",
  redirect_url: encodeURIComponent(
    host + "/health-site/?returnUrl=" + encodeURIComponent(fullURL),
  ),
}
const grab_api_url = Object.entries(grab_api_obj).reduce(
  (intal, curr, index) => {
    if (index === 0) {
      return curr[1]
    }
    if (index === 1) {
      return intal + curr.join("=")
    }
    return intal + "&" + curr.join("=")
  },
  "",
)

const grab_app_url =
  "grab://open?screenType=CONSENT&webviewUrl=" +
  encodeURIComponent(grab_api_url)
```

### Release note：

- v0.2.0 defining the four basic functions of CRUD, connect maridb database,
  swagger

### Confluence

- [confluence link](http://doc.gooddoctor.local/display/TECH/UTM+generator+tools)
