function solution(N, stages) {
    let answer = [];
    let arr = new Array(N).fill(0);
    let arr2 = arr.map((a, i) => {
        let count = stages.length;
        stages = stages.filter((a) => a > i + 1);
        return [(count - stages.length) / count, i + 1];
    });
    arr2.sort((a, b) => b[0] - a[0]);
    return arr2.map((a) => a[1]);
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.30ms, 33.5MB)
// 테스트 2 〉	통과 (0.74ms, 33.6MB)
// 테스트 3 〉	통과 (65.09ms, 42.8MB)
// 테스트 4 〉	통과 (534.45ms, 74.8MB)
// 테스트 5 〉	통과 (2099.43ms, 70.2MB)
// 테스트 6 〉	통과 (1.25ms, 34.2MB)
// 테스트 7 〉	통과 (11.44ms, 38.8MB)
// 테스트 8 〉	통과 (462.31ms, 76MB)
// 테스트 9 〉	통과 (2215.52ms, 71MB)
// 테스트 10 〉	통과 (211.33ms, 64.6MB)
// 테스트 11 〉	통과 (482.76ms, 69.5MB)
// 테스트 12 〉	통과 (209.72ms, 66.6MB)
// 테스트 13 〉	통과 (1073.60ms, 68.2MB)
// 테스트 14 〉	통과 (0.45ms, 33.4MB)
// 테스트 15 〉	통과 (33.36ms, 48.7MB)
// 테스트 16 〉	통과 (3.36ms, 37.7MB)
// 테스트 17 〉	통과 (41.15ms, 47.5MB)
// 테스트 18 〉	통과 (4.62ms, 37.6MB)
// 테스트 19 〉	통과 (0.89ms, 33.8MB)
// 테스트 20 〉	통과 (5.49ms, 38.5MB)
// 테스트 21 〉	통과 (8.50ms, 38.8MB)
// 테스트 22 〉	통과 (4142.49ms, 71.4MB)
// 테스트 23 〉	통과 (31.24ms, 47MB)
// 테스트 24 〉	통과 (94.04ms, 60MB)
// 테스트 25 〉	통과 (0.09ms, 33.4MB)
// 테스트 26 〉	통과 (0.08ms, 33.5MB)
// 테스트 27 〉	통과 (0.08ms, 33.5MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
