/**
 * 숫자형 이넘
 *
 * - 이넘에 선언된 속성은 기본적으로 숫자 값을 가진다. (첫 번째 속성부터 0,1,2,3이 할당)
 *      ex)
 *          enum Direction {
 *              Up, //0
 *              Down, // 1
 *              Left, // 2
 *              Right // 3
 *           }
 *
 *          console.log(Direction.Up); // 0
 *
 * => 위 Enum 코드를 자바스크립트로 변환하면 아래와 같다.
 *
 *      "use strict";
 *      *var Direction;
 *          (function (Direction) {
 *                  Direction[Direction["Up"] = 0] = "Up";
 *                  Direction[Direction["Down"] = 1] = "Down";
 *                  Direction[Direction["Left"] = 2] = "Left";
 *                  Direction[Direction["Right"] = 3] = "Right";
 *               })(Direction || (Direction = {}));
 *
 *
 * => Direction["Up"] = 0 의 코드에서 볼 수 있듯이 변수의 Up 속성에 0을 할당했기 때문에 Direction.up = 0 이라는 결과가 나온다.
 * => 또한, 그 다음으로 [] 안에서 객체의 속성에 0을 할당하는 코드가 있는데 자바스크립트의 동작 방식에 따라 할당 연산자 =의 할당 값인 0만 남기 때문에
 *    Direction[0] = "Up" 이라는 결과가 나온다.
 *    ex)
 *          Direction.Up = 0;
 *          Direction[0] = "Up";
 *
 * => 이넘의 속성과 값이 거꾸로 연결되어 할당되는 것을 리버스 매핑(reverse mapping) 이라고 한다.
 * => 이넘 속성의 초기값을 변경하고 싶다면 다음과 같이 선언한다.
 *    ex)
 *          enum Direction {
 *              Up = 10,
 *              Down, // 11
 *              Left, // 12
 *              Right // 13
 *          }
 *
 * => 다만 실제 코드를 작성할 때는 값을 명시적으로 설정하는 것이 컴파일 결과를 보지 않고도 값을 빠르게 파악할 수 있다.
 *
 *
 */
