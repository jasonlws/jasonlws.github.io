---
title: REST Security Cheat Sheet - HTTP Return Code
date: 2023-10-20 00:00:00 -0500
last_modified_at : 2023-10-20 00:00:00 -0500
categories: [REST Security]
tags: [REST, Cheat Sheet, Security ]
pin: true
math: false
mermaid: false
feature_image: /public/images/2023-10-20-rest-security-http-return-code/1-status-code.jpg
img_path: /public/images/2023-10-20-rest-security-http-return-code
style: sheet
---

![1-status-code](1-status-code.jpg)

## Why HTTP status code is important for REST API

HTTP status codes play a critical role in REST API as they provide a way for the server to communicate the outcome of an API request to the client. When designing REST API, don't just use 200 for success or 404 for error. Always use the semantically appropriate status code for the response. Let's take a look at some ways HTTP status codes are important to REST-based APIs.

- **Consistent communication standards**
  
    When designing REST-based APIs, consider the significance of HTTP status codes. They offer a universal method for servers to communicate response status to clients. Using codes like 200 (OK) and 404 (Not Found) ensures cross-language compatibility, a key advantage of REST-based architecture.

- **Clarity in requests outcomes**
  
    HTTP status codes offer immediate clarity to clients without the need to inspect the response body. Clients rely on these codes to determine the request's success or failure.
    API providers benefit from using standard HTTP status codes and should avoid creating custom ones. For instance, a new resource creation should return 201, not 200, to ensure precision in client expectations.
    By using the right status codes, clients can confidently understand the request outcome and streamline their implementations.

- **Troubleshooting made easy**
  
    HTTP status codes simplify API troubleshooting. For instance, some dashboard allows filtering requests by status codes, making it easy to identify issues, excluding 300 status codes.
    Clients can swiftly pinpoint the problem source; for example, encountering a 400 status code signals a client-side issue, triggering appropriate error handling.

- **Uniform error handling**
  
    HTTP status codes offer a uniform approach for handling errors and exceptions. For instance, when a client encounters a 404 status code, it gracefully manages the situation, like redirecting or displaying an error message.
    Clients can rely on status codes, avoiding the need for distinct error handling for each API they consume.

- **API security**
  
    HTTP status codes enhance API security. A 401 or 403 status code signifies the lack of permission to access a resource, safeguarding sensitive data and thwarting security risks.

- **Indicate progress**
  
    HTTP status codes can track lengthy operations, like file uploads. A 202 code signifies request receipt and processing, while a 200 code marks completion.

## REST Specific HTTP Status Code

Here is a non-exhaustive selection of security related REST API status codes. Use it to ensure you return the correct code.

| Code | Message | Description |
| :--- | :--- | :--- |
| 200 | OK | Response to a successful REST API action. The HTTP method can be GET, POST, PUT, PATCH or DELETE. |
| 201 | Created | The request has been fulfilled and resource created. A URI for the created resource is returned in the Location header. |
| 202 | Accepted | The request has been accepted for processing, but processing is not yet complete. |
| 204 | No Content | Usually sent out in response to a PUT, POST, or DELETE request when the REST API declines to send back any status message or representation in the response message’s body. |
| 301 | Moved Permanently | Permanent redirection. |
| 302 | Found | A common way of performing URL redirection. |
| 304 | Not Modified | Caching related response that returned when the client has the same copy of the resource as the server. |
| 307 | Temporary Redirect | Temporary redirection of resource. |
| 400 | Bad Request | The request is malformed, such as message body format error. |
| 401 | Unauthorized | Wrong or no authentication ID/password provided. |
| 403 | Forbidden | It's used when the authentication succeeded but authenticated user doesn't have permission to the request resource. |
| 404 | Not Found | When a non-existent resource is requested. |
| 405 | Method Not Acceptable | The error for an unexpected HTTP method. For example, the REST API is expecting HTTP GET, but HTTP PUT is used. |
| 406 | Unacceptable | The client presented a content type in the Accept header which is not supported by the server API. |
| 412 | Precondition Failed | The client specified one or more preconditions in its request headers, effectively telling the REST API to carry out its request only if certain conditions were met. |
| 413 | Payload too large | Use it to signal that the request size exceeded the given limit e.g. regarding file uploads. |
| 415 | Unsupported Media Type | The requested content type is not supported by the REST service. |
| 429 | Too Many Requests | The error is used when there may be DOS attack detected or the request is rejected due to rate limiting. |
| 500 | Internal Server Error | An unexpected condition prevented the server from fulfilling the request. Be aware that the response should not reveal internal information that helps an attacker, e.g. detailed error messages or stack traces. |
| 501 | Not Implemented | The REST service does not implement the requested operation yet. |
| 503 | Service Unavailable	| The REST service is temporarily unable to process the request. Used to inform the client it should retry at a later time. |

