// init sync storage
async function initStorage() {
	let storage = await browser.storage.sync.get()
	if(storage.succeeded === undefined && storage.failed == undefined){
		await browser.storage.sync.set({succeeded:0, failed:0})
	}
}

browser.runtime.onInstalled.addListener(initStorage)

browser.webRequest.onCompleted.addListener(async (details) => {
	let storage = await browser.storage.sync.get()

	if(details.statusCode===200){
		await browser.storage.sync.set({succeeded:storage.succeeded+1})
	}else{
		await browser.storage.sync.set({failed:storage.failed+1})
	}
} ,{urls:["https://dash.cloudflare.com/api/v4/login"]})
