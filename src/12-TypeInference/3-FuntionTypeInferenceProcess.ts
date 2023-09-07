/**
 * 함수의 타입 추론: 반환 타입
 *
 *      ex)
 *          function sum(a: number, b: number): number {
 *              return a + b
 *          }
 *
 * => 위 함수를 호출하여 반환된 결과 값을 변수에 할당하면 number 타입으로 추론된다.
 *
 *      ex)
 *          var result = sum(1,2) // result변수는 number 타입
 *
 * => 변수의 타입 추론 과정과 마찬가지로 함수도 주어진 입력 값에 따라 함수의 반환 타입이 추론된다.
 *
 *      ex)
 *          function sum(a:number, b: number;) {
 *              return a == b;
 *          }
 *
 * => 위와같이 함수 내부 로직에서 덧셈 연산자가 아닌 비교 연산자를 사용해서 결과값을 반환하면 반환타입은 boolean이 지정된다.
 *
 *
 * => '함수의 파라미터 타입과 내부 로직으로 반환 타입이 자동으로 추론'
 *
 *
 * 함수의 타입 추론: 파라미터 타입
 *
 *      ex)
 *          function getA(a){
 *              return a;
 *          }
 *
 *          function getA(a:number){
 *              return a;
 *          }
 *
 * => 첫 번째 함수는 파라미터 타입을 지정하지 않았으므로 기본 타입은 any가 되고 any로 지정되있는 파라미터를 그대로 반환해 주었기 때문에 반환 타입 역시 any이다.
 * => 두 번째 함수도 같은 논리에서 파라미터 타입과 반환타입이 number로 지정된다.
 *
 *      ex)
 *          function getA(a=10) {
 *              return a;
 *          }
 *
 * => 위 함수의 경우 기본값이 숫자 10이기 때문에 a 파라미터의 타입은 number로 추론된다. 그리고 함수의 파라미터에 값을 넘기거나 넘기지 않아도 되기 때문에
 *    옵셔널 파라미터를 의미하는 ? 가 붙는다. 파라미터 타입이 number이므로 반환 타입 역시 number로 추론된다.
 *
 *      ex)
 *          function getA(a:number){
 *              let c = 'hi';
 *              return a + c;
 *          }
 *
 * => 위 함수에서는 함수 안에 c라는 변수를 선언하고 문자열 hi를 할당했다. 숫자 타입인 a 파라미터와 문자열 타입인 c 변수를 덧셈한 결과는 문자열이기 때문에
 *    반환타입은 문자열로 추론된다. (자바스크립트 해석기의 동작 방식 때문)
 *
 */
