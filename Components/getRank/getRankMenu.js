module.exports = (payload, chat) => {
	// chat.say("ID của bạn là: " + payload.sender.id);
	chat.say({
		cards: [
			{
				title: "Ranking for SC World",
				image_url:
					"https://img.freepik.com/free-vector/champion-of-competition-reward-goblet-winner-winner-cup-business-success-leadership-concept-flat-vector-illustration-design-for-mobile-and-web-graphics_1200-304.jpg?size=338&ext=jpg",
				"subtitle":"",
				default_action: {
					type: "web_url",
					url: "http://whiteweb.tk/ranking/ranking.php",
					webview_height_ratio: "tall"
				},
				buttons: [
					{
						type: "postback",
						title: "Xem Rank của bạn",
						payload: "RANK_ID"
					},
					{
						type: "postback",
						title: "Xem Rank Top #5",
						payload: "RANK_TOP"
					},
					{
						type: "web_url",
						url: "http://whiteweb.tk/ranking/ranking.php",
						title: "Xem hệ thống Rank"
					}
				]
			}
		]
	});
};
