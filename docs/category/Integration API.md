---
id: integration-api
title: "Merchant Integration Guide"
sidebar_label: "Integration API"
---


This document is to define the requirement and provide the information to
perform merchant integration to Good Doctor Health Mall.

## **A. Merchant Information**

To begin the order with the merchant integration, below are the following
information we need to create and gather first:

- sellerId
- partnerId
- key
- sdk

  - Java
  - PHP

- Environment
  - Development End Point URL:
    - <http://openapi.dev.id.pajkdc.com/api/v1/>
  - Test End Point URL:
    - <https://openapi.test.gooddoctor.co.id/api/v1/>
  - Production End Point URL:
    - <https://openapi.gooddoctor.co.id/api/v1/>

Merchant requires to provide the following information to Good Doctor:

- Merchant IP address to be whitelist
- Merchant API and URL for sending the order from Good Doctor to Merchant&#39;s
  system

## **B. Place Order**

The customer order is being sent to the pharmacy or merchant for processing.
Below is the flow diagram of the ordering process.

![image](/integration_api/image004.png) _Figure 1: Place Order_

### **1. Push Order**

- Documentation :
  <http://www.test.gdtidtool.com/titania/#/apiDoc/doc/shennongLogistics/orderPush?apiId=6bab941dfee39bc7844b7aff6df0d6c1%23TEST&apiName=%2FshennongLogistics%2ForderPush&unpublished=false>
- Method : POST
- Content-type : text/plain (json format)
- Parameters :

| No.             | Parameter Name | Type         | Description |
| --------------- | -------------- | ------------ | ----------- |
| 1. sellerId     | Number         | Vendor ID    |
| 2. traded       | String         | Order Number |
| 3. status       | String         | Status       |
| 4. modifiedTime | String         | Update Time  |

- Push Order response example:

      {
        "resultCode":1,
        "resultMsg":"success"
      }

* The status will be set **WAITING_ACCEPT**.
* For error / failed reponse give resultCode beside
* The Push Order will retry for five (5) times at the interval of one (1) minute
  if the push order is unsuccessful. After five (5) times retry and still
  unsuccessful, the system will automatically update the order status to
  REFUNDED.

### **2. Query Order**

- Documentation :
  <http://www.test.gdtidtool.com/titania/#/apiDoc/doc/shennong/queryOrder?apiId=993753987fe57cb9ea3b4df8c085bc93%23TEST&apiName=%2Fshennong%2FqueryOrder&unpublished=false>
- After received the tradeId through pushOrder API. Call the queryOrder API to
  get transaction details.
- API class : /shennong/queryOrder
- Sample source code :

#### Java

    String key = "0031ae2efaacd0fe644580de630f9d13";
    String partnerId = "partner_test_01";

    QueryOrderRequest request= new QueryOrderRequest();
    request.setSellerId(sellerId);
    request.setTradeId(tradeId);

    JkClient jkClient= new JkClient(partnerId, key, QueryEnv.TEST);

    QueryOrderResult result= jkClient.execute(request);
    System.out.print(result);

#### PHP

    $key = "0031ae2efaacd0fe644580de630f9d13";
    $partnerId = "partner_test_01";
    $env = new QueryEnv();

    $client = new JkClient($partnerId,$key,$env.getTest());
    $request = new QueryOrderRequest();
    $request.setSellerId("21319590608");
    $request.setTradeId("1302330200");

    $result = $client.execute($request);
    var_dump($result);

