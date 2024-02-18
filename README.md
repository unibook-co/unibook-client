<p align="center">
  <img src="./assets/logo.png" width="10%" alt="Unibook" />
</p>
<h1 align="center">unibook-client</h1>
<h5 align="center">UniBook API를 위한 라이브러리</h5>
<p align="center">
  <img alt="Node.js" src="https://img.shields.io/npm/v/unibook-client"/>
  <img alt="Typescript" src="https://img.shields.io/badge/Language-Typescript-blue?logo=typescript"/>
</p>

---

## install

```
npm install unibook-client
yarn add unibook-client
```

## Usage

```typescript
import { Client } from "unibook-client";

const client = new Client({
    auth: "UniBook API Key",
});

async () => {
    console.log(
        await client.GetUser({
            userId: "me",
        })
    );
};
```
