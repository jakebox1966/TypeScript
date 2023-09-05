/**
 * 유니언 타입
 *
 * - 유니언 타입(Union Type)은 여러 개의 타입 중 한 개만 쓰고 싶을 때 사용하는 문법이다.
 *
 * ex)
 *      function logText(text: string | number) {
 *          console.log(text);
 *      }
 *
 * => 위 함수의 text 파라미터는 문자열과 숫자를 모두 받을 수 있는 유니언 타입으로 선언되었다. 자바스크립트 OR 연산자의 | 를 이용하여
 *    여러 개의 타입 중 1개를 사용하겠다고 선언하는 방식이 바로 유니언 타입이다.
 *
 * 유니언 타입의 장점
 *
 * - 타입이 다르더라도 같은 동작을 하는 함수의 코드 중복을 줄일 수 있다.
 * - 여러 개의 타입을 받기 위해 any 타입을 사용했을 때와 비교해도 더 타입을 정확하게 사용할 수 있다. => 에러 방지
 *
 * 유니언 타입을 사용할 때 주의할 점
 *
 * ex)
 *
 *      interface Person {
 *          name: string;
 *          age: number;
 *      }
 *
 *      interface Developer {
 *          name: string;
 *          skill: string;
 *      }
 *
 *      function introduce(someone: Person | Developer) {
 *              console.log(someone);
 *      }
 *
 * => 위 예제에서 각 interface의 공통 속성인 name이 아닌 age또는 skill을 introduce 함수에서 출력하려고 하면 에러가 발생한다. 함수의 파라미터에
 *    유니언 타입을 사용하면 함수에 어떤 값이 들어올지 알 수 없기 때문이다. (name은 자동완성기능도 되고 안전하다.) 여기서 함수 내부에서 파라미터 타입의
 *    종류에 따라 특정 로직을 실행하고 싶다면 다음과 같이 in 연산자를 사용해서 로직을 작성해야 한다.
 *
 *      ex)
 *          function introduce(someone: Person | Developer) {
 *              if('age' in someone) {
 *                  console.log(someone.age);
 *                  return;
 *              }
 *
 *              if('skill' in someone) {
 *                  console.log(someone.skill);
 *                  return;
 *              }
 *          }
 *
 * - in 연산자는 객체에 특정 속성이 있는지 없는지 확인하는 자바스크립트 연산자이다.
 *  (in 연산자는 객체에 해당 속성이 있으면 true를 반환하고 그렇지 않으면 false를 반환한다.)
 *
 * - primitive type을 유니언 타입으로 지정했을 경우에도 typeof 라는 자바스크립트 연산자를 사용하여 타입을 구분하여 분기할 수 있다.
 *      ex)
 *          function logText(text: string | number) {
 *              if(typeof text ==='string') {
 *                  console.log(text.toUpperCase());
 *              }
 *              if(typeof text ==='number') {
 *                  console.log(text.toLocaleString());
 *              }
 *          }
 *
 * ** typeof는 해당 데이터가 어떤 데이터 타입을 갖고 있는지 문자열로 반환해 주는 연산자
 *
 */
