<p align="center">
  <h1 align="center">@myko.pk/config</h1>
  <p align="center"><strong>Constants you can count on.</strong></p>
  <p align="center">Shared configuration constants for the MYKO ecosystem — database pool defaults, well-known numeric constants, and cross-service configuration values.</p>
  <p align="center">
    <a href="https://www.npmjs.com/package/@myko.pk/config"><img src="https://img.shields.io/npm/v/@myko.pk/config?style=for-the-badge&logo=npm&logoColor=white" alt="npm version"></a>
    <a href="https://www.npmjs.com/package/@myko.pk/config"><img src="https://img.shields.io/npm/dm/@myko.pk/config?style=for-the-badge&logo=npm&logoColor=white" alt="npm downloads"></a>
    <a href="https://github.com/mykopk/config/actions"><img src="https://img.shields.io/github/actions/workflow/status/mykopk/config/ci.yml?style=for-the-badge&logo=githubactions&logoColor=white&label=CI" alt="build"></a>
    <a href="https://github.com/mykopk/config"><img src="https://img.shields.io/github/stars/mykopk/config?style=for-the-badge&logo=github" alt="stars"></a>
    <a href="https://github.com/mykopk/config"><img src="https://img.shields.io/github/forks/mykopk/config?style=for-the-badge&logo=github" alt="forks"></a>
    <a href="https://github.com/mykopk/config"><img src="https://img.shields.io/github/issues/mykopk/config?style=for-the-badge&logo=github" alt="issues"></a>
    <a href="https://github.com/mykopk/config"><img src="https://img.shields.io/github/last-commit/mykopk/config?style=for-the-badge&logo=github" alt="last commit"></a>
    <a href="./LICENSE"><img src="https://img.shields.io/badge/license-MIT-green?style=for-the-badge" alt="license"></a>
  </p>
</p>

## 📑 Table of Contents

- [Description](#description)
- [Key Features](#key-features)
- [Use Cases](#use-cases)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Contributors](#contributors)
- [Contributing](#contributing)
- [License](#license)

## 📝 Description

@myko.pk/config provides shared configuration constants used across every MYKO backend service. Instead of hard-coding database pool sizes, timeouts, or magic numbers in each service, this package centralises them into well-named, well-documented exports. It includes the `dynamicPoolDefaultConfig` for PostgreSQL connection pooling and the `NUMERIX` set of standardised numeric constants (timeouts, limits, defaults) that keep every service aligned.

## ✨ Key Features

- **🔢 Centralised Numeric Constants** — `NUMERIX.THIRTY_THOUSAND`, `NUMERIX.TEN`, and more — consistent across all services.
- **🗄️ Database Pool Defaults** — `dynamicPoolDefaultConfig` with sensible min/max/acquire/idle values for PostgreSQL.
- **📘 Fully Typed** — Every constant is exported with its TypeScript type.
- **⚡ Zero Dependencies** — Pure constants with no runtime deps.

## 🎯 Use Cases

- Sharing `dynamicPoolDefaultConfig` across all services that connect to PostgreSQL so every `pg.Pool` uses the same defaults.
- Replacing magic numbers like `30000` with `NUMERIX.THIRTY_THOUSAND` for self-documenting, consistent code.
- Importing standardised timeout, retry, and pagination limits in every MYKO package.

## 🛠️ Tech Stack

- 📘 **TypeScript**

**Notable libraries:** None — pure constants, zero runtime deps.

## ⚡ Quick Start

```bash
npm install @myko.pk/config
```

```ts
import { dynamicPoolDefaultConfig } from '@myko.pk/config';
import { NUMERIX } from '@myko.pk/config/db';

const pool = new Pool(dynamicPoolDefaultConfig);
const timeout = NUMERIX.THIRTY_THOUSAND; // 30000
```

## 🚀 Available Scripts

- **build** — `npm run build`
- **typecheck** — `npm run typecheck`

## 📁 Project Structure

```
.
├── CHANGELOG.md
├── CONTRIBUTING.md
├── LICENSE
├── SECURITY.md
├── package.json
├── src
│   ├── db
│   │   ├── index.ts
│   │   └── numerix.config.ts
│   └── index.ts
├── tsconfig.json
└── tsup.config.mjs
```

## 🛠️ Development Setup

1. Install Node.js (v18+ recommended)
2. Install dependencies: `npm install`
3. Build: `npm run build`

## 🧪 Testing

This project currently exports pure constants — no runtime tests required.

## 👥 Contributors

<p align="left">
<a href="https://github.com/arsalanwahab" title="arsalanwahab"><img src="https://avatars.githubusercontent.com/u/178069156?v=4&s=64" width="64" height="64" alt="arsalanwahab" style="border-radius:50%" /></a>
</p>

[See the full list of contributors →](https://github.com/mykopk/config/graphs/contributors)

## 👥 Contributing

Contributions are welcome! Here's the standard flow:

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/mykopk/config.git`
3. **Branch**: `git checkout -b feature/your-feature`
4. **Commit**: `git commit -m 'feat: add some feature'`
5. **Push**: `git push origin feature/your-feature`
6. **Open** a pull request

Please follow the existing code style and include types for new behavior where applicable.

## 📜 License

This project is licensed under the **MIT** License.


MYKO Pakistan

Detail	Information
Website	myko.pk
Email	support@myko.pk
About	Building digital infrastructure and super-app experiences for millions of users across Pakistan.
Built with ❤️ in Pakistan 🇵🇰
