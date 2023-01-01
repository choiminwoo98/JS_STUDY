function solution(s) {
    return s
        .split("")
        .sort((a, b) => b.charCodeAt() - a.charCodeAt())
        .join("");
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.08ms, 33.4MB)
// 테스트 2 〉	통과 (0.07ms, 33.4MB)
// 테스트 3 〉	통과 (0.11ms, 33.5MB)
// 테스트 4 〉	통과 (0.09ms, 33.5MB)
// 테스트 5 〉	통과 (0.50ms, 33.4MB)
// 테스트 6 〉	통과 (0.27ms, 33.4MB)
// 테스트 7 〉	통과 (0.08ms, 33.4MB)
// 테스트 8 〉	통과 (0.11ms, 33.4MB)
// 테스트 9 〉	통과 (0.13ms, 33.5MB)
// 테스트 10 〉	통과 (0.12ms, 33.4MB)
// 테스트 11 〉	통과 (0.08ms, 33.4MB)
// 테스트 12 〉	통과 (0.09ms, 33.4MB)
// 테스트 13 〉	통과 (0.14ms, 33.4MB)
// 테스트 14 〉	통과 (0.05ms, 33.4MB)
// 테스트 15 〉	통과 (0.05ms, 33.4MB)
// 테스트 16 〉	통과 (0.05ms, 33.5MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
