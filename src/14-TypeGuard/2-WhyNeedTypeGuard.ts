/**
 * 타입가드가 필요한 이유
 *
 * ex)
 *      function updateInput(textInput: number | string | boolean) {
 *          textInput.toFixed(2);
 *      }
 *
 * => 위 코드는 에러가 난다. 유니언 타입으로 선언되었을때는 각 타입에서 모두 사용할 수 있는 속성과 API만 접근해야 하기 때문이다.
 *    이 에러를 해결하기 위해 타입 단언을 사용할 수 있지만, 실행 시점의 에러를 막을 수 없다는 점, 타입 단언을 계속해서 사용해야 한다는 점에서
 *    문제가 발생한다.
 *
 * 타입 가드로 문제점 해결하기
 *
 * ex)
 *      function updateInput(textInput: number | string | boolean) {
 *
 *          if(typeof textInput === 'number') {
 *              textInput.toFixed(2);
 *              return
 *          }
 *
 *          if(typeof textInput === 'string') {
 *              console.log(textInput.length);
 *              return
 *          }
 *      }
 *
 * => 위의 코드처럼 타입가드를 사용하면 함수 안에서 타입별로 나누어 로직을 작성할 수 있다. (타입에러 x 실행에러 x)
 */
