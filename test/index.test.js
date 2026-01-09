import { timeAgo } from "../src/index.js";

console.log(timeAgo(new Date(Date.now() - 60000))); // 1 minute ago
console.log(timeAgo(new Date(Date.now() - 3600000))); // 1 hour ago
console.log(timeAgo(new Date(Date.now() - 1000))); // just now
