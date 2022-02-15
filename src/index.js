import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputtext = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //div 生成
  const div = document.createElement("div");
  div.className = "list-row";
  //li 生成
  const li = document.createElement("li");
  li.innerText = inputtext;
  //divの子要素にli等を入れる
  div.appendChild(li);

  //未完成リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document.getElementById("add-button").addEventListener("click", function () {
  return onClickAdd();
});
