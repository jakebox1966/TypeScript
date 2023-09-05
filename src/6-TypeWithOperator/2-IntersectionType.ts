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
 *  => 위 함수는 Avenger 타입과 Hero 타입을 인터섹션 타입으로 정의했기 때문에 Someone 파라미터에는 두 타입의 name과 skill 속성을 모두 사용할 수 있다.
 *     따라서 다음과 같이 introduce() 함수를 호출할 때 name과 skill 속성을 가진 객체를 인자로 넘길 수 있다. 하지만 name이나 skill 속성 중 하나라도
 *     누락하여 객체를 넘기면 에러가 발생한다. (교집합으로 생각) 이 에러는 introduce() 함수의 파라미터가 Avenger와 Hero 타입의 인터섹션 타입으로
 *     정의되어 있기 때문에 두 타입의 모든 속성을 만족하는 객체를 인자로 넘겨야 한다는 의미이다.
 *
 */
