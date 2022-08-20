/* chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.query({ url: 'https://mail.proton.me/*' }, (tabs) => {

        if (tabs.length === 0) {
            chrome.tabs.create({ url: 'https://mail.proton.me/inbox' })
        } else {
            chrome.tabs.update(tabs[0].id, { active: true })
        }
    })
}) */


setTimeout(() => {
	console.log('testing service worker');
}, 1000);