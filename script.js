const timelineData = [
        {day: '1일차', schedules: [
            {time: '10:00', content: '석수역 출발\n명지 픽업'},
            {time: '13:00', content: '도착&점심\n\'강릉불고기\'', link: 'https://naver.me/Gw5E5KD8'},
            {time: '15:00', content: '강릉 카페 힐링\n순두부 젤라또', link: 'https://naver.me/FQaIRP7t'},
            {time: '16:00', content: '저녁 장보기\n이마트 강릉점', link: 'https://naver.me/xbwneGNr'},
            {time: '17:00', content: '숙소 이동\n강릉 소시담가', link: 'https://naver.me/GPXTASD4'},
            {time: '17:30', content: '풀파티\nin 숙소'},
            {time: '18:00', content: '디너 파티'},
        ]},
        {day: '2일차', schedules: [
                {time: '12:00', content: '기상\n나갈 준비'},
                {time: '13:00', content: '이동\n점심 먹으러'},
                {time: '13:30', content: '브런치\n짬뽕순두부', link: 'https://naver.me/GEAuW7cg'},
                {time: '15:00', content: '바다 힐링\n강문해변', link: 'https://naver.me/GFpBwYuA'},
                {time: '16:00', content: '시장 투어\n강릉 중앙시장', link: 'https://naver.me/FT0kapMX'},
                {time: '18:30', content: '숙소 이동\n강릉 소시담가', link: 'https://naver.me/GPXTASD4'},
                {time: '18:20', content: '디너 파티'},
            ]},
        {day: '3일차', schedules: [
                {time: '10:00', content: '기상\n퇴실 준비하기'},
                {time: '11:00', content: '숙소 체크아웃\n퇴실 11시!!'},
                {time: '11:30', content: '브런치\n메뉴 정하기'},
                {time: '13:00', content: '석수역으로 출발'},
            ]}
    
    ];

const main = document.querySelector('main');

timelineData.forEach((dayData) => {
    const dayTitle = document.createElement('h1');
    dayTitle.textContent = dayData.day;
    main.appendChild(dayTitle);

    const timeline = document.createElement('ul');
    timeline.id = 'timeline';
    main.appendChild(timeline);

    dayData.schedules.forEach((schedule) => {
        const li = document.createElement('li');
        if (schedule.link) {
            li.innerHTML = `<span class="time">${schedule.time}</span><br><a href="${schedule.link}" class="content">${schedule.content.replace(/\n/g, '<br>')}</a>`;
        } else {
            li.innerHTML = `<span class="time">${schedule.time}</span><br><span class="content">${schedule.content.replace(/\n/g, '<br>')}</span>`;
        }
        timeline.appendChild(li);
    });
});

window.addEventListener('scroll', () => {
    const timelineItems = document.querySelectorAll('#timeline li, main h3');
    const windowHeight = window.innerHeight;
    timelineItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < windowHeight) {
            item.classList.add('show');
        } else {
            item.classList.remove('show');
        }
    });
});
