# my-angular-project

Angular FE + mocked BE using nest.js

## What is this project used for

This is a form for customers to request returning their rent devices.

As a user, I should first initiate a return request by indicating at least my email address.
After initiating the return request, I should be able to indicate which devices to be returned, by indicating the device serial number(s).
If the system is not able to identify the device serial number, I should rather indicate the device SKU.
Before submitting the final return request with all the devices, I should be able to see how many devices I plan to return.
After submitting the final return request with all the devices, I should be able to see a confirmation how many devices of which products I will return.

## Some technical concerns

The FE is a simple form, with 4 fields:

- customer email (mandatory)
- customer full name (optional)
- device serial number(s) (format "AB12345". Invalid ones should be mentioned in the UI, but still sent to BE)
- device SKU(s) (format "1234". )

The BE parts (Basic auth, username "foo", password "bar"):

- GET `/devices?deviceSerialNumber=${deviceSerialNumber}`, returns a Device
- GET `/skus?sku=${sku}`, returns a Sku
- POST /returnRequests, returns a ReturnRequest
- PUT /returnRequests/{id}, returns a ReturnRequest

```json
// Device
{
  "id": "a",
  "deviceSerialNumber": "AB12345",
  "sku": "1234"
}

// Sku
{
  "id": "a",
  "sku": "1234"
}

// ReturnRequest
{
  "id": "a",
  "customerEmail": "abc@de",
  "customerFullName": "Lorem Ipsum",
  "devices": [
    {
      "deviceSerialNumber": "AB12345",
      "sku": "1234"
    }
  ]
}
```

## How to develop

### Back-End part

Go to the BE folder, and run

```bash
# start the server in development mode. Available at localhost:3000
npm run start:dev
```

Example command with authentication

```bash
curl -X GET 'localhost:3000/skus?sku=22222' --user bob:haha
```

### Front-End part

Go to the FE folder, and run

```bash
# start the Angular FE in development mode. Available at localhost:4200
npm run start
```