**Response Example**

      }
        "success":true,
        "resultCode":0,
        "model":{
            "modifiedTime":"2019-10-25 16:53:01",
            "payTime":"2019-10-25 16:48:30",
            "actualCash":3990000,
            "payments":[
              {
                  "amount":1900000,
                  "deductFee":0,
                  "extTradeTime":"2019-10-25 16:48:27",
                  "method":"CASH",
                  "promRefCode":null,
                  "extTransFlow":"2014112600001000190000306139",
                  "payChannel":"PINGAN_PAY",
                  "platformRatio":null,
                  "payFor":"ITEM",
                  "skuId":"911911888728780",
                  "settleNo":"PAJKT000007247768"
              },
              {
                  "amount":190000,
                  "deductFee":0,
                  "extTradeTime":"2019-10-25 16:48:27",
                  "method":"CASH",
                  "promRefCode":null,
                  "extTransFlow":"2014112600001000190000306139",
                  "payChannel":"PINGAN_PAY",
                  "platformRatio":null,
                  "payFor":"TAX",
                  "skuId":"911911888728780",
                  "settleNo":"PAJKT000007247768"
              },
              {
                  "amount":1900000,
                  "deductFee":0,
                  "extTradeTime":"2019-10-25 16:48:27",
                  "method":"CASH",
                  "promRefCode":null,
                  "extTransFlow":"2014112600001000190000306139",
                  "payChannel":"PINGAN_PAY",
                  "platformRatio":null,
                  "payFor":"FREIGHT_CHARGE",
                  "skuId":null,
                  "settleNo":"PAJKT000007247768"
              }
            ],
            "invoiceToType":"INVOICE_TO_SELLER",
            "logistics":{
              "area":"Setia Budi",
              "address":"Lingkar Mega Kuningan No.1, RT.5/RW.2, Kuningan, Kuningan Tim., Setia Budi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950, IndonesiaWeWork Noble House",
              "mobilePhone":"+6285274705970",
              "city":"Kota Jakarta Selatan",
              "latitude":-6.2280433,
              "fullName":"aulia r.",
              "prov":"Daerah Khusus Ibukota Jakarta",
              "longitude":106.8253807
            },
            "buyerRemark":null,
            "subBizType":"HEALTH_PRES",
            "sellerId":2238150617270708,
            "logisticsMode":"UNKNOWN",
            "createdTime":"2019-10-25 16:48:17",
            "o2oBizType":"normal",
            "riderVerifyCode":null,
            "origLogisticsFee":1900000,
            "payMode":"PAY_ONLINE",
            "storeId":200001920308,
            "props":{
              "LOGISTICS_INFO":"{}",
              "SYSTEM_ORDER_CANCEL":"{\"reason\":\"平安系统异常:错误\",\"nullifier\":\"system\"}"
            },
            "sellerRemark":null,
            "payToType":"PAY_TO_PLATFORM",
            "logisticsFee":1900000,
            "invoice":null,
            "items":[
              {
                  "buyCount":1,
                  "refundCount":0,
                  "origPrice":1900000,
                  "spuId":30425216,
                  "sellPrice":1900000,
                  "settlementPrice":0,
                  "outSkuId":"1",
                  "rebateRatio":null,
                  "title":"⠀ Panadol",
                  "skuId":911911888728780
              }
            ],
            "tradeId":"112047900103",
            "outStoreId":"Test",
            "status":"CANCEL"
        },
        "resultMsg":"成功"
      }

### **3. Confirm Order**

- Documentation :
  <http://www.test.gdtidtool.com/titania/#/apiDoc/doc/shennong/sellerConfirmOrder?apiId=54f5bbb472e2474b54d78283184b40fc%23TEST&apiName=%2Fshennong%2FsellerConfirmOrder&unpublished=false>
- This API for confirm that order
- API class : /shennong/sellerConfirmOrder
- Sample source code :

#### Java

    SellerConfirmOrderRequest request = new SellerConfirmOrderRequest();
    request.setSellerId(sellerId);

    request.setStoreId(storeId);
    request.setTradeId(tradeId);
    request.setOutStoreId(outStoreId);

    JkClient jkClient = new JkClient(partnerId, key, QueryEnv.TEST);
    SellerConfirmOrderResult result = jkClient.execute(request);
    System.out.print(result);

