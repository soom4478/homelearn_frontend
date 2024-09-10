import { comuImfo, updateCommentCount } from './comuImfo';

export let commentImfo = [
    { id: 1, name: "야구보구싶구", time: "24.07.28", comment: "WAR은 Wins Above Replacement의 약어로 대체선수 대비 팀 승리에 기여한 정도입니다." },
    { id: 1, name: "우와왕", time: "24.07.28", comment: "저도 궁금해용" },
    { id: 3, name: "포비", time: "24.07.28", comment: "저도 궁금해용" },
];

export const addComment = (newComment) => {
    commentImfo = [...commentImfo, newComment];
    const comuItem = comuImfo.find(item => item.id === newComment.id);
    if (comuItem) {
        updateCommentCount(comuItem.id, comuItem.comu_commen + 1);
    }
};
