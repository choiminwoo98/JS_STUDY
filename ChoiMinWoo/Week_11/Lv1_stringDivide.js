function solution(s) {
    let answer = 0;
    let x = s[0];
    let a = 1;
    let b = 0;
    for (let i = 1; i < s.length; i++) {
        if (s[i] === x) a++;
        else b++;

        if (a === b) {
            x = s[i + 1];
            a = 0;
            b = 0;
            answer++;
        } else {
            if (i === s.length - 1) answer++;
        }
    }
    return s.length === 1 ? 1 : answer;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.05ms, 33.6MB)
// 테스트 2 〉	통과 (0.36ms, 33.5MB)
// 테스트 3 〉	통과 (0.48ms, 33.7MB)
// 테스트 4 〉	통과 (0.04ms, 33.5MB)
// 테스트 5 〉	통과 (0.05ms, 33.5MB)
// 테스트 6 〉	통과 (0.04ms, 33.7MB)
// 테스트 7 〉	통과 (0.06ms, 33.5MB)
// 테스트 8 〉	통과 (0.06ms, 33.5MB)
// 테스트 9 〉	통과 (0.27ms, 33.4MB)
// 테스트 10 〉	통과 (0.42ms, 33.5MB)
// 테스트 11 〉	통과 (0.23ms, 33.5MB)
// 테스트 12 〉	통과 (0.35ms, 33.5MB)
// 테스트 13 〉	통과 (2.53ms, 36.6MB)
// 테스트 14 〉	통과 (2.55ms, 36.6MB)
// 테스트 15 〉	통과 (0.21ms, 33.5MB)
// 테스트 16 〉	통과 (0.61ms, 33.5MB)
// 테스트 17 〉	통과 (0.32ms, 33.5MB)
// 테스트 18 〉	통과 (0.46ms, 33.6MB)
// 테스트 19 〉	통과 (0.34ms, 33.6MB)
// 테스트 20 〉	통과 (0.83ms, 33.6MB)
// 테스트 21 〉	통과 (3.02ms, 36.7MB)
// 테스트 22 〉	통과 (0.68ms, 33.6MB)
// 테스트 23 〉	통과 (0.25ms, 33.5MB)
// 테스트 24 〉	통과 (0.47ms, 33.5MB)
// 테스트 25 〉	통과 (0.65ms, 33.5MB)
// 테스트 26 〉	통과 (0.49ms, 33.5MB)
// 테스트 27 〉	통과 (0.46ms, 33.6MB)
// 테스트 28 〉	통과 (0.35ms, 33.5MB)
// 테스트 29 〉	통과 (2.95ms, 36.6MB)
// 테스트 30 〉	통과 (0.38ms, 33.6MB)
// 테스트 31 〉	통과 (0.04ms, 33.4MB)
// 테스트 32 〉	통과 (0.07ms, 33.6MB)
// 테스트 33 〉	통과 (0.05ms, 33.6MB)
// 테스트 34 〉	통과 (0.04ms, 33.5MB)
// 테스트 35 〉	통과 (0.12ms, 33.6MB)
// 테스트 36 〉	통과 (0.13ms, 33.5MB)
// 테스트 37 〉	통과 (0.12ms, 33.6MB)
// 테스트 38 〉	통과 (0.12ms, 33.4MB)
// 테스트 39 〉	통과 (0.12ms, 33.5MB)
// 테스트 40 〉	통과 (0.13ms, 33.5MB)
// 테스트 41 〉	통과 (2.62ms, 36.7MB)
// 테스트 42 〉	통과 (2.58ms, 36.6MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
