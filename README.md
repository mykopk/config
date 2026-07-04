# @myko.pk/config

Shared configuration constants for MYKOPK packages. Provides database connection pool defaults and a set of well-known numeric constants used across services.

## Installation

```bash
npm install @myko.pk/config
```

## Usage

```ts
import { dynamicPoolDefaultConfig } from '@myko.pk/config';
import { NUMERIX } from '@myko.pk/config/db';

const pool = new Pool(dynamicPoolDefaultConfig);
const timeout = NUMERIX.THIRTY_THOUSAND; // 30000
```

## Exports

| Sub-path | Contents |
|----------|----------|
| `.`      | Re-exports `./db` |
| `./db`   | `dynamicPoolDefaultConfig`, `NUMERIX` constants |

## License

MIT
