let storage = browser.storage.sync.get().then(r=>{
	document.getElementById("succeeded").innerText = r.succeeded
	document.getElementById("failed").innerText = `with ${r.failed} failed attempts`

})

