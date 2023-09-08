/**
 * 타입 가드란?
 *
 * - 타입 가드(type guard)란 여러 개의 타입으로 지정된 값을 특정 위치에서 원하는 타입으로 구분하는 것을 의미한다.
 *   타입 시스템 관점에서는 넓은 타입에서 좁은 타입으로 타입 범위를 좁힌다는 의미로 볼 수 있다.
 *
 *   ex)
 *          function updateInput(textInput: number | string | boolean) {
 *              // 타입 가드
 *              if(typeof textInput === 'number') {
 *                  textInput
 *              }
 *          }
 *
 * => 이 코드에서 함수안 if문이 타입 가드 역할을 한다. (if 문 안에서 textInput 파라미터는 number 타입으로만 간주된다. )
 *
 */
