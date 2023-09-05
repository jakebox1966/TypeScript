/**
 * 타입 별칭과 인터페이스의 차이점
 *
 * 1. 코드 에디터에서 표기 방식 차이
 * 2. 사용할 수 있는 타입의 차이
 *      => 인터페이스는 주로 객체의 타입을 정의하는 데 사용하는 반면, 타입 별칭은 다음과 같이 일반 타입에 이름을 짓는 데 사용하거나
 *         유니언 타입, 인터섹션 타입 등에도 사용할 수 있다.
 *
 *          ex)
 *              type ID = string;
 *              type Product = TShirt | Shoes;
 *              type Teacher = Person & Adult;
 *
 *      => 반대로 이런 타입들은 인터페이스로 정의할 수 없다. 또한 타입 별칭은 제네릭이나 유틸리티 타입 등 다양한 타입에 사용할 수 있다.
 *
 *      => 혹은 인터페이스와 타입 별칭의 정의를 함께 사용할 수도 있다.
 *
 *          ex)
 *
 *            interface Person {
 *              name: string;
 *              age: number;
 *            }
 *
 *            type Adult = {
 *              old: boolean;
 *            }
 *
 *            type Teacher = Person & Adult
 *
 * 3. 타입 확장 관점에서의 차이
 * - 타입 확장이란 이미 정의되어 있는 타입들을 조합해서 더 큰 의미의 타입을 생성하는 것을 의미한다.
 *   타입 별칭과 인터페이스는 타입을 확장하는 방식이 다르다.
 *
 *   => 인터페이스는 타입을 확장할 때 상속이라는 개념을 이용한다. (extends)
 *      ex)
 *          interface Developer extends Person {
 *              skill: string;
 *          }
 *
 *   => 타입 별칭은 인터섹션 타입으로 객체 타입을 2개 합쳐서 사용할 수 있다.
 *      ex)
 *          const joo: Person & Developer = {
 *              name: '형주',
 *              age: 21,
 *              skill: '웹개발'
 *          }
 *
 *   => 인터페이스와 타입 별칭 모두 타입을 확장할 수는 있지만 방식이 다르다.
 *
 *   => 인터페이스의 선언 병합 (declaration merging) : 인터페이스는 동일한 이름으로 인터페이스를 선언하면
 *      인터페이스 내용을 합치는 특성이 있다.
 *      ex)
 *          interface Person {
 *              name: string;
 *              age: number;
 *          }
 *
 *          interface Person {
 *              address: string;
 *          }
 *
 *          const seho: Person {
 *              name: '세호';
 *              age: 30,
 *              address: '광교'
 *          }
 *
 *
 *
 */
