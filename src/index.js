import "./styles.css";

//** タスク追加ボタンの挙動 */
const onClickAdd = () => {
  //**　未完了ToDo欄にタスク追加 */

  //テキストボックスの値を取得し、初期化する
  const inputtext = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //* 未完了欄へ追加するタスク情報 */

  //div li button 生成
  const div = document.createElement("div");
  div.className = "list-row";
  const li = document.createElement("li");
  li.innerText = inputtext;
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  //** 完了ボタンを押した時の挙動 **//
  completeButton.addEventListener("click", () => {
    //完了対象のToDoの情報を取得
    const targetDiv = completeButton.parentNode;
    const targetli = targetDiv.childNodes.item(0);
    const itemText = targetli.innerText;

    //** 完了TODO欄に入れる */

    //div li　button を生成
    const completeDiv = document.createElement("div");
    completeDiv.className = "list-row";
    const complateli = document.createElement("li");
    complateli.innerText = itemText;
    const modosu = document.createElement("button");
    modosu.innerText = "戻す";
    //** 戻すボタンの挙動 **/
    modosu.addEventListener("click", () => {
      //戻す対象のToDoの情報を取得
      const modosuDiv = modosu.parentNode;
      const modosuli = modosuDiv.childNodes.item(0);
      const modosuText = modosuli.innerText;

      test(modosuDiv, modosuText);
      // const incompleteDiv = document.createElement("div");
      // incompleteDiv.className = "list-row";
      // const incomplateli = document.createElement("li");
      // incomplateli.innerText = itemText;
    });

    //追加
    completeDiv.appendChild(complateli);
    completeDiv.appendChild(modosu);
    document.getElementById("complete-list").appendChild(completeDiv);

    //追加したタスクを消す
    document.getElementById("incomplete-list").removeChild(targetDiv);
  });

  //削除 ボタンを生成
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

function test(obj, str) {
  console.log(str);
  console.log(obj);
}

/********************************
 ** 未完了欄に指定タスク名を追加する **
 *********************************/
function AddinComplete(AddTaskName) {
  const div = document.createElement("div");
  div.className = "list-row";
  const li = document.createElement("li");
  li.innerText = AddTaskName;
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";

  //** 完了ボタンを押した時の挙動 **//
  completeButton.addEventListener("click", () => {
    //完了対象のToDoの情報を取得
    const targetDiv = completeButton.parentNode;
    const targetli = targetDiv.childNodes.item(0);
    const itemText = targetli.innerText;

    //** 完了TODO欄に入れる */

    //div li　button を生成
    const completeDiv = document.createElement("div");
    completeDiv.className = "list-row";
    const complateli = document.createElement("li");
    complateli.innerText = itemText;
    const modosu = document.createElement("button");
    modosu.innerText = "戻す";

    //** 戻すボタンの挙動 **/
    modosu.addEventListener("click", () => {
      //戻す対象のToDoの情報を取得
      const modosuDiv = modosu.parentNode;
      const modosuli = modosuDiv.childNodes.item(0);
      const modosuText = modosuli.innerText;
    });

    //追加
    completeDiv.appendChild(complateli);
    completeDiv.appendChild(modosu);
    document.getElementById("complete-list").appendChild(completeDiv);

    //追加したタスクを消す
    document.getElementById("incomplete-list").removeChild(targetDiv);
  });
}
