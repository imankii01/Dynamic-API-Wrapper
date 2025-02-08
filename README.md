# 🚀 Dynamic API Wrapper

[![npm version](https://badge.fury.io/js/dynamic-api-wrapper.svg)](https://www.npmjs.com/package/dynamic-api-wrapper)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A powerful, flexible, and easy-to-use API wrapper for **any REST API**.  
Simplify API integrations in **Node.js** with built-in authentication, error handling, and rate limiting.  

## **🌟 Features**
✅ Supports **GET, POST, PUT, DELETE, PATCH** requests  
✅ Works with **any REST API**  
✅ Supports **API Key & OAuth authentication**  
✅ **Automatic retries** on failures & rate limits  
✅ **Environment variable support** (for API keys)  
✅ **Modular & Extensible**  
✅ **TypeScript support** for better DX  

---

## **📌 When to Use**
- Connecting to **external REST APIs** in a Node.js project  
- Building **microservices** that require multiple API calls  
- Simplifying **API integration** for internal and external services  
- Handling **authentication, retries, and error handling** automatically  

---

## **📦 Installation**
Install via NPM:
```sh
npm install dynamic-api-wrapper
```

Or using Yarn:
```sh
yarn add dynamic-api-wrapper
```

---

## **🚀 Quick Start**
### **1️⃣ Import & Initialize**
```js
const DynamicAPIWrapper = require("dynamic-api-wrapper");

const api = new DynamicAPIWrapper({
  baseURL: "https://api.example.com",
  apiKey: process.env.API_KEY, // API Key from .env
});
```

### **2️⃣ Make API Requests**
#### ✅ **GET Request**
```js
async function fetchUser() {
  try {
    const user = await api.get("/users/12345");
    console.log(user);
  } catch (error) {
    console.error("Error:", error.message);
  }
}
fetchUser();
```

#### ✅ **POST Request**
```js
api.post("/users", { name: "John Doe" })
  .then(response => console.log(response))
  .catch(error => console.error(error));
```

#### ✅ **OAuth Support**
```js
const api = new DynamicAPIWrapper({
  baseURL: "https://api.example.com",
  token: process.env.OAUTH_TOKEN,
  authType: "oauth",
});
```

---

## **⚙️ How It Works**
1. **Create an API client instance** with `baseURL` and authentication method.  
2. **Make API calls** using `get()`, `post()`, `put()`, or `delete()`.  
3. **Handles rate limits**, errors, and retries automatically.  

✅ Uses **Axios** for requests  
✅ Supports **OAuth and API Key-based authentication**  
✅ Retries **429 (Rate Limit Exceeded) errors** automatically  

---

## **🛠️ Configuration**
### **Using `.env` for API Keys**
Create a `.env` file and store your API credentials securely:
```
API_KEY=your_api_key_here
API_BASE_URL=https://api.example.com
```

Then, use it in your code:
```js
require("dotenv").config();
```

---

## **💡 Advanced Usage**
### **Custom Headers**
```js
api.get("/data", {}, { "Custom-Header": "value" });
```

### **Sending Query Parameters**
```js
api.get("/search", { query: "test", limit: 10 });
```

### **Handling Errors**
```js
try {
  const response = await api.get("/users/12345");
} catch (error) {
  console.error("API Error:", error.message);
}
```

---

## **📝 License**
This project is licensed under the **MIT License**.  
[Read More](https://opensource.org/licenses/MIT)

---

## **👨‍💻 Author**
**Ankit** – Full Stack Developer  
🔗 [LinkedIn](https://www.linkedin.com/in/imankii01)  
🔗 [GitHub](https://github.com/imankii01)  
🔗 [NPM Profile](https://www.npmjs.com/~private.ankit047)  

☕ **Support My Work:**  
[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-Donate-orange)](https://www.buymeacoffee.com/imankii01)

---

## **💬 Contributing**
Contributions are welcome!  
Feel free to submit **issues and pull requests** on GitHub.  

Happy coding! 🚀  