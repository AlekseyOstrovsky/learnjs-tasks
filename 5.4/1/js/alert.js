let styles = ["Джаз", "Блюз"];

styles.push("Рок-н-ролл");

styles[Math.round(styles.length/2)-1] = "Классика";

alert(styles.shift());

styles.unshift("Рэп", "Регги");



