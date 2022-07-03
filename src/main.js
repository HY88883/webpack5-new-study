import count from "./js/count";
import sum from "./js/sum";
// 引入 Css 资源，Webpack才会对其打包
import "./css/index.css";
import "./css/less/index.less";
import "./css/sass/index.sass";
import "./css/sass/index.scss";
import "./css/styl/index.styl";
import './css/iconfont.css'
console.log(count(2, 1));
console.log(sum(1, 2, 3, 4));

console.log("hello main ");

// 添加promise代码
const promise = Promise.resolve();
promise.then(() => {
  console.log("hello promise");
});

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => {
          console.log("SW registered: ", registration);
        })
        .catch((registrationError) => {
          console.log("SW registration failed: ", registrationError);
        });
    });
  }