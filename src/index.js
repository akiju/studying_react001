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

  //完了、削除ボタンを生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const targetDiv = completeButton.parentNode;
    const targetli = targetDiv.childElement("li");
    const itemText = targetli.innerText;

    //div 生成
    const div = document.createElement("div");
    div.className = "list-row";
    //li 生成
    const li = document.createElement("li");
    li.innerText = inputtext;
    alert("完了");
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.parentNode; //親要素＝ div の要素　＝　１行分のオブジェクトを取得
    document.getElementById("incomplete-list").removeChild(deleteTarget); //1行分のオブジェクトを削除
  });

  //divの子要素にli、button等を入れる
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完成リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

//追加ボタンのイベントリスナー
document.getElementById("add-button").addEventListener("click", function () {
  return onClickAdd();
});
