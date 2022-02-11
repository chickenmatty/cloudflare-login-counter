let storage = browser.storage.sync.get().then(r=>{
	document.getElementById("success-counter").innerText = r.success
	document.getElementById("fail-counter").innerText = r.fail

})

