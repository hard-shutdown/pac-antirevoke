// Created by Neon
// *=======================*
// Twitter : @prefisso
// Website : nenno.1mb.site
// *=======================*

function FindProxyForURL(url, host) {
	// Block OCSP :)
	if (dnsDomainIs(host, “ocsp.apple.com”)){
		return “PROXY 1.3.3.7:1337”;
	}

	if (isInNet(dnsResolve(host), “10.0.0.0”, “255.0.0.0”) ||
		isInNet(dnsResolve(host), “172.16.0.0”, “255.240.0.0”) ||
		isInNet(dnsResolve(host), “192.168.0.0”, “255.255.0.0”)) {
		return “DIRECT”;
	}
	
	if (isInNet(dnsResolve(host), “127.0.0.0”, “255.0.0.0”)) {
		return “DIRECT”;
	}
	
	return “DIRECT”;
}