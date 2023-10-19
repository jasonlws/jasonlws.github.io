---
title: Scan Images for Known Vulnerabilities - Trivy
date: 2023-10-19 00:00:00 -0500
last_modified_at : 2023-10-19 00:00:00 -0500
categories: [Kubernetes Security]
tags: [k8s, kubernetes, kubernetes security ]
pin: true
math: false
mermaid: false
feature_image: /public/images/2023-10-19-scan-images-for-known-vulnerabilities-trivy/1-trivy.jpg
img_path: /public/images/2023-10-19-scan-images-for-known-vulnerabilities-trivy
style: sheet
---

## About Trivy

Trivy is a comprehensive and versatile security scanner. Trivy has scanners that look for security issues, and targets where it can find those issues.

**Targets (what Trivy can scan)**:

- Container Image
- Filesystem
- Git Repository (remote)
- Virtual Machine Image
- Kubernetes
- AWS

**Scanners (what Trivy can find there)**:

- OS packages and software dependencies in use (SBOM)
- Known vulnerabilities (CVEs)
- IaC issues and misconfigurations
- Sensitive information and secrets
- Software licenses

**Severity Level**

The severity is taken from the selected data source since the severity from vendors is more accurate. Using CVE-2023-0464 as an example, while it is rated as "HIGH" in NVD, Red Hat has marked its 'Impact' as "Low". As a result, Trivy will display it as "Low".

The severity depends on the compile option, the default configuration, etc. NVD doesn't know how the vendor distributes the software. Red Hat evaluates the severity more accurately. That's why Trivy prefers vendor scores over NVD.

If the data source does not provide a severity, the severity is determined based on the CVSS score as follows:

**CVSS v3.0 Ratings**

| Base Score Range | Severity |
| :--- | :--- |
| 0.1-3.9 | Low |
| 4.0-6.9 | Medium |
| 7.0-8.9 | High |
| 9.0-10.0 | Critical |

## Installation

For Debian/Ubuntu (Official)

```bash
sudo apt-get install wget apt-transport-https gnupg lsb-release
wget -qO - https://aquasecurity.github.io/trivy-repo/deb/public.key | gpg --dearmor | sudo tee /usr/share/keyrings/trivy.gpg > /dev/null
echo "deb [signed-by=/usr/share/keyrings/trivy.gpg] https://aquasecurity.github.io/trivy-repo/deb $(lsb_release -sc) main" | sudo tee -a /etc/apt/sources.list.d/trivy.list
sudo apt-get update
sudo apt-get install trivy
```

