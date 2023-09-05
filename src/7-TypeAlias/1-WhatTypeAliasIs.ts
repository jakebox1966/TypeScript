/**
 *  타입 별칭이란?
 *
 * - 타입 별칭(type alias)은 특정 타입이나 인터페이스 등을 참조할 수 있는 타입 변수를 의미한다. 자바스크립트의 변수처럼 해당 타입이
 *   어떤 역할을 하는지 이름을 짓고 싶을 때 사용할 수도 있고, 여러 번 반복되는 타입을 변수화해서 쉽게 표기하고 싶을 때도 사용한다.
 *   ex)
 *          type MyName = string;
 *
 *          const capt: string = '캡틴';
 *
 *          type MyName = string;
 *
 *          const capt: MyName = '캡틴';
 *
 * - 타입 별칭을 썼을 때 가장 큰 장점은 반복되는 타입 코드를 줄여 줄 수 있다.
 *
 *   ex)
 *          type MyMessage = string | number;
 *          function logText(text: MyMessage) {
 *              // ...
 *          }
 *
 *          var message: MyMessage = '안녕하세요';
 *          logText(message);
 *
 * => 타입 별칭을 사용하면 타입에 의미를 담아 여러 곳에 재사용할 수 있다.
 *
 *  ** 타입 변수라고 표현했다고 해서 타입을 선언하고 다시 다른 타입을 할당할 수 없다. 다음 코드는 에러가 발생한다.
 *  ex)
 *      type MyName = string;
 *      type MyName = number; // 에러 발생
 *
 */
