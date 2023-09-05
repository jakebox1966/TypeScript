/**
 * 타입 스크립트의 기본 타입
 * 
 * 변수나 함수의 타입을 정의할 때 사용 할 수 있는 타입 종류
 * - string : 문자열
 *      ex) 
 *          var name: string = 'captain'
 * 
 * - number : 숫자
 *      ex) 
 *          var age: number = 100
 * 
 * - boolean : boolean(true/false)
 *      ex)
 *          var isLogin: boolean = false
 * 
 * - object : 객체 => 타입스크립트의 장점을 극대화하려면 가급적 타입을 최대한 구체적으로 선언
 *      ex)
 *          var hero: object = { name: 'captain' , age: 100 }
 * 
 * - array : 배열 
 *      ex) 
 *          * 문자열배열
 *          var companies: Array<string> = ['네이버', '삼성', '인프런']
 *          var compaines: string[] = ['네이버', '삼성', '인프런']
 * 
 *          * 숫자 배열
 *          var cards: Array<number> = [1,2,3]
 *          var cards: number[] = [1,2,3]
 * 
 * - tuple : 특정 형태를 갖는 배열을 의미 => 길이가 고정되고 요소 타입이 정의된 배열
 *      ex)
 *         var items: [string, number] = ['hi', 11]
 * 
 * - any : 아무데이터나 취급하겠다는 의미 => 타입스크립트에서 자바스크립트의 유연함을 취하려고 할 때 사용하는 타입(타입스크립트에 능숙해짐에 따라 사용 지양)
 *      ex)
 *          var myName: any = '캡틴'
 *          myName = 100
 *          var age: any = 21
 * 
 * - null & undefined : 자바스크립트에서 null은 의도적인 빈 값을 의미(의도적으로 값을 비어 두고 싶을 때 사용) / undefined는 변수를 선언할 때 값을 할당하지 않으면 기본적으로 할당되는 초깃값
 *      ex)
 *          var empty: null = null
 *          var nothingAssigned: undefined
 */