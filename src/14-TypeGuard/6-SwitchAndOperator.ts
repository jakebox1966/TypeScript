/**
 * switch 문과 연산자
 *
 * - 타입가드를 사용하여 구분할 때 if 문 말고도 switch 문이나 비교\논리 연산자로도 적용할 수 있다.
 *
 * switch 문
 *
 * ex)
 *      interface Person {
 *          name: string;
 *          age: number;
 *          industry: 'common';
 *      }
 *
 *      interface Developer {
 *          name: string;
 *          age: string;
 *          industry: 'tech';
 *      }
 *
 *      function greet(someone: Person | Developer) {
 *          switch (someone.industry) {
 *              case 'common':
 *                  console.log(someone.age.toFixed(2));
 *                  break;
 *              case 'tech':
 *                  console.log(someone.age.split(''));
 *                  break;
 *          }
 *      }
 *
 * => 첫 번째 case 구문 안에서 파라미터 someone은 Person 타입으로 추론되고 두 번째 case 구문 안에서 파라미터 someone은 Developer 타입으로 추론된다.
 *    만약 어디에도 속하지 않는 case가 있다면 그 케이스 안에서는 어느 타입에도 해당될 수 없다는 의미의 never가 추론된다.(never 타입에는 속성이 존재할 수 없다.)
 *
 *
 * 논리\비교 연산자
 *
 * - typeof, instanceof, in 연산자 외에도 단순 \ 비교 연산자로 타입 가드를 적용할 수 있다.
 *
 *   ex)
 *      function sayHi(message: string | null) {
 *          if(message.length >= 3) {
 *              console.log(message);
 *          }
 *      }
 *
 * => 위 코드는 딱히 문제없어 보이지만, 프로젝트의 타입스크립트 타입 검사 레벨(strict)을 올리면 에러가 발생한다. string과 null의 유니언타입인데
 *    null 타입이라면 length 속성에 접근할 수 없기 때문이다. 이때 다음과 같이 if 문을 쓰거나 타입 단언 문법인 !를 사용할 수 있다.
 *
 *    ex)
 *          function sayHi(message: string | null) {
 *              // if 구문을 쓰는 경우
 *              if(message === null) {
 *                  return
 *              }
 *              if(message.length >= 3) {
 *                  console.log(message);
 *              }
 *          }
 *
 * => message가 null일 때 함수를 반환해 주면 첫 번째 if문 아래에서는 모두 message string 타입으로 추론된다.
 *
 *    ex)
 *          function sayHi(message: string | null) {
 *              if(message!.length >= 3) {
 *                  console.log(message);
 *              }
 *          }
 *
 * => null 아님 보장 연산자(!)를 사용할 수도 있다. message 값이 null이 아니라는 의미의 ! 연산자를 붙였기 때문에 string 타입으로 간주된다.
 *
 *   ex)
 *          function sayHi(message: string | null) {
 *              if(message && message.length >= 3) {
 *                  console.log(message);
 *              }
 *          }
 *
 * => if문과 !연산자 말고도 논리 연산자를 사용할 수도 있다.
 *
 *   ex)
 *          function sayHi(message: string | null) {
 *              if(message && message.length >= 3) {
 *                  console.log(message);
 *              }
 *          }
 *
 * => if문에 && 연산자를 추가했다. && 연산자는 AND 연산자로 A이면서 B일 때 true를 반환한다는 의미의 논리 연산자이다. 즉 이 if 문은
 *    message가 있으면 message의 length속성이 3이상인지 체크하라는 의미이다. (타입가드 적용 효과)
 */
