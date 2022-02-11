// init sync storage
async function initStorage() {
	let storage = await browser.storage.sync.get()
	if(storage.success === undefined && storage.fail == undefined){
		await browser.storage.sync.set({success:0, fail:0})
	}
}

browser.runtime.onInstalled.addListener(initStorage)

browser.webRequest.onCompleted.addListener(async (details) => {
	let storage = await browser.storage.sync.get()

	if(details.statusCode===200){
		await browser.storage.sync.set({success:storage.success+1})
	}else{
		await browser.storage.sync.set({fail:storage.fail+1})
	}
} ,{urls:["https://dash.cloudflare.com/api/v4/login"]})
