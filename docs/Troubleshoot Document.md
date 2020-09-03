---
id: troubleshoot
title: "Troubleshooting Guide for Merchant Integration"
sidebar_label: Troubleshoot
---


## A. INTRODUCTION

This Troubleshooting Guide is intended to provide guidance to support personnel
or developers in detecting and investigating issues within the Merchant APIs
integration.

## B. Prerequisites

The prerequisites

- Basic knowledge of Linux command
- VPN Account
- Login to the VPN is required in order to access the server&#39;s logs.

System prerequisites:

- Operating System:

  - MS Windows 8 or MS Windows 10
  - MAC OS X 10.12 – 10.15
  - CentOS Linux 7

- Browser
  - Google Chrome Version 79.0.x.x &amp; above
  - Safari Version 13 &amp; above
  - Firefox Version 72.0.x &amp; above

# C. TROUBLESHOOTING

This section describes the steps to check on the API integration services. Login
to the VPN is required before accessing the services in the following sections.

## 1. Search Services via IP Address

To search for the services server IP address:

1. Enter the following URL in the browser:
   [http://cmdb.gdtidtool.com/nodegroup/index](http://cmdb.gdtidtool.com/nodegroup/index)
2. Enter the service name, for example unifygw
3. Click on the **Search** button to perform the search

![image](/troubleshoot/image002.png) _Figure 1: Unifygw List_

![image](/troubleshoot/image003.png) _Figure 2: Openapi List_

## 2. Check Push Order

Below are the list of server IP addresses for the unifygw:

      1. 142.0.90
      2. 142.1.222
      3. 142.2.228
      4. 142.3.41
      5. 142.3.102
      6. 142.3.110
      7. 142.4.208
      8. 142.4.252
      9. 142.5.46
      10. 142.5.48
      11. 142.5.145

To check the push order log:

1. Enter the following URL
   [http://webtty-rd.gdtidtool.com/?ip=\<xxx.xxx.xxx.xxx](http://webtty-rd.gdtidtool.com/?ip=%3Cxxx.xxx.xxx.xxx)>
   with the unifygw server IP address.

For example:
[http://webtty-rd.gdtidtool.com/?ip=10.142.4.3](http://webtty-rd.gdtidtool.com/?ip=10.142.4.3)

1.  The terminal console will be displayed in the browser.
2.  Go to the log folder by typing "cd logs/unifygw"
3.  To search for the order ID type the following command:

             "more unifygw-message.log | grep \<orderID>" or
             "more unifygw-message.log | grep \<orderID>" or
             "more unifygw-message.log.YYYY-MM-DD.0.gz | grep \<orderID>"
             Replace the \<orderID> with the actual Order Number you want to search

1. If there is no result return after executed the above command, search the
   order ID again in another server IP address.

For example: zmore unifygw-message.log.2020-01-22.0.gz | grep 112307340207

![image](/troubleshoot/image004.png)

## 3. Check Order Confirmation

Below are the list of server IP addresses for the openapi:

      1. 142.2.203
      2. 142.3.12
      3. 142.3.79
      4. 142.3.242
      5. 142.3.247
      6. 142.4.16
      7. 142.4.194
      8. 142.5.31
      9. 142.5.34
      10. 142.5.162

To check for confirmed order:

1.  Enter the following URL
    http://webtty-rd.gdtidtool.com/?ip=xxx.xxx.xxx.xxx with the openapi
    server IP address.

2.  The terminal console will be displayed in the browser.
3.  Go to the log folder by typing "cd logs"
4.  Type the following command to search for the Order ID:

         "more openapi-gateway.log | grep sellerConfirmOrder | grep \<orderID>" or
         "zmore openapi-gateway.log.YYYY-MM-DD.0.gz | grep sellerConfirmOrder | grep \<orderID>"
         _Replace \<orderID> with the order ID you want to search_ _Replace "YYYY-MM-DD" with the date of the order is placed_

1. If there is no result return after executed the above command, search the
   order ID again in another server IP address.

For example: zmore openapi-gateway.log.2020-01-22.0.gz | grep sellerConfirmOrder
| grep 112307340207

![image](/troubleshoot/image005.png)

## 4. Check Logistics

Below are the list of server IP addresses for the ratel sever:

      1. 142.0.191
      2. 142.2.60
      3. 142.2.96
      4. 142.2.242
      5. 142.4.3
      6. 142.5.86

The table below are the type of log files:

| No. | Log File          | Description                                                       |
| --- | ----------------- | ----------------------------------------------------------------- |
| 1.  | ratel-dubbo.log   | The delivery fee information is stored in this log file.          |
| 2.  | ratel-service.log | The creation of the delivery activity is stored in this log file. |
| 3.  | ratel-web.log     | The status of the delivery is stored in this log file.            |

### 5. Check Delivery Fee

To check the delivery fee:

1. Enter the following URL http://webtty-rd.gdtidtool.com/?ip=xxx.xxx.xxx.xxx with the ratel server
   IP address.
2. The terminal console will be displayed in the browser.
3. Go the ratel log folder by typing "cd logs/ratel"
4. Type the following command to search the delivery fee:


      more ratel-dubbo.log | grep \<orderID> more ratel-dubbo-YYYY-MM-DD.0.log |
      grep \<orderID>
      Replace \<orderID> with the order ID you want to search Replace "YYYY-MM-DD" with the date of the order is placed



1. If there is no result return after executed the above command, search the
   order ID again in another server IP address.

For example: more ratel-dubbo-2020-01-22.0.log | grep 112307340207

![image](/troubleshoot/image006.png)

### 6. Check Delivery Status

The delivery status flow starts from ALLOCATING to COMPLETED status as shown in
the figure below.

![image](/troubleshoot/image007.png) _Figure 3: Delivery Status Flow_

To check the delivery status:

1. Enter the following URL http://webtty-rd.gdtidtool.com/?ip=xxx.xxx.xxx.xxx with the ratel server IP address.
2. The terminal console will be displayed in the browser.
3. Go the ratel log folder by typing "cd logs/ratel"
4. Type the following command to search the delivery fee:



      more ratel-web.log | grep \<orderID>
      more ratel-web-YYYY-MM-DD.0.log | grep \<orderID>

5. If there is no result return after executed the above command, search the
    order ID again in another server IP address.

For example, more ratel-web-2020-01-22.0.log | grep 112307340207

Status = "ALLOCATING"

![image](/troubleshoot/image008.png)

Status = "PICKING_UP"

![image](/troubleshoot/image009.png)

Status = "IN_DELIVERY"

![image](/troubleshoot/image010.png)

Status = "COMPLETED"

![image](/troubleshoot/image011.png)

### 7. Check Cancel Order

To check cancel order:





1. Enter the following URL http://webtty-rd.gdtidtool.com/?ip=xxx.xxx.xxx.xxx with the ratel server IP address.
2. The terminal console will be displayed in the browser.
3. Go the ratel log folder by typing "cd logs/ratel"
4. Type the following command to search the cancel order:



      more ratel-service.log | grep cancelLgOrder | grep \<orderID> or more
      ratel-service-YYYY-MM-DD.0.log | grep cancelLgOrder | grep \<orderID>

5. If there is no result return after executed the above command, search the
   order ID again in another server IP address.

more ratel-service-2020-01-22.0.log | grep cancelLgOrder | grep 112308070109

![image](/troubleshoot/image012.png)

## 8. Trade Center

The table below illustrates the change of trade center status.

| No. | Status Changes | Status             | Description     |
| --- | -------------- | ------------------ | --------------- |
| 1.  | Null->1        | TC_TRADE_CREATED   | Trade Created   |
| 2.  | 1->2           | TC_TRADE_PAID      | Trade Paid      |
| 3.  | 2->3           | TC_TRADE_DELIVERED | Trade Delivered |
| 4.  | 3->6           | TC_TRADE_FINISHED  | Trade Finished  |
| 5.  | 1->8           | TC_TRADE_CLOSED    | Trade Closed    |
| 6.  | 2->8           | TC_TRADE_CLOSED    | Trade Closed    |

To check the change of Trade Center status:

1. Enter the following URL http://webtty-rd.gdtidtool.com/?ip=xxx.xxx.xxx.xxx with the tradecenter server IP address.
2. The terminal console will be displayed in the browser.
3. Go the ratel log folder by typing "cd logs/tradecenter"
4. Type the following command to search the delivery fee:




---

      more info.log | grep \<orderID> more info-YYYY-MM-DD.0.log | grep \<orderID>

---

1. If there is no result return after executed the above command, search the
   order ID again in another server IP address.

Status changed: null->1

![image](/troubleshoot/image013.png)

Status changed : 1->2

![image](/troubleshoot/image014.png)

Status changed: 2->6

![image](/troubleshoot/image015.png) 
