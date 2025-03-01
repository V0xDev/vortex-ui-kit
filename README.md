# 🚀 UI-KIT на Vue3 + TS + Vite

[![Vue](https://img.shields.io/badge/Vue-3.5+-%2342b883?logo=vuedotjs)](https://vuejs.org/) [![TypeScript](https://img.shields.io/badge/TypeScript-5%2B-%233178c6?logo=typescript)](https://www.typescriptlang.org/) [![Vite](https://img.shields.io/badge/Vite-6%2B-%23646cff?logo=vite)](https://vitejs.dev/) [![Sass](https://img.shields.io/badge/Sass-1.8%2B-%23646cff?logo=sass)](https://sass-scss.ru/)

**Создавайте интерфейсы мгновенно!**
Компонентная библиотека для Vue.js с поддержкой TypeScript и SCSS.

![Изображение](/public/сut_logo.png "Логотип Vortex")

### ✨ Описание

> 🌀**Vortex** — это стильный, быстрый и гибкий UI кит с простыми, легко переиспользуемыми компонентами, поддержкой адаптивного дизайна и открытой MIT лицензией, что делает его идеальным для быстрой и надежной разработки интерфейсов. Благодаря использованию сборщика Vite и типизации TypeScript, он обеспечивает быструю загрузку и безопасную разработку, а также легко интегрируется в любой проект и может быть модифицирован под ваши нужды. Vortex подходит как для pet-проектов так и для продакшена, он предоставляет все необходимые инструменты для создания высококачественных пользовательских интерфейсов. Основная цель Vortex — ускорить процесс разработки и сделать его максимально удобным, простым и эффективным для каждого разработчика.

---

## 🚀 Быстрый старт

1. **Установите ui-kit**:

   ```bash
   yarn add vortex-ui-kit   # или npm i vortex-ui-kit
   ```

2. **Интеграция стилей в приложение vue 3**

   ```ts
   import { createApp } from "vue";
   import "./style.css";
   import "vortex-ui-kit/style.css";
   import { VortexUI } from "vortex-ui-kit";
   import App from "./App.vue";

   createApp(App).use(VortexUI).mount("#app");
   ```

3. **Запустите приложение**:
   ```bash
   yarn dev     # или npm run dev
   ```
   Откройте http://localhost:5173 в браузере.

---

## 🎮 Как использовать

- Включите компоненты в ваш проект:

  ```vue
  <script setup lang="ts">
  import { VButton } from "vortex-ui-kit";
  </script>

  <template>
    <VButton>Клик</VButton>
  </template>
  ```

---

## 📖 Документация

Для удобного просмотра документации по компонентам с использованием Storybook, выполните следующую команду в терминале:

`npm run storybook`

После успешного запуска вы сможете ознакомиться с детальной информацией и примерами использования каждого компонента в интерактивной среде. Это обеспечит вам быстрый доступ к необходимым данным и упростит процесс разработки!

---

## 💡 Вопросы или предложения?

Оставляйте их в Issues.

---

## 📜 Лицензия

Проект распространяется под лицензией [MIT](https://opensource.org/license/MIT).
