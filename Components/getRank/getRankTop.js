module.exports = (chat) => {
	let id, point, name, rank, tops;
	let result = fetch("http://whiteweb.tk/ranking/data.json")
		.then(res => res.json())
        .then(res => {
            tops = ``
            for (let i = 0; i < 5; i++) {
                [id, point, name, rank] = res[1].data[i].split('-')
                tops += `#${rank}: ${name} (${point} điểm)\n`
                console.log(res[1].data[i]);
            }
            chat.say(tops)
        })
}