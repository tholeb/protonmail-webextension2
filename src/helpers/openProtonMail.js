const openProtonMail = async () => {
	const newTab = await chrome.tabs.create({
		active: false,
		url: 'https://mail.proton.me/inbox',
	});
	console.log(newTab);
	await chrome.scripting.executeScript({
		code: chrome.cookies.getAll({ domain: 'proton.me' }, data => {
			alert(data);
		}),
	});
};

export default openProtonMail;
