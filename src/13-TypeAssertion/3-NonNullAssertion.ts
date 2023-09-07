/**
 * null 아님 보장 연산자 : !
 *
 * - null 아님 보장 연산자 (non null assertion)는 null 타입을 체크할 때 유용하게 쓰는 연산자이다.
 *   이는 타입 단언의 한 종류로 as 키워드와는 용도가 다르다. => 값이 null이 아님을 보장
 *
 *   ex)
 *          function shuffleBooks(books) {
 *              var result = books.shuffle();
 *              return result;
 *          }
 *
 *          shuffleBooks();
 * => 인자를 넣지않고 suffleBooks라는 함수를 호출하면 에러가 발생한다.(shuffle() 메소드를 갖고 있는 객체를 넘겨야 하는데 아무것도 넘기지 않았기 때문)
 *
 * => 이런 상황을 방지하기위해 null 값 체크 코드를 작성해왔다.
 *
 *  ex)
 *         function shuffleBooks(books) {
 *              if(books === null || books === undefined) {
 *                  return;
 *              }
 *              var result = books.shuffle();
 *              return result;
 *          }
 *
 * => 위와 같이 null 과 undefined에 대한 처리를 해주어 예상치 못한 함수의 입력값으로 인한 에러를 방지할 수 있다.
 *
 * ex)
 *          interface Books {
 *              shuffle: Function
 *          }
 *
 *          function shuffleBooks(books: Books) {
 *              var result = books.shuffle();
 *              return result;
 *          }
 *
 * => 위 코드는 기존의 코드에 타입을 입힌 것이다. Books 라는 인터페이스를 선언하고 shuffleBooks() 함수의 파라미터 아비으로 지정했다.
 *    인터페이스에 shuffle 속성이 있고 호출할 수 있는 형태인 Function 타입으로 정의되어 있기 때문에 타입 관점에서는 문제가 없다.
 *    하지만 함수의 인자로 null 값이 들어올 경우 에러가 발생한다.(인자에 null 값이 오려면 파라미터 타입을 유니언 타입으로 수정)
 *
 * ex)
 *
 *          function shuffleBooks(books: Books | null) {
 *              var result = books.shuffle();
 *              return result;
 *          }
 *
 * => Books 파라미터에 null 값이 들어올 수도 있기 때문에 books.shuffle() 코드는 위험하다고 경고를 표시하는데 이 에러를 해결하려면 별도의
 *    타입스크립트 지식 없이 위에서 했던 null 체크 코드를 추가할 수도 있다. 하지만 매번 null인 경우를 처리하려고 코드를 작성하면 번거롭다.
 *    null이 아니라는 확신이 있다면 아래와 같이 null 아님 보장 연산자(!) 를 사용하면 된다.
 *
 * ex)
 *          function shuffleBooks(books: Books | null) {
 *              var result = books!.shuffle();
 *              return result;
 *          }
 *
 * => shuffle() 메소드를 호출하기 직전에 !를 추가한 것을 볼 수 있는데 이때 !가 바로 null 아님 보장 연산자이다. 이 연산자를 붙이면
 *    'books 파라미터는 null이 아니다' 라고 타입스크립트에게 전달하는 것과 같다.
 * => 다만 타입 관점에서 null이 아니라고 보장하는 것이지 애플리케이션을 실행할 때 실제로 null 값이 들어오면 실행 에러가 발생한다.
 *
 * => 이처럼 as나 !를 사용한 타입 단언이 편리하기는 하지만 실행 시점의 에러는 막아주지 않기 때문에 가급적 타입 단언 보다는 타입 추론에 의지하는 것이 좋다.
 *
 *
 */