## Common Mistakes

1. **Wrong status code** - One common mistake is using the wrong HTTP status code, like responding with a 200 OK for an error or a 404 Not Found for a successful request.

2. **Insufficient information** - Another common mistake is providing insufficient information in the response body. The status code offers a summary, but the response body should contain more detailed results.

3. **Using non-standard status codes** - While using non-standard HTTP status codes is possible, it can lead to compatibility issues and confusion for clients. To ensure broad client compatibility, it's best to stick with standard HTTP status codes.

4. **Not updating the documentation** - Maintain current and precise API documentation, including HTTP status codes info. Failing to update updates can cause client confusion and misunderstandings.

5. **Not testing thoroughly** - Testing HTTP status codes in your REST API is crucial. Thoroughly validate your implementation with both automated and manual testing for accuracy and reliability.

## Best Practices

1. **Use Standard HTTP Status Codes** - Prefer standard HTTP status codes for a consistent user experience. Custom codes can confuse users and hinder issue diagnosis.

2. **Be Consistent** - Consistent use of HTTP status codes ensures clear client understanding for a meaningful user experience.

3. **Use Appropriate Status Codes** - Select the right HTTP status code for each response. For success, go with 200 OK, for resource creation, use 201 Created, and for bad requests, opt for 400 Bad Request.

4. **Provide Detailed Error Information** - When using an error status code, offer detailed error info for client troubleshooting. Include a descriptive message, API docs reference, and relevant error codes.

5. **Avoid Overloading Status Codes** - Avoid overloading a single status code to mean different things in different contexts. It causes confusion and hinders issue diagnosis.

6. **Document the API** - Document the API, including the HTTP status codes used and their meanings, to help ensure that the API is well understood by developers.

## More

### List of HTTP status code

All HTTP response status codes are separated into five classes or categories. The first digit of the status code defines the class of response, while the last two digits do not have any classifying or categorization role. There are five classes defined by the standard:

