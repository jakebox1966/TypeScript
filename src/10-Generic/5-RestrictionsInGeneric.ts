/**
 *  제네릭의 타입 제약
 *
 * - 제네릭의 타입 제약은 제네릭으로 타입을 정의할 때 좀 더 정확한 타입을 정의할 수 있게 도와주는 문법이다.
 * - extends, keyof 등의 키워드 사용
 *
 * 1. extends를 사용한 타입 제약
 * - 모든 타입이 아닌 몇 개의 타입을 제네릭으로 받고 싶다면 아래와 같이 extends 키워드를 사용해서 함수를 선언할 수 있다.
 *   ex)
 *      function embraceEverything<T extends string>(thing: T): T {
 *          return thing;
 *      }
 *
 * => 제네릭을 선언하는 부분에 <T extends 타입> 과 같은 형태로 코드를 작성해 주면 T에 할당된 타입이외의 타입을 넘기려고 할 경우 에러가 발생한다.
 *
 * 2. 타입 제약의 특징
 * - 일반적으로 타입을 제약할 때는 여러 개의 타입 중 몇 개만 쓸 수 있게 제약한다. 예를 들어 다음과 같이 length 속성을 갖는 타입만 취급하겠다고 하면
 *   받을 수 있는 타입은 string, array, object가 된다.
 *   ex)
 *      function lengthOnly<T extends { length: number }>(value: T) {
 *          return value.length;
 *      }
 *
 * => 이 제약 조건에 해당하지 않는 number나 boolean등 다른 데이터 타입이 온다면 에러가 발생한다.
 *
 * * 참고로 lengthOnly<number>(100) 으로 선언하지 않고 lengthOnly(100) 으로만 선언해도 제네릭에 number 타입을 넘긴 것과 같은 효과가 나타난다. 인자로
 *   넘긴 데이터가 숫자 100이기 때문에 lengthOnly() 함수 내부적으로 파라미터 타입인 number를 제네릭에 연결해준 것이다.
 *
 * 3. keyof를 사용한 타입 제약
 * - keyof는 특정 타입의 키 값을 추출해서 문자열 유니언 타입으로 변환해준다.
 *   ex)
 *      type DeveloperKeys = keyof { name: string; skill: string; }
 *
 *   => 위 코드는 keyof 키워드를 사용하여 객체의 키를 DeveloperKeys라는 타입 별칭에 담아 두는데 DeveloperKeys 타입에 마우스 커서를 올리면
 *      다음과 같이 객체의 키가 유니언 타입으로 변환된다.
 *
 *      type DeveloperKeys = "name" | "skill"
 *
 *   => keyof의 대상이 되는 객체에 name과 skill 이라는 속성(키 값)이 있기 때문에 이 키를 모두 유니언 타입으로 연결해서 반환해 주었다. 속성이 3개면
 *      속성 1 | 속성 2 | 속성 3 형태의 유니언 타입이 반환된다.
 *
 *   ex)
 *      function printKeys<T extends keyof { name: string; skill: string; }(value: T) {
 *          console.log(value);
 *      }
 *   => 다음 코드는 객체의 키 값만 인자로 받아 출력할 수 있도록 제네릭의 타입 제약을 걸어 놓은 함수이다. 의미는 name과 skill 속성을 갖는 객체의 키만
 *      타입으로 받겠다고 정의한 것인데, 이 함수의 제네릭은 파라미터인 value에 연결되어 있기 때문에 함수를 호출할 때 넘길 수 있는 인자는
 *      문자열 name과 skill뿐이다. 다른 값, 예를 들어 같은 문자열이라고해서 'address' 같은 인자가 넘어가면 에러가 난다.
 *
 *   => extends를 이용해서 제네릭의 타입을 제약할 때 keyof를 함께 사용하여 타입의 제약 조건을 까다롭게 만들 수 있다.
 */
