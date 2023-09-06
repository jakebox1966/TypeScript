/**
 * 제네릭의 기본 문법
 *
 * - 제네릭의 기본 문법은 다음과 같다.
 *      ex)
 *          function getText<T>(text: T): T {
 *              return text;
 *          }
 *
 * => getText()라는 함수를 실행할 때 아무 타입이나 넘길 수 있다.
 *
 *      ex)
 *          getText<string>('hi');
 *
 *          => 위 코드는 아래와 같이 정의된 효과가 있다.
 *
 *          function getText<string>(text: string): string {
 *              return text;
 *          }
 *
 *          => 궁긍적으로 타입스크립트에서 다음과 같이 선언된 것과 같다.
 *          function getText(text: string): string {
 *              return text;
 *          }
 *
 */
