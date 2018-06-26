module.exports = chat => {
	let id, point, name, rank, tops;
	fetch("http://whiteweb.tk/ranking/data.json")
		.then(res => res.json())
        .then(async res => {
            tops = ``
            for (let i = 0; i < 5; i++) {
                [id, point, name, rank] = res[1].data[i].split('-')
                tops += `#${rank}: ${name} (${point} điểm)\n`
                console.log(res[1].data[i]);
            }
            await chat.say({
                text: tops,
                buttons: [
                    { type: 'postback', title: 'Kiểm tra lại', payload: 'RANK_ID' },
                    { type: 'postback', title: 'Xem Rank Top #5', payload: 'RANK_TOP' },
                    { type: 'web_url', title: 'Xem hệ thống Rank', url: 'http://whiteweb.tk/ranking/ranking.php' }
                ]
            });
        })
}