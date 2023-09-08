/**
 * 타입 가드 문법
 *
 * - 타입 가드에 사용하는 주요 연산자는 아래와 같다.
 *  1)  typeof
 *  2)  instanceof
 *  3)  in
 *
 * 1. typeof
 *      ex)
 *          typeof 10; // ====> 'number'
 *          typeof 'hello' // ====> 'string'
 *          typeof function(){} // ====> 'function
 *
 * => 특정 코드의 타입을 문자열로 반환해 준다.
 *
 *      ex)
 *          function printText(text: string | number) {
 *              if(typeof text === 'string') {
 *                  // 이 블록 안에서는 text 타입이 string 타입으로 간주된다.
 *                  text
 *              }
 *
 *              if(typeof text === 'number') {
 *                 // 이 블록 안에서는 text 타입이 number 타입으로 간주된다.
 *                  text
 *              }
 *          }
 *
 * => if 문과 typeof 연산자를 조합하여 타입에 따라 특정 로직을 실행하게끔 할 수 있다. 또한 if문 안에서는 각 타입에 맞는 API를 API미리보기
 *    목록에서 확인할 수 있다.(자동 완성 기능)
 *
 * 2. instanceof
 *
 *      ex)
 *          class Person {
 *              name: string;
 *              age: number;
 *          }
 *
 *          constructor(name, age) {
 *              this.name = name;
 *              this.age = age;
 *          }
 *
 *          function fetchInfoByProfile(profile: Person | string) {
 *              // ...
 *          }
 *
 * => 위 함수에서는 fetchInfoByProfile() 이라는 함수의 파라미터에 Person 클래스와 string을 유니언 타입으로 선언했다. 그리고 이 함수가 파라미터의
 *    값에 따라 다른 정보 데이터를 가져오는 함수라 가정하고 파라미터가 Person 클래스 모양의 객체라면 콘솔에 출력하고, string 타입이라면 경고창을
 *    표시한다고 하면 instanceof 연산자를 사용하여 Person 클래스로 생성된 객체인지 구분할 수 있다.
 *
 *      ex)
 *          function fetchInfoByProfile(profile: Person | string) {
 *              if(profile instanceof Person) {
 *                  // 이 블록 안에서는 profile의 타입이 Person 타입으로 간주된다.
 *              }
 *          }
 *
 * => if 문 블록 안에서는 profile이 Person 타입으로 추론되기 때문에 Person 타입의 name과 age 속성에 접근할 수 있다.
 * => instanceof는 주로 클래스 타입이 유니언 타입으로 묶여 있을 때 타입을 구분하기 위해 사용한다.
 *
 * 3. in
 * - in 연산자는 typeof, instanceof 연산자와 마찬가지로 객체에 속성이 있는지 확인해준다. (객체에 특정 속성의 유무에 따라 true/false 반환)
 *      ex)
 *          var book = {
 *              name: '길벗 타입스크립트',
 *              rank: 1
 *          }
 *
 *          console.log('name' in book); // true
 *
 * => 위 코드에서 name이라는 속성이 book이라는 객체안에 있기 때문에 true를 반환한다.
 *
 *      ex)
 *          interface Book {
 *              name: string;
 *              rank: number;
 *          }
 *
 *          interface OnlineLecture {
 *              name: string;
 *              url: string;
 *          }
 *
 *          function learncourse(material: Book | OnlineLecture){
 *             if('url' in material) {
 *                  // 이 블록 안에서는 material의 타입이 OnlineLecture 타입으로 추론된다.
 *              }
 *
 *             if('rank' in material) {
 *                  // 이 블록 안에서는 material의 타입이 Book 타입으로 추론된다.
 *              }
 *          }
 *
 * => 위 처럼 in 연산자를 사용하여 인터페이스 2개가 유니언 타입으로 연결되어 있을 때 특정 인터페이스로 구분지어 로직을 실행하고 해당 타입의 속성에
 *    접근할 수 있다.
 * => 만약 두 개의 인터페이스에 공통된 속성이 정의되어있고 해당 속성으로 in을 사용하여 체크하면 특정 타입으로 구분해 주지 않는다. (타입 가드 역할을 하지 못함)
 *    즉 in을 타입 가드로 사용하여 특정 타입을 걸러 내려`면 해당 타입이 다른 타입과 구분되는 유일한 특정을 조건으로 걸어야 한다.
 *
 *
 *
 *
 *
 *
 */