#### PHP

    $key = "0031ae2efaacd0fe644580de630f9d13";
    $partnerId = "partner_test_01";
    $env = new QueryEnv();
    $client = new JkClient($partnerId,$key,$env.getTest());

    $request = new SellerConfirmOrderRequest();
    $request.setSellerId("21319590608");
    $request.setStoreId("1302330200");
    $request.setTradeId("21319590608");
    $request.setOutStoreId("1302330200");

    $result = $client.execute($request);
    var_dump($result);

**Response Example :**

{ "resultCode": 0, "resultMsg": "Success" }

### **4. Cancel Order**

- Documentation :
  <http://www.test.gdtidtool.com/titania/#/apiDoc/doc/shennong/cancelOrder?apiId=d8d471685615b74b9ec36a2f20b88cc9%23TEST&apiName=%2Fshennong%2FcancelOrder&unpublished=false>
- This API is to cancel the order received through the push order.
- API class : /shennong/logistics.cancelOrder
- Reason Code & Reason
  - 101 Users request cancellation
  - 102 The item has been sold out
  - 103 The store is closed
  - 104 The address is out of range
  - 105 Can't contact the user
  - 106 Repeat Orders
  - 107 Wrong commodity
  - 108 fail to fail to pull a prescription
  - 999 Other reasons
- Sample source code :

#### Java

    CancelOrderRequest request = new CancelOrderRequest();
    request.setSellerId(sellerId);

    request.setStoreId(storeId);
    request.setTradeId(tradeId);
    request.setOutStoreId(outStoreId);
    request.setReason(reason);
    request.setReasonCode(reasonCode);

    JkClient jkClient = new JkClient(partnerId, key, QueryEnv.TEST);
    CancelOrderResult result = jkClient.execute(request);
    System.out.print(result);

#### PHP

    $key = "0031ae2efaacd0fe644580de630f9d13";
    $partnerId = "partner_test_01";
    $env = new QueryEnv();
    $request = new CancelOrderRequest();

    $request.setSellerId("21319590608");
    $request.setTradeId("9707270200");
    $request.setCancelMsg("user cancels order");

    $client = new JkClient($partnerId,$key,$env.getTest());
    $result = $client.execute($request);
    var_dump($result);

**Response Example :**

    {
    "resultCode": 0,
    "resultMsg": "Success"
    }

### **5. Find SKU ID by Merchant SKU ID**

- This API for collect data SKU ID from GDT with parameter SKU ID from merchant
- API class : /shennong/findSkuIdBySellerIdAndOuterId_prod
- Sample code

#### Java

    final String key_b2c = "0031ae2efaacd0fe644580de630f9d13";
    final String partnerId_b2c = "partner_test_01";
    final Long sellerId_b2c = 21319590608L;

    JkClient jkClient = new JkClient(partnerId_b2c, key_b2c, QueryEnv.TEST);
    FindSkuIdBySellerIdAndOuterIdRequest request = new FindSkuIdBySellerIdAndOuterIdRequest();

    request.setSellerId(21319590608L);
    List<String> list = new LinkedList<>();
    list.add("i8888");
    request.setSkuOuterIds(list);

    FindSkuIdBySellerIdAndOuterIdResult result = jkClient.execute(request);
    System.out.println(result);

#### PHP

    $key = "0031ae2efaacd0fe644580de630f9d13";
    $partnerId = "partner_test_01";
    $outerSkuIds = array("i8888","12344");

    $env = new QueryEnv();
    $client = new JkClient($partnerId,$key,$env.getTest());
    $request = new FindSkuIdBySellerIdAndOuterIdRequest();
    $request.setSellerId("21319590608");
    $request.setSkuOuterIds($outerSkuIds);

    $result = $client.execute($request);
    var_dump($result);

**Response Example :**

    {
    "resultMsg": "success",
    "model": [{
        "spuOuterId": null,
        "skuId": 911911888658578,
        "spuId": 20368918,
        "skuOuterId": "i8888"
    }],

    "resultCode": Ok
    }

### **6. Update Stock**

