// ??????효율성 오락가락

function solution(s){
  let stack = 0;

    for (let i=0; i<s.length; i++) {
        if (s[i] === '(') stack ++;
        else {
            stack--;
            if (stack < 0) return false;
        }
    }
    
    return stack === 0 ? true : false;
}

/*
정확성  테스트
테스트 1 〉	통과 (0.04ms, 33.4MB)
테스트 2 〉	통과 (0.04ms, 33.5MB)
테스트 3 〉	통과 (0.04ms, 33.5MB)
테스트 4 〉	통과 (0.04ms, 33.5MB)
테스트 5 〉	통과 (0.04ms, 33.6MB)
테스트 6 〉	통과 (0.04ms, 33.4MB)
테스트 7 〉	통과 (0.04ms, 33.5MB)
테스트 8 〉	통과 (0.04ms, 33.4MB)
테스트 9 〉	통과 (0.11ms, 33.5MB)
테스트 10 〉	통과 (0.04ms, 33.5MB)
테스트 11 〉	통과 (0.04ms, 33.4MB)
테스트 12 〉	통과 (0.11ms, 33.5MB)
테스트 13 〉	통과 (0.12ms, 33.4MB)
테스트 14 〉	통과 (0.11ms, 33.4MB)
테스트 15 〉	통과 (0.11ms, 33.4MB)
테스트 16 〉	통과 (0.11ms, 33.4MB)
테스트 17 〉	통과 (0.11ms, 33.5MB)
테스트 18 〉	통과 (0.11ms, 33.5MB)
효율성  테스트
테스트 1 〉	통과 (2.37ms, 36.9MB)
테스트 2 〉	통과 (2.39ms, 36.9MB)
채점 결과
정확성: 69.5
효율성: 30.5
합계: 100.0 / 100.0
*/

