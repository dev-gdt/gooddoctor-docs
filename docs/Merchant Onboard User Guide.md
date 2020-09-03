---
id: merchant-onboard-user-guide
title: Merchant Onboard User Guide
sidebar_label: "Merchant Onboard User Guide"
---

## 1. Create Seller and initialize goods

### 1. The whole work flow

The word in italics at the bottom of each rectangle indicates the menu path of
the &quot;optimus&quot; system.

![image](/merchant_onboard_user_guide/image001.png)

### 2. Merchant/seller&#39;s operator

PAGD operator give the excel template to merchant/seller to fill in, these
templates are :

1. spu_Optimus.xlsx : SPU and SKU excel template for the seller.
2. store-import.xlsx : Store info excel template for the seller.

## 2. Give API permission

1. Ask to the PAGD Engineer for the partner id and key for that vendor.
2. On Optimus : Combine the partner id with the vendor id/seller id.
3. in &quot;Configuration&quot; > &quot;All Configuration&quot;, create a new
   configuration:Primary key = sellerid, **Document Text = partner id** , System
   = all, Channel = openapi, type = boolean, Source = openapi, others should
   leave it empty.

![image](/merchant_onboard_user_guide/image002.png)

a. Ask for the whitelisted ip for merchant to PAGD.

![image](/merchant_onboard_user_guide/image003.png)


![image](/merchant_onboard_user_guide/image004.png)

![image](/merchant_onboard_user_guide/image005.png)

![image](/merchant_onboard_user_guide/image006.png)

![image](/merchant_onboard_user_guide/image007.png)

b. Ask for the authorizing the API function merchant to PAGD.

![image](/merchant_onboard_user_guide/image008.png)

![image](/merchant_onboard_user_guide/image009.png)

![image](/merchant_onboard_user_guide/image010.png)

![image](/merchant_onboard_user_guide/image011.png)

## 3. APIs list

There are 11 APIs will be used for Pharmacy onboarding process :

IP Public

**Staging** Staging Push Order : 149.129.254.219 Staging for openapi :
114.80.247.208
**Test** Staging Push Order : 149.129.226.109

**URL address:** Staging environment: <http://openapi.dev.id.pajkdc.com/api/v1/>
Production environment: <https://openapi.gooddoctor.co.id/api/v1/>

3.1. 3 APIs be used for fulﬁll an order. There are :

3.1.1. sellerConfirmOrder

3.1.2. queryOrder

3.1.3. cancelOrder

3.2. 7 APIs will be used for uploading a SKU. There are :

3.3.1. findBySku

3.3.2. updateSku

3.3.2. findSkuIdBySellerIdAndOuterId

3.3.3. setSkuStorePrices_prod

3.3.4. setSkuStoreStocks_prod

3.3.5. findSkuStoreStocks

3.3.6. listSku

3.3.7. delistSku

3.3. 1 API will be used for Vendor API.

There are :

3.3.1. updateStoreBusinessHours

All the APIs listed above must be granted by GDT Engineer.

This data for our partner :

|     |           | K24                              |                                  |
| --- | --------- | -------------------------------- | -------------------------------- |
| No. | Item      | Staging                          | Production                       |
| 1   | sellerid  | 2238150616780602                 | 2238150616700305                 |
| 2   | partnerid | K24                              | K24                              |
| 3   | key       | 9e1f4c54b61555baf5b95247dce2326b | 0eb6d02621a6870248fb086e459a3b9c |

|     |           | Century                          |                                  |
| --- | --------- | -------------------------------- | -------------------------------- |
| No. | Item      | Staging                          | Production                       |
| 1   | sellerid  | 2238150617240708                 | 2238150616950307                 |
| 2   | partnerid | century                          | century                          |
| 3   | key       | 3423750e491b9b33c4a2f33344f7596b | 0ecf5117e0bd025c0ecc5cbf820b3af1 |

|     |           | Viva                             |                                  |
| --- | --------- | -------------------------------- | -------------------------------- |
| No. | Item      | Staging                          | Production                       |
| 1   | sellerid  | 2238150617350004                 | 2238150625060108                 |
| 2   | partnerid | viva                             | viva                             |
| 3   | key       | 1a70d88f99615acf5c2033757b05c3b9 | c00df9dbc9326dce42394a3f78005284 |

|     |           | Farmaku                          |                                  |
| --- | --------- | -------------------------------- | -------------------------------- |
| No. | Item      | Staging                          | Production                       |
| 1   | sellerid  | 2238150617340907                 | 2238150617210707                 |
| 2   | partnerid | farmaku                          | farmaku                          |
| 3   | key       | 0687b48a37f5c48a29d0ee34bcde4344 | e5ede7829e133223750e9640e45b180a | 
