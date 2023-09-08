/**
 * 타입 가드 함수
 *
 * - 타입 가드 함수란 타입 가드 역할을 하는 함수를 의미한다. 주로 객체 유니언 타입 중 하나를 구분하는데 사용하며, in 연산자와 역할은 같지만
 *   좀 더 복잡한 경우에도 사용할 수 있다.
 *   ex)
 *          function isPerson(someone: Person | Developer): somone is Person {
 *              //...
 *          }
 *
 * => 위 코드는 Person 타입과 Developer 타입 중 Person 타입으로 구분하는 타입 가드 함수 이다.
 *
 *   ex)
 *          function isPerson(someone: Person | Developer): someone is Person {
 *              return (someone as Person).age !== undefined;
 *          }
 *
 * => 이 함수의 파라미터는 Person 타입과 Developer 타입의 유니언 타입으로 정의되었다. 유니언 타입으로 정의된 파라미터는 별도의 타입 가드를
 *    적용하지 않으면 함수 내부에서 공통 속성만 접근할 수 있다. 따라서 타입 단언 키워드인 as를 사용하여 Person 타입으로 추론을 강제한 후 age 속성에
 *    접근한다. 그리고 age 속성이 있는지 없는지를 !== undefined로 체크한다. 마지막으로 이 함수의 반환 타입을 보면 is 연산자를 사용하여 someone
 *    파라미터가 Person 타입인지 체크한다. 이것이 타입가드 함수다. (Person과 Developer 타입의 값을 받아 Person 타입의 속성이 있는지 확인한 후
 *    속성이 있다면 Person 타입으로 간주하라.)
 *
 *   ex)
 *          interface Person {
 *              name: string;
 *              age: number;
 *          }
 *
 *          interface Developer{
 *              name: string;
 *              skill: string;
 *          }
 *
 *          function isPerson(someone: Person | Developer): someone is Person {
 *              return (someone as Person).age !== undefined;
 *          }
 *
 *          function greet(someone: Person | Developer) {
 *              if (isPerson(someone)) {
 *                  console.log('사람의 나이는 ', someone.age);
 *              } else {
 *                  console.log('개발자의 스킬은', someone.skill);
 *              }
 *          }
 *
 * => 위 코드 if문 안에서 someone 파라미터는 Person타입으로 추론된다. else 문에서 someone 파라미터는 isPerson() 함수 조건을 만족하지 않기 때문에
 *    Developer 타입으로 간주된다.
 *
 * => 복잡한 유니언 타입을 구분하는데 in보다 효율적이고 정확도가 높다.
 */
