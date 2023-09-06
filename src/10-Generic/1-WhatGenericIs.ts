/**
 * 제네릭이란?
 * - 제네릭은 타입을 미리 정의하지 않고 사용하는 시점에 원하는 타입을 정의해서 쓸 수 있는 문법이다. 함수의 파라미터와 같은 역할을 하는데, 여기서
 *   역할이란 함수의 인자에 넘긴 값을 함수의 파라미터로 받아 함수 내부에서 그대로 사용하는 방식을 의미한다.
 *
 *   ex)
 *          function getText(text) {
 *              return text;
 *          }
 *
 * => getText() 함수의 파라미터인 text는 함수를 호출할 때 어떤 값이든 인자로 받을 수 있다. 그리고 받은 값을 그대로 반환해 주는데, 이 원리를
 *    타입스크립트에 대입해서 '타입을 넘기고 그 타입을 그대로 반환받는다'는 것이 바로 제네릭이다.
 *
 */