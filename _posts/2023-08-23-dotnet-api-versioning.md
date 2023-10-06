---
title: API Versioning in ASP.NET Core 
date: 2023-08-23 00:00:00 -0500
last_modified_at : 2023-08-23 00:00:00 -0500
categories: [DotNet]
tags: [DotNet, API Versioning]
pin: true
math: false
mermaid: false
img_path: /public/images/20230823-dotnetapiversioning/
---

Our API is pretty functional at the moment, but it may evolve in the future, so we might have changes that are not backwards compatible. So we need different API version. 

There are different ways how we can tackle API versioning. There are three most common approaches to versioning API.

- [Query String Versioning](#query-string-versioning) - Might mix with other URL parameters
- [HTTP Header Versioning](#http-header-versioning) - Information may also be part of the Accept HTTP header
- [Media Type Versioning](#media-type-versioning) - The parameters used in media types for content negotiation can contain custom input that can be used to drive API versioning.
- [URL Versioning](#url-versioning) - Separates API versions, but gives up the one URI principle

This article will discuss how you can work with Microsoft's API.NET Core MVC Versioning package to version RESTful API build in ASP.NET Core.

### Create a ASP.NET Core API project in Visual Studio Code

1: Open the integrated terminal.

2: Change directories to the folder that will contain the project folder.

3: Run the following commands:

```console
$ dotnet new webapi -o net-core-api-versioning
$ cd net-core-api-versioning
$ code -r ../net-core-api-versioning
```

4: Trust the HTTPS development certificate by running the following command:

```console
$ dotnet dev-certs https --trust
```

5: The preceding command displays the "Security Warning" diaklog, provided the certificate was not previously trusted. Select Yes to trust the development certificate.

6: Run the following command to start the app on the https profile:

```console
$ dotnet run --launch-profile https
```

7: The output shows messages similar to the following, indicating that the app is running and awaiting requests:

```console
Building...
info: Microsoft.Hosting.Lifetime[14]
      Now listening on: https://localhost:7003
info: Microsoft.Hosting.Lifetime[14]
      Now listening on: http://localhost:5129
info: Microsoft.Hosting.Lifetime[0]
      Application started. Press Ctrl+C to shut down.
info: Microsoft.Hosting.Lifetime[0]
      Hosting environment: Development
info: Microsoft.Hosting.Lifetime[0]
```

### Install ASP.NET Code MVC Versioning package

```console
dotnet add package Microsoft.AspNetCore.Mvc.Versioning
```

### Scaffold a controller

1: If have not install dotnet-aspnet-codegenerator

2: Add NuGet packages required for scaffolding and install the scaffolding engine (dotnet-aspnet-codegenerato) after uninstalling any possible previous version.

```console
$ dotnet add package Microsoft.VisualStudio.Web.CondeGeneration.Design
$ dotnet tool uninstall -g dotnet-aspnet-codegenerator
$ dotnet tool install -g dotnet-aspnet-codegenerator
$ dotnet tool update -g dotnet-aspnet-codegenerator
```

3: Scaffold the ApiVersionController

```console
$ dotnet aspnet-codegenerator controller -name ApiVersionController -async -api -outDir Controllers
```

### Query String Versioning

1: Configure API versioning in Program.cs. `api-version` is the default value of query string parameter, but we can customize this name to `v` as shown below:

```cs
using Microsoft.AspNetCore.Mvc.Versioning;

...

builder.Services.AddApiVersioning(options =>
{
    options.DefaultApiVersion = new Microsoft.AspNetCore.Mvc.ApiVersion(1,0);
    options.AssumeDefaultVersionWhenUnspecified = true;
    options.ApiVersionReader = new QueryStringApiVersionReader("v");
});

...

```
{: file='./Program.cs'}

2: Configure our controller (`ApiVersionController`)

```cs
using Microsoft.AspNetCore.Mvc;

namespace net_core_message_queue_api.Controllers;

[ApiController]
[ApiVersion("1.0")]
[ApiVersion("2.0")]
[Route("api/apiversion")]
public class ApiVersionController : ControllerBase
{

    [HttpGet(Name = "Get")]
    [MapToApiVersion("1.0")]
    public string GetV1()
    {
        return "Version 1.0";
    }

    [HttpGet(Name = "Get")]
    [MapToApiVersion("2.0")]
    public string GetV2()
    {
        return "Version 2.0";
    }
}

```
{: file='./Controllers/ApiVersionController'}

3: Test it via Postman

![Query String Versioning Version 2.0](query-string-versioning-v2.png)
*Query String Versioning Version 2.0*

![Query String Versioning Default Version](query-string-versioning-default.png)
*Query String Versioning Default Version*

### HTTP Header Versioning

1: Configure API versioning in Program.cs. We can customize the value of http header parameter to `v` as shown below:


```cs
using Microsoft.AspNetCore.Mvc.Versioning;

...

builder.Services.AddApiVersioning(options =>
{
    options.DefaultApiVersion = new Microsoft.AspNetCore.Mvc.ApiVersion(1,0);
    options.AssumeDefaultVersionWhenUnspecified = true;
    options.ApiVersionReader = new HeaderApiVersionReader("v");
});

...

```
{: file='./Program.cs'}

2: Configure our controller (`ApiVersionController`)

```cs
using Microsoft.AspNetCore.Mvc;

namespace net_core_message_queue_api.Controllers;

[ApiController]
[ApiVersion("1.0")]
[ApiVersion("2.0")]
[Route("api/apiversion")]
public class ApiVersionController : ControllerBase
{

    [HttpGet(Name = "Get")]
    [MapToApiVersion("1.0")]
    public string GetV1()
    {
        return "Version 1.0";
    }

    [HttpGet(Name = "Get")]
    [MapToApiVersion("2.0")]
    public string GetV2()
    {
        return "Version 2.0";
    }
}

```
{: file='./Controllers/ApiVersionController'}

3: Test it via Postman

![HTTP Header Versioning Version 2.0](http-header-versioning-v2.png)
*HTTP Header Versioning Version 2.0*

![HTTP Header Versioning Default Version](http-header-versioning-default.png)
*HTTP Header Versioning Default Version*

### Media Type Versioning


1: Configure API versioning in Program.cs. We can customize the value of media types parameter to `v` as shown below:


```cs
using Microsoft.AspNetCore.Mvc.Versioning;

...

builder.Services.AddApiVersioning(options =>
{
    options.DefaultApiVersion = new Microsoft.AspNetCore.Mvc.ApiVersion(1,0);
    options.AssumeDefaultVersionWhenUnspecified = true;
    options.ApiVersionReader = new MediaTypeApiVersionReader("v");
});

...

```
{: file='./Program.cs'}

2: Configure our controller (`ApiVersionController`)

```cs
using Microsoft.AspNetCore.Mvc;

namespace net_core_message_queue_api.Controllers;

[ApiController]
[ApiVersion("1.0")]
[ApiVersion("2.0")]
[Route("api/apiversion")]
public class ApiVersionController : ControllerBase
{

    [HttpGet(Name = "Get")]
    [MapToApiVersion("1.0")]
    public string GetV1()
    {
        return "Version 1.0";
    }

    [HttpGet(Name = "Get")]
    [MapToApiVersion("2.0")]
    public string GetV2()
    {
        return "Version 2.0";
    }
}

```
{: file='./Controllers/ApiVersionController'}

3: Test it via Postman

![Media Type Versioning Version 2.0](media-type-versioning-v2.png)
*Media Type Versioning Version 2.0*

![Media Type Versioning Default Version](media-type-versioning-default.png)
*Media Type Versioning Default Version*

### URL Versioning

1: Configure API versioning in Program.cs.

```cs
using Microsoft.AspNetCore.Mvc.Versioning;

...

builder.Services.AddApiVersioning(options =>
{
    options.DefaultApiVersion = new Microsoft.AspNetCore.Mvc.ApiVersion(1,0);
    options.AssumeDefaultVersionWhenUnspecified = true;
    options.ApiVersionReader = new UrlSegmentApiVersionReaders("v");
});

...

```
{: file='./Program.cs'}

2: Configure our controller (`ApiVersionController`)

```cs
using Microsoft.AspNetCore.Mvc;

namespace net_core_message_queue_api.Controllers;

[ApiController]
[ApiVersion("1.0")]
[ApiVersion("2.0")]
[Route("api/v{version:apiVersion}/apiversion")]
public class ApiVersionController : ControllerBase
{

    [HttpGet(Name = "Get")]
    [MapToApiVersion("1.0")]
    public string GetV1()
    {
        return "Version 1.0";
    }

    [HttpGet(Name = "Get")]
    [MapToApiVersion("2.0")]
    public string GetV2()
    {
        return "Version 2.0";
    }
}

```
{: file='./Controllers/ApiVersionController'}

3: Test it via Postman

![Url Versioning Version 1.0](url-versioning-v1.png)
*Url Versioning Version 1.0*

![Url Versioning Version 2.0](url-versioning-v2.png)
*Url Versioning Version 2.0*

### Report the service API version compatibility information in responses

1: Configure API versioning in Program.cs.

```cs
using Microsoft.AspNetCore.Mvc.Versioning;

...

builder.Services.AddApiVersioning(options =>
{
    options.DefaultApiVersion = new Microsoft.AspNetCore.Mvc.ApiVersion(1,0);
    options.AssumeDefaultVersionWhenUnspecified = true;
    options.ReportApiVersions = true;
    ...
});

...

```

3: Test it via Postman

![Report API version compatibility information](report-api-version-information.png)
*Report API version compatibility information*

## About Myself

Please reach out to connect with me via [**Linkedin**](https://www.linkedin.com/in/jasonlws).