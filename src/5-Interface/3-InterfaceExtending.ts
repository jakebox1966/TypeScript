/**
 * 인터페이스 상속
 * - 인터페이스의 상속으로 타입 정의를 확장할 수 있다. 여기서 상속이란 객체 간 관계를 형성하는 방법이며, 상위(부모) 클래스의 내용을 하위(자식) 클래스가
 *   물려받아 사용하거나 확장하는 기법을 의미한다.
 *
 * - extends란 예약어 사용
 *      ex)
 *          interface Person {
 *              name: string;
 *              age: number;
 *          }
 *
 *          interface Developer extends Person {
 *              skill: string;
 *          }
 *
 *          const ironman: Developer = {
 *              name: '아이언맨',
 *              age: 21,
 *              skill: '만들기'
 *          }
 *
 *  => 위 코드는 Person 인터페이스를 선언하고 Developer 인터페이스에 extends로 상속한 것이다. Person 인터페이스에 정의된 name 과 age 속성 타입이
 *     Developer 인터페이스에 상속되었기 때문에 마치 Developer 인터페이스는 다음과 같이 정의한 효과가 나타난다.
 *
 *      interface Developer {
 *          name: string;
 *          age: number;
 *          skill: string;
 *      }
 *
 * 인터페이스를 상속할 때 참고 사항
 * - 상위 인터페이스의 타입을 하위 인터페이스에서 상속받아 타입을 정의할 때 상위 인터페이스의 타입과 호환이 되어야 한다. 여기에서 호환이 된다는 것은
 *   상위 클래스에서 정의된 타입을 사용해야 한다는 의미이다.
 *
 *    interface Person {
 *          name: string;
 *          age: number;
 *      }
 *
 *    interface Developer extends Person {
 *          name: number;
 *      }
 *
 *      => 위 코드는 에러가 발생하는데 Person 인터페이스에서 선언된 name 속성 타입을
 *         자식 인터페이스인 Developer 인터페이스에서 다른 타입으로 정의 했기 때문이다.
 *         인터페이스를 상속하여 사용할 때는 부모 인터페이스에 정의된 타입을 자식 인터페이스에서 모두 보장해 주어야 한다.
 *
 * - 상속은 여러 번 할 수 있다.
 *
 *      interface Hero {
 *          power: boolean;
 *      }
 *
 *      interface Person extends Hero {
 *          name: string;
 *          age: number;
 *      }
 *
 *      interface Developer extends Person {
 *          skill: string;
 *      }
 *
 *      const ironman: Developer = {
 *          name: '아이언맨',
 *          age: 21,
 *          skill: '만들기',
 *          power: true
 *      }
 *
 *      => 위 코드와 같이 상속을 여러 번 받아서 정의할 수 있다.
 */