The diagram below is the update stock process flow.

![image](/integration_api/image005.png)

- Documentation :
  <http://www.test.gdtidtool.com/titania/#/apiDoc/doc/shennong/setSkuStoreStocks?apiId=d5e2266a5491e613ec0ebcab4808f8dd%23TEST&apiName=%2Fshennong%2FsetSkuStoreStocks&unpublished=false>
- This API for update stock (not accumulate, get total) in level store, max. 50
  rows per batch
- API class : /shennong/setSkuStoreStocks_prod
- Sample source code :

#### Java

    Long skuId1= 911911888658578L;
    Long skuId2= 911911888619922L;

    JkClient jkClient = new JkClient(partnerId, key, QueryEnv.TEST);
    SetSkuStoreStocksRequest request = new SetSkuStoreStocksRequest();
    request.setSellerId(sellerId);
    request.setStoreId(storeId);

    SetSkuStoreStocksParam param1 = new SetSkuStoreStocksParam();
    param1.setSkuId(skuId1);
    param1.setStockNum(578);

    SetSkuStoreStocksParam param2 = new SetSkuStoreStocksParam();
    param2.setSkuId(skuId2);
    param2.setStockNum(603);

    List<SetSkuStoreStocksParam> list = new LinkedList<>();
    list.add(param1);
    list.add(param2);
    request.setSkuStoreStockList(list);

    SetSkuStoreStocksResult result = jkClient.execute(request);
    System.out.println("output:"+result);

#### PHP

    $item1=array("skuId"=>"911911888658578", "stockNum"=>123);
    $item2=array("skuId"=>"911911888619922", "stockNum"=>456);
    $items=array($item1, $item2);

    $env = new QueryEnv();
    $client = new JkClient($partnerId,$key,$env.getTest());

    $request = new SetSkuStoreStocksRequest();
    $request.setSellerId("21319590608");
    $request.setStoreId("21329280606");
    $request.setSkuStoreStockList($items);

    $result =$client.execute($request);
    Var_dump($result);

**Response Example :**

    {
    "resultMsg": "success",
    "model": [],
    "resultCode": 0
    }

### **7. Update Price**

The diagram below is the update price process flow.
![image](/integration_api/image006.png)

- Documentation :
  <http://www.test.gdtidtool.com/titania/#/apiDoc/doc/shennong/updateSku?apiId=7d5820328410c557045842c1ba63a9db%23TEST&apiName=%2Fshennong%2FupdateSku&unpublished=false>
- This API for update original price
- API class : /shennong/updateSku
- Sample source code :

#### Java

    final String key_b2c = "0031ae2efaacd0fe644580de630f9d13";
    final String partnerId_b2c = "partner_test_01";
    final Long sellerId_b2c = 21319590608L;

    JkClient jkClient = new JkClient(partnerId_b2c, key_b2c, QueryEnv.TEST);
    UpdateSkuRequest request = new UpdateSkuRequest();

    request.setSellerId(sellerId_b2c);
    request.setId(911911888701971L);
    request.setPrice(RandomUtils.nextLong(1000,999999L));
    //request.setOrigPrice(request.getPrice()+RandomUtils.nextLong(10000,999999L));
    //note the original price must be larger than sales price，otherwise error exists

    VoidResult result = jkClient.execute(request);
    logger.info("{}",result);
    Assert.assertTrue(result.isSuccess());

#### PHP

    $key = "0031ae2efaacd0fe644580de630f9d13";
    $partnerId = "yaofang_test_01";
    $env = new QueryEnv();
    $client = new JkClient($partnerId,$key,$env.getTest());
    $request = new UpdateSkuRequest();

    $request.setSellerId("2238150617270708");
    $request.setId("911911888728829");
    $request.setPrice("210000");
    $request.setOrigPrice("210000");

    $result =$client.execute($request);
    var_dump($result);

**Response Example :**

    {
    "resultMsg": "success",
    "model": [],
    "resultCode": 0
    }

