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

Массив carts (Карты с работами)
(Повторяется в компонентах 
Projects(Наши работы), 
Who-this(Для кого это нужно),
OurJob(Наши работы)
В дальнейшем ссылаться на данные массивы, так как контент в них будет отличаться)

Component Form (Форма обратной связи)
в методе submitOn
Объект formData содержит значение полей если форма = true


//router index.js
Переходы по страницам (Имена соответствуют именам из массива carts)
