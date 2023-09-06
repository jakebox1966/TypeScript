/**
 * 인터페이스에 제네릭 사용하기
 *
 * - 제네릭은 함수뿐만 아니라 인터페이스에서도 사용할 수 있다.
 *
 * ex)
 *      // 드롭다운 유형별로 각각의 인터페이스를 연결
 *      var product: ProductDropdonw;
 *      var stock : StockDropdown;
 *      var address: AddressDropdown;
 *
 *      // 드롭다운 유형별로 하나의 제네릭 인터페이스를 연결
 *      var product: Dropdown<string>;
 *      var stock: Dropdown<number>;
 *      var address: Dropdown<{city: string; zipCode: string}>;
 *
 * => 위 에서 '위' 코드는 유형별로 각각의 인터페이스를 작성했지만 '아래' 코드는 Dropdown 인터페이스를 제네릭으로 연결시킴으로서
 *    하나의 타입으로 정의할 수 있다.
 *
 * => 인터페이스에도 제네릭을 사용하여 타입을 유연하게 확장할 수 있다.
 */
