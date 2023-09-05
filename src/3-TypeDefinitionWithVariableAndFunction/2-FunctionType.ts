/**
 * 함수의 타입 정의 : 파라미터와 반환값의 타입을 정의
 * 
 *      Ex)
 *          function sayWord(word : string): string {
 *              return word
 *          }
 *      => 함수의 반환값으로 문자열 타입을 지정하고 함수의 파라미터로 문자열 타입을 지정
 * 
 *  * 자바스크립트 함수에서는 파라미터와 인자의 개수가 일치하지 않아도 프로그래밍상 문제없지만 타입스크립트에서는 파라미터와 인자가 일치하지 않으면 오류가 발생한다.
 *      => 해당 제약을 없애기 위해서 사용할 수 있는 것이 OptionalParameter이다.
 *      Ex)
 *          function sayMyName(firstNAme: string, lastName?: string) : string {
 *              return 'my name : ' + firstName + '' + lastName
 *          }
 *          
 *          sayMyName('Captain') => my name: Captain
 * 
 *      => 두 번째 파라미터에 ?를 붙여서 옵셔널 파라미터로 정의할 수 있다. 위의 예시에서 두 번째 인자를 넘기지 않아도 타입 에러가 발생하지 않는다.
 */