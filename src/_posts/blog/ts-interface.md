---
title: 인터페이스를 이용해 타입을 정의해보자
description:
tags:
  - typescript
coverImage:
link:
date: 2023-12-05
---


# 인터페이스

객체 타입을 정의할 때 사용하는 문법

## 타입 정의하기

### 객체 타입

인터페이스를 이용하여 객체의 속성과 들어갈 데이터 타입을 정의할 수 있다.
인터페이스 생성 시 `interface` 키워드를 이용하여 생성하며 선언시 이름은 **대문자**로 시작해야한다.

```tsx
interface User {
	name: string;
	age: number;
}

const yeoning: User = {
	name: 'yeoning',
	age: '100', //error 발생, 숫자가 아님
	gender: 'female' //error 발생, interface에 정의 되어 있지 않음
};
```

인터페이스 타입으로 가지는 값과 맞지 않은 객체에 인터페이스를 지정한다면 에러가 발생한다.
위 코드에서 객체 내 `gender` 는 `interface`에 정의되어 있지 않은 값이기 때문에 에러가 발생하게 된다.
이런 경우 옵션 속성을(optional property) `?` 를 이용해주자.
옵션 속성(선택적 속성)을 사용하면 인터페이스 속성의 사용 여부를 유연하게 결정 할 수 있게 된다.

```tsx
interface User {
	name: string;
	age: number;
	gender?: string;
}

//...(생략)
```

위 코드에서는 `User` 인터페이스에 맞게 `yeoning` 객체에 `gender` 속성이 있어야하지만 옵션 속성(`?`) 을 사용하여 `gender`가 있어도 되고 없어도 된다.

### 함수 타입

```tsx
interface Person {
	name: string;
	age: number;
}

function getPerson(someone: Person): Person {
	return someone;
};

getPerson({
	name: 'yeoning',
	age: 100,
})
```

## 인터페이스의 상속

인터페이스는 `extends`란 상속 예약어를 사용해 타입 정의를 확장 할 수 있다.

<aside>
💡 **상속이란?**
상위(부모) 클래스의 내용을 하위(자식) 클래스가 물려받아 사용하거나 확장하는 기법

</aside>

상속은 여러번 할 수 있으며,
인터페이스를 상속하여 사용할 때는 부모 인터페이스에 정의된 타입을 자식 인터페이스에서 모두 보장해주어야한다.

```tsx
interface Hero {
	power: boolean;
}

interface Person extends Hero { //Hero를 상속 받음
	name: string;
	age: number;
}

interface Developer extends Person { //Person을 상속 받음
	skill: string;
}

const ironman: Developer = {
	name: '아이언맨',
	age: 100,
	skill: '만들기',
	power: true
}
```

## 인덱싱과 인덱스 시그니처


> **인덱싱이란?**  
> 객체의 특정 속성을 접근하거나 배열의 인덱스로 특정 요소에 접근하는 동작을 말한다.

</aside>

```tsx
const user = {
	name: 'yeoning',
	age: 100
}
console.log(user['name']); //yeoning

const colors = ['red', 'blue', 'green']
console.log(colors[1]); //blue
```

위 코드처럼 `user['name']` 의 형태로 특정 속성에 접근하거나 `colors[1]` 형태로 배열의 특정 요소에 접근하는 것을 **인덱싱** 이라고 한다.

배열이나 객체를 인덱싱 할 때 인터페이스로 인덱스와 요소의 타입을 정의할 수 있다.

```tsx
//배열 인덱싱 타입
interface User {
	[name: string]: string;
}

//객체 인덱싱 타입
interface Color {
	[index: number]: string;
}
```

이처럼 정확히 속성 이름을 명시하지 않고 속성 이름의 타입과 속상 값의 타입을 정의하는 문법을 **인덱스 시그니처** 라고 한다.

인덱스 시그니처를 정의하면 인터페이스로 정의한 객체에 무수히 많은 속성을 추가할 수 있는 장점이 있다.

하지만 타입 스크립트 특성상 객체의 속성 이름과 개수가 구체적으로 정의되어 있다면 인터페이스에서 속성 이름과 속성 값의 타입을 정확히 명시하는 것이 좋다.