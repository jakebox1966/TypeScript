/**
 * 클래스의 상속
 *
 * - 클래스의 상속이란 부모클래스의 속성과 메소드 등을 자식 클래스에서도 사용할 수 있게 물려준다는 의미이다.
 *
 *  ex)
 *          class Person {
 *              constructor(name, skill) {
 *                  this.name = name;
 *                  this.skill = skill;
 *              }
 *
 *              sayHi(){
 *                  console.log('hi');
 *              }
 *          }
 *
 *          class Developer extends Person {
 *              constructor(name, skill) {
 *                  super(name, skill);
 *              }
 *
 *              coding() {
 *                 console.log('fun');
 *              }
 *          }
 *
 * => 위 코드는 Person 클래스를 상속받아 Developer 클래스를 정의한다.
 * => extends 키워드를 사용해서 Person 클래스를 상속받았다.
 * => super(name, skill) 코드는 자식 클래스인 Developer 클래스에서 new 키워드로 객체를 생성할 때 부모 클래스인 Person 클래스의 생성자 메소드를
 *    호출하겠다는 의미이다.
 * => Developer 클래스로 생성된 인스턴스로 부모 클래스 Person에 정의된 sayHi() 메소드 호출도 가능하고 클래스 속성에도 접근할 수 있다.
 * => 상속을 하면 클래스 인스턴스뿐만 아니라 자식 클래스 코드 내부에서도 부모 클래스의 속성이나 메소드를 접근할 수 있다.
 *
 * ** 클래스를 상속받으면 기존 클래스에 정의된 속성과 메소드를 재활용할 수 있어 객체 지향 프로그래밍에서 유용하다.
 */
