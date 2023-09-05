/**
 * 이넘이란?
 *
 * - 이넘(enum)은 특정 값의 집합을 의미하는 데이터 타입이다. (상수 집합이라고도 표현)
 *   ex)
 *          function getDinnerPrice() {
 *              return 10000 + 2000;
 *          }
 *
 * => 위 예제 코드에서는 10000 과 2000이 각각 무슨 메뉴를 의미하는지 알 수 없다. 이때 상수를 사용하여 각 숫자 값에 의미를 부여할 수 있다.
 *   ex)
 *          function getDinnerPrice() {
 *              const RICE = 10000;
 *              const COKE = 2000;
 *              return RICE + COKE;
 *          }
 *
 * => 상수는 단순히 고정된 값을 저장하는 것뿐만 아니라 이 값이 어떤 의미를 갖는지 알려 줌으로써 가독성을 높이는 장점이 있다.
 * => 위의 상수를 하나의 단위로 묶으면 이넘(Enum)이 된다. 비슷한 성격이나 같은 범주에 있는 상수를 하나로 묶어 더 큰 단위의 상수로
 *    만드는 것이 이넘의 역할이다.
 *
 *
 */