[Installing Trivy](https://aquasecurity.github.io/trivy/v0.46/getting-started/installation/)

## Example

### Scan

Try to scan my container image from Dockerhub - [jasonlws/alpine-curl:latest](https://hub.docker.com/r/jasonlws/alpine-curl)

Input
```bash
trivy image jasonlws/alpine-curl:latest
```

Output
```bash
2023-10-19T11:05:26.838-0400    INFO    Need to update DB
2023-10-19T11:05:26.838-0400    INFO    DB Repository: ghcr.io/aquasecurity/trivy-db
2023-10-19T11:05:26.839-0400    INFO    Downloading DB...
40.57 MiB / 40.57 MiB [----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------] 100.00% 6.45 MiB p/s 6.5s2023-10-19T11:05:34.225-0400    INFO    Vulnerability scanning is enabled
2023-10-19T11:05:34.226-0400    INFO    Secret scanning is enabled
2023-10-19T11:05:34.226-0400    INFO    If your scanning is slow, please try '--scanners vuln' to disable secret scanning
2023-10-19T11:05:34.226-0400    INFO    Please see also https://aquasecurity.github.io/trivy/v0.46/docs/scanner/secret/#recommendation for faster secret detection
2023-10-19T11:05:36.557-0400    INFO    Detected OS: alpine
2023-10-19T11:05:36.557-0400    INFO    Detecting Alpine vulnerabilities...
2023-10-19T11:05:36.566-0400    INFO    Number of language-specific files: 0

jasonlws/alpine-curl:latest (alpine 3.18.4)

Total: 5 (UNKNOWN: 0, LOW: 0, MEDIUM: 2, HIGH: 3, CRITICAL: 0)

┌──────────────┬────────────────┬──────────┬────────┬───────────────────┬───────────────┬──────────────────────────────────────────────────────────────┐
│   Library    │ Vulnerability  │ Severity │ Status │ Installed Version │ Fixed Version │                            Title                             │
├──────────────┼────────────────┼──────────┼────────┼───────────────────┼───────────────┼──────────────────────────────────────────────────────────────┤
│ curl         │ CVE-2023-38545 │ HIGH     │ fixed  │ 8.3.0-r0          │ 8.4.0-r0      │ a heap based buffer overflow in the SOCKS5 proxy handshake   │
│              │                │          │        │                   │               │ https://avd.aquasec.com/nvd/cve-2023-38545                   │
│              ├────────────────┼──────────┤        │                   │               ├──────────────────────────────────────────────────────────────┤
│              │ CVE-2023-38546 │ MEDIUM   │        │                   │               │ cookie injection with none file                              │
│              │                │          │        │                   │               │ https://avd.aquasec.com/nvd/cve-2023-38546                   │
├──────────────┼────────────────┼──────────┤        │                   │               ├──────────────────────────────────────────────────────────────┤
│ libcurl      │ CVE-2023-38545 │ HIGH     │        │                   │               │ a heap based buffer overflow in the SOCKS5 proxy handshake   │
│              │                │          │        │                   │               │ https://avd.aquasec.com/nvd/cve-2023-38545                   │
│              ├────────────────┼──────────┤        │                   │               ├──────────────────────────────────────────────────────────────┤
│              │ CVE-2023-38546 │ MEDIUM   │        │                   │               │ cookie injection with none file                              │
│              │                │          │        │                   │               │ https://avd.aquasec.com/nvd/cve-2023-38546                   │
├──────────────┼────────────────┼──────────┤        ├───────────────────┼───────────────┼──────────────────────────────────────────────────────────────┤
│ nghttp2-libs │ CVE-2023-44487 │ HIGH     │        │ 1.55.1-r0         │ 1.57.0-r0     │ Multiple HTTP/2 enabled web servers are vulnerable to a DDoS │
│              │                │          │        │                   │               │ attack (Rapid...                                             │
│              │                │          │        │                   │               │ https://avd.aquasec.com/nvd/cve-2023-44487                   │
└──────────────┴────────────────┴──────────┴────────┴───────────────────┴───────────────┴──────────────────────────────────────────────────────────────┘
```

### Apply fix

According to the above report, all vulnerabilities should be fixed with latest version of library. So, let rebuild and publish the image with latest version of alpine and apply `apk upgrade` to update latest packages.

**Before rebuild and publish**
![2-jasonlws-alpine-curl-latest-20231006](2-jasonlws-alpine-curl-latest-20231006.jpg)

**After rebuild and publish**
![3-jasonlws-alpine-curl-latest-20231019](3-jasonlws-alpine-curl-latest-20231019.jpg)

### Rescan

Input
```bash
trivy image jasonlws/alpine-curl:latest
```

Output
```bash
2023-10-19T13:15:09.743-0400    INFO    Vulnerability scanning is enabled
2023-10-19T13:15:09.743-0400    INFO    Secret scanning is enabled
2023-10-19T13:15:09.743-0400    INFO    If your scanning is slow, please try '--scanners vuln' to disable secret scanning
2023-10-19T13:15:09.743-0400    INFO    Please see also https://aquasecurity.github.io/trivy/v0.46/docs/scanner/secret/#recommendation for faster secret detection
2023-10-19T13:15:12.322-0400    INFO    Detected OS: alpine
2023-10-19T13:15:12.322-0400    INFO    Detecting Alpine vulnerabilities...
2023-10-19T13:15:12.323-0400    INFO    Number of language-specific files: 0

jasonlws/alpine-curl:latest (alpine 3.18.4)

Total: 0 (UNKNOWN: 0, LOW: 0, MEDIUM: 0, HIGH: 0, CRITICAL: 0)
```

Good ! All severity vulnerabilities are gone.

## More

### How to filter trivy result by status

By adding `--severity` to severities of security issues to be displayed (UNKNOWN,LOW,MEDIUM,HIGH,CRITICAL):

Input
``` bash
trivy image --severity HIGH,CRITICAL jasonlws/alpine-curl:latest
```

Output
```bash
2023-10-19T13:45:15.821-0400    INFO    Vulnerability scanning is enabled
2023-10-19T13:45:15.822-0400    INFO    Secret scanning is enabled
2023-10-19T13:45:15.822-0400    INFO    If your scanning is slow, please try '--scanners vuln' to disable secret scanning
2023-10-19T13:45:15.822-0400    INFO    Please see also https://aquasecurity.github.io/trivy/v0.46/docs/scanner/secret/#recommendation for faster secret detection
2023-10-19T13:45:16.518-0400    INFO    Detected OS: alpine
2023-10-19T13:45:16.519-0400    INFO    Detecting Alpine vulnerabilities...
2023-10-19T13:45:16.526-0400    INFO    Number of language-specific files: 0

jasonlws/alpine-curl:latest (alpine 3.18.4)

Total: 0 (HIGH: 0, CRITICAL: 0)
```

### Kubernetes: How to scan all image of pods in target namespace

Two pods created in `jasonlws` namespace. `jasonlws1` pod with `jasonlws/alpine-curl:latest` image and `jasonlws2` pod with `jasonlws/alpine-curl:3.15.10` image.

Input
```bash
kubectl get pod --namespace jasonlws --output custom-columns=POD-NAME:.metadata.name,IMAGE-NAME:.spec.containers[*].image
```

Output
```bash
POD-NAME    IMAGE-NAME
jasonlws1   jasonlws/alpine-curl:latest
jasonlws2   jasonlws/alpine-curl:3.15.10
```

Run follow command to retrieve the result - namespace: `jasonlws` and image with `High` or `Critical` severity vulnerabilities.

Input
```bash
for i in `kubectl get pod --namespace jasonlws --no-headers --output custom-columns=IMAGE-NAME:.spec.containers[*].image`; do trivy -q image --severity HIGH,CRITICAL $i | grep -iEB3 "HIGH:|CRITICAL:" ; done
```

Output
```bash
jasonlws/alpine-curl:3.15.10 (alpine 3.15.10)
=============================================
Total: 3 (HIGH: 3, CRITICAL: 0)

jasonlws/alpine-curl:latest (alpine 3.18.4)
===========================================
Total: 0 (HIGH: 0, CRITICAL: 0)
```

## Best Practices

- Periodically rescan images
- Kubernetes Admission Controllers to scan images
- Have your own repository with pre-scanned images ready to go
- Integrate scanning into your CI/CD pipeline

## References

- [Trivy](https://aquasecurity.github.io/trivy/v0.46/)

## About Myself

Please reach out to connect with me via [**Linkedin**](https://www.linkedin.com/in/jasonlws).