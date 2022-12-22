![Screen Shot 2022-12-19 at 12 04 21 AM](https://user-images.githubusercontent.com/113380905/208345644-3ee8ef3c-e522-4b8c-b2c1-7732871dfe21.png)

Postman picture: ![postman](https://user-images.githubusercontent.com/113380905/209099562-bb4d00ac-4f2c-423e-9db1-84245a81d8e2.png)

# Getting Started

## Clone repo

```
https://github.com/IvannaNouel-Ksquare/hms_itk.git

```

## Install Node Dependencies

```
npm install

```
## Install typescript 

```
npm install --save-dev typescript

```

## .env file data 

```
DB_PASS=route
DB_USER=postgres
DB_NAME=hsmtest
DB_HOSTENAME=localhost:5432
HOST=localhost:5000
PORT=5000
GOOGLE_APPLICATION_CREDENTIALS=/Users/ivannanouel/Documents/corecourse/hmsitk-5cad8-firebase-adminsdk-ea3wq-8a514d12db.json

```

## GOOGLE_APPLICATION_CREDENTIALS - Document

```
{
  "type": "service_account",
  "project_id": "hmsitk-5cad8",
  "private_key_id": "a36167588e50f6be20f83ee6a11d5a260eeeeee4",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCpYp6+2UPdFS56\nBKAiFnOmLRKrFuDxgIbEaQlqfDHXe4guJycg/WVofS0Em1iHd248FBa5/zYeXsgF\nZqjlnQiIeC8neJyINlVHRJGFPiFy4ON8ncUNszWi7FhumXpFtEf9bk7E3Rfob74Q\nDvnvS0676WJVX0DmpoE8wH9FC8zupLFdKFQQDX4BXBdK52XD+dOQhofNNxtxEGja\nyOMSbhjFbzFOFHUv46mju7S6PLTlg0yuZk+v+wzg/YzD0dBYEqXBLbKq0uqByzTY\nuxfm93OAy4tftlcKIDHBzD6Xs4btQ0R3FubISPFIavEd2uF3/2sUnJP/P3p5THUB\nlWzuNw2hAgMBAAECggEAC65U4zVpdCwbRefewSsKM6oFEQ5lWdIyuQXDU/gXmdQX\nipNBpAlFfoSvX5N08fae//6kqJP8f/CqW5D+UcNYDM0490BejxgsHluQq38i4GC4\n32Wj6rNynfctjAcCgx8RHd2HChVzKiDWmxXlT4bCebv4/4kvmRhfbjiaLkFHkydk\npSryXSW6B12mUy7gj88R5NHJ86vJx5QGNgLp6IEA849cFPXko09hm1RW9cv2ZnH3\ncXZWtMHgsZpP6+/dVSGghYy6VJAwRoWYPJyEnCE7Fi5akqLqrj3Wokw5DM+QMuyz\n+1S0jtZ2egAybmnGuu4APnvQimojmtAb/L5MZCkdlwKBgQDXU4spAUD+1VKYcw8e\njTGYEJeLuBdC0KzHEKCek6qJtTKs8aTOFP6nnzIUjYDq84Il4fvdzOipRSqNdgWi\n0klqm+ebvxnIFbmdsZE2RyYCwHId4Rr8WDf1BQm3Xr8bTDSf2UA1j+bnlt4uwax1\nfP2Szc/z81SNhGDNRYouKcKvQwKBgQDJYYTzirrB5Ir/+KiDjpmwOETs/UOQC6eW\ndX8ig4blcOi7vX7/X1GZGiZtN1vLnx1IBh6W+6Z8cqwjdOTGLUhxiqbCIy0Qe4or\nbw7ZkpKVEJaPVu3ApOgLyioGPlRYdL1AcNMoiYYEV8KaR1MlniCQZZwqVBl8RG+P\njl+F4rOnSwKBgQCXAuZTyadVkTIt7HOsD4W6idheiqr1lve1XDnpPNKbZVK263mT\ndjHqSMGMnHjPThv2iXhkY3LAU9u1/hGR0Tzf4ZsbJXjlVCcrKv8WO+uyflkKD3cn\nho8n7XKVAYOxl05I1MotRlDAFpSX4ggbFZ+Yt3KiOgMQhMiG7cAtA+iflQKBgGp+\nUJF93o8kbcE5XNvdMDb5OrHcqLrm/uPZFLdKuK5izCBj8GHZpUwCgSmmabu/U/u/\niLOtNnh/J7rEWSrXzYSFnvPxKCacPhAD9eVm1m9Py17XyHjke/WoHhsZIP96FI6c\nW34HY8CuLDHr3/N3sJ7LrQ7RVHzbr+dJkgg6P2kLAoGAK2UrXGLBsjybHyNic2ay\nz9jDrx8p4st9heKakiMN43IWIZmfLAn78WuSTnVQxEvFK9ig/lG/Oauzj1FC4dlW\neA6DCkhY03l/Ds7Vj9uk29Uc4aVbhSZ1YnJZaiu9HC8ypMFGDR1N/3yOqzwlaQn4\n2GqBLOrxsxNyENLV+V09EQw=\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-ea3wq@hmsitk-5cad8.iam.gserviceaccount.com",
  "client_id": "104118357562605084286",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ea3wq%40hmsitk-5cad8.iam.gserviceaccount.com"
}

```
## Generate tokens for testing on postman

-Generate your token for an admin user
-Generate your token for a patient
-Generate your token for a doctor




