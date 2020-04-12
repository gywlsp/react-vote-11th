# react-vote

## 목차

1. [서론](#서론)
2. [프로그램 실행 결과](#프로그램-실행-결과)
3. [프로그래밍 요구사항](#프로그래밍-요구사항)
4. [미션 저장소 및 진행 요구사항](#미션-저장소-및-진행-요구사항)

## 서론

안녕하세요 부회장 최수민입니다.

벌써 프론트스터디 3주차네요! 이번주부터는 서버와의 통신을 시작할거에요
async/await, hooks, axios등 생소한 개념이 많으니 아래 문서들을 열심히, 꼼꼼히 읽어보시면 좋을 것 같아요

1. [자바스크립트 async와 await](https://joshua1988.github.io/web-development/javascript/js-async-await/#async--await%EB%8A%94-%EB%AD%94%EA%B0%80%EC%9A%94)
2. [초보를 위한 동기/비동기 개념, async await 사용법](https://codingbroker.tistory.com/28)
3. [리액트의 Hooks 완벽 정복하기 : useEffect](https://velog.io/@velopert/react-hooks#2-useeffect)
4. [axios 사용해보기](https://velog.io/@sss5793/axios-%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B3%B4%EA%B8%B0-uuk5elxk88)
5. [React 공식 문서 : 조건부 렌더링](https://reactjs-kr.firebaseapp.com/docs/conditional-rendering.html)

언제나처럼 미션 제출은 본인이 완성했다고 생각하는 언제라도 제출할 수 있습니다.

단, 제출한 시점 이후에 수정은 불가하니 착오 없기를 바랍니다.

3주차 미션 마감일시는 2020년 4월 17일(금)까지입니다‼️

매주 빡센 일정 잘 따라와주셔서 정말 감사합니다 🥺

학기말에 활동 끝나고나면 꼭! 어디가서 리액트 좀 한다😎할 수 있는 실력되실 수 있도록 저희 운영진도 더 열심히 준비할게요 :-)

궁금한 점 언제든지 슬랙 qna 채널에 올려주세요~~ 같이 고민해봐요!

Happy hacking 🧑🏻‍💻👩🏻‍💻

## API 도큐먼트

[Practice-server API Documentation](https://www.notion.so/sumins/Practice-server-API-Documentation-53ab36dfe92a40b984362415c244ceb9)

## 프로그램 실행 결과

업데이트 예정

## 미션 목표

1. axios module의 사용법을 익힌다.
2. HTTP 요청 메서드의 종류와 용도를 이해한다.
3. .env파일이 필요한 이유를 배우고, 활용해본다.
4. useEffect의 사용법을 익힌다.
5. 조건부 렌더링을 사용해본다.
6. 필수적인 요소만 전달할 수 있는 컴포넌트 구조, 데이터 플로우에 대해서 고민해본다.

## 프로그래밍 요구사항

필수 사항

1. 전체

- styled-component를 사용한다.
- 예제와 동일하지 않아도 좋으니, 스타일링을 직접 해본다.
- React.memo를 적용한다.
- [자바스크립트 네이밍 컨벤션](https://velog.io/@cada/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%8A%A4%ED%83%80%EC%9D%BC-%EA%B0%80%EC%9D%B4%EB%93%9C-%EB%84%A4%EC%9D%B4%EB%B0%8D-%EC%BB%A8%EB%B2%A4%EC%85%98-%ED%8E%B8)을 준수하며 개발한다.
- 기능 단위별로 함수를 분리한다.
- 컴포넌트의 역할을 잘 나타낼 수 있는 적절한 네이밍을 사용한다.

2. 로그인

- 이메일과 비밀번호를 입력해 로그인할 수 있다.
- 빈 문자열을 입력한 경우 alert 메세지를 띄운다.
- 서버에서 올바른 응답이 온 경우 로그인 성공 alert 메시지를 띄우고, 투표리스트로 전환한다.
- 에러가 catch된 경우 로그인 실패 alert를 띄우고, 로그인 폼을 초기화한다.

2. 투표

- 투표리스트 마운트시 서버로부터 후보자 리스트를 받아서 띄운다.
- 후보자 리스트는 득표수 내림차순으로 정렬한다.
- 각 후보자들에 대해서 투표 버튼을 눌러 투표할 수 있다.

선택 사항

1. 로그인

- 서버는 로그인 요청시 db에 이메일이 존재하지 않으면 에러코드 404를, 비밀번호가 불일치하면 에러코드 422를 반환한다. 에러 catch시에 에러코드를 확인해 case별로 다르게 대처하자.
- 이메일이 존재하지 않으면 `이메일이 존재하지 않습니다.` alert를 띄우고, 로그인 폼을 초기화한다.
- 비밀번호가 불일치하면 `비밀번호가 틀렸습니다.` alert를 띄우고, 비밀번호만 초기화한다.
- 힌트1 : [catch문에서 에러 리스폰스에 접근하는 방법](https://github.com/axios/axios/issues/960#issuecomment-309287911)
- 힌트2 : 반환된 에러 리스폰스를 `console.log`로 확인해보세요!

2. 투표

- 투표한 결과가 실시간으로 반영되도록 한다.

## 미션 저장소 및 진행 요구사항

- 미션은 이 저장소를 fork/clone해 시작한다.
- git의 commit 단위는 앞 단계에서 README.md 파일에 정리한 Component 단위로 추가한다.
- [스터디 과제제출](https://github.com/CEOS-Developers/react-todo-11th/tree/master/docs/how-to-submit) 문서를 참고해 미션을 제출한다.
