/**
 * 인터페이스와 제네릭의 추론 방식
 *
 * ex)
 *      interface Dropdown<T> {
 *          title: string;
 *          value: T;
 *      }
 *
 * => Dropdown 이라는 인터페이스를 선언하고 제네릭으로 인터페이스 속성 value에 연결했다.
 *
 * ex)
 *      let item: Dropdown<number> = {
 *          title: => 여기의 타입은 string
 *          value: => 여기의 타입은 제네릭으로 넘겨받은 number 타입이 지정
 *
 *      }
 *
 * => Dropdown 인터페이스의 제네릭 타입으로 number를 넘겼기 때문에 Dropdown<number> 타입은 다음과 같은 효과를 가진다.
 *
 *      interface Dropdown {
 *          title: string;
 *          value: number;
 *      }
 *
 *
 */
