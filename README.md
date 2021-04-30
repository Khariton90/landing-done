# landing-done

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
```
Папка Components
Содержит отдельные элементы
(Секции, форму, кнопку(хочу такой же) и т.д.)

Папка views 
Содержит компоненты отдельных страниц
(Home, Projects и т.д.)

// Component Home
Домашняя страница

// Component Projects
Страница с работами
// Дочерние страницы Workshop, Garage и т.д.

Массив carts (Карты с работами)
(Повторяется в компонентах 
Projects(Наши работы), 
Who-this(Для кого это нужно),
OurJob(Наши работы)
В дальнейшем ссылаться на данные массивы, так как контент в них будет отличаться)

// Component Form (Форма обратной связи)
В методе submitOn
Объект formData содержит значение полей если форма = true

//Component quiz (Страница квиз)
Массив rezults Содержит в себе результаты опроса

//Component Button-i-Want (Кнопка "хочу такой же")


//router index.js
Переходы по страницам (Имена соответствуют именам из массива carts (иначе не будут работать переходы))
