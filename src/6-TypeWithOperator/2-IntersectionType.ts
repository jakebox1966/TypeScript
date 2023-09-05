/**
 * 인터섹션 타입
 *
 * - 인터섹션 타입(intersection type)은 타입 2개를 하나로 합쳐서 사용할 수 있는 타입니다. 보통 인터페이스 2개를 합치거나 타입 정의 여러 개를 하나로
 *   합칠 때 사용한다.
 *
 *   interface Avenger {
 *      name: string
 *   }
 *
 *   interface Hero {
 *      skill: string
 *   }
 *
 *   function introduce(someone: Avenger & Hero) {
 *      console.log(someone.name);
 *      console.log(someone.skill);
 *   }
 *
 */
