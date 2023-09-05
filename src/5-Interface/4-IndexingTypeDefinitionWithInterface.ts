/**
 * 인터페이스로 객체와 배열의 인덱싱 타입 정의
 *
 * - 인덱싱이란 객체의 특정 속성을 접근하거나 배열의 인덱스로 특정 요소에 접근하는 동작을 의미한다.
 *  ex)
 *      const user = {
 *          name: '캡틴',
 *          admin: true
 *      };
 *
 *      console.log(user['name']);
 *
 *      const companies = ['삼성', '네이버', '구글'];
 *      console.log(companies[0]); // 삼성
 *
 * 1. 배열 인덱싱 타입 정의
 * ex)
 *      interface StringArray {
 *          [index: number] : string;
 *      }
 *
 *      const companies: StringArray = ['삼성', '네이버', '구글'];
 *
 *      => 어떤 숫자든 모두 속성의 이름이 될 수 있다는 의미이다. 그리고 [index: number]: string 에서 속성 이름은 숫자고 그 속성 값으로
 *         문자열 타입이 와야 한다는 의미이다.
 *
 * 2. 객체 인덱싱 타입 정의
 *
 * ex)
 *      interface SalaryMap {
 *          [level: string] : number;
 *      }
 *
 *      const salary: SalaryMap = {
 *          junior: 100
 *      }
 *
 *      => SalaryMap 인터페이스는 속성 이름이 문자열 타입이고 속성 값이 숫자 타입인 모든 속성 이름/속성 값 쌍을 허용하겠다는 의미이다.
 *
 * ** 객체의 속성에 접근하는 방법은 salary['junior'] 또는 salary.junior 모두 가능하지만 속성 이름에 숫자나 - 등 특수 기호가 들어가면 .junior 방식으로
 *    접근할 수 없기 때문에 ['junior'] 방식으로 접근해야 한다.
 *
 *
 * 인덱스 시그니처란?
 * - 위에서 배열과 객체의 인덱싱 타입을 정의할 때는 다음 형태로 인터페이스를 정의했다.
 *
 *      interface SalaryMap {
 *          [level: string] : string
 *      }
 *
 *   이 처럼 정확히 속성 이름을 명시하지 않고 속성 이름의 타입과 속성 값의 타입을 정의하는 문법을 인덱스 시그니처(index signature)라고 한다. 인덱스
 *   시그니처는 단순히 객체와 배열을 인덱싱할 때 활용될 뿐만 아니라 객체의 속성 타입을 유연하게 정의할 때도 사용된다.
 *   위 처럼 인덱스 시그니처 방식을 이용하여 타입을 정의하면 SalaryMap으로 정의한 객체에 무수히 많은 속성을 추가할 수 있다.
 *
 * 인덱스 시그니처는 언제 사용하는가?
 * - 객체의 속성 이름과 개수가 구체적으로 정의되어 있다면 인터페이스에서 속성 이름과 속성 값의 타입을 명시하는 것이 더 효과적이다.
 *      ex)
 *          interface User {
 *              id: string;
 *              name: string;
 *          }
 *
 *          const seho: User = {
 *              id: '1',
 *              name: '세호'
 *          }
 *
 * 인덱스 시그니처가 적용되어 있는 경우에는 코드를 작성할 때 구체적으로 어떤 속성이 제공될지 알 수 없어 코드 자동완성이 되지 않기 때문이다.
 *      ex)
 *          interface User {
 *              [property: string] : string
 *          }
 *
 *          const seho: User = {
 *          }
 *
 * User라는 인터페이스에는 id와 name 속성이 무조건 들어간다고 한다면 다음과 같이 섞어서 정의할 수도 있다.
 *      ex)
 *          interface User {
 *              [property: string]: string,
 *              id: string;
 *              name: string;
 *          }
 *
 *          const seho: User = {
 *              id: '1',
 *              name: '세호'
 *          }
 *
 * => 위 예시와 같이 작성하면 seho 객체에는 id와 name 속성을 정의할 수 있고, 다음과 같이 속성 이름과 값이 모두 문자열인 속성 쌍도 계속 추가할 수 있다.
 *
 * * 이처럼 객체의 속성 이름과 속성 값이 정해져 있는 경우에는 속성 이름과 속성 값 타입을 명시해서 정의하고, 속성 이름은 모르지만 속성 이름의 타입과 값의
 *   타입을 아는 경우에는 인덱스 시그니처를 활용한다.
 *
 */
