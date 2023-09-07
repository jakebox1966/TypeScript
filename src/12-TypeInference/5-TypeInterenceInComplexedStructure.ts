/**
 * 복잡한 구조에서 타입 추론 방식
 *
 * ex)
 *      interface Dropdown<T> {
 *          title: string;
 *          value: T;
 *      }
 *
 *      interface DetailedDropdown<K> extends Dropdown<K> {
 *          tag: string;
 *          description: string;
 *      }
 *
 *      let item: DetailedDropdown<number> = {
 *
 *      }
 *
 * => Dropdown 인터페이스를 상속받은 DetailedDropdown 인터페이스를 타입으로 정의했기 때문에 DetailedDropdown은 아래와 같은 타입과 역할이 같다.
 *      ex)
 *
 *          interface DetailedDropdown {
 *              tag: string;
 *              description: string;
 *              title: string;
 *              value: number;
 *          }
 *
 * => DetailedDropdown 인터페이스에 넘긴 제네릭 타입이 Dropdown 인터페이스의 제네릭 타입으로 전달되었다. DetailedDropdown 인터페이스는 제네릭으로
 *    타입을 받을 수 있게 선언했지만, 실제로 DetailedDropdown 인터페이스 내부에서는 제네릭으로 받은 타입을 사용하지 않는다. 오히려 부모인 Dropdown 인터페이스의
 *    제네릭 타입으로 넘겨주는 창구 역할을 하고있다. (DetailedDropdown 인터페이스를 선언할 때 제네릭 타입에 정의한 number가 Dropdown 인터페이스의
 *    제네릭 타입으로 전달)
 */
