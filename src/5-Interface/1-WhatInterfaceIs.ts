/**
 * 인터페이스란?
 * - 인터페이스라는 용어는 맥락에 따라 다른 의미로 해석될 수 있지만
 *   타입스크립트에서 인터페이스(interface)는 객체 타입을 정의할 때 사용하는 문법이다.
 *   인터페이스로 타입을 정의할 수 있는 부분은 다음과 같다.
 *   1. 객체의 속성과 속성 타입
 *   2. 함수의 파라미터와 반환 타입
 *   3. 함수의 스펙(파라미터 개수와 반환값 여부 등)
 *   4. 배열과 객체를 접근하는 방식
 *   5. 클래스
 *
 *
 * 인터페이스를 이용한 객체 타입 정의
 *   Ex)
 *      interface User {
 *          name: string;
 *          age: number;
 *      }
 *
 *      const seho: User = { name: '세호', age: 36 }
 *
 *      => 인터페이스의 타입과 맞지 않는 객체에 인터페이스를 지정하거나
 *         인터페이스에 지정되어 있지 않는 속성이 객체의 속성으로 지정되었을 경우 오류 발생
 *
 *
 * 인터페이스를 이용한 함수 타입 정의
 *
 * 1. 함수 파라미터 타입 정의
 *
 * ex)
 *      interface Person {
 *          name: string;
 *          age: number;
 *      }
 *
 *      function logAge(someone: Person) {
 *          console.log(someone.age);
 *      }
 *
 *      const captain = { name: 'Capt', age: 100 }
 *      logAge(captain); // 100
 *
 *      => 함수의 파라미터에 정의한 타입 조건을 만족하는 데이터만 인자로 넘길 수 있다.
 *
 * 2. 함수 반환 타입 정의
 *
 * ex)
 *      interface Person {
 *          name: string;
 *          age: number;
 *      }
 *
 *      function getPerson(someone: Person) : Person {
 *          return someone;
 *      }
 *
 *      const hulk = getPerson({name: 'Hulk', age: 99});
 *
 *      => getPerson 함수의 호출결과를 변수에 할당하면 해당 변수가 Person 인터페이스 타입으로 추론된다.
 *
 */
