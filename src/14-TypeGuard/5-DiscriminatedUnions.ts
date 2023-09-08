/**
 * 구별된 유니언 타입
 *
 * - 구별된 유니언 타입(discriminated unions)이란 유니언 타입을 구성하는 여러 개의 타입을 특정 속성의 유무가 아니라 특정 속성 값으로 구분하는
 *   타입가드 문법을 의미한다. 앞서 살펴본 in 연산자는 속성의 유무에 따라 타입을 구분했지만 이와는 다르게 구별된 유니언 타입은 속성의 문자열 타입
 *   값을 비교해서 타입을 구분한다.
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
 *          if(someone.industry === 'common') {
 *              // someone의 타입은 Person 타입으로 추론된다.
 *          }
 *      }
 *
 */
