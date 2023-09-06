/**
 * 클래스 접근 제어자
 *
 * - 클래스 속성의 노출 범위를 정의할 수 있는 접근 제어자는 복잡한 기능을 구현할 때 유용하게 쓰일 수 있다.
 *
 * 1. 클래스 접근 제어자의 필요성
 * - 간단한 코드로 클래스 속성이 의도치 않게 변경되었을때 발생하는 에러 방지 (은행 출금, 카드 결제 등 예민한 부분의 에러...ETC)
 *
 * 2. 클래스 접근 제어자 : public, private, protected
 * - public : public 접근 제어자는 클래스 안에 선언된 속성과 메소드를 어디서든 접근할 수 있게 한다. (default)
 *      ex)
 *          class WaterPurifier {
 *              public waterAmount: number;
 *
 *              constructor(waterAmount: number) {
 *                  this.waterAmount = waterAmount;
 *              }
 *
 *              ...
 *          }
 *
 * - private : 클래스 코드 외부에서 클래스의 속성과 메소드를 접근할 수 없다. 클래스안 로직을 외부 로직으로부터 단절시켜 보호할 때 사용한다.
 *      ex)
 *          class Person {
 *              private name: number;
 *              private skill: string;
 *
 *          constructor(name: string, skill: string) {
 *              this.name = name;
 *              this.skill = skill;
 *              }
 *              ...
 *          }
 *
 * => private으로 지정된 속성과 메소드는 클래스 인스턴스에서 자동 완성을 지원하지 않는다.
 *
 * - protected : 상속받은 클래스에서만 사용할 수 있다.
 *      ex)
 *          class Person {
 *              private name: string;
 *              private skill: string;
 *
 *              constructor(name: string, skill: string) {
 *                  this.name = name;
 *                  this.skill = skill;
 *              }
 *
 *              protected sayHi(): void {
 *                  console.log('hi')
 *              }
 *          }
 *
 * => 위 Person 클래스를 상속받은 클래스가 있다면 해당 클래스내부에서 Person 클래스의 클래스속성에는 접근할 수 없다. 하지만 protected로 지정된
 *    sayHi() 메소드에는 접근할 수 있다.
 *
 * => protected를 사용하면 해당 클래스와 자식 클래스에서는 사용할 수 있고 클래스 외부에서는 사용할 수 없다. private와 비슷하면서도 좀 더 상속에 유연하다.
 *
 * ** 클래스 접근 제어자를 사용할 때 주의해야할 점
 * - 클래스 접근 제어자를 사용할 때 주의해야 할 점은 접근 범위에 따라 실행까지 막아 주지 않는다는 것이다.
 * - private의 실행 결과까지도 클래스 접근 제어자와 일치시키고 싶다면 자바스크립트의 private문법(#)을 사용하면 된다. (ECMA2020에 추가 / 타입스크립트 버전 3.8이상)
 *  ex)
 *          class WaterPurifier {
 *              #waterAmount: number;
 *
 *              constructor(amount: number) {
 *                  this.#waterAmount = amount;
 *              }
 *              ...
 *          }
 * => 위의 코드가 타입스크립트 파일에서 정상적으로 인식되려면 타입스크립트 설정 파일의 target 속성을 2015 이상으로 변경해야한다.
 * ex)
 *          //tsconfig.json
 *          {
 *              "compilerOptions": {
 *                  "target": "ES2015"
 *              }
 *          }
 *
 */