### **8. List SKU**

- Documentation :
  <http://www.test.gdtidtool.com/titania/#/apiDoc/doc/shennong/listSku_prod?apiId=de594726855da2c3cda54afe560a5a01%23TEST&apiName=%2Fshennong%2FlistSku_prod&unpublished=false>
- This API for enable SKU
- API class : /shennong/ listSku_prod
- Sample source code :

#### Java

    JkClient jkClient = new JkClient(partnerId, key, QueryEnv.TEST);

    ListSkuRequest request = new ListSkuRequest();
    request.setSellerId(21319590608L);
    request.setSkuId(911911888658578L);

    ListSkuResult result = jkClient.execute(request);
    System.out.println(result);

#### PHP

    $key = "0031ae2efaacd0fe644580de630f9d13";
    $partnerId = "yaofang_test_01";
    $env = new QueryEnv();
    $client = new JkClient($partnerId,$key,$env.getTest());

    $request = new ListSkuRequest();
    $request.setSellerId("21319590608");
    $request.setSkuId("911911888658578");

    $result =$client.execute($request);
    var_dump($result);

**Response Example :**

    {
    "model":{},
    "resultCode":0,
    "resultMsg":"success"
    }

### **9. Delist SKU**

- Documentation :
  <http://www.test.gdtidtool.com/titania/#/apiDoc/doc/shennong/delistSku_prod?apiId=de923710d7abda5083a361f8b11ed7b2%23TEST&apiName=%2Fshennong%2FdelistSku_prod&unpublished=false>
- This API for disable SKU
- API class : /shennong/delistSku_prod
- Sample source code :

#### Java

    JkClient jkClient = new JkClient(partnerId, key, QueryEnv.TEST);

    DelistSkuRequest request = new DelistSkuRequest();
    request.setSellerId(21319590608L);
    request.setSkuId(911911888658578L);

    DelistSkuResult result = jkClient.execute(request);
    System.out.println(result);

#### PHP

    $key = "0031ae2efaacd0fe644580de630f9d13";
    $partnerId = "yaofang_test_01";
    $env = new QueryEnv();
    $client = new JkClient($partnerId,$key,$env.getTest());

    $request = new DelistSkuRequest();
    $request.setSellerId("21319590608");
    $request.setSkuId("911911888658578");

    $result =$client.execute($request);
    var_dump($result);

**Response Example :**

{ "model":{}, "resultCode":0, "resultMsg":"success" }

### **10. Update Store Business Hours**

- Documentation :
  <http://www.test.gdtidtool.com/titania/#/apiDoc/doc/shennong/updateStoreBusinessHours?apiId=012e23eac70bdb5a53516da927b27a82%23TEST&apiName=%2Fshennong%2FupdateStoreBusinessHours&unpublished=false>
- This API for update store opening and closing hours
- API class : /shennong/updateStoreBusinessHours
- Sample source code :

#### Java

    JkClient jkClient = new JkClient(partnerId, key, QueryEnv.TEST);

    UpdateStoreStatusRequest request = new UpdateStoreStatusRequest();
    request.setSellerId(2523760705L);
    request.setStoreReferId("QMY0001123123");
    request.setStatus("close");

    UpdateStoreStatusResult result = jkClient.execute(request);
    System.out.print(result);

#### PHP

    $key = "0031ae2efaacd0fe644580de630f9d13";
    $partnerId = "yaofang_test_01";
    $env = new QueryEnv();
    $client = new JkClient($partnerId,$key,$env.getTest());

    $request = new UpdateStoreBusinessHoursRequest();
    $request.setSellerId("2523760705");
    $request.setStoreReferId("QMY0001123123");
    $request.setOpenTime("09:01");
    $request.setCloseTime("20:50");

    $result = $client.execute($request);
    var_dump($result);

**Response Example :**

    {
    "model":{},
    "resultCode":0,
    "resultMsg":"success"
    }
