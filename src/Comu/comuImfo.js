export const comuImfo = [
    { id: 1, uimage: "", uname: "포비", club: "삼성 라이온즈", comu_title: "야구에서 득점 인정은?", comu_text: "설명을 들어도 모르겠는데 자세히 알려주세요ㅠㅠ",
        time: "24.07.28", comu_time: "24.09.11 03:04:21", comu_heart: 0, comu_commen: 0 },
    { id: 2, uimage: "", uname: "홈런짱짱", club: "삼성 라이온즈", comu_title: "이번 시즌 대박", comu_text: "사실 잘 모르겠어요 이번 시즌 다들 어때요...",
        time: "24.07.28", comu_time: "24.09.11 03:05:20", comu_heart: 0, comu_commen: 0 },
    { id: 3, uimage: "", uname: "임영웅", club: "전체", comu_title: "야구에서 득점 인정은?", comu_text: "설명을 들어도 모르겠는데 자세히 알려주세요ㅠㅠ",
        time: "24.07.28", comu_time: "24.09.11 03:06:20", comu_heart: 0, comu_commen: 0 },
    { id: 4, uimage: "", uname: "홈런짱짱", club: "전체", comu_title: "이번 시즌 대박", comu_text: "사실 잘 모르겠어요 이번 시즌 다들 어때요...왕ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ",
        time: "24.07.29", comu_time: "24.09.11 03:07:20", comu_heart: 0, comu_commen: 0 },
    { id: 5, uimage: "", uname: "포비", club: "삼성 라이온즈", comu_title: "야구에서 득점 인정은?", comu_text: "제가 떡볶이 사드려요",
        time: "24.07.29", comu_time: "24.09.11 03:08:20", comu_heart: 0, comu_commen: 0 },
    { id: 6, uimage: "", uname: "포비", club: "전체", comu_title: "이번 시즌 대박", comu_text: "사실 잘 모르겠어요 이번 시즌 다들 어때요...",
        time: "24.07.29", comu_time: "24.09.11 03:09:20", comu_heart: 0, comu_commen: 0 },
    { id: 7, uimage: "", uname: "야구보구싶구", club: "전체", comu_title: "야구에서 득점 인정은?", comu_text: "제가 떡볶이 사드려요",
        time: "24.07.29", comu_time: "24.09.11 03:10:20", comu_heart: 0, comu_commen: 0 }
];

export const updateHeartCount = (id, newHeartCount) => {
    const comuItem = comuImfo.find(item => item.id === id);
    if (comuItem) {
        comuItem.comu_heart = newHeartCount;
    }
};

export const updateCommentCount = (id, newCommentCount) => {
    const comuItem = comuImfo.find(item => item.id === id);
    if (comuItem) {
        comuItem.comu_commen = newCommentCount;
    }
};
