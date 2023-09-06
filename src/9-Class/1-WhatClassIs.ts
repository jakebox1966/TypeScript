/**
 * 클래스란?
 *
 * - 클래스란 여러 가지 유사한 객체를 쉽게 생성하는 자바스크립트 최신 문법(ES6+)이다.
 *
 *      ex)
 *          function Person(name, skill) {
 *              this.name = name;
 *              this.skill = skill;
 *          }
 *
 *          var capt = new Person('캡틴', '방패 던지기');
 *          var lee = new Person('길벗', '좋은 책 만들기);
 *
 * => 위 코드처럼 함수의 첫 글자를 대문자로 작성하면 생성자 함수라고 보는 것이 일반적인 관례다.
 * => 생성자 함수는 new 라는 키워드를 붙여서 호출하면 새로운 객체를 생성해 준다.
 *
 * => 위 생성자 함수를 최신 자바스크립트 문법으로 표현하면 아래와 같다.
 *      ex)
 *          class Person {
 *              constructor(name, skill) {
 *                  this.name = name;
 *                  this.skill = skill;
 *              }
 *          }
 *
 * => 위 처럼 생성자 함수라는 일반적인 관례를 문법 레벨로 끌어올린 것이 클래스이다.
 *
 *
 */
