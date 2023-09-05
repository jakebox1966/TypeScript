/**
 * 인터페이스로 정의된 객체의 속성을 선택적으로 사용하고 싶을 때 옵션 속성을 사용한다.
 *
 * ex)
 *      interface Person {
 *          name?: string;
 *          age: number;
 *      }
 *
 *      function logAge(someone: Person) {
 *          console.log(someone.age);
 *      }
 *
 *      const captain = { age: 100 };
 *      logAge(captain);
 *
 *      => interface의 속성에 ? 를 추가하여 option속성을 지정하여 코드에서 필요하지 않은
 *         name 속성은 생략하고 age 속성만 정의한 채 함수의 인자로 넘길 수 있다.
 *
 */
