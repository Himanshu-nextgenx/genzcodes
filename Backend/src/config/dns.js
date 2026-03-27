import dns from "dns"

// Force Node.js to use system DNS resolver
dns.setDefaultResultOrder('ipv4first');

// Or try to enable all DNS resolutions
dns.setServers(['8.8.8.8', '8.8.4.4']); // Fallback to Google DNS