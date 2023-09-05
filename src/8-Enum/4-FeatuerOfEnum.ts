/**
 * 이넘의 특징
 *
 * 1. 혼합 이넘
 * - 이넘을 다음과 같이 숫자와 문자열을 섞어서 선언할 수 있다. (추천 안함)
 *      ex)
 *          enum Answer {
 *              Yes = 'Yes',
 *              No = 1
 *          }
 *
 * 2. 다양한 이넘 속성 값 정의 방식
 * - 이넘의 속성 값은 고정 값뿐만 아니라 다양한 형태로 값을 할당할 수 있다.
 *      ex)
 *          enum Authorization {
 *              User, // 0
 *              Admin, // 1
 *              SuperAdmin = User + Admin, // 1
 *              God = "abc".length // 3
 *          }
 * => 먼저 선언되어 있는 이넘의 속성을 활용하여 연산도 가능하다.
 *
 * 3. const 이넘이란?
 * - const 이넘이란 이넘을 선언할 때 앞에 const를 붙인 이넘을 의미한다.
 *      ex)
 *          const enum logLevel {
 *              Debug = "Debug",
 *              Info = "Info",
 *              Error = "Error"
 *          }
 *
 * => const는 변수를 선언할 때 사용하는 예약어인데 이 예약어는 이넘 타입을 정의할 때도 사용할 수 있다. 컴파일 결과물의 코드양을 줄이기 위해서
 *    const 예약어를 사용하는데 이전 숫자형 이넘이 컴파일 되었을 때는 객체가 이넘의 속성 이름과 값을 연결해 주는 객체를 생성해주는데
 *    const 이넘은 이 객체를 생성하지 않고 이넘이 사용되는 곳에서 속성 값을 바로 연결해 준다.
 *
 *
 */