# time-ago-dk

[![npm version](https://badge.fury.io/js/time-ago-dk.svg)](https://badge.fury.io/js/time-ago-dk)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A tiny JavaScript utility to convert dates into human readable "time ago" format.

## Features

- Lightweight and fast
- Supports years, months, days, hours, minutes, and seconds
- Returns "just now" for very recent times
- ES module compatible

## Installation

```bash
npm install time-ago-dk
```

## Usage

```javascript
import { timeAgo } from "time-ago-dk";

console.log(timeAgo(new Date(Date.now() - 60000))); // "1 minute ago"
console.log(timeAgo(new Date(Date.now() - 3600000))); // "1 hour ago"
console.log(timeAgo(new Date(Date.now() - 1000))); // "just now"
```

## API

### `timeAgo(inputDate)`

- **Parameters:**
  - `inputDate` (Date | string | number): The date to convert. Can be a Date object, ISO string, or timestamp.
- **Returns:** `string` - The human-readable time ago string.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
