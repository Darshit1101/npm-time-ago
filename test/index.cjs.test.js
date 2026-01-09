const { timeAgo } = require("../src/index.cjs");

// Test cases
console.log(timeAgo(new Date(Date.now() - 31536000000))); // 1 year ago
console.log(timeAgo(new Date(Date.now() - 2592000000))); // 1 month ago
console.log(timeAgo(new Date(Date.now() - 86400000))); // 1 day ago
console.log(timeAgo(new Date(Date.now() - 60000))); // 1 minute ago
console.log(timeAgo(new Date(Date.now() - 3600000))); // 1 hour ago
console.log(timeAgo(new Date(Date.now() - 1000))); // just now
