module.exports = [
	{
		title: "Tham gia cộng đồng",
		type: "web_url",
		url: "https://www.facebook.com/groups/whiteweb.tk/"
	},
	{
		title: "Chức năng",
		type: "nested",
		call_to_actions: [
			{
				title: "Check Rank",
				type: "postback",
				payload: "RANK"
			},
			{
				type: "web_url",
				title: "Tải Extension",
				url: "https://chrome.google.com/webstore/detail/sc-world/ejoenliehjgioblihdlfpakgfhghjgkf"
			}
		]
	},
	{
		title: "About",
		type: "postback",
		payload: "ABOUT"
	}
];