- [1XX informational response](#1xx-information-response) – the request was received, continuing process
- [2XX successful](#2xx-successful) – the request was successfully received, understood, and accepted
- [3XX redirection](#3xx-redirection) – further action needs to be taken in order to complete the request
- [4XX client error](#4xx-client-errors) – the request contains bad syntax or cannot be fulfilled
- [5XX server error](#5xx-server-errors) – the server failed to fulfil an apparently valid request

#### 1XX information response

| Code | Message | Description |
| :--- | :--- | :--- |
| 100 | Continue | The server has received the request headers and the client should proceed to send the request body (in the case of a request for which a body needs to be sent; for example, a POST request). Sending a large request body to a server after a request has been rejected for inappropriate headers would be inefficient. To have a server check the request's headers, a client must send Expect: 100-continue as a header in its initial request and receive a 100 Continue status code in response before sending the body. If the client receives an error code such as 403 (Forbidden) or 405 (Method Not Allowed) then it should not send the request's body. The response 417 Expectation Failed indicates that the request should be repeated without the Expect header as it indicates that the server does not support expectations (this is the case, for example, of HTTP/1.0 servers). |
| 101 | Switching Protocols | The requester has asked the server to switch protocols and the server has agreed to do so. |
| 102 | Processing (WebDAV; RFC 2518) | A WebDAV request may contain many sub-requests involving file operations, requiring a long time to complete the request. This code indicates that the server has received and is processing the request, but no response is available yet.[3] This prevents the client from timing out and assuming the request was lost. The status code is deprecated. |
| 103 | Early Hints (RFC 8297) | Used to return some response headers before final HTTP message. |

## 2XX successful

| Code | Message | Description |
| :--- | :--- | :--- |
| 200 | OK | Indicates that the request has succeeded. |
| 201 | Created| Indicates that the request has succeeded and a new resource has been created as a result. |
| 202 | Accepted| Indicates that the request has been received but not completed yet. It is typically used in log running requests and batch processing. |
| 203 | Non-Authoritative Information| Indicates that the returned metainformation in the entity-header is not the definitive set as available from the origin server, but is gathered from a local or a third-party copy. The set presented MAY be a subset or superset of the original version. |
| 204 | No Content| The server has fulfilled the request but does not need to return a response body. The server may return the updated meta information. |
| 205 | Reset Content| Indicates the client to reset the document which sent this request. |
| 206 | Partial Content| It is used when the Range header is sent from the client to request only part of a resource. |
| 207 | Multi-Status (WebDAV)| An indicator to a client that multiple operations happened, and that the status for each operation can be found in the body of the response. |
| 208 | Already Reported (WebDAV)| Allows a client to tell the server that the same resource (with the same binding) was mentioned earlier. It never appears as a true HTTP response code in the status line, and only appears in bodies. |
| 226 | IM Used| The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance. |

## 3XX redirection

| Code | Message | Description |
| :--- | :--- | :--- |
| 300 | Multiple Choices | The request has more than one possible response. The user-agent or user should choose one of them. |
| 301 | Moved Permanently | The URL of the requested resource has been changed permanently. The new URL is given by the Location header field in the response. This response is cacheable unless indicated otherwise. |
| 302 | Found | The URL of the requested resource has been changed temporarily. The new URL is given by the Location field in the response. This response is only cacheable if indicated by a Cache-Control or Expires header field. |
| 303 | See Other | The response can be found under a different URI and SHOULD be retrieved using a GET method on that resource. |
| 304 | Not Modified | Indicates the client that the response has not been modified, so the client can continue to use the same cached version of the response. |
| 305 | Use Proxy (Deprecated) | Indicates that a requested response must be accessed by a proxy. |
| 306 | (Unused) | It is a reserved status code and is not used anymore. |
| 307 | Temporary Redirect | Indicates the client to get the requested resource at another URI with same method that was used in the prior request. It is similar to 302 Found with one exception that the same HTTP method will be used that was used in the prior request. |
| 308 | Permanent Redirect (experimental) | Indicates that the resource is now permanently located at another URI, specified by the Location header. It is similar to 301 Moved Permanently with one exception that the same HTTP method will be used that was used in the prior request. |

## 4XX client errors

| Code | Message | Description |
| :--- | :--- | :--- |
| 400 | Bad Request | The request could not be understood by the server due to incorrect syntax. The client SHOULD NOT repeat the request without modifications. |
| 401 | Unauthorized | Indicates that the request requires user authentication information. The client MAY repeat the request with a suitable Authorization header field |
| 402 | Payment Required (Experimental) | Reserved for future use. It is aimed for using in the digital payment systems. |
| 403 | Forbidden | Unauthorized request. The client does not have access rights to the content. Unlike 401, the client’s identity is known to the server. |
| 404 | Not Found | The server can not find the requested resource. |
| 405 | Method Not Allowed | The request HTTP method is known by the server but has been disabled and cannot be used for that resource. |
| 406 | Not Acceptable | The server doesn’t find any content that conforms to the criteria given by the user agent in the Accept header sent in the request. |
| 407 | Proxy Authentication Required | Indicates that the client must first authenticate itself with the proxy. |
| 408 | Request Timeout | Indicates that the server did not receive a complete request from the client within the server’s allotted timeout period. |
| 409 | Conflict | The request could not be completed due to a conflict with the current state of the resource. |
| 410 | Gone | The requested resource is no longer available at the server. |
| 411 | Length Required | The server refuses to accept the request without a defined Content- Length. The client MAY repeat the request if it adds a valid Content-Length header field. |
| 412 | Precondition Failed | The client has indicated preconditions in its headers which the server does not meet. |
| 413 | Request Entity Too Large | Request entity is larger than limits defined by server. |
| 414 | Request-URI Too Long | The URI requested by the client is longer than the server can interpret. |
| 415 | Unsupported Media Type | The media-type in Content-type of the request is not supported by the server. |
| 416 | Requested Range Not Satisfiable | The range specified by the Range header field in the request can’t be fulfilled. |
| 417 | Expectation Failed | The expectation indicated by the Expect request header field can’t be met by the server. |
| 418 | I’m a teapot (RFC 2324) | It was defined as April’s lool joke and is not expected to be implemented by actual HTTP servers. (RFC 2324) |
| 420 | Enhance Your Calm (Twitter) | Returned by the Twitter Search and Trends API when the client is being rate limited. |
| 422 | Unprocessable Entity (WebDAV) | The server understands the content type and syntax of the request entity, but still server is unable to process the request for some reason. |
| 423 | Locked (WebDAV) | The resource that is being accessed is locked. |
| 424 | Failed Dependency (WebDAV) | The request failed due to failure of a previous request. |
| 425 | Too Early (WebDAV) | Indicates that the server is unwilling to risk processing a request that might be replayed. |
| 426 | Upgrade Required | The server refuses to perform the request. The server will process the request after the client upgrades to a different protocol. |
| 428 | Precondition Required | The origin server requires the request to be conditional. |
| 429 | Too Many Requests | The user has sent too many requests in a given amount of time (“rate limiting”). |
| 431 | Request Header Fields Too Large | The server is unwilling to process the request because its header fields are too large. |
| 444 | No Response (Nginx) | The Nginx server returns no information to the client and closes the connection. |
| 449 | Retry With (Microsoft) | The request should be retried after performing the appropriate action. |
| 450 | Blocked by Windows Parental Controls (Microsoft) | Windows Parental Controls are turned on and are blocking access to the given webpage. |
| 451 | Unavailable For Legal Reasons | The user-agent requested a resource that cannot legally be provided. |
| 499 | Client Closed Request (Nginx) | The connection is closed by the client while HTTP server is processing its request, making the server unable to send the HTTP header back. |

## 5XX server errors

| Code | Message | Description |
| :--- | :--- | :--- |
| 500 | Internal Server Error | The server encountered an unexpected condition that prevented it from fulfilling the request. |
| 501 | Not Implemented | The HTTP method is not supported by the server and cannot be handled. |
| 502 | Bad Gateway | The server got an invalid response while working as a gateway to get the response needed to handle the request.
| 503 | Service Unavailable | The server is not ready to handle the request. |
| 504 | Gateway Timeout | The server is acting as a gateway and cannot get a response in time for a request. |
| 505 | HTTP Version Not Supported (Experimental) | The HTTP version used in the request is not supported by the server. |
| 506 | Variant Also Negotiates (Experimental) | Indicates that the server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper endpoint in the negotiation process. |
| 507 | Insufficient Storage (WebDAV) | The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request. |
| 508 | Loop Detected (WebDAV) | The server detected an infinite loop while processing the request. |
| 510 | Not Extended | Further extensions to the request are required for the server to fulfill it. |
| 511 | Network Authentication Required | Indicates that the client needs to authenticate to gain network access. |

## References

- [List of HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
- [REST API Tutorial - HTTP STatus Code](https://restfulapi.net/http-status-codes/)
- [REST Security Cheat Sheet - HTTP Return Code](https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html#http-return-code)
- [HTTP status codes 101: A guide implementing status codes in REST APIs](https://www.torocloud.com/blog/http-status-codes-101-a-guide-implementing-status-codes-in-rest-apis)

## About Myself

Please reach out to connect with me via [**Linkedin**](https://www.linkedin.com/in/jasonlws).