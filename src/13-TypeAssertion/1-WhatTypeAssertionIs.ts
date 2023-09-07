/**
 * 타입 단언이란?
 *
 * - 타입 단언(type assertion)은 타입스크립트의 타입 추론에 기대지 않고 개발자가 직접 타입을 명시하여 해당 타입으로 강제하는 것을 의미한다.
 *
 *      ex)
 *          var myName = '세호' as string;
 *
 * => 위와 같이 as 키워드를 붙이면 타입스크립트가 컴파일할 때 해당 코드의 타입 검사는 수행하지 않는다.
 *
 *      ex)
 *
 *          interface Person {
 *              name: string;
 *              age: number;
 *          }
 *
 *          var joo = {}
 *          joo.name = '형주';
 *          joo.age = 31;
 *
 * => 위 코드는 에러가 발생하는데 이유는 joo 변수를 선언할 때 빈 객체로 초기화했기 때문이다.
 * => 객체를 선언하는 시점에 속성을 정의하거나 Person 인터페이스로 변수타입을 설정하면 해결되지만 이미 운영 중인 서비스의 코드나 누군가가 만들어
 *    놓은 코드라고 한다면 타입 에러를 해결하는 데 변경해야 할 코드가 많아질 것이다. 이때 타입 단언을 이용해서 기존 코드를 변경하지 않고도 타입 에러를
 *    해결할 수 있다.
 *      ex)
 *
 *          var joo = {} as Person;
 *          joo.name = '형주';
 *          joo.age = 31;
 *
 * => 타입 단언을 이용하면 타입스크립트 컴파일러가 알기 어려운 타입에 대해 힌트를 제공할 수 있고, 앞의 코드처럼 선언하는 시점에 name과 age 속성을 모두
 *    정의하지 않고 추후에 추가할 수 있는 유연함도 갖게 된다.
 */
