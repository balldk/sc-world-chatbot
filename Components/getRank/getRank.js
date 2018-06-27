module.exports = (chat, userID) => {
	let id, point, afterPoint, name, rank, afterRank, user;
	fetch('http://whiteweb.tk/ranking/data.json')
		.then(res => res.json())
		.then(async res => {
			user = res[1].data.filter(user => {
				let [a] = user.split('-')
				if (a === userID) {
					[id, point, name, rank] = user.split('-')
					afterRank = parseInt(rank) - 1
					return true
				}
			
			if (afterRank === 0) {
				chat.say(`Chúc mừng ${name}, bạn đang đứng top #1, cố gắng duy trì nhé ;)`)
			}
			else {
				afterRank = res[1].data.filter(user => {
					let [ , a, , b] = user.split('-')
					if (parseInt(b) === afterRank) {
						afterPoint = a
						return true
					}
				})
			}
			})[0];
			if (user) {
				let date = new Date(res[3].update_time);
				let [year, month, day] = date.toLocaleDateString().split('-')
				let [hour, minute, second] = date.toTimeString().split(':')
				let [ ,cur] = new Date().toLocaleTimeString().split(':')
				await chat.say(`Tên: ${name}\nHạng: #${rank} trên ${res[1].data.length}\nĐiểm: ${point}`)
				await chat.say(`Bạn cần thêm ${afterPoint-point+1} điểm nữa để vượt qua đối thủ tiếp theo nhé ;)`)
				await chat.say({
					text: `Cập nhật lần cuối lúc: ${parseInt(hour)%12}:${minute} giờ, ${day+'/'+month+'/'+year}. Còn ${cur-minute} phút nữa là hệ thống sẽ cập nhật lại`,
					buttons: [
						{ type: 'postback', title: 'Kiểm tra lại', payload: 'RANK_ID' },
						{ type: 'postback', title: 'Xem Rank Top #5', payload: 'RANK_TOP' },
						{ type: 'web_url', title: 'Xem hệ thống Rank', url: 'http://whiteweb.tk/ranking/ranking.php' }
					]
				});
			} else {
				await chat.say(
					'Bạn không ở trong group hoặc không đủ điểm để được xếp hạng. :('
				);
				await chat.say(
					'Hãy tham gia group hoặc hoạt động nhiệt tình hơn để ở lại cùng chúng mình nhé. ;)'
				);
			}
		});
};